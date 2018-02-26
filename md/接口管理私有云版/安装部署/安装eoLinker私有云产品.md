##安装eoLinker AMS私有云产品
安装eoLinker AMS 私有云产品之前，请确认已经完全安装好一下环境，否则可能无法正常安装产品或者影响正常使用：

1. **服务器程序**：Nginx（推荐） / Apache

2. **主程序语言**：PHP，版本7.1+（推荐） / 5.6+

3. **数据库**：Mysql / Mariadb

4. **Mock服务**：Nodejs 8.0+

PHP环境需要安装以下必须的扩展，否则无法正常使用产品功能：

1. **PDO、PDO-Mysql**：用于数据库操作

2. **Ioncube**：用于解密项目代码

3. **mbstring**：用于utf-8编码下的字符串操作

4. **CURL**：用于网络请求

安装好以上所有环境之后，开始安装产品程序。

---

####安装主程序

1. 将获取到的安装包（通常是.zip格式）放置在可以被网络访问的目录下，该目录将作为主程序的安装目录，在此以 **/eolinker/** 作为安装路径。示例安装包名称为 **eolinker_ams.zip**，放置目录为: **/eolinker/eolinker_ams.zip**,此时目录结构在Linux下表示为：

	![](http://data.eolinker.com/course/YnICzme0381f0604c3ac70635b70f8c028c15256168c132)

2. 通过命令行工具，在 **/eolinker/** 目录下输入：**unzip eolinker_ams.zip** ，将产品代码解压到当前文件夹，此时的目录结构为：

	![](http://data.eolinker.com/course/LdZbHDh4f36bbd0dcfc60aef752afc3860bb4ddfe716c3d)

3. 通过浏览器访问该路径，在此以localhost/eolinker作为演示，在地址栏中输入**localhost/eolinker/index.php**，如果一切正常，链接会自动跳转到如下安装引导页,点击确定进入下一步：

	![](http://data.eolinker.com/course/tUEQLBn580b54d37c797791e386c0e438531f643a9405bc)

4. 在安装前，系统会进行安装前检查，抱歉配置、数据库等正常无误，点击检测环境按钮继续：

	![](http://data.eolinker.com/course/d1XFCnjf1e459693c841a2cc8c315297492788478f7bca9)

5. 按照提示输入 **已经创建好** 的数据库信息，如果尚未创建数据库，请先创建数据库，然后点击 **检测链接** 按钮：

	![](http://data.eolinker.com/course/E1nhGim90b38a641a7d2d86f20f58914f6cd212ef6be64b)

6. 最后输入系统管理员密码，点击确定即可进入安装环节：
	**注意！请牢记改密码，一旦忘记将无法找回，只能通过修改数据库来修改密码。**
	
	![](http://data.eolinker.com/course/iNiKMija63cb43b5447b4c7f3487f43e919ed98b033bd58)

7. 稍等片刻之后，就可以看到安装完成的界面：
	
	![](http://data.eolinker.com/course/UQHPDv595b42b24161046377474b6950825ca41cebdb5de)

8. 至此eoLinker AMS 私有云版本主程序就已经安装完成。

---

####安装Nodejs API服务

1. 命令行下输入 **npm install forever -g** ， 等待安装完成：

	![](http://data.eolinker.com/course/uNIn2Jn880240eae481e5ee677413bffb85e3efb6558848)

2. 在任意目录创建文件夹用于存放 NodeJS 服务代码，在此用 **/eolinker_nodejs/** 为例，将获取到的NodeJS API服务安装包（通常是.zip格式）解压到该文件夹下，此时的目录结构为：

	![](http://data.eolinker.com/course/SPZd7Gba360c612290f0057d3c219fd0debad4248f31e64)

3. 在该目录下输入 **npm install**，等待安装完成

4. 在该目录下分别输入以下命令：
	1. **forever start dist/node.server.js**
	2. **forever start dist/timer.script.js**
	
	当看到如下提示的时候，表示NodeJS API服务器已经正常启动了
	
	![](http://data.eolinker.com/course/3xNyjCW7579cd49a371384cb9992ad8189c8daa00a139a0)

---

####修改Nginx路由配置
安装完主程序以及NodeJS API服务之后，需要通过Nginx映射请求，使得主程序能够访问NodeJS API服务。
打开相关的Nginx配置文件，在server代码块的相应部分加入以下代码：

1. **location /nodeHttpServer {
	proxy_pass  localhost:11205;
	}**

2. **location /nodeWebsocketServer {
	proxy_http_version  1.1;
	proxy_pass          localhost:11204;
	proxy_read_timeout  60s;
	proxy_set_header    Host $host;
	proxy_set_header    X-Real_IP $remote_addr;
	proxy_set_header    X-Forwarded-for $remote_addr;
	proxy_set_header    Upgrade $http_upgrade;
	proxy_set_header    Connection Upgrade;
	}**

修改完成之后，保存并且重启Nginx服务器即可。