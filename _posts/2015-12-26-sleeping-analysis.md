---
title: 这些年失的眠
subtitle: 两年睡眠数据统计
time: 2015.12.26 14:46:21
layout: post
tags:
- 中文
- 回顾
- 统计
- 失眠
excerpt: 昨天写年度总结，突然想起来以前安卓手机上有两年多的 <a href="https://mysleepbot.com/" target="_blank">SleepBot</a> 睡眠数据，今天终于整理好，用 Node.js <a href="https://gist.github.com/Ovilia/0cfe77f3ea69bf6fb09c" target="_blank">预处理数据</a>，用 <a href="http://echarts.baidu.com" target="_blank">ECharts</a> 画成图表了。数据是从网页版 <a href="https://mysleepbot.com/" target="_blank">SleepBot</a> 导出的，我没想到它非常贴心地提供了 CSV 数据下载，实在非常感动！
---

昨天写年度总结，突然想起来以前安卓手机上有两年多的 <a href="https://mysleepbot.com/" target="_blank">SleepBot</a> 睡眠数据，今天终于整理好，用 Node.js <a href="https://gist.github.com/Ovilia/0cfe77f3ea69bf6fb09c" target="_blank">预处理数据</a>，用 <a href="http://echarts.baidu.com" target="_blank">ECharts</a> 画成图表了。

数据是从网页版 <a href="https://mysleepbot.com/" target="_blank">SleepBot</a> 导出的，我没想到它非常贴心地提供了 CSV 数据下载，实在非常感动！

从 2013 年 3 月起，我使用 SleepBot 跟踪睡眠数据，安卓手机里下载了 App，睡觉的时候点一下开始睡觉，起床的时候点一下起床了。期间由于换手机之类的原因中断过一段时间，直到今年 8 月份换成 SleepBetter，但是这个应用只是比较好看，功能性上远不如 SleepBot，所以在买了 Pro 版用了半个月之后失望地弃用了。

SleepBot 数据的一个缺点就在于记录睡觉和起床时间是手动的，考虑到我失眠非常严重，我也不知道自己睡着的真实时间，有时候失眠时间比较久我会起来重置一下再睡。所以以下数据存在一定误差，通常意味着统计的睡眠时间早于实际的睡眠时间。

为此，我买了 Misfit Flash 手环，在挑选的时候，主要看中的是 API 的开放程度，其次是美观。使用 Misfit 两个月了，它会自动记录睡眠时间，但是有时候躺床上看书的时候也会被误判成睡觉，所以如果是这时候，睡觉前可以手动点一下准备睡觉。总体而言，我对 Misfit 还是比较满意的，上周更新的时候突然不能更新了，导致我一周的数据有点混乱，不过客服很给力，一直跟我邮件交流，最后终于解决了这个问题。最近 Misfit 又更新了更多 API，准备等我数据多一点的时候做一点统计。

以下统计基于的数据是从 2013 年 3 月到 2015 年 8 月的 856 条 SleepBot 记录。

<div id="weekly-chart" style="height: 500px;"></div>

上图是这两年多以来的睡觉起床时间分布图，圆圈的大小表示记录条数的多少，虚线表示平均。需要注意的是，为了便于理解，在这张图表中，睡觉时间不管是 23:59 还是 00:01，都是以起床那天是星期几决定横坐标的。

平均睡觉时间是凌晨 1:10，对这个数据我有点意外，虽然有时候是会两三点睡，但是我以为平均下来也就 12 点的样子。平均起床时间是 8:34，倒也比我预想的早，或许是因为近期起得晚，而最近的两个月没有计算在内。

周五、周六、周日通常睡得晚，想着休息日就晚点睡，难得回家可以看电视之类的。尤其是周六晚上（最右边一列，因为起床是周日，下略），通常觉得是最后一天休息的日子，所以会看电视看到比较晚。另外一个有意思的发现是，原来周四都会睡得比较早，大概想着马上周末了，心情好开心，早早就愿意睡觉了。周日晚上（最左上角）通常是住学校的，家里睡了两天席梦思大床，来学校普遍睡得晚了。

