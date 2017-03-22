---
title: 卡通渲染（下）
time: 2017.03.21 18:59:59
layout: post
tags:
- 中文
- 技术
- 'Three.js'
- WebGL
- Shader
- JavaScript
series: 着色器天书浅引
excerpt: 在上一篇博客中，我们介绍了如何实现卡通渲染的着色器。在本文中，我将介绍几种常用的描边算法，配合卡通渲染着色器可以实现更二次元的效果。
---

[上一篇教程]({{ site.url }}/2017/03/05/cartoon-shading-1/)介绍了如何实现卡通渲染的着色器，收到了不少的点赞和回复，希望你们不都是“马后读”的~

但是，居然有读者表示——

> 这渲染结果一点都不真实啊！

我就不服了，这就好比你去吐槽卡通片画面不真实一样……

渲染一方面的研究工作在追求渲染的真实性，旨在还原人眼在现实中看到的视觉效果。所以有了*基于物理的渲染*（Physically Based Rendering）、*照片级真实感渲染*（Photorealistic Rendering）之类的概念，本质上都是在**还原现实**。而另一方面，诸如卡通渲染之类的*非真实感渲染*（Non-photorealistic Rendering，NPR）则在寻求另一条出路。通过远离现实的、抽象的、艺术感的形式，更有力地表达并彰显内容的主题。而卡通渲染只是非真实感渲染中一个很小的子集。

**正如任何一门艺术，在现实主义者尽态极妍地还原我们所处世界的同时，形式主义者总会适时地带我们逃离一会儿现实，缓一口气。**

因而，即使在真实感渲染能力很强的时代，非真实感渲染也有其不可替代的作用。

<div class="split"></div>

哎，感觉我又回到了写论文的时代……

好了，我们赶紧进入正题，来谈谈如何为我们的卡通渲染加上描边效果。下图是本文实现的结果：

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-03-21-cartoon-shading-2-result.png" />

