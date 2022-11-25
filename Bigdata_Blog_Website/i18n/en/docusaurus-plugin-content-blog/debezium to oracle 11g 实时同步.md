---
authors: 
  - name: 青涩的芒果汁
    url: https://blog.csdn.net/weixin_40898246/article/details/120880414?spm=1001.2014.3001.5501
title: debezium to oracle 11g Realtime synchronization
date: 2021-11-21 09:24:31
tags: [data Integration]
keywords: [Debeziium]
description: 使用 debezium 对 oracle 数据进行采集
---

## 第1章 debezium概述

### 1.1 debezium是什么

 Debezium 是一组分布式服务，用于捕获数据库中的更改，以便您的应用程序可以查看这些更改并对其做出响应。 Debezium 在更改事件流中记录每个数据库表中的所有行级更改，应用程序只需读取这些流以查看更改事件发生的相同顺序。
 
<!--truncate-->

### 1.2 debezium的依赖
Debezium 构建在 Apache Kafka 之上，并提供与 Kafka Connect 兼容的连接器，用于监控特定的数据库管理系统。 Debezium 在 Kafka 日志中记录数据更改的历史记录，从您的应用程序使用它们的位置。 这使您的应用程序可以轻松正确且完整地使用所有事件。 即使您的应用程序意外停止，它也不会错过任何内容：当应用程序重新启动时，它将继续使用它停止的事件。

## 第2章 环境搭建
### 2.1 所需软件及测试版本

jdk-8u211-linux-x64.tar.gz

apache-zookeeper-3.5.7-bin.tar.gz

kafka_2.11-2.4.0.tgz

debezium-connector-oracle-1.7.0.Final-plugin.tar.gz

instantclient-basic-linux.x64-21.3.0.0.0.zip (oracle客户端)

oracle 11g R2

### 2.2 数据库准备
（1）设置Oracle LogMiner所需的配置

```
[root@tDataAnalysis01 config]# su - oracle
[oracle@tDataAnalysis01 config]$ sqlplus / as sysdba
SQL> alter system set db_recovery_file_dest_size = 10G;
SQL> shutdown immediate;
SQL> startup mount;
SQL> alter database archivelog;
SQL> alter database open;
```
（2）保证Database log mode显示为Archive Mode

```
SQL> archive log list
```

（3）启用补充日志记录,（所有表都得执行，表里须至少一条数据）

```
SQL> ALTER DATABASE add SUPPLEMENTAL LOG DATA ;
SQL> ALTER TABLE 库.表 ADD SUPPLEMENTAL LOG DATA (ALL) COLUMNS;
```

Debezium Oracle连接器要求使用特定权限设置用户账号，以便连接器捕获更多事件。

```
CREATE TABLESPACE logminer_tbs DATAFILE '/opt/oracle/oradata/ORCLCDB/logminer_tbs.dbf'
SIZE 25M REUSE AUTOEXTEND ON MAXSIZE UNLIMITED;

CREATE USER debezium IDENTIFIED BY 123456
    DEFAULT TABLESPACE TEST0
    QUOTA UNLIMITED ON TEST0;
 
  GRANT CREATE SESSION TO debezium ;
  GRANT SELECT ON V_$DATABASE to debezium ;
  GRANT FLASHBACK ANY TABLE TO debezium ;
  GRANT SELECT ANY TABLE TO debezium ;
  GRANT SELECT_CATALOG_ROLE TO debezium ;
  GRANT EXECUTE_CATALOG_ROLE TO debezium ;
  GRANT SELECT ANY TRANSACTION TO debezium ;

  GRANT CREATE TABLE TO debezium ;
  GRANT LOCK ANY TABLE TO debezium ;
  GRANT ALTER ANY TABLE TO debezium ;
  GRANT CREATE SEQUENCE TO debezium ;
 
  GRANT EXECUTE ON DBMS_LOGMNR TO debezium ;
  GRANT EXECUTE ON DBMS_LOGMNR_D TO debezium ;
 
  GRANT SELECT ON V_$LOG TO debezium ;
  GRANT SELECT ON V_$LOG_HISTORY TO debezium ;
  GRANT SELECT ON V_$LOGMNR_LOGS TO debezium ;
  GRANT SELECT ON V_$LOGMNR_CONTENTS TO debezium ;
  GRANT SELECT ON V_$LOGMNR_PARAMETERS TO debezium ;
  GRANT SELECT ON V_$LOGFILE TO debezium ;
  GRANT SELECT ON V_$ARCHIVED_LOG TO debezium ;
  GRANT SELECT ON V_$ARCHIVE_DEST_STATUS TO debezium ;
 
  exit;
```

