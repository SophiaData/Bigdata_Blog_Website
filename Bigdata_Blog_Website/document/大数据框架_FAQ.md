# 大数据框架_FAQ

## Debezium_FAQ

### Q1 : Debezium for MySQL 的简单示例
```
 curl -H "Content-Type: application/json" -X POST -d  '{
      "name" : "xxxx_2022",
      "config" : {
          "connector.class" : "io.debezium.connector.mysql.MySqlConnector",
          "database.hostname" : "xxx.xxx.xx.xxx",
          "database.port" : "3306",
          "database.user" : "user",
          "database.password" : "pass",
          "database.server.id" : "122811",
          "database.server.name" : "xxxx_2022",
          "database.include.list" : "xxxx",
          "snapshot.mode" : "schema_only",
          "database.history.skip.unparseable.ddl": "true",
          "key.converter": "org.apache.kafka.connect.json.JsonConverter",
          "value.converter": "org.apache.kafka.connect.json.JsonConverter",
          "key.converter.schemas.enable": "false",
          "value.converter.schemas.enable": "false",
          "include.schema.changes": "true",
          "decimal.handling.mode" : "string",
          "transforms": "unwrap",
          "transforms.unwrap.type": "io.debezium.transforms.ExtractNewRecordState",
          "transforms.unwrap.drop.tombstones": "true",
          "transforms.unwrap.delete.handling.mode": "rewrite",
          "transforms.unwrap.add.fields": "source.ts_ms,source.db,source.table,op",
          "converters" : "datetime",
          "datetime.type" : "com.darcytech.debezium.converter.MySqlDateTimeConverter",
          "datetime.format.date" : "yyyy-MM-dd",
          "datetime.format.time" : "HH:mm:ss",
          "datetime.format.datetime" : "yyyy-MM-dd HH:mm:ss",
          "datetime.format.timestamp" : "yyyy-MM-dd HH:mm:ss",
          "datetime.format.timestamp.zone" : "UTC+8",
          "table.include.list" : "xxxx.user,xxxx.ordertrance,xxxx.ordertrance_agent_info",
          "database.history.kafka.bootstrap.servers":"xxxx.xxx.xx.xxx:9092,xxxx.xxx.xx.xxx:9092,xxxx.xxx.xx.xxx:9092",
          "database.history.kafka.topic":"history_xxxx_2022"
      }
  }' http://xxxx.xxx.xx.xxx:8083/connectors 
```
> note

Debezium 转换 MySQL 时间类型比较混乱，需要重新做时间转换，具体可以参考

- https://github.com/holmofy/debezium-datetime-converter/blob/master/src/main/java/com/darcytech/debezium/converter/MySqlDateTimeConverter.java
- https://blog.hufeifei.cn/2021/03/DB/mysql-binlog-parser/index.html


## Dolphinscheduler_FAQ

### Q1: Dolphinscheduler 2.0  MySQL Jdbc 缺失问题

在 Dolphinscheduler/lib/plugin/task/sql 目录下添加 Jdbc jar 包  Dolphinscheduler 2.0 之后默认不含相关 jar.

### Q2: Dolphinscheduler 失败重试机制有一定 bug 导致重试失败

