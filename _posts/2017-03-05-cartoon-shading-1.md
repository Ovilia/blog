---
title: 卡通渲染（上）
time: 2017.03.05 10:45:26
layout: post
tags:
- 中文
- 技术
- 'Three.js'
- WebGL
- Shader
- JavaScript
series: 着色器天书浅引
excerpt: 在上一篇博客中，介绍了什么是着色器，以及着色器能实现的一些效果。在这一篇博客中，我将通过卡通渲染的例子，介绍如何写一个非常简单的着色器。
---

[上一篇博客]({{ site.url }}/2017/02/24/what-is-a-shader/)介绍了什么是着色器，以及着色器能实现的一些效果。在这一篇博客中，我将通过[卡通渲染](https://zh.wikipedia.org/wiki/%E5%8D%A1%E9%80%9A%E6%B8%B2%E6%9F%93)的例子，介绍如何写一个非常简单的着色器。在本文结束的时候，我们将能够实现一种将画面中的颜色分为若干颜色层次的卡通渲染效果。

这一系列教程的源代码可以在 GitHub 的 <a href="https://github.com/Ovilia/cezanne" onclick="_gaq.push(['_trackEvent', 'ToGitHub', window.location.pathname, 'cezanne1']);">Ovilia/cezanne</a> 项目访问到，欢迎关注项目。

{% capture imgSrc %}{{ site.url }}/img/post/2017-03-05-cartoon-shading-1-result.png{% endcapture %}
{% include figure.html src=imgSrc caption='本文实现的卡通渲染效果' %}

为了使这一系列的教程足够简单，我将不会从正统的“渲染流水线”开始介绍，那样读者会被绕得晕头转向，而是只介绍你需要了解的最小知识。如果看完这些教程，自己感兴趣的话，可以去搜索相关资料自行学习。

本系列的目标是，对图形学没有很多了解、数学功底不是很好的读者也能看懂，理解着色器代码的基本算法原理。对于有更高要求的读者，也可以根据<a href="https://github.com/Ovilia/cezanne" onclick="_gaq.push(['_trackEvent', 'ToGitHub', window.location.pathname, 'cezanne-source']);">源码</a>方便地学习更多技术细节。


# 着色器的分类

最常用到的两种着色器分别为*顶点着色器*（*Vertex Shader*）和*片元着色器*（*Fragment Shader*）。

首先需要明确的概念是，**片元着色器是在顶点着色器之后被调用的**，因而也可以从顶点着色器往片元着色器传递参数。

> 其他类型的着色器参阅 [Shader - OpenGL Wiki - Khronos Group](https://www.khronos.org/opengl/wiki/Shader)。

## 顶点着色器

什么是顶点呢？

比如你用 OpenGL 画一个三角形，那就是创建了三个顶点。

而**顶点着色器就是每个顶点调用一次的程序**。

在顶点着色器中，可以访问到顶点的三维位置、颜色、法向量等信息。可以通过修改这些值，或者将其传递到片元着色器中，实现特定的渲染效果。

## 片元着色器

“片元”的概念大家可能相对陌生一些。但是一个相似的概念是“像素”，这你一定听说过。

场景渲染到显示器的过程中，有一个步骤叫*光栅化*（*Rasterization*）。由于我们现在的显示器绝大多数是基于像素的（就是由一个个非常小的红绿蓝 LED 组成的显示单元），所以“连续”的三维场景，要显示到“离散”的显示器上，需要经过的变化操作就叫光栅化。

光栅化后得到的就得到了一个个“片元”。片元和像素已经非常接近了，但两者仍是有区别的。用一种通俗的说法来解释的话，就是比如三维空间内有两个从摄像机角度看过去一前一后的三角形，它们重叠部分的显示区域，每个像素对应两个片元；不重叠的部分，像素和片元一一对应。当然，这个例子是我简化过的，真实的对应关系可能更复杂一些。

> 更专业的说法是，片元在成为像素之前，还会做多种测试（比如深度测试、透明度测试、模板测试）以决定其最终是否会被显示为像素。所以，严格来说，“片元”和“像素”并不是一一对应的。

但是，这里我们并不需要了解片元的概念太深刻，只要知道它是非常接近像素，但是又不等同于像素的就可以了。

同样，**片元着色器就是每个片元调用一次的程序**。

在片元着色器中，可以访问到片元在二维屏幕上的坐标、深度信息、颜色等信息。通过改变这些值，可以实现特定的渲染效果。

> 注意，同样是颜色信息，在顶点着色器中，得到的是顶点的颜色，而在片元着色器中，得到的是片元的颜色——也就是说，如果三角形的三个顶点颜色是不同的，片元的颜色就是根据这三个顶点的颜色进行插值后的，也可以通俗地理解为，是渐变的。


# 卡通渲染

我们在本文实现的根据亮度分为若干颜色梯度的效果，是卡通渲染（Toon Shading）的一种形式，称为 Cel Shading。

> *"Cel" is the first syllable of "celluloid", a plastic made of cellulose nitrate. Before digital ink-and-paint software, the pencil drawings used in hand-drawn animation were transferred onto these sheets of clear plastic by skilled artists using ink and paint, or by using a special Xerox process ("Xerography") and paint. Later cels were made of cellulose acetate instead of cellulose nitrate, but still called "cels." Collectors spend a lot of money to buy these pieces of animation history.*
>
> From [Celshader.com FAQ](http://www.celshader.com/FAQ.html)

如何在 Three.js 中使用着色器的方法，请参考[《Three.js 入门指南》](https://read.douban.com/ebook/7412854/)，本文不再赘述。不了解的读者，也不影响阅读后面的着色器算法部分。

## 卡通渲染算法的原理

Cel Shading 算法可以有若干种变形，我们这里介绍一种简单的算法。

1. 指定一个颜色作为苹果的基础颜色；
2. 通过光照计算得出每个片元对应的亮度；
3. 将亮度由连续的映射到离散的若干个亮度值；
3. 将亮度值和基础颜色结合得到片元颜色。

其中，比较麻烦的是第 2 步的“光照计算”。那么，光照是怎么被计算出来的呢？这就要扯一扯 OpenGL 的矩阵变换了。

## 矩阵变换

这里，我们就要祭出我画的这个神图了——

{% capture imgSrc %}{{ site.url }}/img/post/2015-08-28-opengl-matrix-transformations-02.png{% endcapture %}
{% include figure.html src=imgSrc caption='OpenGL 中的矩阵变换示意图' %}

> 想详细了解的读者，请参见我之前写的博文[《这次，彻底搞懂 OpenGL 矩阵转换》]({{ site.url }}/2015/08/28/opengl-matrix-transformations/)。

本文将不对矩阵变换的细节详细展开，你只需要知道这个公式：

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-03-05-cartoon-shading-1-matrix.png" />

其中，中间的三项有个非常霸气的名字：**MVP 矩阵**！

> 为什么不是 PVM 啊？
>
> 因为从逻辑上来说，是先把模型点坐标向量乘以模型矩阵，然后乘以视图矩阵，然后乘以投影矩阵，然后乘以视口矩阵的。所以先后顺序的确是 MVP。

我们知道矩阵乘法是一个很耗时的操作，而由于模型矩阵和视图矩阵更可能是不变的，因而根据矩阵结合律，将它们先相乘得到模型视图矩阵（modal-view matrix），再与点坐标相乘。这样，以后几帧的计算，就可以不用分别乘以模型矩阵和视图矩阵，而是只乘以模型视图矩阵，达到减少矩阵乘法的次数的效果。

这一点稍作了解即可，如果看不懂，你只需要了解——

**一个物体的三维坐标向量，乘以模型视图矩阵后，能够得到它在试图坐标系中的位置，也就是它相对于摄像机的坐标位置。**

## 如何进行光照计算

在明白了这点之后，我们就能够理解如何进行光照计算了。

1. 将光源位置（这是通过参数传入的）乘以模型视图矩阵（这是着色器提供给我们的），就能得到光源相对于摄像机的位置；
2. 将这一位置归一化（就是计算单位向量），得到光源相对于摄像机的角度；
3. 将其点乘单位法向量，得到亮度值（回想一下，两个向量点乘的意思是，获得一个向量在另一个向量上的投影，所以，这里得到的是光源在法向量方向的投影长度，它决定了一个点有多亮）。

这个亮度值就可以直接使用在第 3 步中。



# 着色器基础知识

让我们通过卡通渲染的顶点着色器代码，了解着色器的基础知识。

## 顶点着色器

顶点着色器的完整代码如下：

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

这段代码至少我们能看懂入口是从 `main` 函数开始的，和 C 程序一样，可以在 `main` 函数上方声明一些变量。

在这个例子中，有两类变量，一类是以 `uniform` 开头的，另一类是以 `varing` 开头的。着色器变量的存储限定符（Storage Qualifiers）有这么几种：

| *(无)* | （默认值），在当前着色器程序或函数参数中的可读写变量 |
| const  | 编译时能确定的常量，或只读函数参数 |
| attribute | 从 OpenGL 代码传入顶点着色器的变量，每个顶点分别对应一个值 |
| uniform | 从 OpenGL 代码传入顶点着色器的变量，所有顶点对应同样的值 |
| varing | 从顶点着色器传入片元着色器的变量 |

> 参见 [WebGL 1.0 API Quick Reference Card](https://www.khronos.org/files/webgl/webgl-reference-card-1_0.pdf)。

### `uniform` 和 `attribute`

`uniform` 和 `attribute` 是在 OpenGL 代码中传入着色器的，在 Three.js 中，通常是这么写的：

```js
var material = new THREE.ShaderMaterial({
    vertexShader: ...,  // 可以通过 AJAX 加载 *.vs 代码，内容传给这个变量
    fragmentShader: ...,
    uniforms: {
        color: {        // 苹果的基础色
            type: 'v3', // 指定变量类型为三维向量
            value: new THREE.Color('#60371b')
        },
        light: {        // 光源位置
            type: 'v3',
            value: keyLight.position
        }
    }
});
mesh.material = material;
```

因为我们把苹果的基础颜色定位整体是同一个颜色，所以这里用 `uniform` 告诉顶点着色器，每个顶点都获得同样的颜色值。相对地，如果我们要为每个顶点指定不同的颜色，那么就需要用 `attribtue` 传入数组，告诉顶点着色器，每个顶点对应使用什么颜色。

在卡通渲染的着色器中，我们传入了两个 `uniform` 值，分别是苹果的基础颜色和光源位置。

### `varing`

`varing` 类型的变量是从顶点着色器往片元着色器传递的，因为 OpenGL 不能直接给片元着色器传信息。需要传递时，在顶点着色器 `main` 函数之前定义 `varing` 开头的变量即可。

在这里，我们传递了三个变量到面片着色器，分别是：`vColor` 表示苹果基础色、`vNormal` 表示顶点法向量、`vLight` 表示光源相对于摄像机的坐标。

### 变量类型

前面说的 `uniform` 之类的是“限定词”，修饰了变量的来源和特点，而变量类型则是在限定词之后出现的。

C 语言中支持的 `int`、`float`、`bool` 等类型都是支持的。除此之外，这里我们用到的 `vec3` 类型声明的是一个三维向量，对应地，还有 `vec2`、`vec4` 表示二维、四维数组；`mat2`、`mat3`、`mat4` 表示二阶、三阶、四阶矩阵。还有比较特别的 `sampler2D` 传纹理、`samplerCuber` 传立方体纹理，暂时我们不会用到。

需要注意的是，**GLSL 是类 C 语言的，千万不要用 JavaScript 的思路去思考**。一个典型的错误是，GLSL 是没有隐式类型转换的，因此如果一个变量是 `float` 类型的，写成 `0` 会在编译着色器时报错，一定要写为 `0.0` 才行。

### 辅助函数

虽然类 C 语言的风格，让我们这群写 JavaScript 自由惯了的程序员很抓狂，但比较好的特性是，它提供了一些很方便的辅助函数。

向量类型的变量互相转换，比如 `viewLight` 是一个 `vec4` 类型，如果将它前三个维度给一个 `vec3` 类型，就可以写成：`viewLight.xyz`。更神奇的是，打乱顺序也是可以的，也就是说，`viewLight.zx` 能将第三个维度和第一个维度赋值给一个 `vec2` 类型。

另外，提供了很多辅助函数，比如 `normalize` 可以将向量归一化，`dot` 可以获得两个向量的点积。


# 算法理解

## 顶点着色器

现在，我们应该能够读懂着色器代码了。再来看下 `main` 函数中的代码：

```js
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

> 注意，这个 `main` 函数会被每个顶点执行一次，并且是在 GPU 中并行执行的。

首先，我们将从 Three.js 中获得的颜色赋值给 `vColor` 变量，让它传递给片元着色器。

然后，使用法向矩阵乘以法向量，并将其归一化后，传递给 `vNormal`。

> 等等……这里怎么又出现一个新矩阵了？我头都晕啦！
>
> 好吧，你其实并不需要知道[背后的原理](http://www.lighthouse3d.com/tutorials/glsl-12-tutorial/the-normal-matrix/)，只需要知道，这是为了将物体坐标系下的法向量方向，转变成视图坐标系下的法向量方向。而之所以不能和光源位置 `light` 一样乘以 `modelViewMatrix`，本质上的区别是，它们虽然都是三维向量，但法向量表示的是一个方向，而光源位置表示的是一个坐标。如果用法向量乘以 `modelViewMatrix` 的话，得到的结果就可能不再垂直于面片了。

接着，使用光源位置乘以视图矩阵，得到光源在视图坐标系下的位置，传递给 `vLight`。

最后，将 MVP 矩阵乘以顶点坐标 `position`（都由着色器提供）的结果赋值给 `gl_Position`。这句是最常用的顶点着色器中顶点位置的写法，如果你不需要改变顶点的位置，则都是这样写的。

现在，我们已经读懂顶点着色器啦！


## 片元着色器

有了顶点着色器代码理解的基础，片元着色器就很容易读懂啦！

```c
varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vLight;

void main() {
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

    gl_FragColor = vec4(vColor * diffuse, 1.0);
}
```

> 注意，这个 `main` 函数会被每个片元执行一次，并且是在 GPU 中并行执行的。

在 `main` 函数的上方，我们还是定义了一些外部来的变量。在这个例子中，它们都是从顶点着色器传递过来的 `varing` 变量。

在 `main` 函数中，我们根据把归一化后的光源方向，和法向量进行点乘，计算每个片元的亮度值。

然后，根据亮度值，分别阶梯式地映射到新的亮度值，得到的 `diffuse` 是一个 0 到 1 之间的值。

最后，让苹果的基础颜色的 RGB 通道分别乘以阶梯式的亮度值，得到每个片元的颜色，并复制给 `gl_FragColor` 作为片元的颜色输出。

渲染结果如下：

{% capture imgSrc %}{{ site.url }}/img/post/2017-03-05-cartoon-shading-1-result.png{% endcapture %}
{% include figure.html src=imgSrc caption='卡通渲染效果' %}


# 小结

哇晒！我们全学会了！:heart_eyes:

数学不好、没有图形学基础，但也看懂了的同学请举个手！:muscle:

<div class="split"></div>

之后的教程也会像这篇一样，在介绍有限的数学、图形学相关知识的条件下，尽可能让大家明白着色器的算法原理。并且让感兴趣的读者，也能够有进一步研究实现方式的途径。希望能和大家一起学习！

欢迎大家在 GitHub 上关注 <a href="https://github.com/Ovilia/cezanne" onclick="_gaq.push(['_trackEvent', 'ToGitHub', window.location.pathname, 'cezanne2']);">Ovilia/cezanne</a>，查看源码或关注更新~ 也非常欢迎交流讨论！:wink:

下一篇，我们将介绍卡通渲染算法中，添加描边的效果，敬请期待！


# 参考资料

- [《Three.js入门指南》](https://read.douban.com/ebook/7412854/)
- [《OpenGL超级宝典》](https://book.douban.com/subject/5273949/)
- [《OpenGL ES 2.0 Programming Guide》](https://book.douban.com/subject/3175883/)
- [WebGL 1.0 API Quick Reference Card](https://www.khronos.org/files/webgl/webgl-reference-card-1_0.pdf)
- [The Normal Matrix](http://www.lighthouse3d.com/tutorials/glsl-12-tutorial/the-normal-matrix/)