### 2.3部署连接器
（1）进入到oracle客户端目录中，将xstreams.jar和ojbc8.jar复制到kafka lib下，并分发给02，03两台机器。

```
[root@tDataAnalysis01 ~]# cd /opt/oracle/ instantclient_21_3/
[root@tDataAnalysis01 instantclient_21_3]# cp xstreams.jar /opt/module/kafka_2.11-2.4.0/libs/
[root@tDataAnalysis01 instantclient_21_3]# cp ojdbc8.jar /opt/module/kafka_2.11-2.4.0/libs/
[root@tDataAnalysis01 instantclient_21_3]# scp xstreams.jar tDataAnalysis02:/opt/module/kafka_2.11-2.4.0/libs/
[root@tDataAnalysis01 instantclient_21_3]# scp ojdbc8.jar tDataAnalysis02:/opt/module/kafka_2.11-2.4.0/libs/
[root@tDataAnalysis01 instantclient_21_3]# scp xstreams.jar tDataAnalysis03:/opt/module/kafka_2.11-2.4.0/libs/
[root@tDataAnalysis01 instantclient_21_3]# scp ojdbc8.jar tDataAnalysis03:/opt/module/kafka_2.11-2.4.0/libs/
```

（2）增加LD_LIBRARY_PATH环境变量，指向oracle client路径(每个节点都配置)

```
[root@tDataAnalysis01 instantclient_21_3]# vim /etc/profile
export LD_LIBRARY_PATH=/opt/oracle/instantclient_21_3
[root@tDataAnalysis01 instantclient_21_3]# source /etc/profile
```

（3）创建kafka plugins文件夹

```
[root@tDataAnalysis01 software]# mkdir -p /usr/local/share/kafka/plugins/
```

（4）上传debezium-connector-oracle-1.7.0.Final-plugin.tar.gz
，解压到kafka plugins目录

```
[root@tDataAnalysis01 software]# tar -zxvf debezium-connector-oracle-1.7.0.Final-plugin.tar.gz -C /usr/local/share/kafka/plugins/
```

（5）再次修改kafka下的connect-distributed.properties文件，添加plugins路径

```
[root@tDataAnalysis01 software]# cd /opt/module/kafka_2.11-2.4.0/config/
[root@tDataAnalysis01 config]# vim connect-distributed.properties 
plugin.path=/usr/local/share/kafka/plugins/
```

（6）分发plugins文件夹,分发connect-distributed.properties

```
[root@tDataAnalysis01 config]# scp -r /usr/local/share/kafka/  tDataAnalysis02:/usr/local/share/
[root@tDataAnalysis01 config]# scp -r /usr/local/share/kafka/  tDataAnalysis03:/usr/local/share/
[root@tDataAnalysis01 config]# scp connect-distributed.properties  tDataAnalysis02:/opt/module/kafka_2.11-2.4.0/config/
[root@tDataAnalysis01 config]# scp connect-distributed.properties  tDataAnalysis03:/opt/module/kafka_2.11-2.4.0/config/
```

（7）启动kafka connector

```
[root@tDataAnalysis01 kafka_2.11-2.4.0]# bin/connect-distributed.sh -daemon config/connect-distributed.properties
[root@tDataAnalysis02 kafka_2.11-2.4.0]# bin/connect-distributed.sh -daemon config/connect-distributed.properties
[root@tDataAnalysis03 kafka_2.11-2.4.0]# bin/connect-distributed.sh -daemon config/connect-distributed.properties
```

（8）查看进程

```
25010 Kafka
25555 ConnectDistributed
```



## 第3章启动Debezium

### 3.1 测试任务启动

```powershell
curl -H "Content-Type: application/json" -X POST -d  '{
       "name" : "oracle-connector",
       "config" : {
           "connector.class" : "io.debezium.connector.oracle.OracleConnector",
           "database.hostname" : "xxx.xxx.16.53",
           "database.port" : "1522",
           "database.user" : "debezium",
           "database.password" : "123456",
           "database.dbname": "ORCL",
           "database.server.name" : "orcl6",
           "database.history.kafka.topic" : "schema-changes.inventory5",
           "database.history.kafka.bootstrap.servers" : "tDataAnalysis01:9092,tDataAnalysis02:9092,tDataAnalysis03:9092",
           "snapshot.mode" : "initial",
           "schema.include.list" : "c##HAHA123",
           "table.include.list" : "c##HAHA123.CIRCLE",
           "database.oracle.version": "11", 
           "database.tablename.case.insensitive": "false",
           "decimal.handling.mode" : "string"
 }
}' http://tDataAnalysis01:8083/connectors
```


