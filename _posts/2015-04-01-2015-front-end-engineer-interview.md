---
title: 2015 暑期实习生面试经历
subtitle: 阿里巴巴、百度前端工程师
time: 2015.04.01 19:44:04
update_time: 2015.04.03 02:14:21
layout: post
tags:
- 中文
- 总结
- 面试
- JavaScript
excerpt: 2015 年 3 月参加并通过了阿里巴巴和百度的前端面试，前后历时三周，最后选择了阿里无线事业部作为暑假实习，但是也很向往 EFE 的 echarts 哦！有机会一定去体验下~ 这篇博客一来为自己作记录，二来希望给需要的人一些经验。
---

2015 年 3 月参加并通过了阿里巴巴和百度的前端面试，前后历时三周，最后选择了阿里无线事业部作为暑假实习，但是也很向往 EFE 的 echarts 哦！有机会一定去体验下~ 这篇博客一来为自己作记录，二来希望给需要的人一些经验。如果有觉得我又说着说着吹捧起自己来了，千万别觉得我很骄傲~ 其实是因为我一直都会给自己积极的心理暗示哦！

# 准备工作

最初是听实验室的同学开始讨论投这里简历那里简历，才知道暑期实习大多四月份就截止了——本来还以为还有两三个月准备实习面试呢！

就像每次考试前我们都会说“要是再给我一个月复习，我一定会考得更好”一样，几乎没有哪次的准备工作可以让我们自己觉得充分了的。大概我准备得最充分、自己也最满意的一次面试是高中参加交大自主招生时候的面试，那真是把每句话都设计好，甚至准备了“嗯嗯啊啊”这样的词来掩盖一切尽在我掌握中的真相……那时候会把从自我介绍到面试官手上的每份资料里安排好各种诱导面试官提问的点，然后还假装思索片刻才回答。每个回答都可以是夜夜失眠精心想出来的会让人眼前一亮的回答。即使是即兴的问题，有这样充分的准备，也不会很慌了，可以装得很自信地对答如流。现在回想起来，当时也真是蛮拼的。

这次之所以没有这么准备，一方面是时间实在是不够，与其把时间花在这种小聪明上，还是多复习技术的性价比更高。另外一方面好像也是因为曾经沧海难为水了吧……

## 简历

再忙也要好好准备的第一件事，当然是简历。

半年前<a href="{{ site.url }}/2014/11/17/hack-shanghai/" target="_blank">参加黑客马拉松</a>，觉得好玩就做了个<a href="http://zhangwenli.com/cv/cn.html" target="_blank">在线版的简历</a>，<a href="http://www.zhihu.com/question/23150301/answer/32496711" target="_blank">在知乎上安利了一下</a>后，竟然小火了一把，至今已获得了超过 16000 次浏览。这次准备简历的时候，简单更新了一下在线版的简历，然后用 PhotoShop 做了一页打印版的简历。之前也有考虑用 Word 做好再导出成 PDF，但是 Mac 下的 Word 实在用起来太捉急了，对齐微调什么的搞得我抓狂了，最终还是折中一下用了 PhotoShop 做，缺点就是导出的 PDF 没有超链接了，实在有点遗憾。效果如下：

<img class="single-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2015-04-01-2015-front-end-engineer-interview-1.png" />

这里就不教大家怎么做这样的简历了，因为对基本没什么 PhotoShop 经验的同学来说，做这样的一份简历实在是太费工夫了，不如找个简单大气的模板，把时间花在擅长的地方吧！

网上应该也有不少简历教程了，我想提醒一些细节：

1. 确保**联系方式**正确且显著（看到过网上有人说简历写错电话邮件，一直没收到联系……）
2. 简历的确不需要花哨，但一定要让人有**记忆点**（如果你很牛，你的简介可以只有一句“I made Python”，否则请不要太排斥形式上的记忆点。）
3. 检查清楚**拼写**（这条最容易被忽视！很多人给我看的简历都是空格随意空、半角全角乱用、字体上下不统一等等，会给人做事很不严谨认真的印象。简历如此，代码自然也如此。）
4. 尽可能选用**简洁优雅的字体和语言**（直接看到宋体的中文和 Times New Roman 给我的感觉就是随便开了个 Word 都没改字体；避免冗长乏味的描述，用关键字直击重点。）

光是这几条就有大部分人做不到了。记住，**简历写的不仅仅是你的实力，更是你的态度**。

## GitHub

