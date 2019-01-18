---
title: WebGL blending 详解
time: 2018.07.31 17:21:27
layout: post
tags:
- 中文
- WebGL
- 图形学
excerpt: 混合（blend）对于图形图像处理领域是个很常见的概念，简单可以类比为在画画的时候，画布上已经有颜色了，那么新画上去的颜色会如何与原有的颜色结合，生成新的颜色效果呢？水彩、水粉、油画颜料等等，会因为不同的质地产生不同的叠加效果。而在图形渲染的时候，指定混合算法就有些类似于指定颜料的叠加属性。
---

混合（blend）对于图形图像处理领域是个很常见的概念，简单可以类比为在画画的时候，画布上已经有颜色了，那么新画上去的颜色会如何与原有的颜色结合，生成新的颜色效果呢？水彩、水粉、油画颜料等等，会因为不同的质地产生不同的叠加效果。而在图形渲染的时候，指定混合算法就有些类似于指定颜料的叠加属性。

在 WebGL 中，混合相关的函数包括：`gl.blendColor`、 `gl.blendEquation`、 `gl.blendEquationSeparate`、 `gl.blendFunc`、 `gl.blendFuncSeparate`。其中最让我困惑的是 `gl.blendEquation` 与 `gl.blendFunc` 的区别。

在 MDN 文档中，他们分别的定义是——

> [blendEquation()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquation):
> The WebGLRenderingContext.blendFunc() method of the WebGL API defines which function is used for blending pixel arithmetic.
>
> [blendFunc()](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc):
> The WebGLRenderingContext.blendEquation() method of the WebGL API is used to set both the RGB blend equation and alpha blend equation to a single equation.

但什么是 `blend function`，什么是 `blend equation` 呢？

如果将这两个函数可取的值进行一个组合，可以得到非常多种可能……（这里我简单标了一下参数，但其实不用太仔细看这个图。）

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2018-07-31-webgl-blending-full.png">

然而这还是在固定了一些参数的情况下的表……

# blendEquation

`gl.blendEquation(mode)` 中 `mode` 的值在 WebGL 中可取 `gl.FUNC_ADD`（表示源 + 目标）、 `gl.FUNC_SUBSTRACT`（表示源 - 目标）、 `gl.FUNC_REVERSE_SUBSTRACT`（表示目标 - 源）。

源 C<sub>S</sub> 就是接下来要画的颜色，目标 C<sub>S</sub> 就是已经画了的颜色（严格来说，这时候还没画上去，而是帧缓冲区中的颜色）。

以 `gl.FUNC_ADD` 为例，得到的最终颜色是 C<sub>S</sub>S<sub>C</sub> + C<sub>D</sub>D<sub>C</sub>。其中，C 是表示 R、 G、 B、 A 通道的向量；而 S<sub>C</sub>、D<sub>C</sub> 则是由 `gl.blendFunc` 决定的。

# blendFunc

`gl.blendFunc(sfactor, dfactor)` 接受两个参数，`sfactor` 将决定 S<sub>C</sub>，而 `dfactor` 将决定 D<sub>C</sub>。之说以说“决定”而不是“是”，就意味着这两者并不是相等的关系。事实上，`sfactor` 和 `dfactor` 的合法值很多，参见 [MDN 文档](https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc)。

以 `gl.SRC_COLOR` 为例，如果 `sfactor` 是 `gl.SRC_COLOR`，则上面的 S<sub>C</sub> 就是 R<sub>S</sub>, G<sub>S</sub>, B<sub>S</sub>, A<sub>S</sub>，也就是上面我们用的向量 C<sub>S</sub>。同样地，如果 `dfactor` 是 `gl.SRC_COLOR`，那么 D<sub>C</sub> 的值就是 C<sub>S</sub>。