**测试任务这里我使用了初始化快照**

查看kafka topic

```bash
bin/kafka-topics.sh --bootstrap-server tDataAnalysis01:9092 --list
FlinkError
__consumer_offsets
connect-oracle-configs
connect-oracle-offsets
connect-oracle-status
flumeError
myTest
orcl6.C__HAHA123.CIRCLE
schema-changes.inventory5
```

查看connect状态

```bash
curl -H "Accept:application/json" tDataAnalysis01:8083/connectors/
["oracle-connector"][root@tDataAnalysis02 kafka]#
```

插入数据后

消费topic

```bash
bin/kafka-console-consumer.sh --bootstrap-server tDataAnalysis01:9092 --topic orcl6.C__HAHA123.CIRCLE --from-beginning
```



数据格式

```bash
{
    "schema": {
        "type": "struct", 
        "fields": [
            {
                "type": "struct", 
                "fields": [
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "SERIALNO"
                    }, 
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "FILEPATH"
                    }, 
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "PARTID"
                    }, 
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "STAFFNO"
                    }, 
                    {
                        "type": "int64", 
                        "optional": false, 
                        "name": "io.debezium.time.Timestamp", 
                        "version": 1, 
                        "field": "RECORDTIME"
                    }
                ], 
                "optional": true, 
                "name": "orcl6.C__HAHA123.CIRCLE.Value", 
                "field": "before"
            }, 
            {
                "type": "struct", 
                "fields": [
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "SERIALNO"
                    }, 
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "FILEPATH"
                    }, 
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "PARTID"
                    }, 
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "STAFFNO"
                    }, 
                    {
                        "type": "int64", 
                        "optional": false, 
                        "name": "io.debezium.time.Timestamp", 
                        "version": 1, 
                        "field": "RECORDTIME"
                    }
                ], 
                "optional": true, 
                "name": "orcl6.C__HAHA123.CIRCLE.Value", 
                "field": "after"
            }, 
            {
                "type": "struct", 
                "fields": [
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "version"
                    }, 
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "connector"
                    }, 
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "name"
                    }, 
                    {
                        "type": "int64", 
                        "optional": false, 
                        "field": "ts_ms"
                    }, 
                    {
                        "type": "string", 
                        "optional": true, 
                        "name": "io.debezium.data.Enum", 
                        "version": 1, 
                        "parameters": {
                            "allowed": "true,last,false"
                        }, 
                        "default": "false", 
                        "field": "snapshot"
                    }, 
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "db"
                    }, 
                    {
                        "type": "string", 
                        "optional": true, 
                        "field": "sequence"
                    }, 
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "schema"
                    }, 
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "table"
                    }, 
                    {
                        "type": "string", 
                        "optional": true, 
                        "field": "txId"
                    }, 
                    {
                        "type": "string", 
                        "optional": true, 
                        "field": "scn"
                    }, 
                    {
                        "type": "string", 
                        "optional": true, 
                        "field": "commit_scn"
                    }, 
                    {
                        "type": "string", 
                        "optional": true, 
                        "field": "lcr_position"
                    }
                ], 
                "optional": false, 
                "name": "io.debezium.connector.oracle.Source", 
                "field": "source"
            }, 
            {
                "type": "string", 
                "optional": false, 
                "field": "op"
            }, 
            {
                "type": "int64", 
                "optional": true, 
                "field": "ts_ms"
            }, 
            {
                "type": "struct", 
                "fields": [
                    {
                        "type": "string", 
                        "optional": false, 
                        "field": "id"
                    }, 
                    {
                        "type": "int64", 
                        "optional": false, 
                        "field": "total_order"
                    }, 
                    {
                        "type": "int64", 
                        "optional": false, 
                        "field": "data_collection_order"
                    }
                ], 
                "optional": true, 
                "field": "transaction"
            }
        ], 
        "optional": false, 
        "name": "orcl6.C__HAHA123.CIRCLE.Envelope"
    }, 
    "payload": {
        "before": null, 
        "after": {
            "SERIALNO": "1209", 
            "FILEPATH": "vqrouj", 
            "PARTID": "5606", 
            "STAFFNO": "YTCZ060002", 
            "RECORDTIME": 1329061915000
        }, 
        "source": {
            "version": "1.7.0.Final", 
            "connector": "oracle", 
            "name": "orcl6", 
            "ts_ms": 1634660571000, 
            "snapshot": "false", 
            "db": "ORCL", 
            "sequence": null, 
            "schema": "C##HAHA123", 
            "table": "CIRCLE", 
            "txId": "05000300282e0000", 
            "scn": "19202446", 
            "commit_scn": "19202478", 
            "lcr_position": null
        }, 
        "op": "c", 
        "ts_ms": 1634631840937, 
        "transaction": null
    }
}
```


