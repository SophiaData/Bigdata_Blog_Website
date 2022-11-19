---
authors: skylines
title: Flink CDC 2.3.0 Announce
date: 2022-11-18 21:47:11
tags: [数据集成]
keywords: [Fink CDC, Flink]
description: Flink CDC 2.3.0 近期发布
---

![在这里插入图片描述](https://img-blog.csdnimg.cn/4ac4fbb159234e04acd3b6fe865ce53f.png)


# 新连接器

2.3.0 新增了 DB2 CDC 连接器

# 增量快照迎来新的连接器成员

2.3.0 版本MongoDB CDC，Oracle CDC 两大连接器均支持了增量快照，实现无锁读取+并发读取+断点续传

# 优化

2.3.0 版本 MySQL CDC 连接器性能和稳定性大幅提升

# Flink 支持

2.3.0 版本一口气兼容了Flink 1.13 & 1.14 & 1.15 & 1.16 四个版本

# 更多细节

MySQL CDC 支持指定位点/指定时间戳/earliest位点启动

MySQL CDC 支持异步分片，支持checkpoint期间分片暂停

MySQL CDC 支持全部字符集，支持宽容默认值，支持自动获取数据库时区

MySQL CDC JM内存和TM内存优化，binlog读取性能优化

OceanBase CDC 修复了时区问题，支持全类型对接到 Flink SQL

MongoDB CDC 支持了更多的数据类型，优化了捕获表的筛选过程

TiDB CDC 修复了全增量切换时数据丢失问题，支持读取时 region切换

Postgres CDC 支持的更多的类型，开放了更多配置项

SqlServer CDC 支持了更多的版本，完善了文档

MySQL CDC 和 OceanBase CDC 提供了中文文档，OceanBase CDC 提供了视频教程

详细 release note 在这里，可以查看所有issue 细节

https://github.com/ververica/flink-cdc-connectors/releases


Flink cdc 钉钉群

群号：33121212

二维码：
![扫码加入](https://img-blog.csdnimg.cn/7003c46fb70243c08a44575f8de63bd2.png)

内容参考 flink cdc 发布群公告

鸣谢 雪尽老师

