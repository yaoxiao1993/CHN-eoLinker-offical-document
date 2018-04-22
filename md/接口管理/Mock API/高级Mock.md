# 高级Mock
eoLinker提供了强大的MockAPI功能，能够真实模拟API的返回结果以及状态码等：
1. 支持HTTP、HTTPS
2. 支持RESTful风格API
3. 支持设置返回结果的生成规则，支持MockJS
4. 支持对请求方式进行校验（免费版为默认开启，专业版可针对项目设置关闭）
5. 支持对请求参数进行校验（专业版）
6. 支持每次请求随机生成返回结果（专业版）
...

---
#### 编辑Mock数据

进入 **接口编辑页面**，点击上方 **高级Mock** 选项卡，进入到Mock设置页面：

![](http://data.eolinker.com/course/JRfS66v01b684ef5655b1893268dc2801c340f997627eb9)


**注意：**
1. MockAPI的返回结果与接口文档的返回结果一致，如果进入Mock设置页面发现没有可以设置的字段，请返回 **基础信息** 选项卡完善接口的返回信息；
2. MockAPI支持 [**mockjs**](http://mockjs.com/ "mockjs") 语法，了解相关语法教程请前往：http://mockjs.com/；

使用步骤：
1.返回参数填写相关键值对，若拥有层级结果，请用 **两个英文右箭头** >>表示层级：

![](http://data.eolinker.com/course/i9s29TCd904a50dc540165a0db042d8ff78b1def7b6a231)

2.根据mockjs示例进行拆分填写。以下图 **红框** 部分进行讲解：

![](http://data.eolinker.com/course/T5UJE5pa8a2f141b419cb393666fe19b9a13db52050a3b7)

- name对应列表字段名；
- min-max对应列表生成规则；
- string对应列表属性值，使用需搭配@mock=使用，如 @mock='★'

将上图的mock语法写入：
**注意：**红色框部分为设置整体返回结果类型，支持两种（object/array），生成规则及属性值同样对应mockjs语法

![](http://data.eolinker.com/course/nyc1jJU9af67656cc193682d49cb7f3a57e5f64de45d1c5)

---

#### 调用MockAPI
进入接口详情页，点击上方的Mock标签，在下方的Mock部分可以看到有Mock Api的请求地址，复制该地址即可访问Mock API得到虚拟数据：
![](http://data.eolinker.com/course/YtH4BMy06e6dcea02b1f5f879b62f8aceb12150a588bab1)