GitHub 是一个需要长期经营的地方，不是你面试前可以突击出来的。还在犹豫要不要经营一个活跃 GitHub 账号的读者可以参见<a href="http://www.zhihu.com/question/28976652/answer/42793942" target="_blank">我在知乎上的回答</a>。

## 刷书

<a href="http://book.douban.com/subject/4886879/" target="_blank">红宝书</a>本来看了一大半了，三周内还刷了<a href="http://book.douban.com/subject/2228378/" target="_blank">犀牛书</a>、<a href="http://book.douban.com/subject/3590768/" target="_blank">蝴蝶书</a>、<a href="http://book.douban.com/subject/25910556/" target="_blank">《WebKit技术内幕》</a>和一些不怎么好的书。我本来读书速度比较快，<a href="{{ site.url }}/2015/01/01/hello-2015/#读书" target="_blank">去年读了 130 本书</a>，这三周牺牲了读闲书的时间，本来又没什么娱乐时间，所以读掉这几本技术书并不算夸张。

## 内推

正式的实习生招聘有这么多人，茫茫的简历海中被错过实在是太可惜啦！对公司来说，各家也都想早点再早点抢到优秀的人才，所以利用好内推是双赢的啦~

可以找在公司工作的学长学姐内推。或者像我这样把简历共享在网上，等大神们来内推~~

虽然做技术的人太张扬总让人怀疑是不是华而不实，但有时候适当地宣传一下自己，让更多机会看到自己，也并不是一件很糟糕的事。作为一个 <a href="http://zh.wikipedia.org/wiki/ESFJ" target="_blank">ESFJ</a>，我会很在意别人的认同肯定。幸而做学生干部的那段峥嵘岁月让我学会了低调做人、高调做事，其中的平衡也就自己意会吧~ 成果就是，一年前我在 Gmail 里建了一个标签专门标记各种实习、工作邀请，现在已经快满 50 个啦~ 微博上粉丝上千好像也是因为知乎上分享了简历开始的，也因此结实了各路大神~ 被大神随便转发一下又涨粉了……朋友圈都是竹尖儿工作室业务上的人，豆瓣上都是 Chrome 插件使用者的粉丝，简直找不到可以发比较私人的消息的地方了！ :joy:

扯远了……总之，最后选择了阿里巴巴和百度的内推。

# 阿里巴巴

从 2015 年 3 月 8 日收到阿里内推邮件，到 3 月 31 日正式收到阿里巴巴实习生录用喜报，总共历时三周。

## 第一轮

> 时间：2015.3.13

> 电话技术面试

第一轮技术面试非常简单，就是问各种情况下应该用什么东西实现，比如“CSS 3 如何实现旋转图片”回答“`transform: rotate`”就不问下去了。

具体问题如下：（正文是我当时的回答，另附事后查阅相关资料的补充或修正）

### CSS 3 如何实现旋转图片

`transform: rotate`

### 写 CSS 的工具

LESS、SASS

### JavaScript 倒计时

`setTimeout`

### `setTimeout` 和 `setInterval` 的区别

`setTimeout` 指定在某时间段后调用一次，`setInterval` 调用多次

### 用 `setTimeout` 如何调用多次

在回调函数里再次调用 `setTimeout`

### JavaScript 怎么处理异常
`throw` 和 `catch`

### JSON 和 XML 的优缺点

JSON 和 JavaScript 的 `Object` 关联更大，没有特殊需求就用 JSON。XML 应该是有特殊需求的时候再用的吧？

> 参考：<a href="http://www.lingdublog.com/134.html" target="_blank">http://www.lingdublog.com/134.html</a>

### JavaScript 如何实现继承

`prototype` （竟然只要回答一个词就算过关，没问下去了……简直像通关密码！）

### 对闭包的理解

在程序语言范畴内的“闭包”指的是函数把其中的变量作用域都“包”在该函数的作用域内，形成一个“包”，外部函数无法访问内部变量。所以严格意义上来说，JavaScript 中的函数都是闭包。但我们常说的闭包，通常是指为了让外部函数访问到内部函数中变量，使内部函数返回一个函数，在其中操作内部变量。

> Like most modern programming languages, JavaScript uses lexical scoping. This means that functions are executed using the variable scope that was in effect when they were defined, not the variable scope that is in effect when they are invoked. In order to implement lexical scoping, the internal state of a JavaScript function object must in- clude not only the code of the function but also a reference to the current scope chain. (Before reading the rest of this section, you may want to review the material on variable scope and the scope chain in §3.10 and §3.10.3.) This combination of a function object and a scope (a set of variable bindings) in which the function’s variables are resolved is called a closure in the computer science literature. (This is an old term that refers to the fact that the function’s variables have bindings in the scope chain and that therefore the function is “closed over” its variables.)

