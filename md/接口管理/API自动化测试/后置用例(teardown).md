## 后置用例(teardown)
自动化测试中经常存在 **后置的重复操作**（即需要在所有测试完成之后执行的操作），如：
1. 在测试后需要清理测试数据；
2. 记录测试日志；
3. 调用其他持续集成系统，完成后续操作；

类似这样的需求，eoLinker AMS中提供了后置用例功能，能够让测试人员在用例执行完毕之后执行某些用例。

---

#### 创建后置用例
在用例管理页面，点击分组侧边栏中的后置用例分组，点击添加后置用例按钮，输入相关的后置用例名称：

![](http://data.eolinker.com/course/tBDGWNrf30a08e67196fe9e218b86f49e21c586fe41bef9)

![](http://data.eolinker.com/course/36Jl19m29c47da730e28c89f345c04303c68911a9c24b85)

后置用例的编写方法与自动化测试高级模式一样，均是通过Js/Jquery的方式编写测试代码，详情可查看 **自动化测试-高级模式（代码）** 一章。编写完成之后点击保存即可。

![](http://data.eolinker.com/course/AfRTXRfe277034541c280271919a34faefebee3bff95f12)

---

#### 引用后置用例
进入普通用例编辑页面，点击 **添加后置用例** 按钮，在弹框中选择相应的后置用例，点击确定即可：

![](http://data.eolinker.com/course/E9bcv5sed68ead5057d02caefba0ff38205c25a42a5f8cf)