[Apache DolphinScheduler 22年5月第一次周会](https://www.bilibili.com/video/BV1X44y1u7P2?spm_id_from=333.999.0.0)


## Flink_FAQ

### Q1: Flink standalone 集群报错 进而导致集群非正常宕机
2022-01-15 10:06:53,481 ERROR org.apache.flink.runtime.blob.BlobServerConnection           [] - GET operation failed for BLOB 150aa5a2e247e759f21ff93c424edd3e/p-e8b09031cd0
e01ba83667bef8a0b956dcfe18006-8d149618809ae4df5d911e989054527d from /10.176.xx.xx.
java.nio.file.NoSuchFileException: /tmp/blobStore-39487a05-032e-4605-81f8-d1e9c7d2e1ff/incoming/temp-00000134

原因： 群友：之前遇到过 我的是被运维清理工具给清理了； 你看看 可有这个文件了；一些配置 有三四个 默认都是 /tmp 下，都是 
可以自定义路径的。

临时目录被清空，导致文件无法找到。

我的解决方案：将 io 目录从临时目录改为其他目录即可。

### Q2: Flink 官方什么时候支持 oracle sql 连接器？

根据Flink 1.15 的最新快照文档，Flink JDBC 将在 1.15 支持 Flink 

https://nightlies.apache.org/flink/flink-docs-master/docs/connectors/table/jdbc/

![image](https://user-images.githubusercontent.com/34996528/149879850-b7c1164f-5505-4905-a162-b6105f945866.png)

> flink 1.15 已发布 oracle 方言已支持

[flink 1.15 JDBC SQL Connector](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/table/jdbc/)

### Q3 Flink Web ui 乱码怎么办？

在 FLink conf 目录下的 flink.conf.ymal 文件里添加
```
env.java.opts: "-Dfile.encoding=utf-8"
```

### Q4 Flink Per-Job Mode (deprecated)?

从 Flink 1.15 开始 per-job 被标注为 deprecated，官方在一月份的一次投票中决定将 per-job 标注为 deprecated，预计在 flink 1.17 进行具体实施

原因: Per-job mode is only supported by YARN and has been deprecated in Flink 1.15.

[Per-Job Mode (deprecated)](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/deployment/resource-providers/yarn/#per-job-mode-deprecated)

[投票链接](https://lists.apache.org/thread/v6oz92dfp95qcox45l0f8393089oyjv4)

## Hive_FAQ

### Q1: Hive 如何使用达梦数据库存储元数据信息？

![img](https://user-images.githubusercontent.com/34996528/167798676-40494b35-f3c6-4b70-8aea-3cbb15238458.png)

hive-site.xml里面的配置信息全都写成达梦的，然后驱动包也用达梦的，初始化的时候元数据库换成 oracle,schematool -dbType oracle -initSchema

## MongoDB_CDC_FAQ

> MongoDB CDC FAQ 参考 本文作了分类处理

https://github.com/ververica/flink-cdc-connectors/wiki/FAQ(ZH)

### Q1: MongoDB CDC 支持 全量+增量读 和 只读增量吗？

支持，默认为 全量+增量 读取；使用copy.existing=false参数设置为只读增量。

### Q2: MongoDB CDC 支持从 checkpoint 恢复吗? 原理是怎么样的呢？

支持，checkpoint 会记录 ChangeStream 的 resumeToken，恢复的时候可以通过resumeToken重新恢复ChangeStream。其中 resumeToken 对应 oplog.rs (MongoDB 变更日志collection) 的位置，oplog.rs 是一个固定容量的 collection。当 resumeToken 对应的记录在 oplog.rs 中不存在的时候，可能会出现 Invalid resumeToken 的异常。这种情况，在使用时可以设置合适oplog.rs的集合大小，避免oplog.rs保留时间过短，可以参考 https://docs.mongodb.com/manual/tutorial/change-oplog-size/ 另外，resumeToken 可以通过新到的变更记录和 heartbeat 记录来刷新。

### Q3: MongoDB CDC 支持输出 -U（update_before，更新前镜像值）消息吗？

MongoDB 原始的 oplog.rs 只有 INSERT, UPDATE, REPLACE, DELETE 这几种操作类型，没有保留更新前的信息，不能输出-U 消息，在 Flink 中只能实现 UPSERT 语义。在使用MongoDBTableSource 时，Flink planner 会自动进行 ChangelogNormalize 优化，补齐缺失的 -U 消息，输出完整的 +I, -U， +U， -D 四种消息， 代价是 ChangelogNormalize 优化的代价是该节点会保存之前所有 key 的状态。所以，如果是 DataStream 作业直接使用 MongoDBSource，如果没有 Flink planner 的优化，将不会自动进行 ChangelogNormalize，所以不能直接获取 —U 消息。想要获取更新前镜像值，需要自己管理状态，如果不希望自己管理状态，可以将 MongoDBTableSource 转换为 ChangelogStream 或者 RetractStream，借助 Flink planner 的优化能力补齐更新前镜像值，示例如下：

```
    tEnv.executeSql("CREATE TABLE orders ( ... ) WITH ( 'connector'='mongodb-cdc',... )");

    Table table = tEnv.from("orders")
            .select($("*"));

    tEnv.toChangelogStream(table)
            .print()
            .setParallelism(1);

    env.execute();
```

### Q4: MongoDB CDC 支持订阅多个 collection 吗？

仅支持订阅整库的 collection，筛选部分 collection 功能还不支持，例如配置 database 为 'mgdb'，collection 为空字符串，则会订阅 'mgdb' 库下所有 collection。

### Q5: MongoDB CDC 支持设置多并发度读取吗？

目前还不支持。

### Q6: MongoDB CDC 支持 MongoDB 的版本是哪些？

MongoDB CDC 基于 ChangeStream 特性实现，ChangeStream 是 MongoDB 3.6 推出的新特性。MongoDB CDC 理论上支持 3.6 以上版本，建议运行版本 >= 4.0, 在低于3.6版本执行时，会出现错误: Unrecognized pipeline stage name: '$changeStream' 。

### Q7: MongoDB CDC 支持 MongoDB 的运行模式是什么？

ChangeStream 需要 MongoDB 以副本集或者分片模式运行，本地测试可以使用单机版副本集 rs.initiate() 。在 standalone 模式下会出现错误：The $changestage is only supported on replica sets.

### Q8: MongoDB CDC 报错用户名密码错误, 但其他组件使用该用户名密码都能正常连接，这是什么原因？

如果用户是创建在需要连接的db 下，需要在with参数里加下 'connection.options' = 'authSource=用户所在的db'。

### Q9: MongoDB CDC 是否支持 debezium 相关的参数？

不支持的，因为 MongoDB CDC 连接器是在 Flink CDC 项目中独立开发，并不依赖Debezium项目，所以不支持。

### Q10：MongoDB CDC 全量读取阶段，作业失败后，可以从 checkpoint 继续读取吗？

MongoDB CDC 全量读取阶段是不做 checkpoint 的，直到全量阶段读取完后才开始作 checkpoint，如果在全量读取阶段失败，MongoDB CDC 会重新读取存量数据。

## MySQL CDC FAQ

> MySQL CDC FAQ 参考 本文作了分类处理

https://github.com/ververica/flink-cdc-connectors/wiki/FAQ(ZH)

### Q1: 使用CDC 2.x版本，只能读取全量数据，无法读取增量（binlog） 数据，怎么回事？

CDC 2.0 支持了无锁算法，支持并发读取，为了保证全量数据 + 增量数据的顺序性，依赖Flink 的 checkpoint机制，所以作业需要配置 checkpoint。 SQL 作业中配置方式：

```
Flink SQL> SET 'execution.checkpointing.interval' = '3s';    
```

DataStream 作业配置方式：

```
StreamExecutionEnvironment env = StreamExecutionEnvironment.getExecutionEnvironment();
env.enableCheckpointing(3000);  
```

### Q2: 使用 MySQL CDC，增量阶段读取出来的 timestamp 字段时区相差8小时，怎么回事呢？

在解析binlog数据中的timestamp字段时，cdc 会使用到作业里配置的server-time-zone信息，也就是MySQL服务器的时区，如果这个时区没有和你的MySQL服务器时区一致，就会出现这个问题。

此外，如果是在DataStream作业中自定义列化器如 MyDeserializer implements DebeziumDeserializationSchema, 自定义的序列化器在解析 timestamp 类型数据时，需要参考下 RowDataDebeziumDeserializeSchema 中对 timestamp 类型的解析，用时给定的时区信息。
```
private TimestampData convertToTimestamp(Object dbzObj, Schema schema) {
        if (dbzObj instanceof Long) {
            switch (schema.name()) {
                case Timestamp.SCHEMA_NAME:
                    return TimestampData.fromEpochMillis((Long) dbzObj);
                case MicroTimestamp.SCHEMA_NAME:
                    long micro = (long) dbzObj;
                    return TimestampData.fromEpochMillis(micro / 1000, (int) (micro % 1000 * 1000));
                case NanoTimestamp.SCHEMA_NAME:
                    long nano = (long) dbzObj;
                    return TimestampData.fromEpochMillis(nano / 1000_000, (int) (nano % 1000_000));
            }
        }
        LocalDateTime localDateTime = TemporalConversions.toLocalDateTime(dbzObj, serverTimeZone);
        return TimestampData.fromLocalDateTime(localDateTime);
    }
 ```
 ### Q3: mysql cdc支持监听从库吗？从库需要如何配置？
 
 支持的，从库需要配置 log-slave-updates = 1 使从实例也能将从主实例同步的数据写入从库的 binlog 文件中，如果主库开启了gtid mode，从库也需要开启。
 
 ```
 log-slave-updates = 1
gtid_mode = on 
enforce_gtid_consistency = on 
```

### Q4: 我想同步分库分表，应该如何配置？

通过 mysql cdc 表的with参数中，表名和库名均支持正则配置，比如 'table-name' ='user_.' 可以匹配表名 user_1, user_2,user_a表，注意正则匹配任意字符是'.' 而不是 '*', 其中点号表示任意字符，星号表示0个或多个，database-name也如此。

### Q5: 我想跳过存量读取阶段，只读取 binlog 数据，怎么配置？

在 mysql cdc 表的 with 参数中指定 'scan.startup.mode' = 'latest-offset' 即可。

### Q6: 我想获取数据库中的 DDL事件，怎么办，有demo吗？

CDC 2.1 版本提供了 DataStream API： MysqlSource， 用户可以配置 includeSchemaChanges 表示是否需要DDL 事件，获取到 DDL 事件后自己写代码处理。

```
 public void consumingAllEvents() throws Exception {
        inventoryDatabase.createAndInitialize();
        MySqlSource<String> mySqlSource =
                MySqlSource.<String>builder()
                        .hostname(MYSQL_CONTAINER.getHost())
                        .port(MYSQL_CONTAINER.getDatabasePort())
                        .databaseList(inventoryDatabase.getDatabaseName())
                        .tableList(inventoryDatabase.getDatabaseName() + ".products")
                        .username(inventoryDatabase.getUsername())
                        .password(inventoryDatabase.getPassword())
                        .serverId("5401-5404")
                        .deserializer(new JsonDebeziumDeserializationSchema())
                        .includeSchemaChanges(true) // 这里配置，输出DDL事件
                        .build();
				... // 其他处理逻辑                        
    }
```

### Q7: MySQL 整库同步怎么做, Flink CDC 支持吗？

Flink CDC 支持的，Q6 中 提供的 DataStream API 已经可以让用户获取 DDL 变更事件和数据变更事件，用户需要在此基础上，根据自己的业务逻辑和下游存储进行 DataStream 作业开发。

> note:
>  在 FFA2021 大会上云邪老师展示了团队解决 schema 变更等问题，未来有计划开源。
>  
> https://developer.aliyun.com/special/ffa2021/live?spm=a2c6h.12873639.0.0.617e57999nfFsw#
>
> https://www.bilibili.com/video/BV1tT4y1m7zG?p=2

### Q8: 同一个实例下，某个库的表无法同步增量数据，其他库都可以，这是为啥？

这个问题是因为 mysql 服务器 可以配置 binlog 过滤器，忽略了某些库的 binlog。用户可以通过 show master status 命令查看 Binlog_Ignore_DB 和 Binlog_Do_DB。

```
mysql> show master status;
+------------------+----------+--------------+------------------+----------------------+
| File             | Position | Binlog_Do_DB | Binlog_Ignore_DB | Executed_Gtid_Set    |
+------------------+----------+--------------+------------------+----------------------+
| mysql-bin.000006 |     4594 |              |                  | xxx:1-15             |
+------------------+----------+--------------+------------------+----------------------+
```

### Q9: 作业报错 The connector is trying to read binlog starting at GTIDs xxx and binlog file 'binlog.000064', pos=89887992, skipping 4 events plus 1 rows, but this is no longer available on the server. Reconfigure the connector to use a snapshot when needed，怎么办呢？

出现这种错误是 作业正在读取的binlog文件在 MySQL 服务器已经被清理掉，这种情况一般是 MySQL 服务器上保留的 binlog 文件过期时间太短，可以将该值设置大一点，比如7天。

```
mysql> show variables like 'expire_logs_days';
mysql> set global expire_logs_days=7;
```
还有种情况是 flink cdc 作业消费binlog 太慢，这种一般分配足够的资源即可。

### Q10: 作业报错 ConnectException: A slave with the same server_uuid/server_id as this slave has connected to the master，怎么办呢？

出现这种错误是 作业里使用的 server id 和其他作业或其他同步工具使用的server id 冲突了，server id 需要全局唯一，server id 是一个int类型整数。 在 CDC 2.x 版本中，source 的每个并发都需要一个server id，建议合理规划好server id，比如作业的 source 设置成了四个并发，可以配置 'server-id' = '5001-5004', 这样每个 source task 就不会冲突了。

### Q11: 作业报错 ConnectException: Received DML ‘…’ for processing, binlog probably contains events generated with statement or mixed based replication format，怎么办呢？

出现这种错误是 MySQL 服务器配置不对，需要检查下 binlog_format 是不是 ROW? 可以通过下面的命令查看

```
mysql> show variables like '%binlog_format%'; 
```

### Q12: 作业报错 Mysql8.0 Public Key Retrieval is not allowed， 怎么办呢 ?

这是因为用户配置的 MySQL 用户 使用的是 sha256 密码认证，需要 TLS 等协议传输密码。一种简单的方法是使允许 MySQL用户 支持原始密码方式访问。

```
mysql> ALTER USER 'username'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
mysql> FLUSH PRIVILEGES; 
```

### Q13: 作业报错 EventDataDeserializationException: Failed to deserialize data of EventHeaderV4 .... Caused by: java.net.SocketException: Connection reset， 怎么办呢 ?

这个问题一般是网络原因引起，首先排查flink 集群 到 数据库之间的网络情况，其次可以调大 MySQL 服务器的网络参数。

```
mysql> set global slave_net_timeout = 120; 
mysql> set global thread_pool_idle_timeout = 120;
```

### Q14: 作业报错 The slave is connecting using CHANGE MASTER TO MASTER_AUTO_POSITION = 1, but the master has purged binary logs containing GTIDs that the slave requires. 怎么办呢 ?

出现这个问题的原因是的作业全量阶段读取太慢，在全量阶段读完后，之前记录的全量阶段开始时的 gtid 位点已经被 mysql 清理掉了。这种可以增大 mysql 服务器上 binlog 文件的保存时间，也可以调大 source 的并发，让全量阶段读取更快。

### Q15: 在 DataStream API中构建MySQL CDC源时如何配置tableList选项？

tableList选项要求表名使用数据库名，而不是DataStream API中的表名。对于MySQL CDC源代码，tableList选项值应该类似于‘my_db.my_table’。

## Postgres CDC FAQ

> Postgres CDC FAQ 参考 本文作了分类处理

### Q1: 发现 PG 服务器磁盘使用率高，WAL 不释放 是什么原因？

Flink Postgres CDC 只会在 checkpoint 完成的时候更新 Postgres slot 中的 LSN。因此如果发现磁盘使用率高的情况下，请先确认 checkpoint 是否开启。

### Q2: Flink Postgres CDC 同步 Postgres 中将 超过最大精度（38，18）的 DECIMAL 类型返回 NULL

Flink 中如果收到数据的 precision 大于在 Flink 中声明的类型的 precision 时，会将数据处理成 NULL。此时可以配置相应'debezium.decimal.handling.mode' = 'string' 将读取的数据用 STRING 类型 来处理。

### Q3: Flink Postgres CDC 提示未传输 TOAST 数据，是什么原因？

请先确保 REPLICA IDENTITY 是 FULL。 TOAST 的数据比较大，为了节省 wal 的大小，如果 TOAST 数据没有变更，那么 wal2json plugin 就不会在更新后的数据中带上 toast 数据。为了避免这个问题，可以通过 'debezium.schema.refresh.mode'='columns_diff_exclude_unchanged_toast'来解决。

### Q4: 作业报错 Replication slot "xxxx" is active， 怎么办？

当前 Flink Postgres CDC 在作业退出后并不会手动释放 slot，有两种方式可以解决该问题

- 前往 Postgres 中手动执行以下命令

```
select pg_drop_replication_slot('rep_slot');
    ERROR:  replication slot "rep_slot" is active for PID 162564
select pg_terminate_backend(162564); select pg_drop_replication_slot('rep_slot');
```
- pg source with 参数中添加 'debezium.slot.drop.on.stop' = 'true'，在作业停止后自动清理 slot

### Q5: 作业有脏数据，比如非法的日期，有参数可以配置可以过滤吗？

可以的，可以在 Flink CDC 表的with 参数里 加下 'debezium.event.deserialization.failure.handling.mode'='warn' 参数，跳过脏数据，将脏数据打印到WARN日志里。 也可以配置 'debezium.event.deserialization.failure.handling.mode'='ignore'， 直接跳过脏数据，不打印脏数据到日志。

### Q6: 在DataStream API中构建Postgres CDC源时如何配置tableList选项？

tableList选项要求表名使用架构名，而不是DataStream API中的表名。对于Postgres CDC source，tableList选项值应为‘my_schema.my_table’。

## Oracle_FAQ

### Q1: Oracle 如何实现对同一个表的 upsert 功能？
```
MERGE INTO test T1
USING (select count(*) AS c from test T2 where T2.ID = 'xxxxx211108593445YY2022') x
ON ( x.c > 0 )
WHEN MATCHED THEN
    UPDATE SET USERID = 'asfafsasagsa' where ID = 'xxxxx211108593445YY2021'
WHEN NOT MATCHED THEN
    INSERT VALUES('1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21');
 ```
 
 ```
Flink sink 代码风格
             String mergeSql =
                    " MERGE INTO "
                            + sinkTable
                            + " T1 USING (SELECT COUNT (*) AS c FROM"
                            + sinkTable
                            + " T2 WHERE "
                            + StringUtils.join(pkSet, ",")
                            + " = "
                            + StringUtils.join(pkValues, ",")
                            + ") x ON ( x.c > 0 ) WHEN MATCHED THEN UPDATE SET "
                            + " WHEN MATCHED THEN "
                            + getSetSql(value)
                            + " WHERE "
                            + StringUtils.join(pkSet, ",")
                            + " = "
                            + StringUtils.join(pkValues, ",")
                            + "WHEN NOT MATCHED THEN INSERT VALUES ('"
                            + StringUtils.join(values, "','")
                            + "')";
 ```

## 即席查询场景分析
- 1、clickhouse  ：适合单表少关联查询，查询效率较高，运维部署难度较大；
- 2、starrocks（或doris):   表关联多也能支撑 , 并发量还可以,适用场景广，可推荐使用，但数据要写入或导入到sr中，无法复用已有的hadoop资源（虽然有外部表的方式，但查询速度毕竟没有数据直接存放sr的快）；
- 3、trino 或 presto:  可直接查询hadoop hive表,  大规模大sql查询时，如果资源跟不上，会有队列阻塞，有较大延迟；

来自 flink cdc 钉钉群 小芒果先生的总结