删除connect 

```bash
curl -v -X DELETE http://tDataAnalysis01:8083/connectors/oracle-connector
```


访问 8083端口可查看 connect状态

```bash
tDataAnalysis03:8083/connectors/oracle-connector/status
```


### 3.2 Oracle归档日志过多解决(磁盘很大可以忽略)

测试中因为日志写入过快问题导致磁盘被写满，使得Oracle数据库极不稳定

日志不允许物理删除，应通过rman target /

执行 

```bash
delete noprompt archivelog until time 'sysdate-1/24';
```

脚本处理

```bash
# 由于连接器是依赖于Oracle的归档日志做的实时同步
# 存在归档日志撑爆磁盘的问题
#! /bin/bash
exec >> /xxx/oracle/oracle_log/del_arch`date +%F-%H`.log #记录脚本日志
$ORACLE_HOME/bin/rman target / <<EOF
#检查归档日志
crosscheck archivelog all;
#删除所有过期日志
delete noprompt expired archivelog all;
#删除一个小时前的归档日志
delete noprompt archivelog until time 'sysdate-1/24';
exit;
EOF
```
### 3.3 新增表问题

#### 3.3.1 第一种解决方案

第一次安装Debezium,可以监控到数据库中表的初始表，但是后续再建表并且增加SUPPLEMENTAL LOG DATA，Connector是无法捕获到的。
解决方案：
再提交一个新的connecotr,用来监控后续创建的表

```bash
curl -H "Content-Type: application/json" -X POST -d  '{
       "name" : "oracle-connector2",
       "config" : {
           "connector.class" : "io.debezium.connector.oracle.OracleConnector",
           "database.hostname" : "xxx.xxx.16.53",
           "database.port" : "1522",
           "database.user" : "debezium",
           "database.password" : "123456",
           "database.dbname": "ORCL",
           "database.server.name" : "orcl7",
           "database.history.kafka.topic" : "schema-changes.inventory6",
           "database.history.kafka.bootstrap.servers" : "tDataAnalysis01:9092,tDataAnalysis02:9092,tDataAnalysis03:9092",
           "snapshot.mode" : "initial",
           "schema.include.list" : "c##HAHA123",
           "table.include.list" : "c##HAHA123.CIRCLE2",
           "database.oracle.version": "11", 
           "database.tablename.case.insensitive": "false",
           "decimal.handling.mode" : "string"
 }
}' http://tDataAnalysis01:8083/connectors
```

那么可以使用参数table.include.list指定所需的监控的表，或者使用table.exclude.list指定不需要监控的表，二者只能选一个使用(这个方案实测通过，可以正常收数据)

查看连接器状态：

```bash
curl -H "Accept:application/json" tDataAnalysis01:8083/connectors/
["oracle-connector2","oracle-connector"][root@tDataAnalysis02 kafka]#
```

#### 3.3.2第二种解决方案

*最新测试 根据社区回复

