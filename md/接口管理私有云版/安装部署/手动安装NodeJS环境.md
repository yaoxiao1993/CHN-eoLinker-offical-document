##手动安装NodeJS环境
eoLinker AMS私有云版本基于PHP、NodeJS、Mysql等服务构建，在安装前请确保以上环境已经正确安装，具体的环境需求如下：

1. **服务器程序**：Nginx（推荐） / Apache

2. **主程序语言**：PHP，版本7.1+（推荐） / 5.6+

3. **数据库**：Mysql / Mariadb

4. **Mock服务**：Nodejs 8.0+

本教程将会详细说明如何进行NodeJS的安装。

---

####NodeJS安装示例（Linux系统）

1. 在NodeJS官网-产品下载页面：https://nodejs.org/en/download/ ，选择合适自己系统的安装包，在此我们使用**Linux Binaries（x86/x64）** 版本进行演示。

	![](http://data.eolinker.com/course/cEg2nGg593af9033a37a7cbe365275f3c8d2eefffb53237)

2. 复制相应版本的下载链接，得到如 “https://nodejs.org/dist/v8.9.4/node-v8.9.4-linux-x64.tar.xz” 的地址

	![](http://data.eolinker.com/course/crawBHr7a40005c62a41ba51e17f76c881d861761d12b70)

3. 命令行输入以下指令：
	1. **cd /usr/local/src**
	2. **wget https://nodejs.org/dist/v8.9.4/node-v8.9.4-linux-x64.tar.xz** (注意该地址为 **步骤2** 得到的下载链接)
	3. **tar xvJf node-v8.9.4-linux-x64.tar.xz** (注意 node-v8.9.4-linux-x64.tar.xz 为 **步骤ii** 下载得到文件的 **文件名**)
	4. **vim /etc/profile**
	5. 在 **export PATH USER LOGNAME MAIL HOSTNAME HISTSIZE HISTCONTROL** 一行的上面添加如下内容：
		
		**\#set for nodejs
		export NODE_HOME=/usr/local/src/node-v8.9.4-linux-x64
		export PATH=$NODE_HOME/bin:$PATH**
		
		![](http://data.eolinker.com/course/215lEBudc4fb1ef8706dd9b6f2652a60cf0ae7a7bf7d419)
	
	6. **:wq**
	7. **source /etc/profile**
	8. **node -v**
	9. 当界面上输出当前NodeJS版本号时，表示安装成功！
		![](http://data.eolinker.com/course/AQDg6VSd4eef6615b9796417a9edabd8aa24947506580b3)