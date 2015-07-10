function kformat(val){
  return (val+"").replace(/(\d)(?=(\d{3})+$)/g, "$1,");
}
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
        'echarts/chart/line',
        'echarts/chart/pie'
    ],
    function (ec) {
        $.ajax(
        {
        url:jpath+"chart.json",
        dataType:"json",
        success:function(nlgdata)
        {
        //调用函数获取值，转换成数组模式
        var axisData = [];

option = {
    title : {
        text: 'Performance Overview'
    },
    tooltip : {
        trigger: 'axis',
        showDelay: 0,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
        formatter: function (params) {
            var res = '<u><b>NAV</b></u> ';
            res =res +'</br>'+params[0]['seriesName']+' : '+params[0]['data'];
            res =res +'</br>'+params[1]['seriesName']+' : '+params[1]['data'];
            res =res +'</br>'+params[2]['seriesName']+' : '+params[2]['data'];
            return res;
        }
    },
    legend: {
        data:['Pool A','Pool C','Pool D']
    },
    color:['#ff7f50','#3cb371',  '#6495ed','#87cefa', '#da70d6', '#32cd32', '#ff69b4',  '#cd5c5c', '#ffa500', '#40e0d0'],
    toolbox: {
        show : true,
        feature : {
            mark : {show: false},
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
            symbol:'none',
            markPoint : {
                symbol: 'emptyPin',
                itemStyle : {
                    normal : {
                        label : {
                            show:true,
                            position:'top',
                            formatter: function (param) {
                                return Math.round(param.value*100)/100
                            }
                        }
                    }
                },
                data : [
                    {type : 'max', name: 'Max', symbolSize:5},
                    {type : 'min', name: 'Min', symbolSize:5}
                ]
            },
            smooth:true

        },
        {
            name:'Pool C',
            type:'line',
            data:[],
            symbol:'none',
            markPoint : {
                symbol: 'emptyPin',
                itemStyle : {
                    normal : {
                        label : {
                            show:true,
                            position:'top',
                            formatter: function (param) {
                                return Math.round(param.value*100)/100
                            }
                        }
                    }
                },
                data : [
                    {type : 'max', name: 'Max', symbolSize:5},
                    {type : 'min', name: 'Min', symbolSize:5}
                ]
            },
            smooth:true
        },
        {
            name:'Pool D',
            type:'line',
            data:[],
            symbol:'none',
            markPoint : {
                symbol: 'emptyPin',
                itemStyle : {
                    normal : {
                        label : {
                            show:true,
                            position:'top',
                            formatter: function (param) {
                                return Math.round(param.value*100)/100
                            }
                        }
                    }
                },
                data : [
                    {type : 'max', name: 'Max', symbolSize:5},
                    {type : 'min', name: 'Min', symbolSize:5}
                ]
            },
            smooth:true,
        }
    ]
};

option2 = {
    tooltip : {
        trigger: 'axis',
        showDelay: 0,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
        formatter: function (params) {
            var res = '<u><b>TotalAsset</b></u> ';
            res =res +'</br>'+params[2]['seriesName']+' : '+ kformat(params[2]['data']);
            res =res +'</br>'+params[1]['seriesName']+' : '+ kformat(params[1]['data']);
            res =res +'</br>'+params[0]['seriesName']+' : '+ kformat(params[0]['data']);
            return res;
        }
    },
    legend: {
        y : -30,
        data:['Pool A','Pool C','Pool D']
    },
    color:['#ff7f50','#3cb371',  '#6495ed','#87cefa', '#da70d6', '#32cd32', '#ff69b4',  '#cd5c5c', '#ffa500', '#40e0d0'],
    toolbox: {
        y : -30,
        show : true,
        feature : {
            mark : {show: false},
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
            splitArea : {show : true},
            splitNumber: 3
        }
    ],
    series : [
        {
            name:'Pool A',
            type:'bar',
            stack: 'A',
            symbol: 'none',
            data:[]
        },
        {
            name:'Pool C',
            type:'bar',
            stack: 'CD',
            symbol: 'none',
            data:[]
        },
        {
            name:'Pool D',
            type:'bar',
            stack: 'CD',
            symbol: 'none',
            data:[]
        }
    ]
};

option3 = {
    tooltip : {
        trigger: 'axis',
        showDelay: 0,             // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
        formatter: function (params) {
            var res = '<u><b>Users</b></u> ';
            res =res +'</br>'+params[2]['seriesName']+' : '+params[2]['data'];
            res =res +'</br>'+params[1]['seriesName']+' : '+params[1]['data'];
            res =res +'</br>'+params[0]['seriesName']+' : '+params[0]['data'];
            return res;
        }
    },
    legend: {
        y : -30,
        data:['Pool A','Pool C','Pool D']
    },
    color:['#ff7f50','#3cb371',  '#6495ed','#87cefa', '#da70d6', '#32cd32', '#ff69b4',  '#cd5c5c', '#ffa500', '#40e0d0'],
    toolbox: {
        y : -30,
        show : true,
        feature : {
            mark : {show: false},
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
            min:6,
            splitNumber: 3
        }
    ],
    series : [
        {
            name:'Pool A',
            type:'line',
            stack: 'total',
            symbol: 'none',
            smooth:true,
            data:[]
        },
        {
            name:'Pool C',
            type:'line',
            stack: 'total',
            symbol: 'none',
            smooth:true,
            data:[]
        },
        {
            name:'Pool D',
            type:'line',
            stack: 'total',
            symbol: 'none',
            smooth:true,
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

                        myChart = ec.init(document.getElementById('main'), 'macarons');
                        myChart2 = ec.init(document.getElementById('main2'), 'macarons');
                        myChart3 = ec.init(document.getElementById('main3'), 'macarons');

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






