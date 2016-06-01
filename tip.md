---
layout: titled
nocomment: true
title: 来人，赏~
subtitle: 送羡辙一本书，让她写出更棒的作品！
---

{% include follow.html %}

我就是[羡辙]({{ site.url }}/2015/04/29/new-name/)啦！活跃的 GitHub 用户一枚，喜欢在业余时间捣腾些<a href="https://github.com/Ovilia" target="_blank">有意思的项目</a>。我写过电子书《Three.js 入门指南》，可以在<a href="http://read.douban.com/ebook/7412854">豆瓣阅读</a>和<a href="http://www.ituring.com.cn/book/1272">图灵社区</a>免费阅读。

我每年要读好多书（可以到<a href="http://book.douban.com/people/ovilia1024/collect" target="_blank">豆瓣读书</a>查看我最近读过的书），也要买很多书。平时看书以 Kindle Paperwhite 2 为主，实体书为辅。自从学校毕业后，买书的开销也就更大了~ 欢迎关注[我的豆瓣](https://www.douban.com/people/ovilia1024/)，读过的书一般都会标记一下，碰到好书一定会推荐给大家！

<div id="reading-chart" style="height: 400px"></div>

从 2015 年 7 月至 2016 年 5 月，我平均每个月收到 134 元左右的打赏，而每个月平均买书的花费（包括实体书和电子书）大约是 152 元。而买来的书我也大多认真看了，每年的阅读量大约在 80 至 100 本上下。如果你感兴趣的话，可以来看看我写的[关于读书的博客]({{ site.url }}/all/?tag=阅读)。

如果我的博客或者开源项目对你有帮助，或者觉得这个小姑娘挺有意思，或者有钱任性，愿意打赏我一本书的话，羡辙在这里先行谢过啦！



# 打赏方式

我现在想读的在<a href="http://book.douban.com/doulist/17651217/" target="_blank">我的豆瓣列表</a>中可以找到。如果你愿意的话，选一本你中意的，然后把相应的书费（只要该书在各大书店的最低价）打到我的支付宝就可以啦！或者，你觉得我想看的书太贵，你的钱包君也受不了，也完全可以众筹嘛！客官只需要转愿意打赏的金额就可以啦~

打赏完记得发送邮件至 <a href="mailto:me@zhangwenli.com">me@zhangwenli.com</a>，告知你的地址邮编收件人，就可以在圣诞节那天收到我**手绘的明信片**一枚~ 鉴于今年开始学摄影，也有可能是我拍的照片。大约有一半的人没给我发邮件，不知道是不是不想告诉我地址的关系，那就只能收不到明信片咯~

## 方法一：支付宝扫一扫

<img src="{{ site.loadingImg }}" data-src="http://zhangwenli.com/blog/img/zhifu.png" />

## 方法二：转账到我的支付宝账号

`me@zhangwenli.com`



# Q & A

### 我转给你的钱你会买别的书吗？会挪用去买吃的吗？

可能会买别的书，因为在豆瓣标记后可能又改变主意，但是不会用于买别的东西或者存起来。

事实上，每年买书的开销太高（虽然也没浪费掉），所以暂时还不用考虑打赏的钱多于买书的钱的情况。如果到每年年底，的确有剩余的话，我愿意把多出来的这部分钱以微博抽奖的方式送网友书。

### 我是学生党，我可以只打赏一部分的费用吗？也有明信片送吗？

完全可以啊，一分钱也是爱！甚至如果经费有限，不用打赏也完全没问题，或者可以发邮件告诉我本想打赏的意图，心意我领啦！

明信片如果你真的想要，给我发邮件就好，成本没几块钱，但是考虑到我需要手写，往年都要寄好多好多份非常累的，所以如果你不是很有所谓的话，节约我的劳动也是对我的爱~ 如果真的很想要，就写邮件告诉我哈！

### 我可以问你一些技术类/经验类的问题吗？

可以，我经常会收到类似的邮件，通常都会比较详细地回复，但是最好仔细描述一下你的问题。如果问“如何学前端”或者“女生学计算机会不会跟不上”这样很泛泛的问题，恕我不能给出什么有价值的回复。

### 我可以加你的微信吗？

抱歉，我对网络社交有点厌烦，不加现实中不认识的人。可以关注我的微信公众号“羡辙部落格” （xianzheblog），或者给我发邮件。

### 可以给我推荐几本好书吗？

[2016 羡辙五星推荐图书](https://www.douban.com/doulist/43673536/)，[2015 羡辙五星推荐图书](https://www.douban.com/doulist/43404688/)，[2014 羡辙五星推荐图书](https://www.douban.com/doulist/43404751/)。


<script type="text/javascript">
    var loadJs = [['{{ site.url }}/js/echarts-all.js', function() {
        // init echarts
        var chart = echarts.init($('#reading-chart')[0]);
        chart.setOption({
            title: {
                text: '羡辙读书/买书统计',
                subtext: '（2015-07 至 2016-05）'  
            },
            xAxis: {
                type: 'category',
                data: ['2015-07', '2015-08', '2015-09', '2015-10', 
                    '2015-11', '2015-12', '2016-01', '2016-02', '2016-03', 
                    '2016-04', '2016-05'],
                interval: 0
            },
            yAxis: {},
            legend: {
                show: true,
                data: ['读过书的价值', '买书费用', '收到买书赞助']
            },
            series: [{
                name: '读过书的价值',
                type: 'bar',
                smooth: true,
                z: 1,
                data: [
                    29 + 89 + 18 + 42, //7
                    45 * 6,
                    36 + 20 + 38 + 75,
                    16 + 25,
                    49 + 24 + 35,
                    49.9 + 78 + 10 + 69,//12
                    18 + 68 + 32 + 50 + 39.8,
                    98 + 240 + 21 + 25.9,
                    48 + 59.8 + 509 + 79 + 42 + 39.8,
                    18,
                    26 + 79 + 45 + 32
                ],
                markLine: {
                    data: [{
                        name: '平均',
                        type: 'average'
                    }]
                },
                itemStyle: {
                    normal: {
                        color: '#2C3E50'
                    }
                }
            }, {
                name: '买书费用',
                type: 'line',
                smooth: true,
                data: [
                    9.99 + 12 + 24.99 + 37.76,
                    1 + 89 + 112 + 25,
                    119.3 + 2,
                    3.99 + 36.82 + 42 + 24,
                    2.98 + 7.99 + 0.1 + 28,
                    125.8 + 84.05 + 24 + 1,//12
                    167.2 + 3.39 * 2,
                    1.7 + 6 + 9.04,
                    8 + 19.8,
                    153.1 + 4.5 + 164.86,
                    98.88 + 19.99 + 8.99 + 27.67 + 158 + 12
                ],
                markLine: {
                    data: [{
                        name: '平均',
                        type: 'average'
                    }]
                },
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: '#22C3AA',
                        borderWidth: 3
                    }
                },
                lineStyle: {
                    normal: {
                        width: 3
                    }
                }
            }, {
                name: '收到买书赞助',
                type: 'line',
                smooth: true,
                data: [
                    100, //7
                    32,
                    35 + 98 + 50 + 50 + 120 + 32 + 28,
                    40 + 52,
                    30 + 120,
                    18,
                    10,
                    88 + 10 + 1.3 + 6.66 + 5.21 + 10.24 + 8.88, // 2
                    74 + 10,
                    50 + 88 + 8.8,
                    69.6 + 82.7 + 26.1 + 100 + 19.9 //5
                ],
                markLine: {
                    data: [{
                        name: '平均',
                        type: 'average'
                    }]
                },
                symbolSize: 8,
                itemStyle: {
                    normal: {
                        color: '#D0648A',
                        borderWidth: 3
                    }
                },
                lineStyle: {
                    normal: {
                        type: 'dashed',
                        width: 3
                    }
                }
            }],
            tooltip: {
                show: true,
                trigger: 'axis',
                formatter: function(params) {
                    console.log(params);
                    return params[0].name + '<br/>' + params[0].seriesName +
                        '：' + Math.floor(params[0].data) + '元<br/>' + params[1].seriesName +
                        '：' + Math.floor(params[1].data) + '元<br/>' + params[2].seriesName +
                        '：' + Math.floor(params[2].data) + '元';
                }
            }
        });

        $(window).resize(chart.resize);
    }]];
</script>
