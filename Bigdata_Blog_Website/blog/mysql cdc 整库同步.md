---
authors:
- name: skylines
  url: https://github.com/rookiegao
title: Mysql 整库同步  
tags: [数据集成]
---

# 技术思想

> 利用 mysql catalog，mysql cdc，flink jdbc 等技术实现 mysql 整库迁移至下游数据库，这里是示范 mysql to mysql ，其他 sink 组件可自行扩展实现。

通过 flink ParameterTool，可以选择是整库同步还是多表亦或单表同步，可以设置全局并发，源表 mysql 参数，目标表 mysql 参数
<!--truncate-->
> 通过 sql Connection 实现自动建表逻辑 (mysql 数据类型众多，这里并没有测试所有的类型参数，如担心建表不成功，可手动建表，不影响程序运行)

下游使用 flink jdbc 来实现，语法为 upsert 即幂等写入(重复数据只会写入一次)

> 使用 mysql catalog 来实现源表元数据的获取

自定义 CustomDebeziumDeserializer 实现 DebeziumDeserializationSchema 接口对数据进行转换

> 该任务本质上是 单 source 多 sink 任务，不同的表数据不一样可能会有一定的反压

程序测试 生成五百万条数据 五张表 一分钟左右完成，增量数据一万条，可以同步完成

环境 flink 1.16  cdc 2.3.0

refer:

- https://nightlies.apache.org/flink/flink-docs-release-1.16/
- https://blog.csdn.net/qq_36062467/article/details/128117647
- https://ververica.github.io/flink-cdc-connectors/master/content/connectors/mysql-cdc%28ZH%29.html