再看起床时间。即使周日晚上睡得晚，周一早上也是工作日中起得早的，我感觉周一还是比较有动力有拼劲的，可能想着早点起床去实验室干活。等到了周四周五就越来越想放弃了，哎，还是让我多睡一会儿吧！相应地，周一也比较乖乖早睡，所以周二早上就起得来。而周三下午往往要汇报进度，所以上午赶紧起床！周六周日理所当然起得晚，但是有意思的是，周六在九点半左右起的概率比较大，而周日则分布比较平均，想来好笑，这大概就是为什么我妈每次都说她没买早饭的时候我起得早，买了早饭又睡过去了。

下面，我们来看一个更有意思的统计——一周中的哪天更容易失眠？

<div id="sleepless-chart" style="height: 400px"></div>

统计发现，原来失眠和周几息息相关，住在家里舒服的床上（周五、周六）失眠的概率明显小于在学校睡觉。尤其是周五睡得最好，睡了一周硬板床，回家一躺下就能睡着了哈哈~ 相反，从家里到学校的那天——周日晚上的失眠率是最高的。相比之下，周四的失眠率很低，睡眠就比较好，和上面一张图得到的结论比较统一。

看来，我失眠的主要原因大概还是工作日压力太大了呀~

最后，我分析了这两年的睡眠时间变化。

<div id="monthly-chart" style="height: 400px"></div>

日记本不在身边，我只能根据微博时间线想起一些大概的影响因素。

比如 2015 年 1 月的这个最明显的睡觉和起床时间都严重延后的现象，大概是因为当时在赶着写研究的小论文吧。

另外一个有趣的时间点是 2013 年 7 月，睡得晚还记得早，平均睡眠时间都不满 6 小时。翻了下微博，发现是在赶动画课程大作业。另外，还可能和当时在写<a href="http://www.ituring.com.cn/book/1272" target="_blank">《Three.js 入门指南》</a>有关。

看来睡眠的波动性还挺大的，睡得好的时候和差的时候的每月平均值都可以差到 3 个小时之多。

暂时就分析到这里，等以后想到有意思的东西再研究看看。

