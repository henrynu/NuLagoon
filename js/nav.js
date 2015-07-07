
// 路径配置
require.config({
    paths: {
        echarts: 'dist/js'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/chart/bar',           // 使用柱状图就加载bar模块，按需加载
        'echarts/chart/line'
    ],
    function (ec) {


        $.ajax(
        {
        url:"js/chart.json",
        dataType:"json",
        success:function(nlgdata)
        {
        //调用函数获取值，转换成数组模式
        var axisData = [];

option = {
    title : {
        text: 'Nu Lagoon Pools'
    },
    tooltip : {
        trigger: 'axis',
        showDelay: 0             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
    },
    legend: {
        data:['Pool A','Pool C','Pool D']
    },
    toolbox: {
        show : true,
        feature : {
            mark : {show: true},
            dataZoom : {show: true},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    dataZoom : {
        y: 300,
        show : true,
        realtime: true,
        start : 50,
        end : 100
    },
    grid: {
        x: 80,
        y: 40,
        x2:20,
        y2:25
    },
    xAxis : [
        {
            type : 'category',
            boundaryGap : true,
            axisTick: {onGap:false},
            splitLine: {show:false},
            data : axisData
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true
        }
    ],

    series : [
        {
            name:'Pool A',
            type:'line',
            data:[],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            }
        },
        {
            name:'Pool C',
            type:'line',
            data:[],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            }
        },
        {
            name:'Pool D',
            type:'line',
            data:[],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            }
        }
    ]
};

option2 = {
    tooltip : {
        trigger: 'axis',
        showDelay: 0             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
    },
    legend: {
        y : -30,
        data:['Pool A','Pool C','Pool D']
    },
    toolbox: {
        y : -30,
        show : true,
        feature : {
            mark : {show: true},
            dataZoom : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar','stack']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    dataZoom : {
        show : true,
        realtime: true,
        start : 50,
        end : 100
    },
    grid: {
        x: 80,
        y:5,
        x2:20,
        y2:40
    },
    xAxis : [
        {
            type : 'category',
            position:'top',
            boundaryGap : true,
            axisLabel:{show:false},
            axisTick: {onGap:false},
            splitLine: {show:false},
            data : axisData
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            axisLabel: {
                formatter: function (v) {
                    return Math.round(v/1000) + ' K'
                }
            },
            splitArea : {show : true}
        }
    ],
    series : [
        {
            name:'Pool A',
            type:'bar',
            stack: '总量',
            symbol: 'none',
            data:[]
        },
        {
            name:'Pool C',
            type:'bar',
            stack: '总量',
            symbol: 'none',
            data:[]
        },
        {
            name:'Pool D',
            type:'bar',
            stack: '总量',
            symbol: 'none',
            data:[]
        }
    ]
};

option3 = {
    tooltip : {
        trigger: 'axis',
        showDelay: 0             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
    },
    legend: {
        y : -30,
        data:['Pool A','Pool C','Pool D']
    },
    toolbox: {
        y : -30,
        show : true,
        feature : {
            mark : {show: true},
            dataZoom : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar', 'stack']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    dataZoom : {
        y:200,
        show : true,
        realtime: true,
        start : 50,
        end : 100
    },
    grid: {
        x: 80,
        y:5,
        x2:20,
        y2:30
    },
    xAxis : [
        {
            type : 'category',
            position:'bottom',
            boundaryGap : true,
            axisTick: {onGap:false},
            splitLine: {show:false},
            data : axisData
        }
    ],
    yAxis : [
        {
            type : 'value',
            scale:true,
            boundaryGap: [0.05, 0.05]
        }
    ],
    series : [
        {
            name:'Pool A',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            symbol: 'none',
            data:[]
        },
        {
            name:'Pool C',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            symbol: 'none',
            data:[]
        },
        {
            name:'Pool D',
            type:'line',
            stack: '总量',
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            symbol: 'none',
            data:[]

        }
    ]
};

                        axisData = nlgdata['date'];
                        option.xAxis[0].data = nlgdata['date'];
                        option2.xAxis[0].data = nlgdata['date'];
                        option3.xAxis[0].data = nlgdata['date'];
                        option.series[0].data = nlgdata['NAV_A'];
                        option.series[1].data = nlgdata['NAV_C'];
                        option.series[2].data = nlgdata['NAV_D'];

                        option2.series[0].data = nlgdata['TA_A'];
                        option2.series[1].data = nlgdata['TA_C'];
                        option2.series[2].data = nlgdata['TA_D'];

                        option3.series[0].data = nlgdata['USER_A'];
                        option3.series[1].data = nlgdata['USER_C'];
                        option3.series[2].data = nlgdata['USER_D'];

                        myChart = ec.init(document.getElementById('main'));


                        myChart2 = ec.init(document.getElementById('main2'));


                        myChart3 = ec.init(document.getElementById('main3'));

                        myChart.setOption(option);
                        myChart2.setOption(option2);
                        myChart3.setOption(option3);

                        myChart.connect([myChart2, myChart3]);
                        myChart2.connect([myChart, myChart3]);
                        myChart3.connect([myChart, myChart2]);

                        setTimeout(function (){
    window.onresize = function () {
        myChart.resize();
        myChart2.resize();
        myChart3.resize();
    }
},200)


         }
        });


            }
        );



