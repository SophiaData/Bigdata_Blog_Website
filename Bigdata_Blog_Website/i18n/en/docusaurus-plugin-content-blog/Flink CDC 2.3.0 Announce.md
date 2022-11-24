---
authors: 
  - name: skylines
    url: https://github.com/rookiegao
title: Flink CDC 2.3.0 Announce
date: 2022-11-18 21:47:11
tags: [data Integration ]
keywords: [Fink CDC, Flink]
description: Flink CDC 2.3.0 Recently released
---

![在这里插入图片描述](https://img-blog.csdnimg.cn/4ac4fbb159234e04acd3b6fe865ce53f.png)

<!--truncate-->

# New connector

2.3.0 New DB2 CDC connector

# Incremental snapshots usher in new connector members

2.3.0 MongoDB CDC and Oracle CDC both support incremental snapshots to achieve non lock read+concurrent read+breakpoint resume

# optimization

The performance and stability of MySQL CDC connector in version 2.3.0 have been greatly improved

# Flink support

Version 2.3.0 is compatible with Flink 1.13&1.14&1.15&1.16

# More details

MySQL CDC supports the startup of specified sites/specified timestamps/earliest sites

MySQL CDC supports asynchronous sharding and sharding pauses during checkpoint

MySQL CDC supports all character sets, tolerates default values, and automatically obtains the database time zone

MySQL CDC JM memory and TM memory optimization, binlog reading performance optimization

OceanBase CDC fixes the time zone problem and supports full type docking to Flink SQL

MongoDB CDC supports more data types and optimizes the filtering process of capture tables

TiDB CDC fixes the problem of data loss during full incremental switchover, and supports region switchover during read

Postgres CDC supports more types and opens more configuration items

SqlServer CDC supports more versions and improves the documentation

MySQL CDC and OceanBase CDC provide Chinese documents, and OceanBase CDC provides video tutorials

The detailed release note is here. You can view all the issue details

https://github.com/ververica/flink-cdc-connectors/releases


Flink cdc Dingding group

Group number：33121212

QR code：
![Scan code to join](https://user-images.githubusercontent.com/9601882/158350201-a1de35e6-0399-4a91-b5b0-e2fd5d33e33c.png)

Refer to the Flink cdc group announcement for content

Thanks to Leonard Xu

