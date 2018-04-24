## Restful API测试
> eoLinker提供了非常强大的在线API接口测试功能，在使用之前，请先确保已经安装 **eoLinker自动化测试增强插件** ，该插件为您提供了API的在线、跨域、文件以及自动化测试的功能。

eoLinker会根据请求参数自动替换url中的restful参数，restful类型的请求参数表示为： **{参数名}**

如下图所示，请求地址中有两个restful参数：{a}以及{b}，请求参数中也有同名的参数以及额外的token参数：

在实际的发送过程中，eolinker会将url替换为
> www.eolinker.com/123/456

并且将token参数以body的方式发送到目标的地址。

![](http://data.eolinker.com/course/zfshXhHaf7c3daab1a06ff195103dc0102f7ffccaa7238e)