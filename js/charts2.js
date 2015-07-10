$("#litab2").click(function(){

  //----------------TAB2-------
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
        'echarts/chart/funnel',
        'echarts/chart/pie'
    ],
    function (ec) {
        $.ajax(
        {
        url:jpath+"chart2.json",
        dataType:"json",
        success:function(nlgdata)
        {
    option4 = {
        timeline : {
            data : nlgdata['timeline'],
            autoPlay : true,
        },
        options : [
            {
                color:['#ff7f50','#3cb371',  '#6495ed','#87cefa', '#da70d6', '#32cd32', '#ff69b4',  '#cd5c5c', '#ffa500', '#40e0d0'],
                tooltip : {
                    trigger: 'item',
                    formatter:"{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    data:['Pool A','Pool C','Pool D']
                },
                toolbox: {
                    show : true,
                    feature : {
                        magicType : {
                            show: true,
                            type: ['pie', 'funnel'],
                            option: {
                                funnel: {
                                    x: '25%',
                                    width: '50%',
                                    funnelAlign: 'left',
                                    max: 1700
                                }
                            }
                        },
                        restore : {show: true},
                        saveAsImage : {show: true}
                    }
                },
                series : [
                    {
                        type:'pie',
                        center: ['50%', '45%'],
                        radius: '50%',
                        name:nlgdata['timeline'][0],
                        data:[ ]
                    }
                ]
            },
        ]
    };
    var minusc = []
    for (var i = 0; i < nlgdata['D'].length; i++) {
        minusc.push(-nlgdata['D'][i])
    }
    option5 = {
        color:['#ff7f50','#3cb371',  '#6495ed','#87cefa', '#da70d6', '#32cd32', '#ff69b4',  '#cd5c5c', '#ffa500', '#40e0d0'],
        tooltip : {
            trigger: 'axis',
            formatter: function (params) {
            var res = params[0]['name'];
            res =res +'</br>'+params[2]['seriesName']+' : '+ kformat(params[2]['data']+' %');
            res =res +'</br>'+params[1]['seriesName']+' : '+ kformat(params[1]['data']);
            res =res +'</br>'+params[0]['seriesName']+' : '+ kformat(-params[0]['data']);
            return res;
            }
        },
        toolbox: {
            show : true,
            feature : {
                magicType: {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        calculable : true,
        legend: {
            data:['IntRate Pool C','TA Pool C','TA Pool D']
        },
        xAxis : [
            {
                type : 'category',
                data : nlgdata['timeline']
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : 'Total Asset',
                axisLabel: {
                formatter: function (v) {
                    if(v>0){
                        return Math.round(v/1000) + ' K';
                        }else{
                        return Math.round(-v/1000) + ' K'
                        }
                    }
                },
            },
            {
                type : 'value',
                name : 'Interest Rate',
                axisLabel : {
                    formatter: '{value} %'
                }
            }
        ],
        series : [

            {
                name:'TA Pool C',
                type:'bar',
                stack:'TA',
                data:nlgdata['C']
            },
            {
                name:'TA Pool D',
                type:'bar',
                stack:'TA',
                data:minusc
            },
            {
                name:'IntRate Pool C',
                type:'line',
                yAxisIndex: 1,
                smooth:true,
                data:nlgdata['IR']
            },

        ]
    };

    option4['options'][0]['series'][0]['data'] = [{value:nlgdata['A'][0],name:'Pool A'},{value:nlgdata['C'][0],name:'Pool C'},{value:nlgdata['D'][0],name:'Pool D'}];
    for (var i = 1; i < nlgdata['timeline'].length; i++) {
        option4['options'].push({
                series : [
                    {   type:'pie',
                        name:nlgdata['timeline'][i],
                        data:[{value:nlgdata['A'][i],name:'Pool A'},{value:nlgdata['C'][i],name:'Pool C'},{value:nlgdata['D'][i],name:'Pool D'}]
                    }]
            }
        );
    }

            myChart4 = ec.init(document.getElementById('main4'), 'macarons');
            myChart4.setOption(option4);

            myChart5 = ec.init(document.getElementById('main5'), 'macarons');
            myChart5.setOption(option5);
            myChart4.connect([myChart5]);
            myChart5.connect([myChart4]);
            }
            }
        )
    }
);

}
)
