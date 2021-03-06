# 移动端常用meta
## 移动端最常用的
```
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"> 
```
- width和height指令分别指定视区的逻辑宽度和高度。他们的值要么是以像素为单位的数字，要么是一个特殊的标记符号。width指令使用device-width标记可以指示视区宽度应为设备的屏幕宽度。类似地height指令使用device-height标记指示视区高度为设备的屏幕高度。 

- user-scalable指令指定用户是否可以缩放视区，即缩放Web页面的视图。值为yes时允许用户进行缩放，值为no时不允许缩放 

- maximum-scale和minimum-scale指令用于设置用户对Web页面缩放比例的限制。值的范围为0.25至10.0之间。与initial-scale相同，这些指令的值是应用于视区内容的缩放比例。 
所有智能手机浏览器都支持ViewPort <meta>标记的width和user-scalabel指令。但是Opera Mobile不使用user-scalable指令，而是主张用户应始终保留在移动浏览器中缩放Web页面的能力。 

### 苹果手机专用

1. 
```
<meta name="viewport" content="minimal-ui"> 
```
在iOS 7.1的Safari中为meta标签新增minimal-ui属性，让网页在加载时便可隐藏顶部的地址栏与底部的导航栏。 

2. 
```
<meta name="apple-mobile-web-app-capable" content="yes"> 
```

是否启动webapp功能 设置为yes 网站就会在满屏模式full-screen mode删除默认的苹果工具栏和菜单栏 

3. 
```
<meta name="apple-touch-fullscreen" content="yes"> 
```

开启对web app程序的支持 

4. 

```
<meta name="format-detection" content="telephone=no"> 
<meta name="format-detection" content="email=no" /> 
```
iPhone会自动把你这个文字加链接样式、并且点击这个数字还会自动拨号！ 
telephone=no就忽略页面中的数字识别为电话号码 
telephone=yes就开启了把数字转化为拨号链接,在默认是情况下就是开启！ 

5. 

```
<meta name="apple-mobile-web-app-status-bar-style" content="default" /> 
<meta name="apple-mobile-web-app-status-bar-style" content="black" /> 
<meta name=”"apple-mobile-web-app-status-bar-style" content=”black-translucent" /> 
```

控制状态栏显示样式  default（白色）black（黑色） black-translucent（灰色半透明） 

### IE浏览器
避免IE使用兼容模式 ：

```
<meta http-equiv="X-UA-Compatible" content="IE=edge"> 
```
微软为IE Mobile版设置的定义宽度标记 
浏览器不会自动调整文件的大小,也就是说是固定大小,不会随着浏览器拉伸缩放。：

```
<meta name="MobileOptimized" content="320">
```
是否对手持设备友好，只有true或者false ：

```
<meta name="HandheldFriendly" content="true">
```




### QQ浏览器mobile

 强制竖屏 ：

```
<meta name="x5-orientation" content="portrait">
```

强制全屏 ：
```
<meta name="x5-fullscreen" content="true">
```
应用模式 ：

```
<meta name="x5-page-mode" content="app">
```

### 360浏览器

开启极速模式

```
<meta name="renderer" content="webkit">
```

### UC浏览器

强制竖屏 ：
```
<meta name="screen-orientation" content="portrait"> 
```
强制全屏：

```
<meta name="full-screen" content="yes">
```
 应用模式 ：

```
<meta name="browsermode" content="application">
```
  


