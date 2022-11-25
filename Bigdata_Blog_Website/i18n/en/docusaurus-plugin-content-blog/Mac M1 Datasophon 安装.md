---
authors: 
  - name: skylines
    url: https://github.com/rookiegao
title: Mac M1 Datasophon install
date: 2022-11-21 18:41:11
tags: [Management platform]
keywords: [Datasophon]
description: 国产大数据运维部署系统
image: https://user-images.githubusercontent.com/34996528/203275795-397bdfb2-5510-4764-8948-9655016e8449.png

---

# Mac M1 Datasophon 安装

## 什么是 Datasophon

DataSophon 是致力于自动化监控、运维、管理大数据基础组件和节点的，帮助您快速构建起稳定，高效的大数据集群服务。

![img](https://user-images.githubusercontent.com/34996528/203275795-397bdfb2-5510-4764-8948-9655016e8449.png)

<!--truncate-->

### 网络要求

要求各机器各组件正常运行提供如下的网络端口配置：

| **组件**                | **默认端口**     |                         **说明**                          |
| ----------------------- | ---------------- | :-------------------------------------------------------: |
| DDHApplicationServer    | 8081、2551、8586 |  8081 为http server 端口，2551 为rpc 通信端口，8586 为 jmx 端口  |
| WorkerApplicationServer | 2552、9100、8585 | 2552 rpc 通信端口，8585 为 jmx 端口，9100 为主机数据采集器端口 |
| nginx                   | 8888             |                    提供 UI 端通信端口                     |

### 客户端浏览器要求
```
推荐 Chrome 以及使用 Chrome 内核的较新版本浏览器访问前端可视化操作界面。
```
### 关闭防火墙

各主机防火墙需关闭。

### 配置主机 host

大数据集群所有机器需配置主机 host。

配置主机名： hostnamectl set-hostname  主机名

配置 /etc/hosts 文件

### 免密登录配置

部署机器中，DataSophon 节点以及大数据服务主节点与从节点之间需免密登录。

生成ssh 秘钥： ssh-keygen -m PEM -t rsa ，一路回车。

执行 ssh-copy-id 目标主机。

### 环境要求

Jdk环境需安装。建议 mysql 版本为 5.7.X，并关闭 ssl。

(本机为 mysql 8)

### 组件介绍

DDHApplicationServer 为 API 接口层即 web 后端，主要负责处理前端 UI 层的请求。该服务统一提供 RESTful api 向外部提供请求服务。 

WorkerApplicationServer 负责执行 DDHApplicationServer 发送的指令，包括服务安装、启动、停止、重启等指令。


## 快速部署

### 部署 mysql 

mac m1 需尽可能先配置国内 yum 源否则容易出错例如配置华为云，做好用户 datasophon 用户授权(远程访问等权限)

注意需关闭 mysql ssl 功能。在部署过程中，部分组件会执行 sql 生成库表，不同环境的 mysql 在配置上存在差异，可根据 sql 执行情况，变更 mysql 配置。

### 执行数据脚本

> mysql 5.7
```sql
CREATE DATABASE IF NOT EXISTS datasophon DEFAULT CHARACTER SET utf8;
grant all privileges on *.* to datasophon@"%" identified by 'datasophon' with grant option;
GRANT ALL PRIVILEGES ON *.* TO 'datasophon'@'%';
FLUSH PRIVILEGES;
```
> mysql 8
```sql
create user 'datasophon'@"localhost" IDENTIFIED BY 'datasophon';
grant all on datasophon.* to "datasophon"@"localhost" with grant option;
FLUSH PRIVILEGES;
```


执行 datasophon-manager 安装目录 sql 目录下 datasophon.sql，创建数据表。

```sql
use datasophon;
source /opt/datasophon-manager-1.0.0/sql/datasophon-1.0.0.sql
```

## 安装 nginx

提供 nginx.conf 的 server 配置。

vi /etc/nginx/nginx.conf 

```
 server {
                listen 8888;# 访问端口(自行修改)
                server_name localhost;
                #charset koi8-r;
                #access_log /var/log/nginx/host.access.log main;
                location / {
                        root /usr/local/nginx/dist; # 前端解压的 dist 目录地址(自行修改，我这里是 yum 直接 install 了，这个目录需要自己创建)
                        index index.html index.html;
                }
                location /ddh {
                        proxy_pass http://hadoop102:8081; # 接口地址(自行修改)
                        proxy_set_header Host $host;
                        proxy_set_header X-Real-IP $remote_addr;
                        proxy_set_header x_real_ipP $remote_addr;
                        proxy_set_header remote_addr $remote_addr;
                        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
                        proxy_http_version 1.1;
                        proxy_connect_timeout 4s;
                        proxy_read_timeout 30s;
                        proxy_send_timeout 12s;
                        proxy_set_header Upgrade $http_upgrade;
                        proxy_set_header Connection "upgrade";
                }

                #error_page 404 /404.html;
                # redirect server error pages to the static page /50x.html
                #
                error_page 500 502 503 504 /50x.html;
                location = /50x.html {
                        root /usr/share/nginx/html;
                }
        }
```

将 dist.zip 解压到 nginx 目录下，启动 nginx (前面配置 yum 源之后，这里很好安装)

## 下载DDP部署包

DDP部署包下载地址：

链接: https://pan.baidu.com/s/1PMtFWOaYYR0X50X1E_618w?pwd=2t8h 提取码: 2t8h

在 /opt/datasophon 目录下创建目录

```
mkdir -p /opt/datasophon/DDP/packages
```

将下载的部署包上传到 /opt/datasophon/DDP/packages 目录下，作为项目部署包仓库地址。(所有包都上传，软件的 arm 包并不特指 arrch64，jdk 可以使用自己的<需在 /etc/profile 配置 java_home>，也可以用包内的)

![img](https://user-images.githubusercontent.com/34996528/203034308-60047d40-663a-4850-8e02-3bb62895d98e.png)


## 部署 DataSophon

### 1 部署目录介绍

在安装目录下解压 datasophon-manager-{version}.tar.gz，解压后可以看到如下安装目录：

![img](https://user-images.githubusercontent.com/34996528/203034500-d2b91aed-80f3-4aa5-b340-d19fd977f77c.png) 

bin：启动脚本 git

conf：配置文件

lib：项目依赖的 jar 包

logs: 项目日志存放目录

jmx：jmx 插件

### 2 修改配置

修改 conf 目录下的 application.yml 配置文件中数据库链接配置：

```
  datasource:
    type: com.alibaba.druid.pool.DruidDataSource
    url: jdbc:mysql://hadoop102:3306/datasophon?useUnicode=true&characterEncoding=utf-8&allowPublicKeyRetrieval=true
    username: datasophon
    password: datasophon
    driver-class-name: com.mysql.cj.jdbc.Driver
```
将 mysql 8 驱动 cp 至 /opt/datasophon/datasophon-manager-1.0.0/lib/

### 3 启动服务

```
启动：sh bin/datasophon-api.sh start api
停止：sh bin/datasophon-api.sh stop api
重启：sh bin/datasophon-api.sh restart api
```

部署成功后，可以进行日志查看，日志统一存放于 logs 文件夹内:

 logs/

  ├── ddh-api.log

  ├── ddh-api-error.log

  |—— api-{hostname}.out

### 访问页面

访问前端页面地址,接口 ip (自行修改) [http://172.16.69.202:8888](http://192.168.xx.xx:12345/dolphinscheduler) 默认用户名和密码为admin/admin123

![img](https://user-images.githubusercontent.com/34996528/203197828-89280ea2-b4ed-4678-93c6-44537308d10a.png)

### 安装服务

初始化配置集群先选择部署 AlertManager,Grafana 和 Prometheus 三个组件。DataSophon 依赖此三个组件实现系统监控告警管理。

然后优先安装 zk(高可用) 再安装其他服务

## 目前存在的问题

1. 文档尚不完善
2. log 日志不算齐全
3. 工作进程关闭不顺畅(我这边测试关闭服务，部分服务节点还在，需手动 kill 掉。。。)