![在这里插入图片描述](https://img-blog.csdnimg.cn/910a6a1d318d4c11b557b36d2a0a91b0.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6I-c6bifQ29kZXJz,size_20,color_FFFFFF,t_70,g_se,x_16)
**新表可通过停止原有任务，修改配置参数，重新启动任务，旧表数据不受影响，底层存有偏移量，数据同步可以追溯 快照方式为 schema_only**

建议： 我们的oracle数据库本身数据量存储量应该是不小的，我在测试中为方便快照为初始化，生产中建议schema_only 为增量读取以避免任务长时间运行造成失败。

### 3.4 注意事项

#### 3.4.1配置 Debezium 主题

Debezium 使用（通过 Kafka Connect 或直接）多个主题来存储数据。 这些主题必须由管理员或 Kafka 本身通过启用主题的自动创建来创建。 
有一些适用于主题的限制和建议：

数据库历史主题（适用于 MySQL 和 SQL Server 的 Debezium 连接器）
无限（或非常长）保留（无压缩！）
生产的复制因子至少为 3
单分区

#### 3.4.2其他主题

可选地，启用日志压缩（如果您希望只保留给定记录的最后一个更改事件）； 在这种情况下，应配置 Apache Kafka 中的 min.compaction.lag.ms 和 delete.retention.ms 主题级别设置，以便消费者有足够的时间接收所有事件并删除标记； 具体来说，这些值应大于您预期的接收器连接器的最大停机时间，例如 更新它们时
在生产中复制

#### 3.4.3单分区

您可以放宽单分区规则，但您的应用程序必须处理数据库中不同行的乱序事件（单行的事件仍然是完全有序的）。 如果使用多个分区，Kafka默认会通过对key进行hash来确定分区。 其他分区策略需要使用 SMT 为每个记录设置分区号。
有关可自定义的主题自动创建（自 Kafka Connect 2.6.0 起可用），请参阅自定义主题自动创建

**官网对于数据库历史主题虽只提到MySQL，SQL server，但是实际测试中如果schema-changes.inventory5 主题被误删，connect将报错，只有将ddl语句重新插入进去，才可以恢复正常，且oracle 连接器快照目前只支持schema_only，initial 。临时快照和增量快照尚在孵化中**

#### 3.4.4关于对oracle 数据库压力的问题


![社区大佬的回复](https://img-blog.csdnimg.cn/286d681d969542f88248bd3c5e622794.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA6I-c6bifQ29kZXJz,size_20,color_FFFFFF,t_70,g_se,x_16)

### 3.5 错误处理

如出现不能识别oracle版本或其他错误，请前往xx01(post请求后缀为01)节点所在Kafka logs目录
执行

```bash
tail -200 connectDistributed.out
```


查看具体日志

#### 3.5.1不能识别jdbc驱动？

先去看oracle配置，确保host，port，sid等无误，另外判断ojdbc8.jar是否被识别到，可以尝试重启Kafka 以及Kafka connect 或直接新装一套Kafka集群进行验证。

#### 3.5.2 Kafka以及Kafka connect重启问题

Kafka(暴力杀死，重启会有冲突) 不允许kill -9 杀掉进程 应使用命令停止，Kafka通常关闭较慢，确认集群Kafka关闭后再重启 各个节点执行停止或重启，cdh版在控制台启停即可。

```bash
/opt/module/kafka/bin/kafka-server-stop.sh -daemon /opt/module/kafka/config/server.properties
```

如需重启 Kafka connect服务
Kafka connect kill -9 杀掉所有节点即可
启动命令

```bash
/opt/module/kafka/bin/connect-distributed.sh -daemon /opt/module/kafka/config/connect-distributed.properties 
```



## 参考

[https://debezium.io/documentation/reference/1.7/connectors/oracle.html#oracle-overview](https://debezium.io/documentation/reference/1.7/connectors/oracle.html#oracle-overview%20%20%E5%B0%9A%E7%A1%85%E8%B0%B7%E5%A4%A7%E6%95%B0%E6%8D%AE%E6%8A%80%E6%9C%AF%E4%B9%8BOracle%E5%AE%9E%E6%97%B6%E5%90%8C%E6%AD%A5%E6%96%B9%E6%A1%88.doc%20%28debezium%20to%20oracle%2019%20c%29%20%20https://blog.51cto.com/tiany/1552783%20%20https://www.codeleading.com/article/64945986138/%20%20https://my.oschina.net/dacoolbaby/blog/4320036%20%20https://my.oschina.net/dacoolbaby/blog/3191882%20%20https://www.cnblogs.com/yaowentao/p/14944739.html)

尚硅谷大数据技术之Oracle实时同步方案.doc (debezium to oracle 19 c)

[https://blog.51cto.com/tiany/1552783](https://blog.51cto.com/tiany/1552783)

[https://www.codeleading.com/article/64945986138/](https://www.codeleading.com/article/64945986138/)

[https://my.oschina.net/dacoolbaby/blog/4320036](https://my.oschina.net/dacoolbaby/blog/4320036)

[https://my.oschina.net/dacoolbaby/blog/3191882](https://my.oschina.net/dacoolbaby/blog/3191882)

[https://www.cnblogs.com/yaowentao/p/14944739.html](https://www.cnblogs.com/yaowentao/p/14944739.html)
