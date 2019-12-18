---
title: 如何成为 Apache ECharts (incubating) 的 Committer？
time: 2019.12.18 15:27:58
layout: post
tags:
- ECharts
- JavaScript
- 教程
- 中文
excerpt: 本文是 2019.12.07 Apache ECharts (incubating) 在上海举办的第一次线下交流会上我分享的主题的文字稿。
---

> 本文是 2019.12.07 Apache ECharts (incubating) 在上海举办的第一次线下交流会上我分享的主题的文字稿。视频正在制作中，关注[我的 bilibili](https://space.bilibili.com/369508085) 及公众号「羡辙部落格」获得上线通知。

<p class="no-indent center"><img class="full-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2019-12-18-how-to-be-an-echarts-committer/ppt03.jpeg" /></p>



# ECharts 在 Apache 的孵化进程

ECharts 项目是在 2018 年 1 月加入 Apache 开源基金会（*Apache Software Foundation*，下文简称 ASF）开始孵化。从这个表格中，我们可以看到在加入 Apache 前后项目的一些变化。

<p class="no-indent center"><img class="full-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2019-12-18-how-to-be-an-echarts-committer/ppt04.jpeg" /></p>

## 孵化带来的改变

在刚加入 ASF 的那段时间，我们的发版是不太稳定的。不太忙的时候可能一个月发一次版，而很忙的时候则可能半年才发一次版。可能很多 issue 已经被修复合入了，但是由于没有发版，开发者就没法使用。而经过这将近两年的孵化时间，我们的发版频率也变得稳定了。在过去的四个月中，我们都保持了每个月一个版本的发版速度。

在加入 ASF 之前，来自非核心团队之外的人贡献的 PR 数是非常少的，或者说几乎是没有的。但是在上个版本中，我们已经有三分之一的 PR 是由非初始 Committer 的社区开发者贡献的。

Contributor 数也从 75 个增长到了 90 个。我们也希望通过今天这样的线下交流会的形式，吸引更多来自社区的贡献者。

## 为什么捐给 Apache 开源基金会

从这个数据，我们可以发现，我们之所以想加入 ASF，一方面是为了增加用户量。因为如果像 ECharts 这样的项目，如果是在一个公司名下，那么对于有些开发者而言，可能会在选择的时候，由于版权或者其他原因产生一定的顾虑。但是如果把它捐给一个像 ASF 这样的第三方组织，可以增加用户的信任感。

另一方面，也是为了借助像 ASF 这样成熟开源组织的经验，在社区建设以及产品发展上，给予项目更多帮助。



# 关于 Apache 开源基金会

<p class="no-indent center"><img class="full-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2019-12-18-how-to-be-an-echarts-committer/ppt05.jpeg" /></p>

Apache 开源基金会成立于 1999 年，最初的时候就是那个我们很熟悉的 Apache HTTP Server 的项目。至今已经发展了 300 多个项目（含孵化项目），拥有超过 7000 名 Committer。



# The Apache Way

我们在提到 Apache 开源基金会的就是——**The Apache Way**。

<p class="no-indent center"><img class="full-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2019-12-18-how-to-be-an-echarts-committer/ppt06.jpeg" /></p>

这是 ASF 比较公认的一些处事方式或者原则。

其中最重要的一条是 **Community Over Code**。我自己把它翻译为：先社区而后代码。

在 ASF 看来，社区的价值是高于代码的。当你有一个健康良好的社区的时候，即使你的代码不太完善，它是可以随着社区的贡献逐渐得到完善的。但是反过来，如果社区不够好，再好的代码也会逐渐失去活力而生锈的。

<p class="no-indent center"><img class="full-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2019-12-18-how-to-be-an-echarts-committer/ppt07.jpeg" /></p>

<p class="no-indent center"><img class="full-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2019-12-18-how-to-be-an-echarts-committer/ppt08.jpeg" /></p>



# 为什么要对开源社区做贡献

<p class="no-indent center"><img class="full-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2019-12-18-how-to-be-an-echarts-committer/ppt09.jpeg" /></p>

## 解决自己碰到的问题

对于开源项目而言，绝大部分的贡献者最初都是为了解决自己的问题。对于像 ECharts 这样有非常大量用户的项目，如果等待其他人来修复你的问题，通常需要等待比较久的时间。这时，如果你自己有能力去修改源码，那么就很很快解决自己的问题。

当你完成源码的修改之后，以 pull request 的形式提交代码，可以让更多人受益于你的贡献。

从开发者的角度，我们当然比较容易理解，每个人都觉得自己的 issue 是最高优的。但是对我们核心开发者而言，在决定优先级的时候，会高优处理那些报的人比较多的 issue，或者是一些核心功能的问题。

## 加深对项目源码的了解

在你自己修改源码之后，能够很大程度上加深对项目的理解。在我加入之前，我也一直想要一个文档，能告诉我源码的各个细节。但后来我理解到，不管是对 ECharts 项目，还是同级别的其他项目，要真正了解源码，还是需要自己动手修改过一些 issue，才能有更深刻的理解。

## 求职时作为加分项

现在我们其实可以在很多的招聘信息中看到有对 ECharts 的要求。那如果你说你使用过 ECharts，可能竞争力就不太大——因为我们每周有 20 万的人使用，对吧？这时候，如果你对面试官说，我修改过 ECharts 的源码，甚至说我还是它的 Committer——这时候你给面试官的印象一定是不一样的！



# ECharts 社区现状

<p class="no-indent center"><img class="full-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2019-12-18-how-to-be-an-echarts-committer/ppt10.jpeg" /></p>

刚才提到，ECharts 项目每周 npm 下载量 20 万，但是真正参与代码维护的，每个月只有十来个人。这个比例也使得我们现在急需吸纳更多社区贡献者，所以现在加入我们就是最好的时刻！



# 什么是 Committer

说了这么多，到底什么是 Apache 的 Committer 呢？

<p class="no-indent center"><img class="full-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2019-12-18-how-to-be-an-echarts-committer/ppt11.jpeg" /></p>

一种最直观的解释是，你能在 GitHub 项目中获得「写」权限，能改分支、维护 issue 等等。

此外，这也是一种荣誉。比如你可以在 GitHub 中看到「Member」的标志。

另外一个有意思的点是，「commit」这个单词在英语中有*承诺*的意思。所以，从某种程度上说，**成为 Committer 也是你对一个项目长期贡献的一种承诺**——虽然 ASF 规定，成为 Committer 并不意味着具有任何额外的*义务*。



## 如何成为 ECharts Committer

那么，如何成为 ECharts Committer 呢？

<p class="no-indent center"><img class="full-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2019-12-18-how-to-be-an-echarts-committer/ppt12.jpeg" /></p>

ASF 并没有给成为 Committer 设定具体的要求，比如要提多少个 PR 或者回复多少 issue。因为在 ASF 看来，每个人都能在自己力所能及的范围内贡献不同的价值。比如有的人不会修改源码，但是他帮忙修复了很多文档上的问题，这同样是一种值得肯定的贡献。

在[这个文档](https://github.com/apache/incubator-echarts/wiki/How-to-make-a-pull-request%3F)中，我们详细介绍了如何给源码提 pull request，感兴趣的同学可以关注一下。

## 找到容易修复的 issue

我们在 GitHub 上用标签 `difficulty: easy` 标记了我们认为比较容易修复的问题，通过筛选这个标签，可以更快找到适合初学者修复的一些简单的问题。

## 订阅邮件组

邮件列表是我们公开讨论并记录的地方。可以发送任意内容的邮件到 [mailto:dev-subscribe@echarts.incubator.apache.org](dev-subscribe@echarts.incubator.apache.org) 进行订阅，参与我们的讨论。详见[官网文档](https://echarts.apache.org/zh/maillist.html)。

## 寻求帮助

<p class="no-indent center"><img class="full-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2019-12-18-how-to-be-an-echarts-committer/ppt13.jpeg" /></p>



# 新晋 Committer 的例子

这里举两个新加入的 Committer 的例子，大家可以参考一下贡献度。

<p class="no-indent center"><img class="full-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2019-12-18-how-to-be-an-echarts-committer/ppt14.jpeg" /></p>

<p class="no-indent center"><img class="full-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2019-12-18-how-to-be-an-echarts-committer/ppt15.jpeg" /></p>

SnailSword 给我们提了四个 pull request，没有其他方面的贡献。Clement 更多的是文档方面的修改以及参与我们的讨论。

这些都能成为在考量 Committer 贡献时候的指标，重要的是让我们看到你想积极加入，并且能够持续贡献的态度。


# 最后

成为 Committer 不是最终的目标，而是对一个社区贡献者已经做出贡献的肯定，更是对未来能够共同更好地一起维护社区的一种承诺。

希望能有更多的人从开源的受益者转变为贡献者的身份，和我们一起带领 ECharts 走向世界！
