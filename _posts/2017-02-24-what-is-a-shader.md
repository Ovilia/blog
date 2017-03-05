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

还记得最初学图形学时，被 OpenGL 一堆非常底层的 API 搞得晕头转向。这时候，跑来一个学长（是交大的学长没错），指着[红宝书](https://book.douban.com/subject/4311129/)上类似这样的一个图，语重心长地说：“图形学啊，你只要记住这个图就吼啦！”

{% capture imgSrc %}{{ site.url }}/img/post/2017-02-24-what-is-a-shader-pipeline.jpg{% endcapture %}
{% include figure.html src=imgSrc caption='图片来源：<a href="http://www.adobe.com/devnet/flashplayer/articles/how-stage3d-works.html">www.adobe.com</a>' %}

当然啦，我当时只是似懂非懂地点了点头。

<div class="split"></div>

很多年过去了，后来的研究和现在的工作却总也绕不开这张图。这感觉，就好像你一早就拿到了一本武林至尊秘笈，但是在你掌握看懂它的方法之前，它对你始终而言就是一本天书。

其实不仅仅是前端，图形渲染对于整个软件工程来说，都是一个很特定的研究领域。这就意味着，大部分情况下，你可能并没有那么迫切的需求去学习它。这也是为什么，WebGL 标准推出了那么多年，在前端的各种分享会上，即使介绍，也永远都是 Hello World。

是的，WebGL 不容易，没有扎实的数学和图形学基础，很难深入地理解。所幸，在 [Three.js](http://threejs.org) 这类库的帮助下，对于没有图形学基础的前端工程师，想要快速地创建出三维场景，也并非天方夜谭。Three.js 的教程我在[《Three.js 入门指南》](https://read.douban.com/ebook/7412854/) 中已经做了很浅近的说明，这里不再重复。



# 关于本系列

这一系列主要**针对使用着色器实现不同效果的渲染算法**作介绍。

通过这套教程，希望能够把晦涩难懂的数学理论，通过浅显易懂的比喻和实际的例子，帮助大家更快速地掌握着色器编程。虽然就起实现而言，是使用 [Three.js](http://threejs.org) 基于 WebGL 的，对其他平台上的着色器编程也有一定参考价值。

> 就原理而言，在各个平台使用着色器编程的方法大抵类似，只是一些工具类的方法略有不同。
>
> 注：这里说的各个平台，主要指 OpenGL 标准的实现方，如不同的操作系统、移动嵌入式平台、Unity、WebGL 等。OpenGL 本质上不是一个“库”，而是一套 API，由各个平台厂商负责根据该标准，对下实现底层硬件机制，对上提供编程接口。

这也意味着，我将不会逐一介绍 OpenGL 着色器编程语言（OpenGL Shading Language，GLSL）的语言特性，不然早在说清算法前，就已经用太过枯燥的细节把读者无聊到怀疑自己的智商了（当然，我知道你们不会怀疑我的表述能力的）。相反，我会通过一个个的着色器实例，在用到一个特性的时候，再对其进行说明。

同时，对我自己而言，这也是一个能够让我系统化、更深入地理解着色器编程的一个途径。希望能够坚持写高质量的教程，欢迎大家多多支持！



# 着色器能做什么

要回答这个问题，我们先简单了解一下，着色器是什么。

着色器全称着色器程序，是运行在 GPU 中负责渲染算法的一类总称。相对地，我们通常写的代码是执行在 CPU 中的，因此，我们可以自豪地说，我在写 GPU 程序呢！

GLSL（OpenGL Shading Language）是在 OpenGL 对应的着色器语言。相对地，DirectX 对应的着色器语言是 High-Level Shading Language（HLSL）。

好好好，我们不说概念了，知道你已经想关闭网页了……

我们还是来看一些着色器实现的酷炫效果吧！

<a href="https://pissang.github.io/parametric-surface-fun/" target="_blank"><img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-02-24-what-is-a-shader-parametric-surfaces-fun.jpg" /></a>

预告一下，这是 <a href="https://github.com/pissang" onclick="_gaq.push(['_trackEvent', 'ToLink', 'InPost', 'pissang']);">@pissang</a> 大神正在闭关开发中的参数曲面效果，用不了多久，你也可以使用 <a href="http://echarts.baidu.com/" onclick="_gaq.push(['_trackEvent', 'ToLink', 'InPost', 'echarts']);">ECharts</a> 创建这样酷炫的三维图表啦！

事实上，着色器通常是用来做一些渲染效果上的事，比如水面的渲染、马赛克效果、素描风格化渲染等等……

<a href="https://www.shadertoy.com/view/XtVGD1" target="_blank"><img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-02-24-what-is-a-shader-shader-1.jpg" /></a>

<a href="https://www.shadertoy.com/view/MssyWH" target="_blank"><img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-02-24-what-is-a-shader-shader-2.jpg" /></a>

<a href="https://www.shadertoy.com/view/4sSSzG" target="_blank"><img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-02-24-what-is-a-shader-shader-3.jpg" /></a>

可以说，那些让人觉得母牛不下崽（牛逼坏了……我昨天新学的歇后语，容我用用！）的效果，通常都离不开着色器代码。


# 这很酷……但我为什么要学着色器编程？

嗯……如果你不想学，那这个教程就不是为你写的。

事实上，这系列的教程对我而言，最重要的目的是让自己对着色器编程更加熟悉，并且更好地为[百度前端学院](http://ife.baidu.com/) WebGL 课程做指导。


# 下期预告

在下一篇教程中，我们将从一个最简单的着色器例子，学习着色器的相关基础知识。准备好了吗？

