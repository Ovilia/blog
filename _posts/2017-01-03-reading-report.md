---
title: 2016 年读书小结
time: 2017.01.03 14:22:01
layout: post
hide: true
tags:
- 中文
- 阅读
- 总结
series: 读书小结
excerpt: 2014 年开始把读书当作一个业余爱好，开始大规模广泛阅读。2014 年读了 120+ 本书，2015 年读了 80+ 本书，2016 年只读了 40+ 本书，2017 年怎么办啊！
---

2014 年开始把读书当作一个业余爱好，开始大规模广泛阅读。2014 年读了 120+ 本书，2015 年读了 80+ 本书，2016 年只读了 40+ 本书，2017 年怎么办啊！:rage:

工作以后的确没有太多时间读书了，也会因为路上三四小时的地铁太累而不想读书，地铁上我常常就想放空发呆一下。数量上的降低倒不是很要紧，关键是阅读的习惯一定要保持。

<style>
.chart {
    width: 100%;
    height: 400px;
}

#favoriate-tag {
    height: 500px;
}

@media (max-width: 600px) {
    .chart {
        height: 500px;
    }

    #general-chart {
        height: 700px;
    }
}
</style>

<div class="split"></div>

<div class="chart" id="general-chart"></div>

**在今年读的 44 本书中，主要都是四星五星的。**

一方面是因为，我一般会先看一下豆瓣评分，小于 7.5 分的我一般就会比较质疑。另一方面，如果读了个开头，觉得并不会吸引我，我也就不会坚持看下去，毕竟时间有限，而且阅读本来就该是件快乐的事，没必要为了这个折磨自己。

<div class="split"></div>

**从阅读数量和阅读时间来看，电子书和纸质书的比例都在 2:3 左右。**

电子书基本都是在 Kindle Paperwhite 2 上看的，也有很少部分在手机 Kindle 和豆瓣阅读上看。Kindle 的阅读体验很好，携带也很方便。只是早上地铁很挤，根本不允许我拿着 Kindle……这时候基本上被挤得都没心情看书，实在想看就看手机上的。有座位的时候，看纸质书也是不错的，我完全不介意带着很厚的书上下班，只要是我想读的书。我还是更喜欢纸质书多一点，尤其是排版比较走心的书，不过 Kindle 还是作为一个非常重要的补充的。

因为家里已经堆了太多读过和<del>没读过</del><ins>下个月要读</ins>的书，并且电子书直接购买到 Kindle 上马上就能读到，所以如果有电子书的话，我会优先考虑在 Kindle 上购买。如果没有电子书，或者是想收藏，或者是需要做笔记的书，才考虑购买。今年我买的所有纸质书都是在亚马逊上买的，打折力度最大。为了抑制我买书的冲动，一般有想买的书，我会先放在购物车里，等打折的时候一起再买。但即使这样，一年买的纸质书也有 1900+ 元……这就好比 steam 愿望清单里堆积了一堆游戏，并不能拯救你的钱包君，甚至恰恰是它的头号杀手！

<div class="split"></div>

<img class="post-img" src="{{ site.loadingImg }}" data-src="{{ site.url }}/img/post/2017-01-04-reading-report-01.jpg" />**而在购买书籍方面，纸质书的剁手程度明显高于电子书。**购买的纸质书本数是电子书的 2.5 倍，而价格更是超出了 10 倍。

今年我其实已经减少购买用来收藏的国学类的书籍了，也买了一些不值得看第二遍的书，主要是没有图书馆的资源，而且工作以后更有钱了……（摊手）家里的书橱真的已经满了，现在连公司工位书橱也被我放满了（虽然很少有机会在公司看）……2017 年我真的要忍住剁手了，要买也要多买电子书！

此外，还趁圣诞打折的时候，买了亚马逊 Unlimited 160 元两年。虽然感觉书不多，质量也一般，但这个价格本来也是用得掉的，应该不亏。

<div class="split"></div>

**靠打赏买书的愿望还没有一定距离。**

买书花费 2100+ 元；微信公众号四月份开发打赏后，收到共计 950+ 元的打赏，加上支付宝收到的买书金额，总计 1700 元不到。希望今年能收到收支平衡，我的文章和读书笔记，甚至透过文字让不认识的人感受到的我的为人，如果能够以这样的形式得到认可，对我来说是一件很有成就感的事。

如果你感兴趣，可以在<a href="{{ site.url }}/tip">这里</a>了解更多。


<div class="split"></div>

<div class="chart" id="favoriate-tag"></div>

今年读过的书的标签和一直以来感兴趣的好像相差并不大。哲学、心理学、设计等确实是我比较感兴趣的话题。

在上面这个图中，文字的大小不仅考虑了包含该标签的书的本书，也考虑了书本身的热门程度。也就是说，一本热门的书，更可能被更多人打标签。因此，在计算权重的时候，用一本书下的标签数量除以这本书所有的标签数量，得到相对的权重，以此获得更接近感兴趣话题的标签。