<script type="text/javascript">
    var clrPrimary = '#22C3AA';
    var clrContrast = '#D0648A';

    var loadJs = [['{{ site.url }}/js/echarts-all.js', function() {

        var minHour = -11;
        var maxHour = 2;

        var sleepBin = [
            [ 34, 38, 19, 9, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 15 ],
            [ 40, 25, 19, 3, 3, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 27 ],
            [ 41, 31, 20, 3, 3, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 20 ],
            [ 50, 37, 10, 8, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 14 ],
            [ 58, 25, 15, 6, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15 ],
            [ 29, 46, 18, 8, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 16 ],
            [ 27, 47, 34, 1, 3, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7 ]];
        var awakeBin = [
            [ 0, 0, 0, 0, 0, 1, 13, 9, 45, 24, 19, 6, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
            [ 0, 0, 0, 0, 0, 3, 25, 19, 40, 14, 13, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 9, 21, 55, 17, 11, 4, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 12, 21, 59, 19, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 6, 18, 51, 23, 15, 7, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
            [ 0, 0, 0, 0, 0, 0, 1, 7, 26, 51, 25, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 1, 0, 0, 0, 0, 2, 6, 22, 31, 29, 29, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]];
        var sleepBinData = [];
        var awakeBinData = [];
        for (var did = 0; did < 7; ++did) {
            for (var hid = 0; hid < 24; ++hid) {
                var hour = hid < 12 ? -hid : 24 - hid;
                if (hour > maxHour || hour < minHour) {
                    continue;
                }
                if (sleepBin[did][hid] > 0) {
                    sleepBinData.push([did, hour, sleepBin[did][hid]]);
                }
                if (awakeBin[did][hid] > 0) {
                    awakeBinData.push([did, hour, awakeBin[did][hid]]);
                }
            }
        }

        var weeklySleep = [1.29, 0.93, 1.08, 1, 1.06, 1.19, 1.67];
        var weeklyAwake = [7.89, 8.35, 7.92, 8.51, 8.55, 9.49, 9.28];

        var yAxis = {
            type: 'value',
            axisLine: {
                show: false
            },
            name: '小时',
            min: minHour,
            max: maxHour,
            splitNumber: maxHour - minHour,
            axisLabel: {
                formatter: function (h) {
                    h = -Math.floor(h);
                    if (h < 0) { return h + 24 + ':00';
                    } else { return h + ':00';
                    }
                },
                margin: 20
            },
            splitLine: {
                lineStyle: {
                    color: '#ddd'
                }
            }
        };

        var weekChart = echarts.init(document.getElementById('weekly-chart'));
        weekChart.setOption({
            title: {
                text: '睡觉起床时间分布'
            },
            grid: {
                x: 60,
                x2: 30,
                y: 40,
                y2: 40
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    var name = ['一', '二', '三', '四', '五', '六', '日'];
                    var day = '周' + name[params.data[0]];

                    var h = -Math.floor(params.data[1]);
                    if (h < 0) {
                        h = h + 24;
                    }

                    if (params.seriesName === '平均睡觉' || params.seriesName === '平均起床') { var hours = -params.data[1] < 0
                            ? 24 - params.data[1] : -params.data[1];
                        var hour = Math.floor(hours);
                        var min = Math.floor((hours - hour) * 60) + '';
                        if (min.length < 2) {
                            min = '0' + min;
                        }
                        return day + params.seriesName + '时间：' + hour + ':' + min;
                    } else {
                        return day + '在 ' + h + ':00-' + h + ':59<br />'
                            + params.seriesName + '次数：' + params.data[2] + '/856';
                    }
                }
            },
            legend: {
                data: ['睡觉', '起床'],
                x: 'right'
            },
            calculable: true,
            yAxis: [yAxis],
            xAxis: [{
                type: 'value',
                axisLine: {
                    show: false
                },
                name: '周几',
                axisLabel: {
                    formatter: function (d) {
                        var name = ['一', '二', '三', '四', '五', '六', '日'];
                        return '周' + name[d];
                    },
                    interval: 0,
                    margin: 20
                }
            }],
            series: [{
                name: '睡觉',
                type: 'scatter',
                data: sleepBinData,
                symbolSize: function (value) {
                    var ratio = window.innerWidth > 800 ? 1.8 : 3;
                    return Math.round(value[2] / ratio);
                },
                symbol: 'emptyCircle',
                itemStyle: {
                    normal: {
                        color: clrPrimary
                    }
                }
            }, {
                name: '起床',
                type: 'scatter',
                data: awakeBinData,
                symbolSize: function (value) {
                    return Math.round(value[2] / 1.8);
                },
                symbol: 'emptyCircle',
                itemStyle: {
                    normal: {
                        color: clrContrast
                    }
                }
            }, {
                name: '平均睡觉',
                type: 'line',
                data: (function () {
                    var r = [];
                    for (var did = 0; did < 7; ++did) {
                        r.push([did, -weeklySleep[did]]);
                    }
                    return r;
                })(),
                itemStyle: {
                    normal: { color: clrPrimary, lineStyle: {
                        type: 'dashed' }
                    }
                }
            }, {
                name: '平均起床',
                type: 'line',
                data: (function () {
                    var r = [];
                    for (var did = 0; did < 7; ++did) {
                        r.push([did, -weeklyAwake[did]]);
                    }
                    return r;
                })(),
                itemStyle: {
                    normal: {
                        color: clrContrast,
                        lineStyle: {
                            type: 'dashed'
                        }
                    }
                }
            }]
        });




        var monthly = [['2015-9',1.44,9],['2015-8',1.48,8.91],['2015-6',0.99,8],['2015-5',0.63,8.64],['2015-4',1.67,8.98],['2015-3',1.32,8.53],['2015-2',1.02,8.45],['2015-1',2.39,9.84],['2014-12',1.2,8.92],['2014-11',1,8.71],['2014-10',0.45,7.94],['2014-9',0.98,8.23],['2014-8',0.35,8.09],['2014-7',0.53,8.18],['2014-6',0.94,8.47],['2014-5',1.48,8.39],['2014-4',1.1,8.91],['2014-3',1.1,8.65],['2014-2',0.96,8.62],['2014-1',1.61,9.17],['2013-12',1.82,8.11],['2013-11',1.55,8.98],['2013-10',0.6,8.39],['2013-9',1.07,7.42],['2013-8',0.8,8.24],['2013-7',2.13,8],['2013-6',1.56,8.37],['2013-5',1.2,9.2],['2013-4',0.69,8.9],['2013-3',0.86,8.89],['2013-3',0.46,8.35]];
        var monthlyX = [];
        var monthlySleepData = [];
        var monthlyAwakeData = [];
        var monthlyDurData = [];
        for (var mid = monthly.length - 1; mid >= 0; --mid) {
            monthlyX.push(monthly[mid][0]);
            monthlySleepData.push(-monthly[mid][1]);
            monthlyAwakeData.push(-monthly[mid][2]);
            monthlyDurData.push(monthly[mid][2] - monthly[mid][1]);
        }

        var monthChart = echarts.init(document.getElementById('monthly-chart'));
        monthChart.setOption({
            title: {
                text: '睡觉起床时间分布'
            },
            grid: {
                x: 60,
                x2: 60,
                y: 40,
                y2: 40
            },
            legend: {
                data:['睡觉', '起床', '睡眠时长'],
                x: 'right'
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    function formatTime(h) {
                        var hours = -h < 0 ? 24 - h : -h;
                        var hour = Math.floor(hours);
                        var min = Math.floor((hours - hour) * 60) + '';
                        if (min.length < 2) {
                            min = '0' + min; 
                        }
                        return hour + ':' + min;
                    }

                    return params[0][1] + '<br />平均' + params[0][0] + '时间：'
                        + formatTime(params[0][2]) + '<br />平均' + params[1][0]
                        + '时间：' + formatTime(params[1][2]) + '<br />睡眠时长：'
                        + formatTime(params[1][2] - params[0][2]);
                },
                axisPointer: {
                    lineStyle: {
                        color: '#999'
                    }
                }
            },
            yAxis: [
                yAxis, {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    min: 0,
                    max: 10,
                    name: '时长',
                    axisLabel: {
                        formatter: function (h) {
                            h = Math.floor(h);
                            return h + ' 小时';
                        },
                        margin: 10
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            xAxis: [{
                type: 'category',
                data: monthlyX,
                axisLine: {
                    show: false
                },
                name: '月份',
                axisLabel: {
                    margin: 20
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: '睡觉',
                type: 'line',
                data: monthlySleepData,
                symbol: 'emptyCircle',
                itemStyle: {
                    normal: {
                        color: clrPrimary
                    }
                }
            }, {
                name: '起床',
                type: 'line',
                data: monthlyAwakeData,
                symbol: 'emptyCircle',
                itemStyle: {
                    normal: {
                        color: clrContrast
                    }
                }
            }, {
                name: '睡眠时长',
                type: 'bar',
                data: monthlyDurData,
                itemStyle: {
                    normal: {
                        color: 'rgba(150, 150, 150, 0.3)'
                    },
                    emphasis: {
                        color: 'rgba(150, 150, 150, 0.5)'
                    }
                },
                yAxisIndex: 1
            }]
        });

        var labelStyle = {
            color: clrPrimary,
            label: {
                show: true,
                position: 'insideTop',
                textStyle: {
                    fontSize: 15
                },
                formatter: function (params) {
                    return Math.floor(params.value * 1000) / 10 + '%';
                }
            }
        };
        var sleeplessBin = [17, 12, 13, 6, 5, 9, 20];
        var dayOfWeekBin = [122, 121, 123, 122, 122, 123, 123];
        var sleepData = [];
        for (var did = 0; did < 7; ++did) {
            sleepData.push(sleeplessBin[did] / dayOfWeekBin[did]);
        }

        var sleeplessChart = echarts.init(document.getElementById('sleepless-chart'));
        sleeplessChart.setOption({
            title: {
                text: '最容易失眠的夜晚'
            },
            tooltip: {
                formatter: function (params) {
                    return params[0] + '晚上失眠概率 '
                        + Math.floor(params[2] * 1000) / 10 + '%';
                }
            },
            grid: {
                x: 30,
                x2: 30,
                y: 40,
                y2: 40
            },
            yAxis: [{
                type: 'value',
                axisLine: {
                    show: false
                },
                axisLabel: {
                    formatter: function (v) {
                        return Math.floor(v * 100) + '%';
                    }
                },
                splitLine: {
                    show: false
                }
            }],
            xAxis: [{
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                axisLine: {
                    show: false
                },
                name: '星期',
                axisLabel: {
                    margin: 20
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }
            }],
            series: [{
                name: '失眠日数',
                type: 'bar',
                data: sleepData,
                itemStyle: {
                    normal: labelStyle,
                    emphasis: labelStyle
                }
            }]
        });

        $(window).resize(function () {
            weekChart.resize();
            monthChart.resize();
            sleeplessChart.resize();
        });
    }]];
</script>