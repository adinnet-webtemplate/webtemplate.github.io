# 基础WEB项目模板
###### _主要用于HTML5基础模板_

## 约定：

>  **缩进为tab，长度4**
>  **非必要情况下不写行内样式**
  
# 包含用于移动端桌面图标的 跟尺寸写法 例如:
```html
<!-- iOS 主屏图标 -->
<link rel="apple-touch-icon" href="icons/iOS/Icon-60.png"><!--iPhone default-->
<link rel="apple-touch-icon" href="icons/iOS/Icon-60@2x.png" sizes="120x120"><!-- iPhone6,5,4-->
<link rel="apple-touch-icon" href="icons/iOS/Icon-60@3x.png" sizes="180x180"><!-- iPhone6 plus-->
<link rel="apple-touch-icon" href="icons/iOS/Icon-72.png" sizes="72x72"><!-- iPad non-retina icon (iOS < 7)-->
<link rel="apple-touch-icon" href="icons/iOS/Icon-72@2x.png" sizes="144x144"><!-- iPad retina icon (iOS < 7) -->  
<link rel="apple-touch-icon" href="icons/iOS/Icon-76.png" sizes="76x76"><!-- iPad non-retina icon -->
<link rel="apple-touch-icon" href="icons/iOS/Icon-76@2x.png" sizes="152x152"><!-- iPad and mini-->
<link rel="apple-touch-icon" href="icons/iOS/icon-83.5@2x.png" sizes="167x167"><!-- iPad Pro -->
... 当然还有Android，请自行看代码
```

#高版本安卓谷歌卡片样式（颜色）
```html
<!--高版本安卓Chrome卡片式切换的时候的皮肤（卡片）颜色-->
<meta name="theme-color" content="#9f0800">
```

#基于国内浏览器特殊meta
```html
<!-- 让360双核浏览器用webkit内核渲染页面 !!! 注意，有可能它是重载页面之后才生效  -->
<meta name="renderer" content="webkit">
<!-- IE渲染方式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```

# 针对国内占有率比较高的移动浏览器meta
```html
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait"><!--or landscape-->
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait"> <!--or landscape-->
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<!--使用了application这种应用模式后，页面讲默认全屏，禁止长按菜单，禁止手势，标准排版，以及强制图片显示-->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
```
### 什么叫应用模式？
* 应用模式就是强制显示图片
* 强制全屏
* 强制取消浏览器默认左右滑动切换页面手势
* 以及阅读模式（如果有）

> **吐槽一下UC浏览器的坑**： 当你页面有多个`<p>`标签的时候（_大约是超过3个_），你的HTML的font-size就是 14px 或者更大， 这让有时我们用 rem 作为单位的界面瞬间错乱
> 公司一个女同事就因为这个问题调试了一个下午，一直没搞懂直到我删了所有`<p>`标签 跟 `<h2>` 标签

# 用requirejs 来加载js
> 约定用require来加载js，不喜欢的人或者不懂的人请直接在`<head>`写

```html 
<script src="xxx.js"></script>
```

###### 引用的资源：
* __art_work 目录下引用的图标PSD模板是来自 http://appicontemplate.com/ 
* reset 引用了 normalize.css , 来自 http://necolas.github.io/normalize.css/
* ua-parser.js 用于检测浏览器版本, 修改自 : https://github.com/faisalman/ua-parser-js/ 
* [弃用] browser.js 忘记从哪里抄过来的，反正很久以前的事了，从 stackoverflow 搜来的，声明不是原创就对了 知道的同学说下出处

# Links
目前就职公司：http://www.adinnet.cn 

```html
The MIT License (MIT)

Copyright (c) 2016 Jay Chen

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```