---
authors: 
  - name: skylines
    url: https://github.com/rookiegao
title: jupyter notebook 在 linux 下安装，并实现远程登陆
tags: [jupyter]
---

# jupyter notebook
## jupyter notebook 在 linux 下安装，并实现远程登陆
### 安装Anaconda
 1. 首先安装
[Anaconda](http://docs.continuum.io/anaconda/install/linux/)

按照官网指引即可完成本地安装

懒得看官网往下看

首先进行下载[ Anaconda installer for Linux.](https://www.anaconda.com/download/#linux)
编写时Anaconda版本已经支持到Python3.7(请自行安装)

 2. 下载完成后可以进行MD5或SHA-256验证
 
 

```
md5sum /path/filename
```
或者

```
sha256sum /path/filename
```
注意根据自己的路径进行替换

3. 输入以下内容以安装Anaconda for Python 3.7

```
bash ~/Downloads/Anaconda3-5.3.0-Linux-x86_64.sh
```
或输入以下内容以安装Anaconda for Python 2.7：

```
bash ~/Downloads/Anaconda2-5.3.0-Linux-x86_64.sh
```

注意：bash无论您是否使用Bash shell，都包括该命令。

注意：如果未下载到“下载”目录，请替换 ~/Downloads/为下载文件的路径。

注意：选择“以用户身份安装Anaconda”，除非需要root权限。

4. 安装程序会提示“为了继续安装过程，请查看许可协议。”单击Enter以查看许可条款。
5. 滚动到许可条款的底部，输入“是”表示同意
6. 安装程序会提示您单击Enter以接受默认安装位置，单击CTRL-C以取消安装，或指定备用安装目录。如果接受默认安装位置，安装程序将显示“PREFIX = / home / <user> / anaconda <2或3>”并继续安装。可能需要几分钟才能完成。
7. 安装程序会提示“您是否希望安装程序在您的/home/<user>/.bashrc中将Anaconda <2或3>安装位置添加到PATH？”回车Yes。

注意：如果输入“否”，则必须手动将路径添加到Anaconda或conda将不起作用。笔者建议回车Yes

9.  安装程序描述Microsoft VS Code并询问您是否要安装VS Code。输入yes或no。如果选择yes，请按照屏幕上的说明完成VS Code安装。

注意：使用Anaconda安装程序安装VS代码需要Internet连接。离线用户可能能够从Microsoft找到脱机VS代码安装程序。

10. 关闭并打开终端窗口以使安装生效，或者输入命令。

```
source ~/.bashrc
```
11. 安装完成后，打开Anaconda Navigator，Anaconda附带的程序验证它：打开终端窗口并输入 anaconda-navigator。如果Navigator打开，则表示您已成功安装Anaconda。如果没有，请检查您是否完成了上述每个步骤，然后查看我们的 帮助页面。
12. 如果你成功安装了Anaconda，自然就可以启动jupyter notebook 但此时还不能通过远程登录到jupyter notebook
13. 设置 jupyter notebook 可远程访问的官方指南在[运行笔记本服务器](https://jupyter-notebook.readthedocs.io/en/latest/public_server.html)
#### 配置远程登录
14. 生成一个 notebook 配置文件
 默认情况下，配置文件 ~/.jupyter/jupyter_notebook_config.py 并不存在，需要自行创建。使用下列命令生成配置文件：
 

```
jupyter notebook --generate-config
```
如果是 root 用户执行上面的命令，会发生一个问题：（官网本身不建议使用root用户除非涉及到权限问题）

```
Running as root it not recommended. Use --allow-root to bypass.
```
提示信息很明显，root 用户执行时需要加上 --allow-root 选项。

```
jupyter notebook --generate-config --allow-config
```
执行成功后，会出现下面的信息：

```
Writing default config to: /root/.jupyter/jupyter_notebook_config.py

```
#### 生成密码
生成密码的方式主要有俩种
自动生成
从 jupyter notebook 5.0 版本开始，提供了一个命令来设置密码：jupyter notebook password，生成的密码存储在 jupyter_notebook_config.json。

```
$ jupyter notebook password
Enter password:  ****
Verify password: ****
[NotebookPasswordApp] Wrote hashed password to /Users/you/.jupyter/jupyter_notebook_config.json
```
#### 手动生成
打开 ipython 执行下面内容：
```
In [1]: from notebook.auth import passwd
In [2]: passwd()
Enter password:
Verify password:
Out[2]:sha1:c3ca29ddb0f7:ced40cc0b0b5cae33da6da30484c6399a38c0f12
```
#####  修改配置文件
  `cd ./.jupyter/  `
  

```
vim jupyter_notebook_config.py 
```

在 jupyter_notebook_config.py 中找到下面的行，取消注释并修改(东西比较多，仔细找)

```
c.NotebookApp.ip='*'  (如果* 没用 ，则改为0.0.0.0，笔者在参考别人的答案时，*就没用。。)
c.NotebookApp.password = 'sha1:c3ca29ddb0f7:ced40cc0b0b5cae33da6da30484c6399a38c0f12'  (填你们自己的)
c.NotebookApp.open_browser = False
c.NotebookApp.port =8888 #可自行指定一个端口, 访问时使用该端口
```
以上设置完以后就可以在服务器上启动 jupyter notebook，jupyter notebook, root 用户使用 jupyter notebook --allow-root。打开 IP:指定的端口, 输入密码就可以访问了。

![成功截图](https://img-blog.csdnimg.cn/20190218150612101.png)
![网页成功](https://img-blog.csdnimg.cn/20190218150750315.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MDg5ODI0Ng==,size_16,color_FFFFFF,t_70)

好了，到此结束

参考[笔者最初查到的帖子](https://blog.csdn.net/simple_the_best/article/details/77005400)
