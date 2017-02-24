---
title: 致从没看懂过着色器代码的你
time: 2017.02.24 10:59:30
layout: post
tags:
- 中文
- 技术
- 'Three.js'
- WebGL
- Shader
- JavaScript
series: 着色器天书浅引
excerpt: 还记得最初学图形学时，被 OpenGL 一堆非常底层的 API 搞得晕头转向。这时候，跑来一个学长（我读的是上海交通大学没错），指着红宝书上类似这样的一个图，语重心长地说：“图形学啊，你只要记住这个图就吼啦！”
---

还记得最初学图形学时，被 OpenGL 一堆非常底层的 API 搞得晕头转向。这时候，跑来一个学长（我读的是上海交通大学没错），指着[红宝书](https://book.douban.com/subject/4311129/)上类似这样的一个图，语重心长地说：“图形学啊，你只要记住这个图就吼啦！”

{% capture imgSrc %}{{ site.url }}/img/post/2017-02-24-what-is-a-shader-pipeline.jpg{% endcapture %}
{% include figure.html src=imgSrc caption='图片来源：<a href="http://www.adobe.com/devnet/flashplayer/articles/how-stage3d-works.html">www.adobe.com</a>' %}

当然啦，我当时只是似懂非懂地点了点头。

<div class="split"></div>

很多年过去了，后来的研究和现在的工作却总也绕不开这张图。这感觉，就好像你一早就拿到了一本武林至尊秘笈，但是在你掌握看懂它的方法之前，它对你始终而言就是一本天书。

其实不仅仅是前端，图形渲染对于整个软件工程来说，都是一个很特定的研究领域。这就意味着，大部分情况下，你可能并没有那么迫切的需求去学习它。这也是为什么，WebGL 标准推出了那么多年，在前端的各种分享会上，即使介绍，也永远都是 Hello World。

是的，WebGL 不容易，没有扎实的数学和图形学基础，很难深入地理解。所幸，在 [Three.js](http://threejs.org) 这类库的帮助下，对于没有图形学基础的前端工程师，想要快速地创建出三维场景，也并非天方夜谭。Three.js 的教程我在[《Three.js 入门指南》](http://www.ituring.com.cn/book/1272) 中已经做了很浅近的说明，这里不再重复。

这一系列