本文实现的结果可以在 [zhangwenli.com/cezanne](http://zhangwenli.com/cezanne/) 运行，或者在 [GitHub](https://github.com/Ovilia/cezanne) 查看源码。

# 描边的原理

首先，我们要理解描边的作用。

通常而言，描边是为了增加对比，将物体与背景更强烈地隔离开。对于我们在上篇文章中实现的卡通渲染而言，物体渐变的颜色被设为几种阶梯式改变的颜色，这也是为了增加对比性。因而在这样的渲染效果中，添加描边可以让对比来得更加强烈。

那么，如何实现描边呢？通常的算法分为这样几类——

- 判断面片朝向，找到正反面交汇处的边；
- 将面片沿法向量方向放大，渲染作为描边之后，再次渲染模型；
- 将深度缓冲区或法向量绘制到一张临时纹理，用图像处理的方法，找到突变的地方作为边缘；
- 将法向量接近平行屏幕所在平面的点作为边缘。

本文实现的是最后一种方法，因为它只需要渲染一次，而且只需要在着色器中做修改。

下面，我们将分别介绍这几种算法的原理。

# 面片朝向

让我们用一个简单的例子来说明。下图的 (a) 显示的是一个金字塔型的模型，它由六个三角形组成（底部的四边形由两个三角形组成）。

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-03-21-cartoon-shading-2-facing.png" />

该算法的伪代码是：

```
遍历模型中的每个三角形：
    计算三角形是正面还是反面

遍历模型中的每条边：
    如果某条边既包含在正面的三角形中，又包含在反面的三角形中：
        将这条边作为描边绘制
```

需要注意的是，以上过程是在 CPU 中计算的（而不是着色器），该算法可以使用非常基本的 OpenGL 操作实现。

那么，如何“计算三角形是正面还是反面”呢？

## 前向面与后向面

上面我们说的“前面”和“反面”，是较为通俗易懂的说法，而它们严格的名称为：前向面（front face）与后向面（back face）。检测一个面是前向面还是后向面，是非常经典的图形学问题。这里，我还是用比较方便大家了解的方式介绍。

{% capture imgSrc %}{{ site.url }}/img/post/2017-03-21-cartoon-shading-2-plane-function.jpg{% endcapture %}
{% include figure.html src=imgSrc caption='图片来源：《计算机图形学（第三版）》，电子工业出版社，第 109 页' %}

我们高中的时候学过，在笛卡尔坐标系下，任何一个平面可以描述为 `Ax + By + Cz + D = 0`，而向量 `(A, B, C)` 正好是该平面的一个法向量。

> 推导过程我这里就不展开了，大家可以很方便地这样记住：
>
> 如果将 `D` 设为 0 让平面通过原点，那么原点到平面上的任意一点 `(x, y, z)` 所形成的向量 `(x, y, z)` 必然垂直于法向量 `(A, B, C)`（因为如果一条直线垂直于一个平面，则它垂直于平面上任何一条直线）。这时候的平面方程 `Ax + By + Cz = 0` 正好是向量 `(x, y, z)` 与 `(A, B, C)` 点乘的结果。而我们知道，如果两个向量垂直，他们的点积为 0。这是一个方便记忆的方式。

当我们要计算一个凸多边形（在我们的例子中就是一个三角形）所在的平面时，我们只要知道其法向量就行了（这里 `D` 对朝向没有影响，所以可以不管）。

那么，知道一个三角形的三个顶点，如何计算其法向量呢？

还是高中数学问题。答案是——

```
N = (V2 - V1) ✕ (V3 - V2)
```

其中，`N` 是法向量，`V1`、`V2`、`V3` 是三角形的三个顶点的位置，`✕` 表示叉乘。需要注意的是，叉乘是有方向的区别的，在 OpenGL 中绘制三角形输入的三个顶点的顺序决定了面片的朝向，因而写成 `(V2 - V1) ✕ (V2 - V3)` 的话，会得到相反的方向。

而一旦我们计算出法向量之后，就很容易判断出前后面了。

{% capture imgSrc %}{{ site.url }}/img/post/2017-03-21-cartoon-shading-2-normal-position.jpg{% endcapture %}
{% include figure.html src=imgSrc caption='图片来源：《计算机图形学（第三版）》，电子工业出版社，第 432 页' %}

如果这张图，我们可以很容易地理解，当法向量 `N` 与观察方向 `Vview` 点乘大于 0（也就是说法向量在观察方向上的投影是正的），它对观察者来说，就是位于反面的，也就是一个后向面。

## 优劣分析

明白了前后向面的判定算法之后，这一算法是很好理解，也是很容易实现的。

该算法的优点在于，由于是用 OpenGL 画线的方式实现的描边，因而线宽是可控而且等宽的。

缺点在于，这些操作都是在 CPU 中完成的，有很多点乘叉乘操作，性能并不会很好。并且，它最终的绘制结果如下图 (d) 所示，加粗的黑线表示描边。可以看到，只有周围一圈的轮廓线（silhouette）被描绘了，而一些其他的边缘则被忽视了。

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-03-21-cartoon-shading-2-facing.png" />

在分析优劣的时候，我们要明白，优劣的区别常常取决于应用场景。比如，在有的情况下，等宽的描边是优点，在另一些情况下，则可能不是。甚至性能也不总是越快的越好，有时候较慢的算法已经超出了可察觉的范围，更高的性能带来的增益是可以忽略的。所以，理解各个算法的特性，对在特定场景下的选择有很大帮助。



# 沿法向量放大

这一算法解释起来就容易得多了。它的核心思想是，将每个顶点沿法线方向延伸（如图 b），然后填充放大的模型（如图 c，并且通常只填充后向面），在此基础上，再绘制原始模型叠加上去（如图 d）。

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-03-21-cartoon-shading-2-normal-increase.png" />

这一算法可以在着色器中实现，但是需要两次渲染。第一次在顶点着色器中延伸顶点，并将顶点颜色设为描边的颜色。第二次正常渲染，并且渲染前不要清除已经绘制的结果。

## 优劣分析

该算法可以在着色器中实现，效率较高，实现方式也比前一种直观方便。

缺点是，和第一种算法一样，只有前后面交界处才会被描边；每帧需要渲染两次；描边粗细不完全是相同的。

为什么可能粗细不同呢？让我们通过一个更简单的例子来理解一下。

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-03-21-cartoon-shading-2-increase.png" />

假设我们的原始模型是图 (a) 的直角三角形，三个顶点沿法线方向延伸相同的长度，得到图 (c) 的结果。可以发现，不仅图 (b) 代表的描边粗细是不相等的，而且放大后的模型都失去了原有的直角属性。

所以，使用这种方法描边，得到的边缘可能是变形的。



# 图像处理

使用图像处理的方式，可以将法向量或深度缓冲区绘制到一张纹理，然后通过边缘检测算法，得到画面中法向量和深度突变的地方，通常这些可以作为边缘描绘。

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-03-21-cartoon-shading-2-depth.png" />

上图展示了深度缓冲区的大小，对应的片元着色器是：

```c
void main()
{
    float zbuffer = gl_FragCoord.z * gl_FragCoord.w * 100.0;
    gl_FragColor = vec4(zbuffer, zbuffer, zbuffer, 1.0);
}
```

其中，`gl_FragCoord.z` 是深度信息，`gl_FragCoord.w` 是缩放因子，乘以 `100.0` 是为了将深度信息缩放到一个合适的颜色显示，通常需要根据场景的深度进行试验得到。

用 [Canny 边缘检测](https://zh.wikipedia.org/wiki/Canny%E7%AE%97%E5%AD%90)算法，能够得到一个非常理想的边缘——

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-03-21-cartoon-shading-2-depth-border.jpg" />

这一算法的效果优劣，主要取决于边缘检测算法。而如果模型比较复杂的情况下，可能就没有上图这么好的结果。

## 优劣分析

通过边缘检测获得的边缘，具有很大的不确定性，有可能得到噪点很多或者没有检测到边缘的情况。如果边缘检测能够在着色器中做的话，效率会更高些。



# 平行屏幕方向的法向量

下面要介绍的这个算法，就是我们实际应用到[塞尚](https://github.com/Ovilia/cezanne)项目中的。为什么用这种算法呢？因为它只需要修改着色器就能实现效果，实现起来是最方便的，所以我就偷懒只实现了这个效果。（但是前面几种算法的示意图画得超清楚有木有！）

这一算法的思想是，在片元着色器中，根据视觉坐标系下的法向量，找到平行屏幕的片元，作为边缘。片元着色器代码如下：

```c
varying vec3 vNormal;

void main() {
    float silhouette = length(vNormal * vec3(0.0, 0.0, 1.0));
    if (silhouette < 0.5) {
        silhouette = 0.0;
    }
    else {
        silhouette = 1.0;
    }

    gl_FragColor = vec4(silhouette, silhouette, silhouette, 1.0);
}
```

其中，`vNormal` 是顶点着色器中传递过来的法向量（在[上一篇教程]({{ site.url }}/2017/03/05/cartoon-shading-1/)中有介绍）；`vec3(0.0, 0.0, 1.0)` 是垂直于屏幕的方向，也就是视图坐标系下的视角方向。`vNormal * vec3(0.0, 0.0, 1.0)` 是将法向量和视角方向进行点乘，得到法向量在视角方向上的投影。`length()` 得到该点乘结果的模长，如果它较小，代表法向量在视角方向上的投影较小，也就是法向量较接近于平行屏幕的方向。

得到的效果如下：

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-03-21-cartoon-shading-2-outline.png" />


## 优劣分析

使用这种方法，能够得到第一、第二种算法所忽视的不在前后面交界处的边，这有时是比较有用的。它的原理和实现都比较简单，能够在着色器中高效地计算。

缺点在于，需要指定一个阈值，然而对于不同场景，可能都需要调节这个阈值以达到更好的渲染效果，因而就有些不缺点性。并且，就像上面苹果的渲染结果显示的那样，有时候平行屏幕的法向量，并不意味着边缘，因而会在梗的根本有一些不太理想的边缘。

至于这种算法形成的粗细不同的描边，和卡通渲染的效果结合起来，倒也是蛮搭的呢！


# 结合卡通渲染

结合的方法是，如果一个片元是边缘，则按边缘色渲染，否则渲染卡通渲染的结果。

顶点着色器代码：

```c
uniform vec3 color;
uniform vec3 light;

varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vLight;

void main()
{
    // pass to fs
    vColor = color;
    vNormal = normalize(normalMatrix * normal);

    vec4 viewLight = viewMatrix * vec4(light, 1.0);
    vLight = viewLight.xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
```


片元着色器代码：

```c
varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vLight;

void main() {
    float silhouette = length(vNormal * vec3(0.0, 0.0, 1.0));
    if (silhouette < 0.5) {
        silhouette = 0.0;
    }
    else {
        silhouette = 1.0;
    }

    float diffuse = dot(normalize(vLight), vNormal);
    if (diffuse > 0.8) {
        diffuse = 1.0;
    }
    else if (diffuse > 0.5) {
        diffuse = 0.6;
    }
    else if (diffuse > 0.2) {
        diffuse = 0.4;
    }
    else {
        diffuse = 0.2;
    }
    diffuse = diffuse * silhouette;

    gl_FragColor = vec4(vColor * diffuse, 1.0);
}
```

最终得到的结果是：

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-03-21-cartoon-shading-2-result.png" />

# 小结

这篇博客介绍了如何实现描边算法。总体而言，通过判断面片朝向和沿法向量放大的方法较为稳定，但是不能得到除了轮廓线之外的边缘；而基于图像处理和法向量方向的方法具有一些不确定性，但是能够得到轮廓线之外的边缘，并且通常来说，计算效率更高。

对于具体的应用场景，可以根据各自的优劣选择合适的算法。

另外，因为写这一系列教程，让我也温故知新了很多图形学知识。而把这个项目取名为“塞尚”，也是希望能够坚持写下去，把一件简单的事做细做明白，谢谢大家的支持！

本文实现的结果可以在 [zhangwenli.com/cezanne](http://zhangwenli.com/cezanne/) 运行，或者在 [GitHub](https://github.com/Ovilia/cezanne) 查看源码。


# 参考资料

- [《计算机图形学》](https://book.douban.com/subject/1392483/)：这是一本介绍非常底层的图形学实现原理的书，可能很大情况下你并不需要了解这些细节，但是如果感兴趣的话，这本书会帮你解答很多疑惑。
- [how to show silhouette using GLSL](https://www.opengl.org/discussion_boards/showthread.php/162582-how-to-show-silhouette-using-GLSL)
- [WebGL+shader实现素描效果渲染](http://blog.csdn.net/u011712406/article/details/50085281)