# 代码
github 地址 https://github.com/SophiaData/Bigdata_Code_Tutorial/
```
/** (@SophiaData) (@date 2022/12/1 16:02). */
public class CustomDebeziumDeserializer
        implements DebeziumDeserializationSchema<Tuple2<String, Row>> {
    private static final Logger LOG = LoggerFactory.getLogger(CustomDebeziumDeserializer.class);

    private final Map<String, DeserializationRuntimeConverter> physicalConverterMap =
            Maps.newConcurrentMap();

    CustomDebeziumDeserializer(Map<String, RowType> tableRowTypeMap) {
        for (String tableName : tableRowTypeMap.keySet()) {
            RowType rowType = tableRowTypeMap.get(tableName);
            DeserializationRuntimeConverter physicalConverter = createNotNullConverter(rowType);
            this.physicalConverterMap.put(tableName, physicalConverter);
        }
    }

    @Override
    public void deserialize(SourceRecord record, Collector<Tuple2<String, Row>> out)
            throws Exception {
        Envelope.Operation op = Envelope.operationFor(record);
        Struct value = (Struct) record.value();
        Schema valueSchema = record.valueSchema();
        Struct source = value.getStruct("source");
        String tableName = source.get("table").toString();
        DeserializationRuntimeConverter physicalConverter = physicalConverterMap.get(tableName);
        if (op == Envelope.Operation.CREATE || op == Envelope.Operation.READ) {
            Row insert = extractAfterRow(value, valueSchema, physicalConverter);
            insert.setKind(RowKind.INSERT);
            out.collect(Tuple2.of(tableName, insert));
        } else if (op == Envelope.Operation.DELETE) {
            Row delete = extractBeforeRow(value, valueSchema, physicalConverter);
            delete.setKind(RowKind.DELETE);
            out.collect(Tuple2.of(tableName, delete));
        } else if (op == Envelope.Operation.UPDATE) {
            Row before = extractBeforeRow(value, valueSchema, physicalConverter);
            before.setKind(RowKind.UPDATE_BEFORE);
            out.collect(Tuple2.of(tableName, before));
            Row after = extractAfterRow(value, valueSchema, physicalConverter);
            after.setKind(RowKind.UPDATE_AFTER);
            out.collect(Tuple2.of(tableName, after));
        } else {
            LOG.warn(" Unexpected statement: {}", value);
        }
    }

    private Row extractAfterRow(
            Struct value, Schema valueSchema, DeserializationRuntimeConverter physicalConverter)
            throws Exception {
        Schema afterSchema = valueSchema.field(Envelope.FieldName.AFTER).schema();
        Struct after = value.getStruct(Envelope.FieldName.AFTER);
        return (Row) physicalConverter.convert(after, afterSchema);
    }

    private Row extractBeforeRow(
            Struct value, Schema valueSchema, DeserializationRuntimeConverter physicalConverter)
            throws Exception {
        Schema beforeSchema = valueSchema.field(Envelope.FieldName.BEFORE).schema();
        Struct before = value.getStruct(Envelope.FieldName.BEFORE);
        return (Row) physicalConverter.convert(before, beforeSchema);
    }

    @Override
    public TypeInformation<Tuple2<String, Row>> getProducedType() {
        return TypeInformation.of(new TypeHint<Tuple2<String, Row>>() {});
    }

    public static DeserializationRuntimeConverter createNotNullConverter(LogicalType type) {

        switch (type.getTypeRoot()) {
            case NULL:
                return new DeserializationRuntimeConverter() {

                    private static final long serialVersionUID = 1L;

                    @Override
                    public Object convert(Object dbzObj, Schema schema) {
                        return null;
                    }
                };
            case BOOLEAN:
                return convertToBoolean();
            case TINYINT:
                return new DeserializationRuntimeConverter() {

                    private static final long serialVersionUID = 1L;

                    @Override
                    public Object convert(Object dbzObj, Schema schema) {
                        return Byte.parseByte(dbzObj.toString());
                    }
                };
            case SMALLINT:
                return new DeserializationRuntimeConverter() {

                    private static final long serialVersionUID = 1L;

                    @Override
                    public Object convert(Object dbzObj, Schema schema) {
                        return Short.parseShort(dbzObj.toString());
                    }
                };
            case INTEGER:
            case INTERVAL_YEAR_MONTH:
                return convertToInt();
            case BIGINT:
            case INTERVAL_DAY_TIME:
                return convertToLong();
            case DATE:
                return convertToDate();
            case TIME_WITHOUT_TIME_ZONE:
                return convertToTime();
            case TIMESTAMP_WITHOUT_TIME_ZONE:
                return convertToTimestamp(ZoneId.of("UTC"));
            case TIMESTAMP_WITH_LOCAL_TIME_ZONE:
                return convertToLocalTimeZoneTimestamp(ZoneId.of("UTC"));
            case FLOAT:
                return convertToFloat();
            case DOUBLE:
                return convertToDouble();
            case CHAR:
            case VARCHAR:
                return convertToString();
            case BINARY:
            case VARBINARY:
                return convertToBinary();
            case DECIMAL:
                return createDecimalConverter((DecimalType) type);
            case ROW:
                return createRowConverter((RowType) type);
            case ARRAY:
            case MAP:
            case MULTISET:
            case RAW:
            default:
                throw new UnsupportedOperationException("Unsupported type: " + type);
        }
    }

    private static DeserializationRuntimeConverter convertToBoolean() {
        return new DeserializationRuntimeConverter() {

            private static final long serialVersionUID = 1L;

            @Override
            public Object convert(Object dbzObj, Schema schema) {
                if (dbzObj instanceof Boolean) {
                    return dbzObj;
                } else if (dbzObj instanceof Byte) {
                    return (byte) dbzObj == 1;
                } else if (dbzObj instanceof Short) {
                    return (short) dbzObj == 1;
                } else {
                    return Boolean.parseBoolean(dbzObj.toString());
                }
            }
        };
    }

    private static DeserializationRuntimeConverter convertToInt() {
        return new DeserializationRuntimeConverter() {

            private static final long serialVersionUID = 1L;

            @Override
            public Object convert(Object dbzObj, Schema schema) {
                if (dbzObj instanceof Integer) {
                    return dbzObj;
                } else if (dbzObj instanceof Long) {
                    return ((Long) dbzObj).intValue();
                } else {
                    return Integer.parseInt(dbzObj.toString());
                }
            }
        };
    }

    private static DeserializationRuntimeConverter convertToLong() {
        return new DeserializationRuntimeConverter() {

            private static final long serialVersionUID = 1L;

            @Override
            public Object convert(Object dbzObj, Schema schema) {
                if (dbzObj instanceof Integer) {
                    return ((Integer) dbzObj).longValue();
                } else if (dbzObj instanceof Long) {
                    return dbzObj;
                } else {
                    return Long.parseLong(dbzObj.toString());
                }
            }
        };
    }

    private static DeserializationRuntimeConverter createDecimalConverter(DecimalType decimalType) {
        final int precision = decimalType.getPrecision();
        final int scale = decimalType.getScale();
        return new DeserializationRuntimeConverter() {

            private static final long serialVersionUID = 1L;

            @Override
            public Object convert(Object dbzObj, Schema schema) {
                BigDecimal bigDecimal;
                if (dbzObj instanceof byte[]) {
                    // decimal.handling.mode=precise
                    bigDecimal = Decimal.toLogical(schema, (byte[]) dbzObj);
                } else if (dbzObj instanceof String) {
                    // decimal.handling.mode=string
                    bigDecimal = new BigDecimal((String) dbzObj);
                } else if (dbzObj instanceof Double) {
                    // decimal.handling.mode=double
                    bigDecimal = BigDecimal.valueOf((Double) dbzObj);
                } else {
                    if (VariableScaleDecimal.LOGICAL_NAME.equals(schema.name())) {
                        SpecialValueDecimal decimal =
                                VariableScaleDecimal.toLogical((Struct) dbzObj);
                        bigDecimal = decimal.getDecimalValue().orElse(BigDecimal.ZERO);
                    } else {
                        // fallback to string
                        bigDecimal = new BigDecimal(dbzObj.toString());
                    }
                }
                return DecimalData.fromBigDecimal(bigDecimal, precision, scale);
            }
        };
    }

    private static DeserializationRuntimeConverter convertToDouble() {
        return new DeserializationRuntimeConverter() {

            private static final long serialVersionUID = 1L;

            @Override
            public Object convert(Object dbzObj, Schema schema) {
                if (dbzObj instanceof Float) {
                    return ((Float) dbzObj).doubleValue();
                } else if (dbzObj instanceof Double) {
                    return dbzObj;
                } else {
                    return Double.parseDouble(dbzObj.toString());
                }
            }
        };
    }

    private static DeserializationRuntimeConverter convertToFloat() {
        return new DeserializationRuntimeConverter() {

            private static final long serialVersionUID = 1L;

            @Override
            public Object convert(Object dbzObj, Schema schema) {
                if (dbzObj instanceof Float) {
                    return dbzObj;
                } else if (dbzObj instanceof Double) {
                    return ((Double) dbzObj).floatValue();
                } else {
                    return Float.parseFloat(dbzObj.toString());
                }
            }
        };
    }

    private static DeserializationRuntimeConverter convertToDate() {
        return new DeserializationRuntimeConverter() {

            private static final long serialVersionUID = 1L;

            @Override
            public Object convert(Object dbzObj, Schema schema) {
                return (int) TemporalConversions.toLocalDate(dbzObj).toEpochDay();
            }
        };
    }

    private static DeserializationRuntimeConverter convertToTime() {
        return new DeserializationRuntimeConverter() {

            private static final long serialVersionUID = 1L;

            @Override
            public Object convert(Object dbzObj, Schema schema) {
                if (dbzObj instanceof Long) {
                    switch (schema.name()) {
                        case MicroTime.SCHEMA_NAME:
                            return (int) ((long) dbzObj / 1000);
                        case NanoTime.SCHEMA_NAME:
                            return (int) ((long) dbzObj / 1000_000);
                    }
                } else if (dbzObj instanceof Integer) {
                    return dbzObj;
                }
                // get number of milliseconds of the day
                return TemporalConversions.toLocalTime(dbzObj).toSecondOfDay() * 1000;
            }
        };
    }

    private static DeserializationRuntimeConverter convertToTimestamp(ZoneId serverTimeZone) {
        return new DeserializationRuntimeConverter() {

            private static final long serialVersionUID = 1L;

            @Override
            public Object convert(Object dbzObj, Schema schema) {
                if (dbzObj instanceof Long) {
                    switch (schema.name()) {
                        case Timestamp.SCHEMA_NAME:
                            return TimestampData.fromEpochMillis((Long) dbzObj);
                        case MicroTimestamp.SCHEMA_NAME:
                            long micro = (long) dbzObj;
                            return TimestampData.fromEpochMillis(
                                    micro / 1000, (int) (micro % 1000 * 1000));
                        case NanoTimestamp.SCHEMA_NAME:
                            long nano = (long) dbzObj;
                            return TimestampData.fromEpochMillis(
                                    nano / 1000_000, (int) (nano % 1000_000));
                    }
                }
                LocalDateTime localDateTime =
                        TemporalConversions.toLocalDateTime(dbzObj, serverTimeZone);
                return TimestampData.fromLocalDateTime(localDateTime);
            }
        };
    }

    private static DeserializationRuntimeConverter convertToLocalTimeZoneTimestamp(
            ZoneId serverTimeZone) {
        return new DeserializationRuntimeConverter() {

            private static final long serialVersionUID = 1L;

            @Override
            public Object convert(Object dbzObj, Schema schema) {
                if (dbzObj instanceof String) {
                    String str = (String) dbzObj;
                    // TIMESTAMP_LTZ type is encoded in string type
                    Instant instant = Instant.parse(str);
                    return TimestampData.fromLocalDateTime(
                            LocalDateTime.ofInstant(instant, serverTimeZone));
                }
                throw new IllegalArgumentException(
                        "Unable to convert to TimestampData from unexpected value '"
                                + dbzObj
                                + "' of type "
                                + dbzObj.getClass().getName());
            }
        };
    }

    private static DeserializationRuntimeConverter convertToString() {
        return new DeserializationRuntimeConverter() {

            private static final long serialVersionUID = 1L;

            @Override
            public Object convert(Object dbzObj, Schema schema) {
                return StringData.fromString(dbzObj.toString());
            }
        };
    }

    private static DeserializationRuntimeConverter convertToBinary() {
        return new DeserializationRuntimeConverter() {

            private static final long serialVersionUID = 1L;

            @Override
            public Object convert(Object dbzObj, Schema schema) {
                if (dbzObj instanceof byte[]) {
                    return dbzObj;
                } else if (dbzObj instanceof ByteBuffer) {
                    ByteBuffer byteBuffer = (ByteBuffer) dbzObj;
                    byte[] bytes = new byte[byteBuffer.remaining()];
                    byteBuffer.get(bytes);
                    return bytes;
                } else {
                    throw new UnsupportedOperationException(
                            "Unsupported BYTES value type: " + dbzObj.getClass().getSimpleName());
                }
            }
        };
    }

    private static DeserializationRuntimeConverter createRowConverter(RowType rowType) {
        final DeserializationRuntimeConverter[] fieldConverters =
                rowType.getFields().stream()
                        .map(RowType.RowField::getType)
                        .map(CustomDebeziumDeserializer::createNotNullConverter)
                        .toArray(DeserializationRuntimeConverter[]::new);
        final String[] fieldNames = rowType.getFieldNames().toArray(new String[0]);

        return new DeserializationRuntimeConverter() {

            private static final long serialVersionUID = 1L;

            @Override
            public Object convert(Object dbzObj, Schema schema) throws Exception {
                Struct struct = (Struct) dbzObj;
                int arity = fieldNames.length;
                Row row = new Row(arity);
                for (int i = 0; i < arity; i++) {
                    String fieldName = fieldNames[i];
                    Field field = schema.field(fieldName);
                    if (field == null) {
                        row.setField(i, null);
                    } else {
                        Object fieldValue = struct.getWithoutDefault(fieldName);
                        Schema fieldSchema = schema.field(fieldName).schema();
                        Object convertedField =
                                convertField(fieldConverters[i], fieldValue, fieldSchema);
                        row.setField(i, convertedField);
                    }
                }
                return row;
            }
        };
    }

    private static Object convertField(
            DeserializationRuntimeConverter fieldConverter, Object fieldValue, Schema fieldSchema)
            throws Exception {
        if (fieldValue == null) {
            return null;
        } else {
            return fieldConverter.convert(fieldValue, fieldSchema);
        }
    }
}
```

