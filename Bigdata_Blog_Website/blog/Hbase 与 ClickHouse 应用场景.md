---
authors:
- name: skylines
  url: https://github.com/rookiegao
tags: [数据仓库]
---

# Hbase 与 ClickHouse 应用场景

Hbase 存储和查询维度数据

   - Hbase 数据分析效率低 分析函数少，Hbase数据分析涉及磁盘读取数据，比较版本，聚合导致效率低下

ClickHouse 存储和查询宽表数据

   - 更擅长数据分析而不是查询明细，维度数据不宜存放 ClickHouse
