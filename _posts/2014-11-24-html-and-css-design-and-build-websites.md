---
title: 常读常新的基本功
subtitle: 《HTML & CSS设计与构建网站》读后感
time: 2014.11.24 21:07:15
layout: post
tags:
- 中文
- 书评
- 阅读
series: 送 Wenli 一本书，让她写出更棒的作品
excerpt: 很意外在公布了<a href="http://zhangwenli.com/blog/tip/" target="_blank">送 Wenli 一本书，让她写出更棒的作品</a>之后不到五分钟就有人送了我这本<a href="http://book.douban.com/subject/21338365/" target="_blank">《HTML & CSS设计与构建网站》</a>。感谢这位我不认识的 CSF 童鞋~
---

<a href="http://book.douban.com/subject/21338365/" target="_blank"><img class="book-img" src="{{ site.loadingImg }}" data-src="http://img3.douban.com/mpic/s24951890.jpg" /></a>很意外在公布了<a href="http://zhangwenli.com/blog/tip/" target="_blank">送 Wenli 一本书，让她写出更棒的作品</a>之后不到五分钟就有人送了我这本<a href="http://book.douban.com/subject/21338365/" target="_blank">《HTML & CSS设计与构建网站》</a>。感谢这位我不认识的 CSF 童鞋~

正如书名所示，这本书介绍了各种 HTML 和 CSS 技术，对于初学者也是没有难度的。只是我觉得初学者应该很难耐下心来一条条学这些东西，反而适合先随便做点练手的项目，对 HTML 和 CSS 有一定了解之后，再回过头来看这类逐条介绍 HTML 和 CSS 的书。这样，大部分内容就可以轻松愉快地跳过去，剩下 20% 左右不熟悉的正好补充一下知识。

对我而言，对 HTML 和 CSS 都还算比较了解了，但是时不时还是要看看这类书，原因在于 HTML 和 CSS 往往有很多方法实现同一个效果，如果不了解推荐做法的话，那么理论上大部分 Tag 都可以用 `<div>` 代替。如果不看这样的书，那么也不会觉得有什么问题，继续使用 `<div>`，那尤其对 HTML5 的一些新增的 Tag 就都不了解了。

## CSS 选择器

以 CSS 选择器来说，我就学到了以下这些新知识。

- Existence：`p[class]` 匹配包含 `class` 特性的 `<p>`
- Equality：`p[class="dog"]` 匹配 `class` 为 `dog` 的 `<p>`
- Space：`p[class~="dog"]` 匹配 `class` 包含一项 `dog` 的 `<p>`
- Prefix：`p[attr^"dog"]` 匹配 `attr` 以 `dog` 开头的 `<p>`
- Substring：`p[attr*"dog"]` 匹配 `attr` 包含 `dog` 的 `<p>`
- Suffix：`p[attr$="dog"]` 匹配 `attr` 以 `dog` 结尾的 `<p>`
