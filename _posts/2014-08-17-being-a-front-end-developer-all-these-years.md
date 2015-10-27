---
title: 前端这些年
time: 2014.08.17 09:56:00
layout: post
tags:
- 中文
- 回顾
- 设计
- 感想
excerpt: 接触网站前端编程以来的三年半，从当初还没听说过“网站前端”概念时候的糟糕设计，到如今的轻车驾熟，本文带你和我一起回顾这些年做过的前端设计，以及走过的成长之路。
---

> #### 关于本文

> 接触网站前端编程以来的三年半，从当初还没听说过“网站前端”概念时候的糟糕设计，到如今的轻车驾熟，本文带你和我一起回顾这些年做过的前端设计，以及走过的成长之路。

# 第一个网站

虽然说，系统性地学习网页编程始于大二寒假，但如果认真追溯起来的话，应该算是高中时候的计算机课上开始的。我特别感谢当时的计算机老师严一心老师，虽然他现在已经退休了，我也联系不上他了，但我一直觉得他对我最终选择软件工程这个方向起着很大的作用。

高中写过VB程序，做过网页，我觉得编程是一件很酷的事。幸运的是，VB最终大作业的可执行代码我还保留着，只是源代码已经丢失了。而更让我惋惜的是，人生的第一个网站很可能已经丢失了，要么就是在我的一刀软盘中的某张，可是现在也找不到能读软盘的电脑了，真是可惜啊！**要是谁有能读软盘的电脑，务必请联系我啊！** :star2:

当时，严老师要求我们每人做一个简单的网站，可以是关于自己喜欢的任何主题。我当时正是很喜欢《红楼梦》的时候，所以毫不犹豫选择了相关的主题。我还记得当初给这个网站起的名字是“酣梦红楼”，真是中二气十足的年纪啊！ :sunglasses:

我们学习的软件是Front Page，当时好像还没听说过Dreamweaver（初学者千万别用Dreamweaver）。大致就是学习了些`<h1>`、`<img>`、`<table>`之类最常用的HTML tags，然后用CSS设下`background-color`之类的就差不多了。我记得当时做完以后，还对自己的作品颇为得意的！我还有些印象，我现在觉得是那种比较典型的初学者会写成的风格，就是被各种滥用的边框啦，浓重的背景色什么的……

当然，当时我虽然对这个作品沾沾自喜，但倒也不至于觉得自己在这方面有天赋。事实上，从那个项目以后我也就没再做过别的网站，直到大二寒假系统性地学习网页编程。

# 2011年

## PCHMS

<img class="inline-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-17-being-a-front-end-developer-all-these-years-03.png" />

这件事其实要从2010年暑假开始说起。我们学院和Intel合办了一个叫Intel试点班的组织，大致就是由Intel的工程师出题目让学生做项目，期间进行指导，最后进行评估之类的。试点班的选拔是大一升大二（2010年）的那个暑假，选拔条件就是用Java在暑假做一个类似数据可视化的东西。简单地说，最后我通过了答辩，并且是十来个通过的人中唯一一个女生。然后2011年的那个寒假就组队做一个叫PCHMS（PC Health Management System）的项目，大致意思就是通过监控鼠标键盘的事件，提醒用户什么时候要休息啦之类的。其中包括数据可视化部分（当然，当时似乎还没有这种叫法），和组员讨论决定这部分用网页实现，并由我来做这件事。

作为女生，好像大家都达成共识，那些PS的活也是我来干的。虽然那时候我基本不怎么会PS，大概后来也就是这样的摸索才使我现在很熟悉的。可以看出来，早期的PS设计还是非常杂乱的，就是新手很容易犯的错误：把所有会的技能放上去表现。

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-17-being-a-front-end-developer-all-these-years-01.png" />

顺便说一句，“驿路梨花”这种中二的名字也是我起的，当时的广告词是……

> 人们常常把人生比作旅途，多少人匆忙赶路，却忘了欣赏沿途风景。在电脑前指跃笔耕，这条驿路上的美好，是否同样被你忽视？

现在读起来真是鸡皮疙瘩一地啊…… :joy:

高中的网页知识基本忘光啦，寒假里面就重新开始学。由于网页部分只是负责显示统计图表，所以并不复杂，图表也是用现成的库<a href="http://www.highcharts.com/demo" target="_blank">HighCharts</a>做的。

给我印象最深刻的是，当时学会了用`background-repeat`。为了使图片传输少占带宽，我把菜单栏的背景图片裁成宽度为1像素的，然后用`background-repeat: repeat-x`，这样菜单栏的背景宽度就可以根据屏幕宽度自适应了，而且只有一个像素宽哦！虽然现在看来这真是再小儿科不过的小技巧，甚至现在都可以用CSS实现过渡背景完全不用图片，但当时学到这一小技巧的时候，还是觉得自己非常厉害的！

