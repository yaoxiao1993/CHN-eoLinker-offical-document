##手动安装LNMP环境
eoLinker AMS私有云版本基于PHP、NodeJS、Mysql等服务构建，在安装前请确保以上环境已经正确安装，具体的环境需求如下：

1. **服务器程序**：Nginx（推荐） / Apache

2. **主程序语言**：PHP，版本7.1+（推荐） / 5.6+

3. **数据库**：Mysql / Mariadb

4. **Mock服务**：Nodejs 8.0+

如需各自安装以上服务，配置起来会比较繁琐，因此建议使用一键安装包，如LNMP（推荐）/ LAMP。

---

####安装LNMP

1. （推荐）直接在服务器通过命令行输入 **wget -c http://soft.vpser.net/lnmp/lnmp1.4.tar.gz && tar zxf lnmp1.4.tar.gz && cd lnmp1.4 && ./install.sh lnmp**

2. 在[LNMP.org](https://lnmp.org/ "LNMP.org")上下载安装包并按照安装教程安装。

---

####LNMP安装示例

1. 命令行输入“**wget -c http://soft.vpser.net/lnmp/lnmp1.4.tar.gz && tar zxf lnmp1.4.tar.gz && cd lnmp1.4 && ./install.sh lnmp**”

2. 如提示wget: command not found ，使用yum install wget 或 apt-get install wget 命令安装。

3. 运行上述LNMP安装命令后，会出现如下提示，输入3、4、6、7均可。

	注意：**如果已经安装过Mysql数据库，不希望重复安装（重复安装可能会覆盖原有数据库），请输入0**
	MySQL 5.6、5.7及MariaDB 10必须在1G以上内存的更高配置上才能选择

	![](http://data.eolinker.com/course/mXeTyDdd2008eca9c516314db5be2ba3ab07e69be02207d)

4. 需要设置MySQL的root密码（不输入直接回车将会设置为root）

	![](http://data.eolinker.com/course/TuldJ2N01f738b412dbd5e8bbe141b38a095112c34ddd16)

5. 询问是否需要启用MySQL InnoDB，InnoDB引擎默认为开启，一般建议开启，直接回车或输入 y ，如果确定确实不需要该引擎可以输入 n，输入完成，回车进入下一步。

	![](http://data.eolinker.com/course/KtHSvYH37aa04320a9ef79083d09780defbe8a18a210703)

6. 输入要选择的PHP版本的序号，**6、7** 均可（需要与获取的eoLinker私有云版本对应），回车进入下一步。

	![](http://data.eolinker.com/course/mywHRd75f98135159e14a9ab3701fafb290e6a49cbde89c)

7. 可以选择不安装Jemalloc或TCmalloc（PHP编译缓存器，能够加快程序运行速度），输入对应序号回车，直接回车为默认为不安装。

	![](http://data.eolinker.com/course/pbupmYXf87ad3d940c005e8d7d530a64e69c63a2186f487)

8. 以上配置均选择完成后，根据提示按下任何按键进行安装。安装时间在 **几十分钟到几个小时不等**，主要是机器的配置网速等原因会造成影响。

9. 安装完成后，显示Nginx: OK，MySQL: OK，PHP: OK，并且Nginx、MySQL、PHP都是running，80和3306端口都存在，并提示安装使用的时间及Install lnmp V1.4 completed! enjoy it.的话，说明已经安装成功。

	![](http://data.eolinker.com/course/jxXuJ8g8ab8458815a04e25bd675071a26fd32939bf2d40)