---
authors: 
  - name: xingjieshitu
    url: https://github.com/xingjieshitu
title: Centos 配置集群机器之间免密登录
date: 2022-12-18
tags: [ssh, Linux]
keywords: [免密登陆]
---

# 大数据集群部署一般需要 ssh 免密登陆配置

下面我们进行 ssh 免密配置

```
cd ~
[bigdata@hadoop102 ~]$ cd .ssh/
[bigdata@hadoop102 .ssh]$ 
```

<!--truncate-->

执行命令（所有机器均如此，这里是三台）
```
ssh-keygen -t rsa
```

连续回车即可

```
 bigdata bigdata 1675 Dec 17 20:15 id_rsa
 bigdata bigdata  399 Dec 17 20:15 id_rsa.pub
 bigdata bigdata  555 Dec 17 23:10 known_hosts
```

用密钥 id_rsa.pub 覆盖 authorized_keys。

```
cp -R ./id_rsa.pub ./authorized_keys
```

在其他机器 

```

[bigdata@hadoop103 .ssh]$ scp -r ./authorized_keys hadoop102:/home/bigdata/.ssh/
[bigdata@hadoop104 .ssh]$ scp -r ./authorized_keys hadoop102:/home/bigdata/.ssh/
```

查看 hadoop102 authorized_keys

```
[bigdata@hadoop102 .ssh]$ cat authorized_keys 
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDT7k7lX+SVLi0QewVmvF1M+ggzyQZlva77FSqZiCAE4a/IcA1asYkOrcC4MgJ9r2hJ2TQnV9MVLYpY+O0/BJtJI5cFPuMnIhiQ19RanDzRYxTIsOTz9qpnMwQBCAvBbh3QIbfDvXw4Wiyw4s4kMzWFFsHxqP5Kl+od6wu7DwKc6nYkYjBpy6w2ECA2UZGaBFtq0jUNV9o4xe8ZaxOW4pmEm7hZFwtVBFRykTQUl6aWW3PQsi+nc/Eg2rD5eTjMrl4K313rBYEt0DbfHnnpAryr+59m3Jfjjiwy3xoS5fxQsgsAAyK54OaseBGUuslaqXim/hNDIXEtcMUwapzXuzlj bigdata@hadoop102
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQDLXYghOeKj0SjZN6Nna4yfHnsilPi3UPJZtJnuOeNNzR9IXyebHPN1EzqE8xdfs8Y6J0I8RpXZ+Lx3VOO7VWRcHlVaQvsKQJbqpkBG4orVguGSB8KOovrmQWcxLu9/ZqWlhqrM/G52HE8cX+bddDAeX7sRDlxNz4kopFJ6farkEQacXTitNKovW3p+6MI9VjA6SeAbvSdkxjo8VC9kHBRC8aGaXbqbqrf8dRcTDIWEEbIH1LjQCf0hGNtbY1qRpQPpl6TyZnIrcK6uNpCrJoy+coA1DUJVkoRmPHSjxppXzivKqi0Hw3CqnJDWF6kBTCKzuibu+JEsIZ7qiTb4Xqix bigdata@hadoop103
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQCYItnYSUY4/NjXIWjED83eSAkhw1sn1a6bv3NwxStozpfVF91NrCc1g2kjXxmiF7YmY/gqQfxLsS0ePUomgCqyS81mU395bUNmALrVdgdIcw0p+qUY24XoKJsANOaMsUTv8l68dqvgQBcJu0MmmiuoW/8rKrqYedBR9O4xOxxmGpfkfibbg964q3/I6ydDiw75RiUb+dvNW1Ssc/ufB9U7IsI1sPSRz2RaLx+WkwwW4qDdGd+WhNMmw32ofMqreyuIYbnfuzK5f/YyehhojNGMneEXMUmWW+lz844zuEZmw1CWoPuWnsGltAlskrN78keaWt3nj7MLi2gvAa2MlzW/ bigdata@hadoop104
[bigdata@hadoop102 .ssh]$ 
```

将 hadoop 102 的 authorized_keys 复制到其他机器

每台机器均授权文件夹
```
bigdata@hadoop102 .ssh]$ chmod -R 700 ./.ssh
bigdata@hadoop102 .ssh]$ chmod -R 600 ./.ssh/authorized_keys
```
最后
ssh 其他机器测试即可
