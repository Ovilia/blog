---
title: 使用 Node.js 在 BCE 上访问 BOS 的方法
time: 2015.12.21 00:22:46
layout: post
tags:
- 中文
- NodeJs
- BOS
- JavaScript
excerpt: <a href="http://bce.baidu.com/doc/BOS/GettingStarted-new.html#BOS.E5.9F.BA.E6.9C.AC.E5.8A.9F.E8.83.BD.E4.BB.8B.E7.BB.8D" target="_blank">百度 BOS</a> 是一种存储服务，然而坑爹的是居然不提供 Node.js 的接口。而更坑的是，明明 BCE 有提供该功能 <a href="https://www.npmjs.com/package/baidubce-sdk" target="_blank">Node.js 版本的 SDK</a>，而官网却给出了一个<a href="http://bce.baidu.com/doc/BAE/GUIGettingStarted.html#Node.js" target="_blank">非常复杂的解决方案</a>。
---

<a href="http://bce.baidu.com/doc/BOS/GettingStarted-new.html#BOS.E5.9F.BA.E6.9C.AC.E5.8A.9F.E8.83.BD.E4.BB.8B.E7.BB.8D" target="_blank">百度 BOS</a> 是一种存储服务，然而坑爹的是居然不提供 Node.js 的接口。而更坑的是，明明 BCE 有提供该功能 <a href="https://www.npmjs.com/package/baidubce-sdk" target="_blank">Node.js 版本的 SDK</a>，而官网却给出了一个<a href="http://bce.baidu.com/doc/BAE/GUIGettingStarted.html#Node.js" target="_blank">非常复杂的解决方案</a>。

根据 <a href="https://www.npmjs.com/package/baidubce-sdk" target="_blank">README</a>，一直得到报错信息如下：

{% highlight text %}
The request signature we calculated does not match the signature you provided. Check your Secret Access Key and signing method. Consult the service documentation for details.
{% endhighlight %}

最后，我机智地在该项目 GitHub **已经关闭的** <a href="https://github.com/ecomfe/baidubce-sdk/issues/1" target="_blank">issue</a> 中发现，`endpoint` 值别人写的是 `'http://bj.bcebos.com'` 而不是官网给出的 IP 地址。

试了一下果然解决了这个问题，感觉这个解决问题的方法也是挺厉害的。:joy:
