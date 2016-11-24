(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else if(typeof exports==='object'){module.exports=a(require('jquery'))}else{a(jQuery)}}(function($){if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){return $}var n=/^(https?:)?\/\//i;var o=/^get|post$/i;var p=new RegExp('^(\/\/|'+location.protocol+')','i');$.ajaxTransport('* text html xml json',function(j,k,l){if(!j.crossDomain||!j.async||!o.test(j.type)||!n.test(j.url)||!p.test(j.url)){return}var m=null;return{send:function(f,g){var h='';var i=(k.dataType||'').toLowerCase();m=new XDomainRequest();if(/^\d+$/.test(k.timeout)){m.timeout=k.timeout}m.ontimeout=function(){g(500,'timeout')};m.onload=function(){var a='Content-Length: '+m.responseText.length+'\r\nContent-Type: '+m.contentType;var b={code:200,message:'success'};var c={text:m.responseText};try{if(i==='html'||/text\/html/i.test(m.contentType)){c.html=m.responseText}else if(i==='json'||(i!=='text'&&/\/json/i.test(m.contentType))){try{c.json=$.parseJSON(m.responseText)}catch(e){b.code=500;b.message='parseerror'}}else if(i==='xml'||(i!=='text'&&/\/xml/i.test(m.contentType))){var d=new ActiveXObject('Microsoft.XMLDOM');d.async=false;try{d.loadXML(m.responseText)}catch(e){d=undefined}if(!d||!d.documentElement||d.getElementsByTagName('parsererror').length){b.code=500;b.message='parseerror';throw'Invalid XML: '+m.responseText;}c.xml=d}}catch(parseMessage){throw parseMessage;}finally{g(b.code,b.message,c,a)}};m.onprogress=function(){};m.onerror=function(){g(500,'error',{text:m.responseText})};if(k.data){h=($.type(k.data)==='string')?k.data:$.param(k.data)}m.open(j.type,j.url);m.send(h)},abort:function(){if(m){m.abort()}}}});return $}));

function splitData(rawData) {
    var categoryData = [];
    var values = [];
    var volumns = [];
    for (var i = 0; i < rawData.length; i++) {
        categoryData.push(rawData[i].splice(0, 1)[0]);
        values.push(rawData[i]);
        volumns.push(rawData[i][4]);
    }
    return {
        categoryData: categoryData,
        values: values,
        volumns: volumns
    };
}

function calculateMA(dayCount, data) {
    var result = [];
    for (var i = 0, len = data.values.length; i < len; i++) {
        if (i < dayCount) {
            result.push('-');
            continue;
        }
        var sum = 0;
        for (var j = 0; j < dayCount; j++) {
            sum += data.values[i - j][1];
        }
        result.push(+(sum / dayCount).toFixed(3));
    }
    return result;
}

function formatter(value){
    if(value=="processed"){
        return '<span class="glyphicon glyphicon-check text-success"></span>';
    }else if(value=="send"){
        return '<span class="glyphicon glyphicon-log-out text-danger"></span>';
    }else if(value=="receive"){
        return '<span class="glyphicon glyphicon-log-in text-success"></span>';
    }else if(value=="Sell"){
        return '<span class="glyphicon glyphicon-arrow-down text-danger"></span>';
    }else if(value=="Buy"){
        return '<span class="glyphicon glyphicon-arrow-up text-success"></span>';
    }else{
        return value;
    }

}
function round2(value){
    return Math.round(100*value)/100;
}
function obbsfmt(value){
    if(value=='Buy'){
        return '<small class="text-success">'+value+'</small>';
    }else{
        return '<small class="text-danger">'+value+'</small>';
    }

}

function mynum(value){
    mn = String(value).split('.')
    if (mn.length==2){
        return mn[0]+'<small>.'+mn[1]+'</small';
    }else{
        return value;
    }

}
function confmt(value){
    if(value>=10){
        return '<span class="glyphicon glyphicon-check text-success"></span>';
    }else{
        return '<span class="label label-default">'+value+'</span>';
    }
}
function b_sfmt(value){
    if(value=='Buy'){
        return '<span class="label label-success">'+value+'</span>';
    }else{
        return '<span class="label label-danger">'+value+'</span>';
    }
}
var myChart = echarts.init(document.getElementById('mainchart'));

function DrawPage(rawData) {
    var data = splitData(rawData);
    $(".ccy1").html(CCY1);
    $(".ccy2").html(CCY2);
    $(".cprise").html(rawData[rawData.length-1][1]);
    $(".hprice").html(rawData[rawData.length-1][3]);
    $(".lprice").html(rawData[rawData.length-1][2]);
    $(".volume").html(rawData[rawData.length-1][4]);
    if($("#oprice").val()==""){
        $("#oprice").val(rawData[rawData.length-1][3]);
    }
    myChart.setOption(option = {
        animation: true,
        legend: {
            show: false
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        toolbox: {
            show: false
        },
        brush: {
            xAxisIndex: 'all',
            brushLink: 'all',
            outOfBrush: {
                colorAlpha: 0.1
            }
        },
        grid: [
            {
                left: 40,
                right: 10,
                height: '82%',
                top:5,
                bottom: 10
            },
            {
                left: 40,
                right: 10,
                top: 192,
                bottom: 10,
                height: '30%'
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: data.categoryData,
                scale: true,
                boundaryGap : false,
                axisLine: {onZero: false},
                splitLine: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            },
            {
                type: 'category',
                gridIndex: 1,
                data: data.categoryData,
                scale: true,
                boundaryGap : false,
                axisLine: {onZero: false},
                axisTick: {show: false},
                splitLine: {show: false},
                axisLabel: {show: false},
                splitNumber: 20,
                min: 'dataMin',
                max: 'dataMax'
            }
        ],
        yAxis: [
            {
                scale: true,
                splitArea: {
                    show: true
                }
            },
            {
                scale: true,
                gridIndex: 1,
                splitNumber: 2,
                axisLabel: {show: false},
                axisLine: {show: false},
                axisTick: {show: false},
                splitLine: {show: false}
            }
        ],
        dataZoom: [
            {
                type: 'inside',
                xAxisIndex: [0, 1],
                start: 50,
                end: 100
            },
            {
                show: true,
                xAxisIndex: [0, 1],
                type: 'slider',
                top: '90%',
                start: 50,
                end: 100
            }
        ],
        series: [
            {
                name: CCY1+'/'+CCY2,
                type: 'candlestick',
                data: data.values,
                itemStyle: {
                    normal: {
                        borderColor: null,
                        borderColor0: null
                    }
                },
                tooltip: {
                    formatter: function (param) {
                        var param = param[0];
                        return [
                            'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
                            'Open: ' + param.data[0] + '<br/>',
                            'Close: ' + param.data[1] + '<br/>',
                            'Lowest: ' + param.data[2] + '<br/>',
                            'Highest: ' + param.data[3] + '<br/>',
                            'Volume: ' + param.data[4] + '<br/>'
                        ].join('');
                    }
                }
            },
            {
                name: 'MA5',
                type: 'line',
                data: calculateMA(5, data),
                smooth: true,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'MA10',
                type: 'line',
                data: calculateMA(10, data),
                smooth: true,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'MA30',
                type: 'line',
                data: calculateMA(30, data),
                smooth: true,
                lineStyle: {
                    normal: {opacity: 0.5}
                }
            },
            {
                name: 'Volumn',
                type: 'bar',
                xAxisIndex: 1,
                yAxisIndex: 1,
                data: data.volumns,
                itemStyle: {
                    normal: {opacity: 0.5}
                }
            }
        ]
    }, true);
}

var noqrcode = new QRCode(document.getElementById("noqrcode"), {
            text: "",
            width: 128,
            height: 128,
            correctLevel : QRCode.CorrectLevel.H
        });
var ucqrcode = new QRCode(document.getElementById("ucqrcode"), {
            text: "",
            width: 128,
            height: 128,
            correctLevel : QRCode.CorrectLevel.H
        });

function NewOrder(b_s,ccy1,ccy2,price,receive_ad,refund_ad) {
    Cookies.set('nlgexccy1', $("#uaddr1").val(), { expires: 365 });
    Cookies.set('nlgexccy2', $("#uaddr2").val(), { expires: 365 });
    $("#uaddr1,#suaddr1").val(Cookies.get('nlgexccy1'));
    $("#uaddr2,#suaddr2").val(Cookies.get('nlgexccy2'));
    noqrcode.clear("loading");
    $("#OdModal .dptaddr").html('<div class="footable-loader" style="height:35px;"><span class="fooicon fooicon-loader"></span></div>');
    if(price=='market'){
        price='0';
    }
    $.ajax ({
        type: "GET",
        url: APIURL+'new_order?b_s='+b_s+'&ccys='+ccy1+'_'+ccy2+'&price='+price+'&receive_ad='+receive_ad+'&refund_ad='+refund_ad,
        dataType: "json",
        error: function(data) {
        },
        success: function(data) {
            $("#OdModal .dptaddr").html(data["deposit_ad"]);
            noqrcode.makeCode(data["deposit_ad"]);
        },
        complete: function(data, status) {
        }
    });
};

var ob_buy;
var ob_sell;
var pubtxs;

function UpdatePubdata(ccy1,ccy2){
    $.ajax ({
        type: "GET",
        url: APIURL+'pubdata?ccys='+ccy1+'_'+ccy2,
        dataType: "json",
        error: function(data) {
        },
        success: function(data) {
            ob_buy=data['Buy'];
            ob_sell=data['Sell'];

            obb_ft.rows.load(ob_buy);
            obs_ft.rows.load(ob_sell);
            $('#sotable tr').click(function() {
                $('.nav a[href="#trade"]').tab('show');
                $("#oprice").val($(this.children[1]).html());
            });
            $('#botable tr').click(function() {
                $('.nav a[href="#trade"]').tab('show');
                $("#oprice").val($(this.children[1]).html());
            });
            DrawPage(data['OCLH']);
        }
    });
}
function UpdateTxHis(ccy1,ccy2){
    $.ajax ({
        type: "GET",
        url: APIURL+'extxs?ccys='+ccy1+'_'+ccy2,
        dataType: "json",
        error: function(data) {
        },
        success: function(data) {
            th_ft.rows.load(data['TXHis']);
        }
    });
}
function UpdateMyOrder(ccy1,ccy2,addr1,addr2){
    $.ajax ({
        type: "GET",
        url: APIURL+'my_orders?ccys='+ccy1+'_'+ccy2+'&addr1='+addr1+'&addr2='+addr2,
        dataType: "json",
        error: function(data) {
        },
        success: function(data) {
            mo_ft.rows.load(data['myorders']);
        }
    });

}
function UpdateMyTrade(ccy1,ccy2,addr1,addr2){
    $.ajax ({
        type: "GET",
        url: APIURL+'my_trades?ccys='+ccy1+'_'+ccy2+'&addr1='+addr1+'&addr2='+addr2,
        dataType: "json",
        error: function(data) {
        },
        success: function(data) {
            mt_ft.rows.load(data['mytrades']);
        }
    });
}
function UpdateMyBCTx(ccy1,ccy2,addr1,addr2){
    $.ajax ({
        type: "GET",
        url: APIURL+'my_bctxs?ccys='+ccy1+'_'+ccy2+'&addr1='+addr1+'&addr2='+addr2,
        dataType: "json",
        error: function(data) {
        },
        success: function(data) {
            mbc_ft.rows.load(data['mybctxs']);
        }
    });
}
var ioprice;
var obb_ft; var obs_ft; var th_ft; var mo_ft; var mt_ft; var mbc_ft;

$(document).ready(function(){
    th_ft = FooTable.init('#thtable',{
                "columns": THTBLCOL
                });
    obs_ft = FooTable.init('#sotable',{
                "showHeader": false,
                "columns": OBTBLCOL,
                "on": {
                    "postdraw.ft.table": function(e, ft){
                            $('#sorderbook').slimScroll({
                                height: '260px',
                                start: 'bottom'
                            });
                    }
                }
            });
    obb_ft = FooTable.init('#botable',{
                "showHeader": false,
                "columns": OBTBLCOL,
                "on": {
                    "postdraw.ft.table": function(e, ft){
                            $('#borderbook').slimScroll({
                                height: '260px',
                                start: 'top'
                            });
                    }
                }
            });
    mo_ft = FooTable.init('#motable',{
                "columns": MYORDCOL,
                "on": {
                    "postdraw.ft.table": function(e, ft){
                            for (var i = 0; i < ft.rows.all.length; i++) {
                                var r = ft.rows.all[i];
                                $(r.cells[6].value).val(r.cells[1].value+"|"+r.cells[2].value+"|"+r.cells[7].value+"|"+r.cells[9].value);
                                $(r.cells[6].value).attr('type','button').html("Update/Cancel").addClass("btn btn-default btn-xs udoBtn");
                                $(r.cells[11].value).attr('type','button').attr('target','_blank').html("View it on Blockexplorer").addClass("btn btn-default btn-xs txBtn");
                                if (r.cells[1].value=='Buy'){
                                    var txurl = TXURL[CCY2]+r.cells[10].value;
                                }else{
                                    var txurl = TXURL[CCY1]+r.cells[10].value;
                                }
                                $(r.cells[11].value).prop('href',txurl);
                            }

                            $(".udoBtn").click(function(){
                                var paras = this.value.split("|");
                                if (paras[0]=='Buy'){
                                    $("#updateOdModal .ucfrmccy").html(CCY2);
                                    $("#updateOdModal .codamt").html(ORDERAMT[CCY2]);
                                    $("#updateOdModal .modal-header").addClass("bg-success").removeClass("bg-danger");

                                }else{
                                    $("#updateOdModal .ucfrmccy").html(CCY1);
                                    $("#updateOdModal .codamt").html(ORDERAMT[CCY1]);
                                    $("#updateOdModal .modal-header").addClass("bg-danger").removeClass("bg-success");
                                }
                                $("#updateOdModal .ucb_s").html(paras[0]);
                                $("#updateOdModal .ucprice").html(paras[1]);
                                $("#updateOdModal .ucaddr").html(paras[2]);
                                ucqrcode.makeCode(paras[2]);
                                $("#updateOdModal .frmuaddr").html(paras[3]);

                                $("#updateOdModal").modal("show");
                            });
                    }
                }

            });

    mt_ft = FooTable.init('#mttable',{
                "columns": MYTDCOL
            });
	mbc_ft = FooTable.init('#mbctable',{
                "columns": MYBCTCOL,
                "on": {
                    "postdraw.ft.table": function(e, ft){
                        for (var i = 0; i < ft.rows.all.length; i++) {
                            var r = ft.rows.all[i];
                            $(r.cells[9].value).attr('type','button').attr('target','_blank').html("View it on Blockexplorer").addClass("btn btn-default btn-xs txBtn");

                            var txurl = TXURL[r.cells[1].value]+r.cells[8].value;

                            $(r.cells[9].value).prop('href',txurl);
                        }

                    }
                }

            });

    UpdatePubdata(CCY1,CCY2);
    setInterval(function(){ UpdatePubdata(CCY1,CCY2); }, 30000);
    $('[data-toggle="tooltip"]').tooltip();
    $("#uaddr1,#suaddr1").val(Cookies.get('nlgexccy1'));
    $("#uaddr2,#suaddr2").val(Cookies.get('nlgexccy2'));

    $("#setBtn").click(function(){
        Cookies.set('nlgexccy1', $("#suaddr1").val(), { expires: 365 });
        Cookies.set('nlgexccy2', $("#suaddr2").val(), { expires: 365 });
        $("#uaddr1,#suaddr1").val(Cookies.get('nlgexccy1'));
        $("#uaddr2,#suaddr2").val(Cookies.get('nlgexccy2'));
    });

    $("#buyBtn").click(function(){
        $("#OdModal .modal-header").addClass("bg-success").removeClass("bg-danger");
        $("#OdModal .nob_s").html("Buy");
        $("#OdModal .notoccy").html("BKS");
        $("#OdModal .nofrmccy").html("BTC");
        $("#OdModal .noprice").html($("#oprice").val());
        $("#OdModal .touaddr").html($("#uaddr1").val());
        $("#OdModal .frmuaddr").html($("#uaddr2").val());
        NewOrder('Buy',"BKS","mBTC",$("#oprice").val(),$("#uaddr1").val(),$("#uaddr2").val())
        $("#OdModal").modal("show");
    });

    $("#sellBtn").click(function(){
        $("#OdModal .modal-header").addClass("bg-danger").removeClass("bg-success");
        $("#OdModal .nob_s").html("Sell");
        $("#OdModal .notoccy").html("mBTC");
        $("#OdModal .nofrmccy").html("BKS");
        $("#OdModal .noprice").html($("#oprice").val());
        $("#OdModal .touaddr").html($("#uaddr2").val());
        $("#OdModal .frmuaddr").html($("#uaddr1").val());
        NewOrder('Sell',"BKS","mBTC",$("#oprice").val(),$("#uaddr2").val(),$("#uaddr1").val())
        $("#OdModal").modal("show");
    });

    $("#mktprice").click(function(){
        if(this.checked){
            ioprice = $("#oprice").val();
            $("#oprice").val('market');
            $("#oprice").prop('disabled', true);
        }
        else{
            $("#oprice").val(ioprice);
            $("#oprice").prop('disabled', false);
        }

    });
    $('.nav a[href="#myorders"]').on('show.bs.tab', function(){
        addr1=Cookies.get('nlgexccy1');
        addr2=Cookies.get('nlgexccy2');
        if(addr1 && addr2){
            $(".addrsetinfo").hide();
            UpdateMyOrder(CCY1,CCY2,addr1,addr2);
        }
        else{
            $(".addrsetinfo").show();
        }
    });
    $('.nav a[href="#mytrades"]').on('show.bs.tab', function(){
        addr1=Cookies.get('nlgexccy1');
        addr2=Cookies.get('nlgexccy2');
        if(addr1 && addr2){
            $(".addrsetinfo").hide();
            UpdateMyTrade(CCY1,CCY2,addr1,addr2);
        }
        else{
            $(".addrsetinfo").show();
        }
    });
    $('.nav a[href="#mybctxs"]').on('show.bs.tab', function(){
        addr1=Cookies.get('nlgexccy1');
        addr2=Cookies.get('nlgexccy2');
        if(addr1 && addr2){
            $(".addrsetinfo").hide();
            UpdateMyBCTx(CCY1,CCY2,addr1,addr2);
        }
        else{
            $(".addrsetinfo").show();
        }
    });
    $('.nav a[href="#tradehistory"]').on('show.bs.tab', function(){
        UpdateTxHis(CCY1,CCY2);
    });

});