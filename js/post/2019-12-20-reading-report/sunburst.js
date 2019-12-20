window.getScoreChart = function (domId) {
    var dom = document.getElementById(domId);
    var chart = echarts.init(dom);
    var chartWidth = dom.clientWidth;

    var colors = ['#22C3AA', '#7EB39F', '#9CAE9B', '#BBA998'];
    var bgColor = '#504A4B';
    var textColor = '#a39990';
    var contrastColor = '#FF7777';

    var mediaData = {
        ebooks: ['故事', '运营之光', '商业模式新生代', '好文案一句话就够了', '晚清宫廷生活见闻', '荆棘鸟', '儒林外史', '包法利夫人', '曼斯菲尔德庄园', '银河帝国1：基地', '银河帝国2：基地与帝国', '银河帝国3：第二基地', '银河帝国4：基地前奏', '苍穹微石', '刀尖：刀之阴面', '红城堡'],
        printed: ['梵高手稿', '空之记忆:\n新海城个人画集', '这样写出好故事', '小说的艺术', '超级用户', '债务危机', '如何正确吵架', 'CINEMA 4D R18\n实用教程', '怪物少女妮莫娜', 'ZEЯRO零', '萨金特', '王维诗选']
    };

    var itemStyle = {
        star5: {
            normal: {
                color: contrastColor
            }
        },
        star4: {
            normal: {
                color: colors[0]
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
            name: '文学名著',
            children: [{
                name: '5☆',
                children: [{
                    name: '荆棘鸟'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '儒林外史'
                }, {
                    name: '包法利夫人'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '曼斯菲尔德庄园'
                }]
            }]
        }, {
            name: '科幻',
            children: [{
                name: '5☆',
                children: [{
                    name: '银河帝国1：基地'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '银河帝国2：基地与帝国'
                }, {
                    name: '银河帝国3：第二基地'
                }, {
                    name: '银河帝国4：基地前奏'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '苍穹微石'
                }]
            }]
        }, {
            name: '其他',
            children: [{
                name: '4☆',
                children: [{
                    name: '刀尖：刀之阴面'
                }, {
                    name: '怪物少女妮莫娜'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '红城堡'
                }]
            }]
        }]
    }, {
        name: '非虚构',
        itemStyle: {
            normal: {
                color: colors[0]
            }
        },
        children: [{
            name: '艺术',
            children: [{
                name: '5☆',
                children: [{
                    name: '梵高手稿'
                }, {
                    name: '空之记忆:\n新海城个人画集'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: 'ZEЯRO零'
                }, {
                    name: '萨金特'
                }]
            }, {
                name: '2☆',
                children: [{
                    name: '王维诗选'
                }]
            }]
        }, {
            name: '文学创作',
            children: [{
                name: '5☆',
                children: [{
                    name: '这样写出好故事'
                }, {
                    name: '故事'
                }, {
                    name: '小说的艺术'
                }]
            }]
        }, {
            name: '运营产品',
            children: [{
                name: '5☆',
                children: [{
                    name: '超级用户'
                }, {
                    name: '运营之光'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '商业模式新生代'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: '好文案一句话就够了'
                }]
            }]
        }, {
            name: '其他',
            children: [{
                name: '5☆',
                children: [{
                    name: '晚清宫廷生活见闻'
                }, {
                    name: '债务危机'
                }]
            }, {
                name: '4☆',
                children: [{
                    name: '如何正确吵架'
                }]
            }, {
                name: '3☆',
                children: [{
                    name: 'CINEMA 4D R18\n实用教程'
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
                    color: colors[-j + 2]
                }
            };
        }
    }

    chart.setOption({
        backgroundColor: bgColor,
        color: colors,
        title: [{
            text: '羡辙 2019 读书记录',
            top: 20,
            left: '50%',
            textAlign: 'center',
            textStyle: {
                color: textColor
            }
        }, {
            text: '买书花费',
            left: 55,
            bottom: 110,
            textStyle: {
                color: textColor,
                fontSize: 12
            }
        }, {
            text: '阅读数量',
            right: 55,
            bottom: 110,
            textStyle: {
                color: textColor,
                fontSize: 12
            }
        }, {
            text: '28 本   ',
            left: '50%',
            textAlign: 'center',
            top: '51%',
            textVerticalAlign: 'middle',
            textStyle: {
                color: textColor,
                fontSize: 16
            }
        }, {
            text: '评分',
            left: 115,
            top: 78,
            textAlign: 'center',
            textVerticalAlign: 'middle',
            textStyle: {
                color: textColor,
                fontSize: 14
            }
        }, {
            text: '类型',
            right: 87,
            top: 78,
            textAlign: 'center',
            textVerticalAlign: 'middle',
            textStyle: {
                color: textColor,
                fontSize: 14
            }
        }],
        textStyle: {
            fontFamily: 'Lato'
        },
        series: [{
            type: 'sunburst',
            center: ['50%', '53%'],
            nodeClick: false,
            data: data,
            animationDuration: 500,
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
                r0: 30,
                r: 70,
                label: {
                    normal: {
                        rotate: 'none'
                    }
                }
            }, {
                r0: 70,
                r: 130,
                label: {
                    normal: {
                        rotate: 'none'
                    }
                }
            }, {
                r0: 135,
                r: 160,
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
                r0: 160,
                r: 165,
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
            center: [120, 90],
            radius: [25, 35],
            color: [contrastColor, colors[0], colors[2], colors[3]],
            data: [{
                name: '5☆',
                value: 10
            }, {
                name: '4☆',
                value: 11
            }, {
                name: '3☆',
                value: 5
            }, {
                name: '2☆',
                value: 1
            }],
            label: {
                normal: {
                    formatter: '{b}\n{c} 本'
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
            center: [chartWidth - 120, 90],
            radius: [25, 35],
            data: [{
                name: '电子书',
                value: mediaData.ebooks.length,
                itemStyle: {
                    normal: {
                        color: colors[0]
                    }
                }
            }, {
                name: '实体书',
                value: mediaData.printed.length,
                itemStyle: {
                    normal: {
                        color: colors[2]
                    }
                }
            }],
            label: {
                normal: {
                    formatter: '{b}\n{c} 本'
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
                        color: colors[3]
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
                        color: colors[1]
                    }
                }
            }, {
                value: 2382,
                name: '2019',
                itemStyle: {
                    normal: {
                        color: colors[0]
                    }
                }
            }],
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    color: bgColor,
                    formatter: '{c} 元'
                }
            }
        }, {
            type: 'bar',
            xAxisIndex: 1,
            yAxisIndex: 1,
            data: [{
                value: 44,
                name: '2016',
                itemStyle: {
                    normal: {
                        color: colors[3]
                    }
                }
            }, {
                value: 29,
                name: '2017',
                itemStyle: {
                    normal: {
                        color: colors[2]
                    }
                }
            }, {
                value: 24,
                name: '2018',
                itemStyle: {
                    normal: {
                        color: colors[1]
                    }
                }
            }, {
                value: 28,
                name: '2019',
                itemStyle: {
                    normal: {
                        color: colors[0]
                    }
                }
            }],
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',
                    color: bgColor,
                    formatter: '{c} 本'
                }
            }
        }],
        xAxis: [{
            max: 'dataMax',
            show: false
        }, {
            show: false,
            gridIndex: 1,
            max: 'dataMax',
            inverse: true
        }],
        yAxis: [{
            data: ['2016', '2017', '2018', '2019'],
            axisLine: {
                show: false
            },
            axisLabel: {
                color: function (value, index) {
                    return colors[3 - index];
                }
            },
            axisTick: {
                show: false
            }
        }, {
            data: ['2016', '2017', '2018', '2019'],
            axisLine: {
                show: false
            },
            axisLabel: {
                color: function (value, index) {
                    return colors[3 - index];
                }
            },
            axisTick: {
                show: false
            },
            gridIndex: 1,
            position: 'right'
        }],
        grid: [{
            left: 60,
            bottom: 20,
            height: 90,
            width: 130
        }, {
            right: 60,
            bottom: 20,
            height: 90,
            width: 130
        }]
    });

    return chart;
};