> Technically, all JavaScript functions are closures: they are objects, and they have a scope chain associated with them. Most functions are invoked using the same scope chain that was in effect when the function was defined, and it doesn’t really matter that there is a closure involved. Closures become interesting when they are invoked under a different scope chain than the one that was in effect when they were defined. This happens most commonly when a nested function object is returned from the function within which it was defined. There are a number of powerful programming techniques that involve this kind of nested function closures, and their use has become relatively common in JavaScript programming. Closures may seem confusing when you first en- counter them, but it is important that you understand them well enough to use them comfortably.

> 摘自 *JavaScript, The Definite Guide*

### RESTful 的操作名
增删改查？

> 应该是 `GET`, `POST`, `DELETE` 等，当时有点不知道在问什么……


### HTTP 404、302、500、403 状态名是什么意思

404：文件找不到；302：不知道；500：服务器错误；403：权限错误。

> 302 Found 是HTTP协议中的一个状态码（Status Code）。可以简单的理解为该资源原本确实存在，但已经被临时改变了位置；或者换个说法，就是临时的存在于某个临时 URL 下。通常会发送 Header 来暂时重定向到新的新位置。

> 摘自 <a href="http://www.lingdublog.com/134.html" target="_blank">http://zh.wikipedia.org/wiki/HTTP_302</a>

### 一面小结

上面的问题虽然有没答出来的，但是比如问到 LESS、SASS 什么不具体问下去的阵仗也把我震惊了，大概一面主要就是来排除那些完全的初学者的吧，想必申请阿里的人一定很多~

以上总共只用了 5 分钟，然后到了我提问的环节。其实大部分想问的事先都找到人问好了，没什么特别想知道的，就随便问了下下一轮面试过多久。回答说一两周，结果两天后就第二轮面试了……之前问提交完信息多久第一轮面试，回答说两三周，结果第三天就第一轮面试……后来我就不问第三轮过多久了，结果就等了两周……

网上有攻略教你问些面试官不能马上回答出来的问题，我觉得没有必要啦~ 问一个你自己都不想知道答案的问题，面试官还要费力帮你解释，尤其在一天要面试很多人的情况下，要是面试官也知道你的意图，那岂不是很减分嘛~ 所以尊重一下面试官啦，诚实地问你想问的问题就好~

## 第二轮

> 时间：2015.3.15

> 视频技术面试

面试官先打电话来问现在有没有空视频面试，当时是晚上八九点了吧……当然我觉得提前告诉我一下会比较好些，但想想面试官应该每天要面试这么多人也很麻烦，所以也情有可原。

第二轮面试首先对我做过的项目和对前端的关注方面进行提问，然后是比较典型的 JavaScript 语言特性方面的考察。

一些主观问题的答案略去，部分答案也经删减。

### 个人职业发展的规划？

（略）

### 你认为前端是做什么的？

在比较成熟的团队中，前端的主要职责是把设计师的设计稿实现出来，包括设计和交互。

> 通过后面的交流，我觉得面试官期待的答案可能是所有跟用户打交道的环节。现在再问我这个问题的话，我会从广义和狭义两方面来说，狭义的前端是实现设计师的设计稿；广义的前端是所有跟用户打交道的环节。

### 在 Intel 做的是前端相关的？

（问题来源：简历中之前的实习经历）

不算那种典型的前端的工作，主要是 JavaScript 相关的库的开发。

### 如何了解前端流行的库？

GitHub 和 RSS

### 你是否确定以后多年从事前端？

是

### 做 `jWebAudio` 的背景和用途？

（问题来源：简历中之前的实习经历）

（略）

### 对 `jWebAudio` 进一步的问题

（略）

### `Three.js` 的书是自己写的还是翻译的？

自己写的，当时学习的时候发现相关学习资料较少，尤其没有中文学习资料，于是打算自己写一本电子书，一方面帮助自己整理思路，另一方面也可以帮助后来者加快学习速度。

### 碰到过的印象最深刻的技术问题？

（我当时想不出啊好捉急……）

### 是不是了解 Angular、Backbone？

有在学 Angular.js，但因为刚刚学水平有限，所以没写在简历中。

### 有没有做过单页面的应用？
<a href="http://zhangwenli.com/biangua" target="_blank">变卦</a>

### 为什么用 URL Hash？有别的办法吗？优劣是什么？