主程序
```
/** (@SophiaData) (@date 2022/10/25 10:56). */
public class FlinkSqlWDS extends BaseSql {
    private static final Logger LOG = LoggerFactory.getLogger(FlinkSqlWDS.class);

    public static void main(String[] args) throws Exception {
        new FlinkSqlWDS().init(args, "flink_sql_job_FlinkSqlWDS", true, true);
        LOG.info(" init 方法正常 ");
    }

    // 本程序测试 Whole database synchronization 之 MySQL to MySQL 捕捉表需包含主键并实现自动建表，DDL 同步暂不支持 ！！！
    // 可根据此案例拓展其他 sink 组件
    // 需要注意的点：不同表数据量不一样，同步时可以适当放大同步资源，但会造成资源浪费，不加大可能反压
    // 测试同步五张表百万数据，一分钟左右
    // refer: https://blog.csdn.net/qq_36062467/article/details/128117647
    // refer 环境: Flink 1.15 Flink CDC 2.3.0
    // 本程序环境：Flink 1.16 Flink CDC 2.3.0  MySQL 8.0
    // 技术点：Flink MySQL CDC Connector，MySQL Catalog，Flink Operator，Flink JDBC

    @Override
    public void handle(
            StreamExecutionEnvironment env, StreamTableEnvironment tEnv, ParameterTool params)
            throws Exception {
        String databaseName = ParameterUtil.databaseName(params);
        String tableList = ParameterUtil.tableList(params);

        String connectorWithBody = CreateMySQLSinkTable.connectorWithBody(params);

        // 注册同步的库对应的 Catalog 这里是 mysql catalog

        MySqlCatalog mySqlCatalog = MySQLUtil.useMysqlCatalog(params);

        List<String> tables;

        // 如果整库同步，则从 Catalog 里取所有表，否则从指定表中取表名
        try {
            if (".*".equals(tableList)) {
                tables = mySqlCatalog.listTables(databaseName);
            } else {
                String[] tableArray = tableList.split(",");
                tables =
                        Arrays.stream(tableArray)
                                .map(table -> table.split("\\.")[1])
                                .collect(Collectors.toList());
            }
        } catch (DatabaseNotExistException e) {
            LOG.error("{} 库不存在", databaseName, e);
            throw e;
        }
        // 创建表名和对应 RowTypeInfo 映射的 Map
        Map<String, RowTypeInfo> tableTypeInformationMap = Maps.newConcurrentMap();
        Map<String, DataType[]> tableDataTypesMap = Maps.newConcurrentMap();
        Map<String, RowType> tableRowTypeMap = Maps.newConcurrentMap();
        for (String table : tables) {
            // 获取  Catalog 中注册的表
            ObjectPath objectPath = new ObjectPath(databaseName, table);
            DefaultCatalogTable catalogBaseTable;
            try {
                catalogBaseTable = (DefaultCatalogTable) mySqlCatalog.getTable(objectPath);
            } catch (TableNotExistException e) {
                LOG.error("{} 表不存在", table, e);
                throw e;
            }
            // 获取表的 Schema
            assert catalogBaseTable != null;
            Schema schema = catalogBaseTable.getUnresolvedSchema();
            // 获取表中字段名列表
            String[] fieldNames = new String[schema.getColumns().size()];
            // 获取DataType
            DataType[] fieldDataTypes = new DataType[schema.getColumns().size()];
            LogicalType[] logicalTypes = new LogicalType[schema.getColumns().size()];

            // 获取表字段类型
            TypeInformation<?>[] fieldTypes = new TypeInformation[schema.getColumns().size()];
            // 获取表的主键
            List<String> primaryKeys;
            try {
                primaryKeys = schema.getPrimaryKey().get().getColumnNames(); // 此处不用 orElse
            } catch (NullPointerException e) {
                LOG.error("捕捉表异常: {} 表没有主键！！！ 当前 mysql cdc 尚不支持捕捉没有主键的表！！！", table, e);
                throw e;
            }

            for (int i = 0; i < schema.getColumns().size(); i++) {
                Schema.UnresolvedPhysicalColumn column =
                        (Schema.UnresolvedPhysicalColumn) schema.getColumns().get(i);
                fieldNames[i] = column.getName();
                fieldDataTypes[i] = (DataType) column.getDataType();
                fieldTypes[i] =
                        InternalTypeInfo.of(((DataType) column.getDataType()).getLogicalType());
                logicalTypes[i] = ((DataType) column.getDataType()).getLogicalType();
            }
            RowType rowType = RowType.of(logicalTypes, fieldNames);
            tableRowTypeMap.put(table, rowType);

            // 组装 Flink Sink 表 DDL sql
            StringBuilder stmt = new StringBuilder();
            String sinkTableName =
                    String.format(params.get("sinkPrefix", "sink_%s"), table); // Sink 表前缀
            stmt.append("create table if not exists ").append(sinkTableName).append("(\n");

            for (int i = 0; i < fieldNames.length; i++) {
                String column = fieldNames[i];
                String fieldDataType = fieldDataTypes[i].toString();
                stmt.append("\t`").append(column).append("` ").append(fieldDataType).append(",\n");
            }

            stmt.append(
                    String.format(
                            "PRIMARY KEY (%s) NOT ENFORCED\n)",
                            StringUtils.join(primaryKeys, ",")));
            String formatJdbcSinkWithBody =
                    connectorWithBody.replace("${sinkTableName}", sinkTableName);
            String createSinkTableDdl = stmt + formatJdbcSinkWithBody;
            // 创建 Flink Sink 表
            LOG.info("createSinkTableDdl: \r {}", createSinkTableDdl);
            tEnv.executeSql(createSinkTableDdl);
            tableDataTypesMap.put(table, fieldDataTypes);
            tableTypeInformationMap.put(table, new RowTypeInfo(fieldTypes, fieldNames));

            // 下游 MySQL 建表逻辑
            new CreateMySQLSinkTable()
                    .createMySQLSinkTable(
                            params, sinkTableName, fieldNames, fieldDataTypes, primaryKeys);
        }

        //  MySQL CDC
        SingleOutputStreamOperator<Tuple2<String, Row>> dataStreamSource =
                new MySQLCDCSource()
                        .singleOutputStreamOperator(params, env, tableRowTypeMap); // 切断任务链
        StatementSet statementSet = tEnv.createStatementSet();
        // DataStream 转 Table，创建临时视图，插入 sink 表
        for (Map.Entry<String, RowTypeInfo> entry : tableTypeInformationMap.entrySet()) {
            String tableName = entry.getKey();
            RowTypeInfo rowTypeInfo = entry.getValue();
            SingleOutputStreamOperator<Row> mapStream =
                    dataStreamSource
                            .filter(data -> data.f0.equals(tableName))
                            .setParallelism(ParameterUtil.setParallelism(params))
                            .map(data -> data.f1, rowTypeInfo)
                            .setParallelism(ParameterUtil.setParallelism(params));
            Table table = tEnv.fromChangelogStream(mapStream);
            String temporaryViewName = String.format("t_%s", tableName);
            tEnv.createTemporaryView(temporaryViewName, table);
            String sinkTableName = String.format("sink_%s", tableName);
            String insertSql =
                    String.format(
                            "insert into %s select * from %s", sinkTableName, temporaryViewName);
            LOG.info("add insertSql for {}, sql: {}", tableName, insertSql);
            statementSet.addInsertSql(insertSql);
        }
        statementSet.execute();
    }
}
```
# 效果

![在这里插入图片描述](https://img-blog.csdnimg.cn/92a0a25d2ef94e4a96c791866f723c5c.png)


![在这里插入图片描述](https://img-blog.csdnimg.cn/c9a35c9cd950480bbf05e39461660e1b.png)

# 最后
代码和测试可能不充分，仅供参考，欢迎提出意见。

欢迎访问博客 https://sophiadata.github.io/Bigdata_Blog_Website/learning/overview
