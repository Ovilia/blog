window.getScoreChart = function (domId) {
    var chart = echarts.init(document.getElementById(domId));


    var colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
    var bgColor = '#2E2733';

    var itemStyle = {
        star5: {
            normal: {
                color: colors[0]
            }
        },
        star4: {
            normal: {
                color: colors[1]
            }
        },
        star3: {
            normal: {
                color: colors[2]
            }
        },
        star2: {
            normal: {
                color: colors[3]
            }
        }
    };

    var data = [{
        name: '虚构',
        itemStyle: {
            normal: {
                color: colors[1]
            }
        },
        children: [{
            name: '小说散文',
            children: [{
                name: '5☆',
                children: [{
                    name: '三体I'
                }, {
                    name: '三体II'
                }, {
                    name: '三体III'
                }, {
                    name: '杀死一个程序员'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '浮舟'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '柏拉图和鸭嘴兽一起去酒吧'
                }, {
                    name: '红楼梦迷案'
                }, {
                    name: '梦之浮桥'
                }]
            }]
        }, {
            name: '绘画',
            children: [{
                name: '5☆',
                children: [{
                    name: '角落·熬路水彩旧画'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '水彩风景专业技法'
                }, {
                    name: '手绘城市：\n教你最实用的\n建筑景观速写技法'
                }, {
                    name: '跟菲利大叔学手绘：\n创意速写'
                }]
            }]
        }]
    }, {
        name: '非虚构',
        itemStyle: {
            normal: {
                color: colors[2]
            }
        },
        children: [{
            name: '社科杂书',
            children: [{
                name: '5☆',
                children: [{
                    name: '游戏设计艺术',
                }, {
                    name: '小脚与西服'
                }, {
                    name: '躺着赚钱'
                }, {
                    name: '宇宙信息图'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '1987，我们的红楼梦'
                }, {
                    name: '大奥日本',
                }, {
                    name: '高效能阅读'
                }, {
                    name: '人气小店设计解剖书'
                }, {
                    name: '烘焙好食光'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '雷人的玩意儿'
                }, {
                    name: '查理曼大帝的桌布'
                }]
            }]
        }, {
            name: '技术',
            children: [{
                name: '5☆',
                children: [{
                    name: 'OpenGL超级宝典'
                }]
            }]
        }]
    }];

    for (var j = 0; j < data.length; ++j) {
        var level1 = data[j].children;
        for (var i = 0; i < level1.length; ++i) {
            var block = level1[i].children;
            var bookScore = [];
            var bookScoreId;
            for (var star = 0; star < block.length; ++star) {
                var style = (function (name) {
                    switch (name) {
                        case '5☆':
                            bookScoreId = 0;
                            return itemStyle.star5;
                        case '4☆':
                            bookScoreId = 1;
                            return itemStyle.star4;
                        case '3☆':
                            bookScoreId = 2;
                            return itemStyle.star3;
                        case '2☆':
                            bookScoreId = 3;
                            return itemStyle.star2;
                    }
                })(block[star].name);

                block[star].label = {
                    normal: {
                        color: style.normal.color
                    },
                    downplay: {
                        opacity: 0.5
                    }
                };

                if (block[star].children) {
                    style = {
                        normal: {
                            opacity: 1,
                            color: style.normal.color
                        }
                    };
                    block[star].children.forEach(function (book) {
                        book.value = 1;
                        book.itemStyle = style;

                        book.label = {
                            normal: {
                                color: style.normal.color
                            }
                        };

                        var value = 1;
                        if (bookScoreId === 0 || bookScoreId === 3) {
                            value = 5;
                        }

                        if (bookScore[bookScoreId]) {
                            bookScore[bookScoreId].value += value;
                        }
                        else {
                            bookScore[bookScoreId] = {
                                color: colors[bookScoreId],
                                value: value
                            };
                        }
                    });
                }
            }

            level1[i].itemStyle = {
                normal: {
                    color: data[j].itemStyle.normal.color
                }
            };
        }
    }

    chart.setOption({
        backgroundColor: bgColor,
        color: colors,
        title: [{
            text: 'Ovilia 2018 读书记录',
            bottom: 20,
            right: 20,
            textStyle: {
                color: colors[0]
            }
        }, {
            text: '买书花费',
            left: '8%',
            top: 490,
            textStyle: {
                color: colors[0],
                fontSize: 12
            }
        }],
        series: [{
            type: 'sunburst',
            center: ['50%', '52%'],
            nodeClick: false,
            data: data,
            sort: function (a, b) {
                if (a.depth === 1) {
                    return b.getValue() - a.getValue();
                }
                else {
                    return a.dataIndex - b.dataIndex;
                }
            },
            label: {
                normal: {
                    rotate: 'radial',
                    color: bgColor
                }
            },
            itemStyle: {
                normal: {
                    borderColor: bgColor,
                    borderWidth: 2
                }
            },
            levels: [{}, {
                r0: 0,
                r: 40,
                label: {
                    normal: {
                        rotate: 'none'
                    }
                }
            }, {
                r0: 40,
                r: 105,
                label: {
                    normal: {
                        rotate: 'none'
                    }
                }
            }, {
                r0: 115,
                r: 140,
                itemStyle: {
                    normal: {
                        shadowBlur: 2,
                        shadowColor: colors[2],
                        color: 'transparent'
                    }
                },
                label: {
                    normal: {
                        rotate: 'tangential',
                        fontSize: 10,
                        color: colors[0]
                    }
                }
            }, {
                r0: 140,
                r: 145,
                itemStyle: {
                    normal: {
                        shadowBlur: 80,
                        shadowColor: colors[0]
                    }
                },
                label: {
                    normal: {
                        position: 'outside',
                        textShadowBlur: 5,
                        textShadowColor: '#333'
                    },
                    downplay: {
                        opacity: 0.5
                    }
                }
            }]
        }, {
            type: 'pie',
            center: ['15%', 80],
            radius: [0, 20],
            data: [{
                name: '5☆',
                value: 10
            }, {
                name: '4☆',
                value: 9
            }, {
                name: '3☆',
                value: 5
            }],
            label: {
                normal: {
                    formatter: '{b}: {c}本'
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: bgColor
                }
            }
        }, {
            type: 'pie',
            center: ['84%', 70],
            radius: [0, 20],
            data: [{
                name: '电子书',
                value: 5,
                itemStyle: {
                    normal: {
                        color: colors[1]
                    }
                }
            }, {
                name: '实体书',
                value: 19,
                itemStyle: {
                    normal: {
                        color: colors[2]
                    }
                }
            }],
            label: {
                normal: {
                    formatter: '{b}: {c}本'
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: bgColor
                }
            }
        }, {
            type: 'bar',
            data: [{
                value: 2101,
                name: '2016',
                itemStyle: {
                    normal: {
                        color: colors[1]
                    }
                }
            }, {
                value: 1445,
                name: '2017',
                itemStyle: {
                    normal: {
                        color: colors[2]
                    }
                }
            }, {
                value: 1349,
                name: '2018',
                itemStyle: {
                    normal: {
                        color: colors[3]
                    }
                }
            }],
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    color: bgColor,
                    formatter: '{c}元'
                }
            }
        }],
        xAxis: {
            show: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {
            data: ['2016', '2017', '2018'],
            inverse: true,
            axisLabel: {
                color: function (value, index) {
                    return colors[index + 1];
                }
            }
        },
        grid: {
            left: '8%',
            top: 510,
            height: 60,
            width: '15%'
        }
    });

    return chart;
};