我只保留了图表部分的截图，不过其他部分是很简单的，所以看不到也不用觉得可惜。

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-17-being-a-front-end-developer-all-these-years-02.png" />

当时还需要用到PHP和MySQL，也是那个寒假一起学的。那时候我还没上过JBoss的课，数据库完全没概念，结果就乱用……正常的做法是在MySQL里面做好排序筛选什么的，但是我不知道有`ORDER BY`、`LIMIT`这种功能，更不知道这应该是数据库而非后台语言负责的事。所以我就把所有需要的数据`SELECT`出来，完全在PHP里自己写排序筛选之类的算法……还好数据量很小，只是自己玩玩的，所以完全没感觉到异常……直到后来上了数据库的课，才发现我是在乱玩啊啊啊~ :stuck_out_tongue:

## 时间胶囊

这个是2011年下学期一门选修课的大作业，有了寒假的经验，这个项目并不需要学习更多的技术，所以也就像玩一样水过去了。不过从保留的这个项目的截图可以清楚地看出我当时是多么的木有设计感……

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-17-being-a-front-end-developer-all-these-years-05.jpg" />

简直不能直视……

## Stolon

<img class="inline-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-17-being-a-front-end-developer-all-these-years-06.png" />

这个项目和“时间胶囊”几乎是同时的，但合作的人是另外几个，首字母缩写组成最像英文单词的词是Stolon，所以我们就叫这个名字了……读起来有点像Stolen，不过这还不算什么，中文名是“生藤”，<a href="http://liyaos.com" target="_blank">三土</a>总是说：好疼……

不过这还不算什么……如果你看到我设计的图标的话……

组里四个男生当时看到这个图标都笑疯了，还都不肯告诉我笑什么……

当时做网页设计的时候，因为这是个排课软件，所以我觉得用黑板表现背景是个很好的idea。但是现在看看的话，这个设计还是远远太复杂，而且不够精致。UI是初学<a href="http://dojotoolkit.org/" target="_blank">dojo</a>做的，当时还不知道<a href="http://jquery.com" target="_blank">jQuery</a>。现在jQuery的受欢迎程度已经远超dojo了。

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-17-being-a-front-end-developer-all-these-years-07.png" /> <img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-17-being-a-front-end-developer-all-these-years-08.png" /> <img src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-17-being-a-front-end-developer-all-these-years-09.png" />

## 伯牙

<img class="inline-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-17-being-a-front-end-developer-all-these-years-10.png" />

这个项目是我自己一个人做的数据库大作业，第一次开始学习jQuery了。只留了首页截图一张，不过整体风格应该和“时间胶囊”差不多的……

“伯牙”项目的想法是，用户每天会收到几个关于三观的是非题，比如*你是否很看重别人对你的评价*，然后根据所有答案匹配出跟你想法最相似的人。但后来想想，从进化论的角度，难道人不是应该多和不一样的人接触更好吗？尤其是对另一半而言，多样性是适者生存的前提。这个问题的答案我也不是完全想明白，在<a href="{{ site.url }}/2014/05/11/reviewing-moment-in-peking" target="_blank">《京华烟云》书评</a>一文中亦有论及。

# 2012年

2012年似乎网页部分的项目做得不算很多，很多时间花在Python上了。

## 燃豆萁

这是我2012年暑假出于兴趣做的项目。当时优酷并不提供那些优酷上没有、而在其他网站上有的视频的链接。而优酷提供的评分往往很难反映电影的好坏，可能是出于一些商业上的利益。而我一般是参考豆瓣上的评分的，所以我在想，能不能抓取豆瓣和各大电影播放网站的数据，然后根据豆瓣评分进行排序有哪些可以在线观看的电影。

这个网站做出来的半年多时间内，我都是用它来找电影看的，但是后来360做了同样的东西，而且更好更全，以至于我自己都去用360了。再后来优酷也能看到其他网站的电影了，更没用燃豆萁的必要了。所以该项目就这样结束了，不过你依然能在<a href="http://ovilia.sinaapp.com/movie/index.php" target="_blank">这里</a>看到这一项目。

它之所以叫“燃豆萁”，是因为它是基于“豆瓣”评分的，所以是“煮豆燃豆萁”……

<a href="http://ovilia.sinaapp.com/movie/index.php" target="_blank"><img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-17-being-a-front-end-developer-all-these-years-11.png" /></a>

这时候的网页已经稍微能看一点了，不过如果我没记错的话，这时候还没开始专门看设计类的书，也没把网页设计或编程作为我的职业考虑范围。

# 2013年

## jWebAudio

<a href="http://01org.github.io/jWebAudio/" target="_blank"><img class="inline-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-17-being-a-front-end-developer-all-these-years-12.png" /></a>

