## 前置用例(tearup)
自动化测试中经常存在 **前置的重复操作**（即需要在测试正式开始前先执行的操作），如：
1. 在测试前需要先准备好测试数据；
2. 在执行操作之前需要先登录；

类似这样的需求，eoLinker AMS中提供了前置用例功能，能够让测试人员在用例正式开始之前先执行某些用例，并且将Cookie、全局变量等值继承给用例中的其他单例。

---

#### 创建前置用例
在用例管理页面，点击分组侧边栏中的前置用例分组，点击添加前置用例按钮，输入相关的前置用例名称：

![](http://data.eolinker.com/course/VEKAmC3d2791f3db2721b4347e787db47002aec5041afa7)

![](http://data.eolinker.com/course/ru3IRJeb5c854c033b8fdcd3f65e54ef2dbaeb987b9868c)

前置用例的编写方法与自动化测试高级模式一样，均是通过Js/Jquery的方式编写测试代码，详情可查看 **自动化测试-高级模式（代码）** 一章。编写完成之后点击保存即可。

![](http://data.eolinker.com/course/AfRTXRfe277034541c280271919a34faefebee3bff95f12)

---

#### 引用前置用例
进入普通用例编辑页面，点击 **添加前置用例** 按钮，在弹框中选择相应的前置用例，点击确定即可：

![](http://data.eolinker.com/course/8UsaRlZ12ba95a2a8742e25ae4efb337301e123e223b9ae)