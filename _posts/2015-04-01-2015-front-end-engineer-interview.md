---
title: 2015 暑期实习生面试经历
subtitle: 阿里巴巴、百度前端工程师
time: 2015.04.01 19:44:04
layout: post
tags:
- 中文
- 总结
- 面试
- JavaScript
excerpt: 2015 年 3 月参加并通过了阿里巴巴和百度的前端面试，前后历时三周，最后选择了阿里无线事业部作为暑假实习，但是也很向往 EFE 的 echarts 哦！有机会一定去体验下~ 这篇博客一来为自己作记录，二来希望给需要的人一些经验。
---

2015 年 3 月参加并通过了阿里巴巴和百度的前端面试，前后历时三周，最后选择了阿里无线事业部作为暑假实习，但是也很向往 EFE 的 echarts 哦！有机会一定去体验下~ 这篇博客一来为自己作记录，二来希望给需要的人一些经验。

# 准备工作

最初是听实验室的同学开始讨论投这里简历那里简历，才知道暑期实习大多四月份就截止了——本来还以为还有两三个月准备实习面试呢！

就像每次考试前我们都会说“要是再给我一个月复习，我一定会考得更好”一样，几乎没有哪次的准备工作可以让我们自己觉得充分了的。大概我准备得最充分、自己也最满意的一次面试是高中参加交大自主招生时候的面试，那真是把每句话都设计好，甚至准备了“嗯嗯啊啊”这样的词来掩盖一切尽在我掌握中的真相……那时候会把从自我介绍到面试官手上的每份资料里安排好各种诱导面试官提问的点，然后还假装思索片刻才回答。每个回答都可以是夜夜失眠精心想出来的会让人眼前一亮的回答。即使是即兴的问题，有这样充分的准备，也不会很慌了，可以装得很自信地对答如流。现在回想起来，当时也真是蛮拼的。

这次之所以没有这么准备，一方面是时间实在是不够，与其把时间花在这种小聪明上，还是多复习技术的性价比更高。另外一方面好像也是因为曾经沧海难为水了吧……

## 简历

再忙也要好好准备的第一件事，当然是简历。

半年前<a href="{{ site.url }}/2014/11/17/hack-shanghai/" target="_blank">参加黑客马拉松</a>，觉得好玩就做了个<a href="http://zhangwenli.com/cv/cn.html" target="_blank">在线版的简历</a>，<a href="http://www.zhihu.com/question/23150301/answer/32496711" target="_blank">在知乎上安利了一下</a>后，竟然小火了一把，至今已获得了超过 16000 次浏览。这次准备简历的时候，简单更新了一下在线版的简历，然后用 PhotoShop 做了一页打印版的简历。之前也有考虑用 Word 做好再导出成 PDF，但是 Mac 下的 Word 实在用起来太捉急了，对齐微调什么的搞得我抓狂了，最终还是折中一下用了 PhotoShop 做，缺点就是导出的 PDF 没有超链接了，实在有点遗憾。效果如下：

<img class="single-img" src="{{ site.url }}/img/loading.gif" data-src="2015-04-01-2015-front-end-engineer-interview-1.png" />

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

略

### 对 `jWebAudio` 进一步的问题

略

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

（百度 EFE 面试经历还没整理出来，今天太晚了，回头再补咯~）
