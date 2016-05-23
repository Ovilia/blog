---
title: Using ECharts with Angular.js
time: 2016.05.23 12:16:52
layout: post
tags:
- AngularJs
- ECharts
excerpt: <a href="http://echarts.baidu.com">ECharts</a> is a powerful JavaScript library to make amazing charts. This post introduces how to use ECharts in <a href="http://stackoverflow.com/questions/13329485/mvw-what-does-it-stand-for"><em>MVW</em></a> style.
---

> [ECharts](http://echarts.baidu.com) is a powerful JavaScript library to make amazing charts. This post introduces how to use ECharts in [*MVW*](http://stackoverflow.com/questions/13329485/mvw-what-does-it-stand-for) style.

# ECharts

<div id="intro-chart" class="demo"></div>

ECharts uses a configurable `option` object to control most of its data and visual settings. A typical way to use ECharts after including `echarts.js` in HTML is as follows.

~~~js
var dom = document.getElementById('intro-chart');
var chart = echarts.init(dom);

chart.setOption({
    backgroundColor: '#08263a',
    title: {
        text: 'ECharts Example',
        textStyle: {
            color: '#b1cfa5',
            fontSize: 18
        },
        left: 'center',
        top: 25
    },
    xAxis: {
        show: false,
        data: ...
    },
    ...
    series: [{
        type: 'bar',
        data: ...,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                shadowBlur: 10,
                shadowColor: '#111'
            }
        },
        ...
    }]
});
~~~

To use ECharts with Angular, a very basic requirement is to bind chart option with ECharts instance.

# HTML

Suppose we have an HTML containing multiple elements for ECharts instances.

~~~html
<div class="dash-chart" eoption="vm.eoption.a"></div>
<div class="dash-chart" eoption="vm.eoption.b"></div>
<div class="dash-chart" eoption="vm.eoption.c"></div>
~~~

Here, `eoption` is a user-defined attribute, which could be anything you like.

# Controller

In Angular controller, we define options as follows. To make the demo simple enough, we only set a title in option.

~~~js
function MyController() {
    var vm = this;
    vm.eoption = {
        a: {
            title: {
                text: 'This is a'
            }
        },
        b: {
            title: {
                text: 'This is b'
            }
        },
        c: {
            title: {
                text: 'This is c'
            }
        }
    };
}
~~~

# Directive

In Angular directive, we watch each charts and updates option when attribute changes.

~~~js
function dashChart() {
    return {
        restrict: 'C',
        link: function (scope, elem, attrs) {
            // directive is called once for each chart
            var myChart = echarts.init(elem[0]);

            // listen to option changes
            if (attrs.eoption) {
                scope.$watch(attrs['eoption'], function() {
                    var option = scope.$eval(attrs.eoption);
                    if (angular.isObject(option)) {
                        myChart.setOption(option);
                    }
                }, true); // deep watch
            }
        }
    }
}
~~~

Note that we set the third parameter of `scope.$watch` to be `true`, which makes sure we get notified when any descendant of `eoption` changes.

To watch the change event of DOM attribute, a more straightforward way may be using Angular's `attrs.$observe`. Keller used `attrs.$observe` to watch DOM atrribute[^keller], but deep watching is not enabled in his example.

`attrs.$observe` doesn't support the third parameter stating if enables deep watching. **This means it will be triggered only when you set `vm.eoption.a` to a new value, but not when `vm.eoption.a.title` changes.**[^watch-vs-observe]

Considering changing part of option is a very common need, and ECharts suggests calling `setOption()` with minimal changed option, using `scope.$watch` seems to be a better choice over `attrs.$observe`.

# Changing Data

To demonstrate data-binding effect, I set the title to be current time, and update it every second.

~~~js
function MyController($interval, dateFilter) {
    var vm = this;

    vm.eoption = {
        a: {
            title: {
                text: ''
            }
        }
    };

    // update data every second
    $interval(function() {
        vm.echartsOption.userSessionChart.title.text =
            dateFilter(new Date(), 'yyyy-d-M HH:mm:ss');
    }, 1000);
}
~~~

You should see the Canvas is updating with current time.



[^keller]: [使用 angular 封装 echarts](http://www.kellerblog.cc/angular-echarts.html)
[^watch-vs-observe]: [AngularJS: Difference between the $observe and $watch methods](http://stackoverflow.com/questions/14876112/angularjs-difference-between-the-observe-and-watch-methods)



<script type="text/javascript">
var loadJs = [['{{ site.url }}/js/echarts-all.js', function() {

    var charts = [];
    var introChart = echarts.init(document.getElementById('intro-chart'));
    charts.push(introChart);

    var xAxisData = [];
    var data = [];
    for (var i = 0; i < 50; i++) {
        xAxisData.push(i);
        data.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5)
    }

    introChart.setOption({
        backgroundColor: '#08263a',
        title: {
            text: 'ECharts Example',
            textStyle: {
                color: '#b1cfa5',
                fontSize: 18
            },
            left: 'center',
            top: 25
        },
        xAxis: {
            show: false,
            data: xAxisData
        },
        visualMap: {
            show: false,
            min: 0,
            max: 50,
            dimension: 0,
            inRange: {
                color: ['#4a657a', '#308e92', '#b1cfa5', '#f5d69f', '#f5898b', '#ef5055']
            }
        },
        yAxis: {
            axisLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#4a657a'
                }  
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#08263f'
                }
            },
            axisTick: {
                show: false
            }
        },
        series: [{
            type: 'bar',
            data: data,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    shadowBlur: 10,
                    shadowColor: '#111'
                }
            },
            animationEasing: 'elasticOut',
            animationEasingUpdate: 'elasticOut',
            animationDelay: function (idx) {
                return idx * 20;
            },
            animationDelayUpdate: function (idx) {
                return idx * 20;
            }
        }]
    });



    $(window).resize(function() {
        for (var cid = 0, clen = charts.length; cid < clen; ++cid) {
            charts[cid].resize();
        }
    });
}]];

</script>