用 Hash 对应一个卦的六个爻，其实这里的 Hash 值的本意是定位到 HTML `id` 的锚点，但实际上页面中并没有这一 `id` 的标签，只是用于 JavaScript 获取这一值。比如 `http://zhangwenli.com/biangua/#010011` 对应从下到上分别为阴阳阴阴阳阳的“涣”卦，这样分享这个 URL 直接可以对应到一个卦象。

别的方法包括：基于 Query String（`http://zhangwenli.com/biangua/?q=010011`）和基于 URI（`http://zhangwenli.com/biangua/010011`）。

基于 Query String 的方法和基于 Hash 的方法一样可以通过 JavaScript 获取到查询的值，只是前者的地址里有查询的字符串（`q=`），所以地址更长，而在这里又没有别的优势，所以后者优于前者。基于 URI 的方法更简洁，但是需要服务器支持，由于我的代码的服务器是放在 GitHub 上的静态页面，我没法控制 URI 相关部分。综上，Hash 在这一情况下是最佳选择。

### 模块化了解吗？

AMD、CMD

### 移动平台的开发经验？

响应式设计、Zepto；@media、viewport、JavaScript 正则表达式判断平台。

### `position` 的几种值？

`relative`、`absolute`、`fixed`

> 面试官问我还有别的么，我一下子想不起来了……但是如果问我默认是什么值的话，我知道是 `static`。

### 如果一个元素 `absolute`，它是相对谁说的？

如果它的父元素是非 `static` 值（这里自己说了 `static`，面试官上一题应该可以饶过我……），则相对父元素；否则相对是非 `static` 值的父元素的父元素……直到找到一个最近的非 `static` 值的祖先元素。如果都没有，则是相对 `window` 而言。

> 差点得意忘形地跟面试官说，事实上，我之前就写过<a href="{{ site.url }}/2014/07/30/04-more-about-css-position" target="_blank">一篇博客</a>详细讨论这个问题……

### 如果一个元素 `absolute`，没设 `left`、`top`，位置是哪里？

左上角。

> 正确答案是，相当于 `static` 的默认位置。左上角之所以不准确，是因为如果父元素在本元素之前如果还有子元素的话，那就不是左上角了。

### `width:100px; padding:50px; border:1px; margin:50px` 问 border 之间的距离？

200px，但是 IE 某些版本可能是 100px。应该指定 `box-sizing`，比如将其设为 `box-sizing: border-box`，则距离都是 100px。


### `var a=["a","b","c","d"]` 每过 1 秒 `alert` 一下数组中的值