2013年的年初，在Intel实习做了<a href="http://01org.github.io/jWebAudio/" target="_blank">jWebAudio</a>这一Web Audio的JavaScript库，所以也做了一个网页来展示它。这时候的设计已经进步很多了，这一年半以来可能看了很多国外设计很好的网站，以至于响应式设计刚刚推出来的时候，我就已经能通过一个网站是否有设计感来推断这网站是否做了响应式设计。

到目前为止，这个项目<a href="https://github.com/01org/jWebAudio" target="_blank">在GitHub上</a>获得了59个Star。

## 个人网站

2013年1月买的zhangwenli.com域名，陆陆续续改成现在这样，应该说我还是花了不少心思设计和推广的。从建站一个月开始，就陆陆续续有创业公司通过各种渠道看到我的网站，并表现出合作意向。可见，相比担心各种社交账号泄露隐私，对很多人而言，把自己推广出去更为重要。作为一个前端设计师尤其如此，如果自己都没有一个很有感染力的个人网站，又怎么有推销自己的说服力呢？

最近半个月我写博客写得尤其勤快，一方面在更新博客样式的时候碰到了很多问题需要记下来，另外一方面也想试试把我的博客推广到更大的读者面前。结果这半个月平均每天都有100人次以上的访问量，虽然跟一些著名博客没法比，但是跟我三个月前每天平均10人、一年前每天平均2人的访问量相比，应该说还是有比较明显的变化的。

到今天为止，已有10624人看过我博客的20927个页面，感谢你们每一次的点击，让我敲键盘的时候更有动力！ :kissing_heart:

# 2014年

## jCorner

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-17-being-a-front-end-developer-all-these-years-14.png" />

<a href="http://zhangwenli.com/jCorner/" target="_blank">jCorner</a>是帮夏老师做网站的时候顺便做的一个jQuery插件，虽然那个网站最后没派上用场，但是这个插件倒是为我的网站带来了不少流量！`/jCorner/`到今天为止已经有3248次访问，是`http://zhangwenli.com`域名下仅次于根目录`/`和博客入口`/blog/`的第三大访问页面；就landing page而言，为我的域名带来了21.9%的访客。

## 有嘉

<a href="http://www.argoeducation.com/" target="_blank"><img class="inline-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-17-being-a-front-end-developer-all-these-years-13.png" /></a>

<a href="http://www.argoeducation.com/" target="_blank">有嘉留学</a>是2014年寒假期间做的外包，由于甲方是一群高富帅，所以酬劳方面很爽气，合作也很愉快，要是客户都是这样的就好啦~那种要求多快好省样样齐全的甲方，实在是太捉急~ :dizzy_face:

## DR

这也是个外包，不过由于我只是做实现，设计稿是甲方提供的，所以就不放链接了（而且自己也不是很满意哎）。值得一提的是，从这个项目开始学习Bootstrap了。

## Intel WebRTC

<a href="http://webrtc.intel.com" target="_blank">Intel WebRTC</a>网站是Bootstrap比较熟悉以后的作品，第一次实践了视差滚动。除此之外，这个应该算是比较中规中矩的作品，Bootstrap网站嘛差不多就这样了。

## 变卦

<a href="http://zhangwenli.com/biangua" target="_blank"><img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2014-08-11-how-i-made-biangua-02.png" /></a>

<a href="http://zhangwenli.com/biangua" target="_blank">变卦</a>的idea在我脑海中放了好几个月，最终在8月份做出来。原本设想的效果更酷炫一点，是一种类似阻尼运动的撕裂效果！可惜最后没实现出来（或者说，实现了以后感觉效果很奇怪，就放弃这个动画方案了）…… :persevere:

# 未来

> - Bootstrap
> - AngularJS
> - RequireJS
> - Node.js
> - JavaScript Template Engine
> - JavaScript Language Feature
> - JavaScript Design Pattern
> - LESS
> - SASS

> 摘自<a href="{{ site.url }}/2013/12/03/learning-list-for-2014/" target="_blank">2014学习列表</a>

我年初定的<a href="{{ site.url }}/2013/12/03/learning-list-for-2014/" target="_blank">2014学习列表</a>里的九项，如今才学了Bootstrap、LESS两项而已……接下来最可能要接触到的就是Angular.js和Node.js了；JavaScript语言特性的话，很难说什么时候是学完了，但至少经典的几本书最近都没怎么看；JavaScript模板引擎我觉得不用学了，Angular.js应该可以代替它；Require.js应该不怎么需要学，但也没实际项目需要用到，所以还没操练过；其它几项倒也不是很要紧。

所以，总结来看，接下来就是把重点放在Angular.js和Node.js上，并且继续学习JavaScript。