<script type="text/javascript">
    var loadJs = [[['{{ site.url }}/js/echarts.3.3.2.js', 'https://cdn.rawgit.com/ecomfe/echarts-wordcloud/master/dist/echarts-wordcloud.js'], function() {
        var charts = [];

        var generalChart = echarts.init(document.getElementById('general-chart'));
        generalChart.setOption({
            baseOption: {
                tooltip: {},
                title: [{
                    text: '2016 买书与评分统计',
                    left: 'center'
                }, {
                    text: '2016 年买书花费\n2101.06 元',
                    left: '71%',
                    top: '65%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 15
                    },
                    backgroundColor: 'rgba(210, 250, 220, 0.5)'
                }, {
                    text: '读完\n44 本',
                    left: '27.5%',
                    top: '35%',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    textStyle: {
                        fontSize: 20
                    }
                }],
                textStyle: {
                    fontSize: 14
                },
                series: [{
                    color: ['#d0648a', '#e593b0'],
                    type: 'pie',
                    startAngle: 23,
                    radius: ['42%', '49%'],
                    center: ['28%', '40%'],
                    data: [{
                        name: '纸质书读完',
                        value: 25
                    }, {
                        name: '电子书读完',
                        value: 19
                    }],
                    label: {
                        normal: {
                            formatter: '{b}：\n{c}本'
                        }
                    }
                }, {
                    color: ['#d0648a', '#e593b0'],
                    type: 'pie',
                    startAngle: 38,
                    radius: ['51%', '53%'],
                    center: ['28%', '40%'],
                    data: [{
                        name: '纸质书用时',
                        value: 60.9
                    }, {
                        name: '电子书用时',
                        value: 39.1
                    }],
                    label: {
                        normal: {
                            formatter: '{b}：\n{c}%'
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 40
                        }
                    }
                }, {
                    color: ['#d0648a', '#e593b0'],
                    type: 'pie',
                    startAngle: 180,
                    radius: ['18%', '28%'],
                    center: ['65%', '75%'],
                    data: [{
                        name: '购买纸质书',
                        value: 51
                    }, {
                        name: '购买电子书',
                        value: 20
                    }],
                    label: {
                        normal: {
                            formatter: '{b}：\n{c}本'
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 80
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.8
                        }
                    }
                }, {
                    color: ['#347268', '#22ccae'],
                    type: 'pie',
                    startAngle: 180,
                    radius: ['30%', '32%'],
                    center: ['71%', '70%'],
                    data: [{
                        name: '纸质书支出',
                        value: 1917.31
                    }, {
                        name: '电子书支出',
                        value: 183.75
                    }],
                    label: {
                        normal: {
                            formatter: '{b}：\n{c}元'
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 40
                        }
                    }
                }, {
                    color: ['#347268', '#0e8a77', '#22a994', '#22ccae', '#63cdb9'],
                    type: 'pie',
                    radius: ['20%', '45%'],
                    center: ['28%', '40%'],
                    startAngle: 0,
                    data: [{
                        name: '一颗星',
                        value: 2
                    }, {
                        name: '两颗星',
                        value: 1
                    }, {
                        name: '三颗星',
                        value: 3
                    }, {
                        name: '四颗星',
                        value: 21
                    }, {
                        name: '五颗星',
                        value: 17
                    }],
                    label: {
                        normal: {
                            formatter: '{b}：\n{c}本'
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 30
                        }
                    },
                    itemStyle: {
                        normal: {
                            opacity: 0.9
                        }
                    }
                }, {
                    name: '公众号打赏',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#22C3AA'
                        }
                    },
                    symbolSize: 6,
                    data: [974.39 - 23.68],
                    stack: 'income',
                    barWidth: 30,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter: function(obj) {
                                return obj.value + '元';
                            }
                        }
                    }
                }, {
                    name: '送羡辙书',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#AEE2D9'
                        }
                    },
                    symbolSize: 6,
                    data: [733.43],
                    stack: 'income',
                    barWidth: 30,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter: function(obj) {
                                return obj.value + '元';
                            }
                        }
                    }
                }, {
                    name: '实际买书花费',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: '#D0648A'
                        }
                    },
                    data: [2101.06],
                    barWidth: 30,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside',
                            formatter: function(obj) {
                                return obj.value + '元';
                            }
                        }
                    }
                }],
                xAxis: {
                    show: false,
                    axisTick: {
                        show: false
                    },
                    inverse: true
                },
                yAxis: [{
                    show: false,
                    interval: 0,
                    nameLocation: 'end',
                    data: [
                        ' '
                    ],
                    axisTick: {
                        show: false
                    }
                }],
                grid: [{
                    left: '60%',
                    bottom: '60%',
                    top: 100,
                    right: 20
                }],
                legend: {
                    show: true,
                    data: ['公众号打赏', '送羡辙书', '实际买书花费'],
                    right: 15,
                    top: 20,
                    align: 'right',
                    orient: 'vertical'
                }
            },
            media: [{
                query: {
                    maxWidth: 600
                },
                option: {
                    title: [{
                        left: 'center'
                    }, {
                        left: '50%',
                        top: '57%'
                    }, {
                        left: '48%',
                        top: '22%'
                    }],
                    series: [{
                        radius: ['42%', '48%'],
                        center: ['50%', '25%']
                    }, {
                        radius: ['51%', '53%'],
                        center: ['50%', '25%'],
                        labelLine: {
                            normal: {
                                length: 40
                            }
                        }
                    }, {
                        startAngle: 180,
                        radius: ['28%', '38%'],
                        center: ['50%', '60%'],
                        labelLine: {
                            normal: {
                                length: 30
                            }
                        }
                    }, {
                        startAngle: -90,
                        radius: ['40%', '42%'],
                        center: ['50%', '60%'],
                        labelLine: {
                            normal: {
                                length: 10
                            }
                        }
                    }, {
                        radius: ['25%', '45%'],
                        center: ['50%', '25%'],
                        labelLine: {
                            normal: {
                                length: 30
                            }
                        }
                    }],
                    grid: [{
                        left: 20,
                        bottom: 30,
                        top: '80%',
                        right: 20
                    }],
                    legend: {
                        left: 'center',
                        bottom: 5,
                        align: 'left',
                        orient: 'horizontal'
                    }
                }
            }]
        });
        charts.push(generalChart);

        var favoriateChart = echarts.init(document.getElementById('favoriate-tag'));
        var colors = ['#555', '#fff'];
        var rightBook = '{{ site.url}}/img/post/2017-01-04-reading-report-right.png';
        var leftBook = '{{ site.url}}/img/post/2017-01-04-reading-report-left.png';

        var bookBg = '{{ site.url}}/img/post/2017-01-04-reading-report-book.png';

        var tagsAll = '{{ site.url}}/media/post/2017-01-04-reading-report-tags.json';
        var tagsRead = '{{ site.url}}/media/post/2017-01-04-reading-report-tagsRead.json';

        favoriateChart.setOption({
            title: {
                text: '羡辙豆瓣读书 tag',
                bottom: 0,
                left: 'center'
            },
            series: [{
                type: 'wordCloud',
                gridSize: 20,
                sizeRange: [12, 45],
                rotationRange: [0, 0],
                shape: 'circle',
                data: [],
                left: 50,
                width: '45%',
                top: 60,
                height: '72%',
                textStyle: {
                    normal: {
                        color: '#555'
                    },
                    emphasis: {
                        color: '#109b85'
                    }
                }
            }, {
                type: 'wordCloud',
                gridSize: 20,
                sizeRange: [12, 45],
                rotationRange: [0, 0],
                shape: 'circle',
                data: [],
                left: '52%',
                width: '45%',
                top: 60,
                height: '72%',
                textStyle: {
                    normal: {
                        color: colors[1]
                    },
                    emphasis: {
                        color: '#109b85'
                    }
                }
            }, {
                type: 'scatter',
                data: [],
                color: [colors[0]],
                name: '所有读过想读的书'
            }, {
                type: 'scatter',
                data: [],
                color: [colors[1]],
                name: '2016读过的书'
            }],
            legend: {
                data: ['所有读过想读的书', '2016读过的书'],
                show: true
            },
            xAxis: {
                type: 'value',
                show: false
            },
            yAxis: {
                type: 'value',
                show: false
            },
            graphic: {
                elements: [{
                    type: 'image',
                    style: {
                        image: bookBg,
                        width: $('#favoriate-tag').width() - 60,
                        x: 30,
                        y: 55,
                        height: $('#favoriate-tag').height() - 100
                    }
                }]
            }
        });
        var tagsAllData = [];
        var tagsReadData = [];
        $.getJSON(tagsAll, function (data) {
            for (var name in data) {
                tagsAllData.push({
                    name: name,
                    value: data[name]
                });
            }

            $.getJSON(tagsRead, function (data) {
                for (var name in data) {
                    tagsReadData.push({
                        name: name,
                        value: data[name]
                    });
                }
            
                loadImage();
            });
        });
        // load mask image
        function loadImage() {
            var leftImage = new Image();
            leftImage.onload = imageLoaded;
            leftImage.src = leftBook;
            
            var rightImage = new Image();
            rightImage.onload = imageLoaded;
            rightImage.src = rightBook;
            
            var loadedCnt = 0;
            function imageLoaded() {
                ++loadedCnt;
                if (loadedCnt === 2) {
                    favoriateChart.setOption({
                        series: [{
                            maskImage: leftImage,
                            data: tagsAllData
                        }, {
                            maskImage: rightImage,
                            data: tagsReadData
                        }]
                    });
                }
            }
        }

        window.onresize = function () {
            for (var i = 0; i < charts.length; ++i) {
                charts[i].resize();
            }
        };
    }]];
</script>
