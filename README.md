
# H5单页面框架

### 一、vipspa路由
github地址：[https://github.com/wikieswan/vipspa]().

源码解析：.

* 1、message消息载体传输
    * setMessage
    * getMessage

* 2、stringify拼接location对象的search部分来通过url传值

* 3、routerAction路由行为
    * `$(vipspa.mainView).html(data);`改变主页面的视图
    * loadScript动态去加载js


### 二、监听安卓机点返回键
github地址：[https://github.com/iazrael/xback].

xback监听 Android 设备的返回按钮, 当返回最开始的路由时触发回调函数

源码解析: .

* 1、history.pushState

/创建了一个新的由 state, null, 和 当前url设定的浏览器历史纪录.

`history.pushState(state, null, location.href);`

* 2、createEvent() 方法创建新的 Event 对象。iniEvent()初始化事件
[Document.createEvent()](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createEvent)
* 3、当返回dispatchEvent分发该事件


### 三、微信关闭当前网页窗口接口

微信公众平台开发者文档
```
wx.closeWindow();
```
配合第二点关闭页面退出H5