{% highlight js %}
for (var j = 0; j < 4; ++j) {
    setTimeout(function() {
        (function(i) {
            alert(a[i]);
        })(j);
    , 1000);
}
{% endhighlight %}

<blockquote>
<p>虽然意识到要用闭包了，但是仔细看看就知道这肯定是同时调用四次，而不是每过一秒啊，而且，大括号都没闭合好么！正解：</p>
{% highlight js %}
for(var j = 0; j < 4; j++) {
    (function(i) {
        setTimeout(function() {
            alert(i);  
        }, (i + 1) * 1000);
    })(j);
}
{% endhighlight %}
</blockquote>

### Ajax 请求需要做哪些事？

（这个我没怎么讲清楚……大多数都用 jQuery 调 Ajax，原生的看是看到过，没怎么记住……）

> <a href="http://hsj69106.blog.51cto.com/1017401/325922">http://hsj69106.blog.51cto.com/1017401/325922</a>

### 如何加快页面加载速度？

减少 HTTP 访问次数、CDN、minify、服务器增加缓存、CSS 放前面 JS 放后面、图片压缩、CSS Sprite（我之前一直以为是 Spirit :joy: ）等。

### 为什么要减少 HTTP 访问次数？

浏览器进程请求链接的数目是有限的，如果有很多 HTTP 请求，有些就得等着；另外，建立 HTTP 链接的开销比较大，需要三次握手之类，而相对地，一次连接中文件大小的边际成本就很小。

### 二面小结

阿里的二面我觉得应该算比较典型的前端面试题吧，还是暴露了不少我的基础不扎实的问题。

以上总共 40 分钟。

## 第三轮

> 时间：2015.3.22

> 电话技术面试

三面说是技术面试，结果问的都不是具体的技术问题，应该算是考量诸如自主学习能力之类的软实力吧！

一上来问我前两轮面试学到了什么？喏，上面整理的都是我学到的，我三面前都整理好了，但是我怎么跟面试官说呢？具体要我说什么我真的说不出来，当时大概也是紧张了……我一直觉得自己反应还挺快的，这么多年主持经验应该挺会随机应变的呀~ 当时可能是面试官语气听起来有点压迫感吧，确实没发挥好。

然后谈起我主页的“和光同尘”，说到老子思想什么的，我说我不想做改变世界的程序员，因为那些所谓号称要改变世界的程序员，大多也只是为了自我实现，而不是真的在意给人类提供一个更好的未来。而大多数人并没有足够的智慧看到怎样的世界才是更好的，看起来改变世界变得更好，其实却可能是相悖的，blabla……他大概就是说，还是需要一些有梦想的人把这个世界变得更好吧。然后就聊聊聊……当然啦，这种也没什么对错，就是随便聊聊吧，反正我感觉一直没聊到一个频道上。

然后他说了句很厉害的话，让我特别佩服：**为什么喜欢道家思想的你会到处分享你的作品呢？** :joy: （因为我虚伪啊~）

然后聊设计，说到<a href="http://zhujianer.com/#price">竹尖儿套餐方案</a>为什么要居中。我跟他解释说因为对称美，他表示不能接受多行文字居中，影响阅读速度。我知道对于正文居中当然不合理，但是对于套餐这样的内容我觉得完全是合理的，如果说影响阅读速度，那我可以跟你说菜单设计心理学，故意减慢阅读速度。反正他就是不接受，还觉得我没有从善如流这件事让他很介意。我就不跟他争了咯，人家是面试官大人呀~ 我说我保留我的看法，不想跟他就这个话题再聊下去了，他还在说这是设计问题什么的……

其实当时说到这里我真的已经是泪流满面了（literally），他倒没指责我或者什么的，虽然一直跟他聊不到一起，但整个过程中他也是没有过失的，是我自己太容易哭了……当然，不能让面试官知道我哭啊，太不专业了！我只好一边抹泪一边掩盖哭腔回答他啊……就这么讲了一个多小时！

如果他是我上司，要我把工作中的某个东西改成靠左对齐，那我表达观点后如果他不接受，我一定立马就改成左对齐。但这是我自己的项目，是我自己的设计，对于我觉得没有道理的说法，抱歉我很难接受。我可以在面试的时候，不再跟他争论，保留我自己的看法，事后我也尝试改成左对齐看了效果，我觉得不能接受我就不会改。这一点，希望他能够理解。我知道他除了是程序员，也是一个很有见地的设计师，设计师不一定能聊到一起，不一定能达成共识，但是一定可以理解另一个设计师的偏执。

## 第四轮

> 时间：2015.3.22

> 电话 HR 面试

HR 给我打了两个电话没接到，当时在洗澡……回拨因为超过晚上十点，不知道分机号打不进去。后来等了几分钟又打来了，给她解释了一下为什么没接到，HR 也挺谅解的，应该没觉得我高冷……

20 分钟的电话，问了些为什么喜欢前端、做的最能体现自己能力的项目是什么、做这个项目有什么意义之类比较正常的问题吧，没什么特别的。

## 后续

2015 年 3 月 31 日正式收到录用喜报，暑假准备去杭州无线咯！

这一路也挺横生枝节的，谢谢帮我内推的 <a href="http://weibo.com/deadhorse">@逗B码农死小马</a>，以后的衣食父母 <a href="http://weibo.com/wintercn">@寒冬winter</a>，和最早联系我并一路给予帮助的 <a href="http://weibo.com/mx006">@勾三股四</a>。

# 百度

大概是从一个月前发布了在线简历开始吧，百度 EFE 前端团队经理 <a href="http://weibo.com/forain">祖明</a> 在微博上邀请我过去“聊聊”。我想多准备准备再过去就一直拖着，天地良心真不是暗渡阿里仓的缓兵之计啊~ 然后祖明特别逗，经常在我完全不相关的微博下面留言“来我们这实习吧来我们这实习吧”~ :astonished:

拖着拖着阿里那边都差不多了，我想再不去就有把百度当备胎的嫌疑了，那这误会就实在解释不清了……之所以选择暑假去阿里，主要是因为这是最后一个有长段完整时间可以去外地的，开学之后要想去杭州实在是不大现实。最后想想反正再准备也没法一秒钟变大神了，还是赶紧去吧！

祖明说要给我安排最厉害的大神给我面试，本来只当恭维之词，结果真的把我虐惨了……

## 第一轮

> 时间：2015.3.20

> 电话技术面试

### 描述最具有代表性的项目

<a href="http://zhangwenli.com/biangua" target="_blank">变卦</a>（技术、艺术、创意的结合）

### “变卦”实现代码方面的提问

（略）

### jWebAudio 实现方面的提问

（略）

### 除了简历中的项目，还有什么项目经验？

本科研究课题是景深模糊渲染，使用 WebGL Three.js 着色器实现。

### 是不是对可视化比较感兴趣？

（表达了对 <a href="http://echarts.baidu.com" target="_blank">echarts</a> 的兴趣~）

### 从浏览器输入 URL 到页面渲染发生了什么事？

1. 浏览器接收用户输入
2. 解析域名对应 IP，发送到服务器（被打断：谁解析 IP？答：DNS。）
3. 向服务器请求网页
4. 服务器返回网页请求
5. 浏览器把得到的网页数据从字节流变成一个个 token
6. 生成 DOM tree
7. 渲染页面
8. 同时异步加载网页中 CSS、JavaScript 等外部资源

> 这部分我是照记忆中<a href="http://book.douban.com/subject/25910556/" target="_blank">《WebKit技术内幕》</a>的回答的，摘录如下。

> 1. 当用户输入网页 URL 的时候，WebKit 调用其资源加载器加载该 URL 对应的网页。
> 2. 加载器依赖网络模块建立连接，发送请求并接收答复。
> 3. WebKit 接收到各种网页或者资源的数据，其中某些资源可能是同步或异步获取的。
> 4. 网页被交给 HTML 解释器转变成一系列的词语（Token）。
> 5. 解释器根据词语构建节点（Node），形成 DOM 树。
> 6. 如果节点是 JavaScript 代码的话，调用 JavaScript 引擎解释并执行。
> 7. JavaScript 代码可能会修改 DOM 树的结构
> 8. 如果节点需要依赖其他资源，例如图片、CSS、视频等，调用资源加载器来加载它们，但是它们是异步的，不会阻碍当前 DOM 树的创建，直到 JavaScript 的资源加载并被 JavaScript 引擎执行后才继续 DOM 树的创建。

> 摘自<a href="http://book.douban.com/subject/25910556/" target="_blank">《WebKit技术内幕》</a>

>另外，网上看到<a href="http://fex.baidu.com/blog/2014/05/what-happen/" target="_blank">颗粒度非常细的回答</a>，表示不明觉厉！

### 如何验证上述 CSS、JavaScript 是异步加载的？

打开 console 看 network？

> 我现在想想，面试官大概是想说，我前面说的“同时异步加载网页中 CSS、JavaScript 等外部资源”是错的。

### 在 network 中看到很多 JavaScript 是并行发的，但是这就叫异步加载吗？

不能，在默认情况下 JavaScript 的加载是阻塞的，前面的 JavaScript 请求没有处理、执行完，是会阻塞 DOM tree 的解析等的，需要 JavaScript 代码完全获取到并执行完毕才继续。

> 一个更漂亮的回答应该再扯一点 `defer`、`async` 呀！

### CSS 的加载是异步的吗？表现在什么地方？

是的，表现在不阻塞 DOM tree 的解析，并且可以同时加载多个 CSS 文件。

> 这个答案应该是错误的。

> By default CSS is treated as a render blocking resource, which means that the browser will hold rendering of any processed content until the CSSOM is constructed. Make sure to keep your CSS lean, deliver it as quickly as possible, and use media types and queries to unblock rendering.

> In the previous section we saw that the critical rendering path requires that we have both the DOM and the CSSOM to construct the render tree, which creates an important performance implication: both HTML and CSS are render blocking resources.

> Finally, note that “render blocking” only refers to whether the browser will have to hold the initial rendering of the page on that resource. In either case, the CSS asset is still downloaded by the browser, albeit with a lower priority for non-blocking resources.

> 摘自 <a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css?hl=en" target="_blank">Render Blocking CSS</a>

### JavaScript 的多个模块怎么组织？

放在多个文件、文件夹中。

### 如何管理多个文件？

RequireJS。

> 这里我应该说一句其实对 RequireJS 了解不多的，只知道个大概……否则就会像下面一样被问惨了，猜猜好像挺有把握的，但又不想给面试官留下不懂装懂的印象……纠结~

### RequireJS 里 a 文件依赖于 b 文件，b 文件依赖于 c文件，加载顺序如何？

先加载 c，再 b，再 a。

### JavaScript 哪部分掌握得不好？

闭包、作用域。

> 问这个问题好机智啊~ 我诚实地暴露了自己的弱点，方便面试官可以一针见血地问啊……也是醉了…… :joy:

### 函数的 `this` 各种指向

在不使用 `call()`、`apply()` 的情况下，`this` 指向当前作用域，比如函数中的 `this` 指向函数，全局的 `this` 指向 `window`。

<blockquote>
<p>这个回答大错特错好么！其实面试前两天刚在<a href="http://book.douban.com/subject/3176860/" target="_blank">《Secrets of the JavaScript Ninja》</a>里面看到相关内容，总结得非常清楚，当时只道是寻常地看了过去……<p>

<h4>Invocation as a function</h4>

{% highlight js %}
function ninja(){};
ninja();
{% endhighlight %}

<p>When invoked in this manner, the function context is the global context—the <code>window</code> object.</p>

<h4>Invocation as a method</h4>

{% highlight js %}
var o = {};
o.whatever = function(){};
o.whatever();
{% endhighlight %}

<p>When we invoke the function as the <strong>method</strong> of an object, that object becomes the function context and is available within the function
via the <code>this</code> parameter.</p>

<h4>Invocation as a constructor</h4>

{% highlight js %}
function creep(){ return this; }
new creep();
{% endhighlight %}

<p>Invoking a function as a constructor is a powerful feature of JavaScript, because when a constructor is invoked, the following special actions take place:</p>

<ul>
<li>A new empty object is created.</li>
<li>This object is passed to the constructor as the <code>this</code> parameter, and thus becomes the constructor’s function context.</li>
<li>In the absence of any explicit return value, the new object is returned as the constructor's value.</li>
</ul>

<h4>Invocation with the <code>apply()</code> and <code>call()</code> methods</h4>

{% highlight js %}
function juggle() {
    var result = 0;
    for (var n = 0; n < arguments.length; n++) {
        result += arguments[n];
    }
    this.result = result;
}

var ninja1 = {};
var ninja2 = {};
juggle.apply(ninja1,[1,2,3,4]);
juggle.call(ninja2,5,6,7,8);

assert(ninja1.result === 10,"juggled via apply");
assert(ninja2.result === 26,"juggled via call"); 
{% endhighlight %}

<p>To invoke a function using its <code>apply()</code> method, we pass two parameters to <code>apply()</code>: the object to be used as the function context, and an array of values to be used as the invocation arguments. The <code>call()</code> method is used in a similar manner, except that the arguments are passed directly in the argument list rather than as an array.</p>

<p>摘自<a href="http://book.douban.com/subject/3176860/" target="_blank">《Secrets of the JavaScript Ninja》</a></p>
</blockquote>

### 下面代码的 `this` 是什么？

{% highlight js %}
function a() {
    function b() {
        console.log(this);
    }
    b();
}
a();
{% endhighlight %}

`b`。

> 如果仔细读了上一题的解释，很容易理解这里的答案应该是 `window`。

### 简历中看到对 jQuery 比较了解，有看它的源码吗？

最近有在看<a href="http://book.douban.com/subject/25823709/" target="_blank">《jQuery 技术内幕》</a>，觉得挺有帮助的，如果让我直接去读源码的话，自己没法理解这么多门道。

### 以下代码两次 `alert` 的结果分别是什么？为什么？

{% highlight js %}
var a = "Hello";
function b() {
    alert(a);
    var a = "World";
    alert(a);
}
b();
{% endhighlight %}

`"Hello"` 和 `"World"`。因为函数内部的 `a` 不是函数，所以不会 hoist 到函数顶部，因此在第一次执行的时候没有覆盖全局的变量。如果这里是 `function a(){}`，则两次都是内部 `a` 的值。

> 这里我也是有误解的，<a href="http://book.douban.com/subject/3176860/" target="_blank">《Secrets of the JavaScript Ninja》</a>里有提到这一问题，但是我当时只是一知半解以为自己懂了。我记忆中的“变量声明形式不会 hoist”，其实是针对函数说的，是说用函数表达式形式定义的函数不会 hoist 到顶部，区别于函数语句定义会 hoist。函数内的变量都会被 hoist 到顶部，在第一次 `alert` 之前，`a` 已经是 `undefined` 了，只是这时候还没被赋值为 `"World"`。所以，两次输出的结果分别是 `undefined` 和 `"World"`。

### 你理解的 Web 前端未来的发展

我认为随着 HTML、CSS 等的发展，网页上能做的事情越来越丰富了，包括更酷炫的前端呈现方式、音视频的处理，更趋向于能够做 Native 应用能做的事情了，可能以后 Web 和 Native 的边界会越来越模糊。

### 除了 Web Audio 还对 HTML5 哪部分比较熟？

在 Intel 实习期间有接触过 WebRTC。

### WebRTC 相比 Web Socket 有什么好处？

WebRTC 是专为网页上的音视频沟通定制的解决方案；Web Socket 更通用一些，当然也能实现 WebRTC 的功能，但是通用的灵活度往往意味着需要写更多的代码来实现，所以如果是音视频交流的话，当然使用 WebRTC 更合适。

> 我觉得我说得太泛泛了，愧对 Intel 的各位前辈了……

### 盒模型

（类似阿里）

### CSS selector 优先级

分为 `id > class > 标签 > 伪类` 四类，计算每个类别中的选择器个数，然后先比较 `id` 个数，越多越优先，在 `id` 个数相同的情况下，再比较 `class` 个数，以此类推。

带有 `!important` 的优先级最高，都带 `!important` 的再以之前的顺序计算优先级。

`inline > internal > external`

> 面试前正好跟室友讨论过这个问题，她还写了<a href="http://bigtinabang.com/jekyll/update/2015/02/14/css-specificity.html" target="_blank">博客</a>，快戳快戳~

### 一面小结

这次面试是暴露我最多问题的一次！当然啦，在不被淘汰的情况下，暴露问题多也是件好事，可以发现自己的问题也是一件很有价值的事。面试官果然是大神呢~

特别让我感动的一点是，面试官会在问完问题之后，给我解释所有答错的题，这也是我第一次碰到的情况呢！想到祖明最近牵头 <a href="https://github.com/baidu-ife/ife" target="_blank">IFE</a> 的事，觉得他们已经从挖掘人才走到了培养人才的一步，钦佩的同时也十分感激~

## 第二轮

> 时间：2015.3.26

> 现场面试

从学校到百度要两个多小时呢，可惜祖明不在上海啊，给我面试的是 <a href="http://weibo.com/pissang" target="_blank">pissang</a>。

面试官一上来先自我介绍，让我觉得很新鲜~ 给我看了酷炫的 <a href="http://ecomfe.github.io/echarts-x/doc/example.html" target="_blank">Echarts-X</a>。

然后介绍做个的各种项目同上，不再赘述。

### 单输出有向无环图的顺序遍历

（问到这题是因为简历中项目 jWebAudio 涉及 Web Audio 各种 node 的连接的数据结构）

主要就是用栈，我懒得具体画了。

### jWebAudio 的接口设计

按 jQuery 插件的标准接口设计来的。

### WebGL 世界坐标系、物理坐标系、窗口坐标系

（我就画了画，我也不知道这应该说什么……）

### 写过 shader 代码吗？

有，本科的研究课题是景深模糊渲染，用到 WebGL 的 shader。（略）

### 研究生阶段的研究课题

自动化的“脸萌”：人脸卡通画自动生成。（略）

### 现在流行的低模效果，对人脸怎么实现？

先用 Active Shape Models 算法定位到人脸轮廓和关键人脸部件边缘，然后沿着轮廓找到三角形的一条边，再用一定的随机算法随机到另外一个点，依次类推。三角形的颜色用三角形区域内出现频率最多的颜色填充（当时我在想 Matlab 里有个对应的词印象很深刻的啊，怎么想都想不起来了：mode）。

### 矢量处理有接触过吗？

如果是指矢量编辑软件的话，我对 InkScape 掌握得非常熟（我对前端都不好意思说掌握得非常熟~）。如果是指编程方面的话，对 SVG 有一定了解。

### 如何判断圆和直线相交？

`(Ax + By + C) / sqrt(A * A + B * B)` 计算圆心到直线距离，然后与半径比较。

### 碰撞检测的 AABB

投影到两个互相垂直的直线上，如果有交点需要进一步判断是否相交，如果没有交点可以确定一定不相交。

### 二面小结

这个也不是典型的前端面试会问的题目，因为我之前对 echarts 表现出兴趣，面试官又是专门搞这个的，所以问了这类的题目。应该说不管是这次面试还是 echarts 需要的技术栈，我自己觉得还是挺吻合的吧~ 而且确实做这种酷炫的东西挺有意思的！只是我都没体验过正规的前端工程师干的活，所以一定得先去阿里无线体验下！

# 总结

经过了三个星期的面试，心理上也是挺累的。那段期间，快递电话、垃圾电话又特别多，每次接电话总是心惊胆战的。

前端方面真的还有很多要学的。吾生而有涯，而知也无涯。我并没有那些听着让人肃然起敬的高大理想，有的，只是把值得做的事做到一丝不苟的态度。

毕业只剩一年了，我也不知道自己会去向何方，缘分何在。但无论在哪里，希望爱思考、爱设计、爱编程、爱人生的态度永远相随。 :yum:
