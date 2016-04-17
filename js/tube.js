/*scroll to top*/
(function(a){a.fn.scrollToTop=function(c){var d={speed:800};c&&a.extend(d,{speed:c});return this.each(function(){var b=a(this);a(window).scroll(function(){100<a(this).scrollTop()?b.fadeIn():b.fadeOut()});b.click(function(b){b.preventDefault();a("body, html").animate({scrollTop:0},d.speed)})})}})(jQuery);
/*
 Color animation 1.6.0
 http://www.bitstorm.org/jquery/color-animation/
 Copyright 2011, 2013 Edwin Martin
 Released under the MIT and GPL licenses.
*/
'use strict';(function(d){function h(a,b,e){var c="rgb"+(d.support.rgba?"a":"")+"("+parseInt(a[0]+e*(b[0]-a[0]),10)+","+parseInt(a[1]+e*(b[1]-a[1]),10)+","+parseInt(a[2]+e*(b[2]-a[2]),10);d.support.rgba&&(c+=","+(a&&b?parseFloat(a[3]+e*(b[3]-a[3])):1));return c+")"}function f(a){var b;return(b=/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/.exec(a))?[parseInt(b[1],16),parseInt(b[2],16),parseInt(b[3],16),1]:(b=/#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])/.exec(a))?[17*parseInt(b[1],16),17*parseInt(b[2],
16),17*parseInt(b[3],16),1]:(b=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(a))?[parseInt(b[1]),parseInt(b[2]),parseInt(b[3]),1]:(b=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9\.]*)\s*\)/.exec(a))?[parseInt(b[1],10),parseInt(b[2],10),parseInt(b[3],10),parseFloat(b[4])]:l[a]}d.extend(!0,d,{support:{rgba:function(){var a=d("script:first"),b=a.css("color"),e=!1;if(/^rgba/.test(b))e=!0;else try{e=b!=a.css("color","rgba(0, 0, 0, 0.5)").css("color"),
a.css("color",b)}catch(c){}return e}()}});var k="color backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor outlineColor".split(" ");d.each(k,function(a,b){d.Tween.propHooks[b]={get:function(a){return d(a.elem).css(b)},set:function(a){var c=a.elem.style,g=f(d(a.elem).css(b)),m=f(a.end);a.run=function(a){c[b]=h(g,m,a)}}}});d.Tween.propHooks.borderColor={set:function(a){var b=a.elem.style,e=[],c=k.slice(2,6);d.each(c,function(b,c){e[c]=f(d(a.elem).css(c))});var g=f(a.end);
a.run=function(a){d.each(c,function(d,c){b[c]=h(e[c],g,a)})}}};var l={aqua:[0,255,255,1],azure:[240,255,255,1],beige:[245,245,220,1],black:[0,0,0,1],blue:[0,0,255,1],brown:[165,42,42,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgrey:[169,169,169,1],darkgreen:[0,100,0,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkviolet:[148,0,211,1],fuchsia:[255,
0,255,1],gold:[255,215,0,1],green:[0,128,0,1],indigo:[75,0,130,1],khaki:[240,230,140,1],lightblue:[173,216,230,1],lightcyan:[224,255,255,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],magenta:[255,0,255,1],maroon:[128,0,0,1],navy:[0,0,128,1],olive:[128,128,0,1],orange:[255,165,0,1],pink:[255,192,203,1],purple:[128,0,128,1],violet:[128,0,128,1],red:[255,0,0,1],silver:[192,192,192,1],white:[255,255,255,1],yellow:[255,255,
0,1],transparent:[255,255,255,0]}})(jQuery);

/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.4 - 2015-03-05
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2015 Jason Moon (@JSONMOON)
 * Licensed MIT (/blob/master/LICENSE.txt)
 */
(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else if(typeof exports==='object'){module.exports=a(require('jquery'))}else{a(jQuery)}}(function($){if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){return $}var n=/^(https?:)?\/\//i;var o=/^get|post$/i;var p=new RegExp('^(\/\/|'+location.protocol+')','i');$.ajaxTransport('* text html xml json',function(j,k,l){if(!j.crossDomain||!j.async||!o.test(j.type)||!n.test(j.url)||!p.test(j.url)){return}var m=null;return{send:function(f,g){var h='';var i=(k.dataType||'').toLowerCase();m=new XDomainRequest();if(/^\d+$/.test(k.timeout)){m.timeout=k.timeout}m.ontimeout=function(){g(500,'timeout')};m.onload=function(){var a='Content-Length: '+m.responseText.length+'\r\nContent-Type: '+m.contentType;var b={code:200,message:'success'};var c={text:m.responseText};try{if(i==='html'||/text\/html/i.test(m.contentType)){c.html=m.responseText}else if(i==='json'||(i!=='text'&&/\/json/i.test(m.contentType))){try{c.json=$.parseJSON(m.responseText)}catch(e){b.code=500;b.message='parseerror'}}else if(i==='xml'||(i!=='text'&&/\/xml/i.test(m.contentType))){var d=new ActiveXObject('Microsoft.XMLDOM');d.async=false;try{d.loadXML(m.responseText)}catch(e){d=undefined}if(!d||!d.documentElement||d.getElementsByTagName('parsererror').length){b.code=500;b.message='parseerror';throw'Invalid XML: '+m.responseText;}c.xml=d}}catch(parseMessage){throw parseMessage;}finally{g(b.code,b.message,c,a)}};m.onprogress=function(){};m.onerror=function(){g(500,'error',{text:m.responseText})};if(k.data){h=($.type(k.data)==='string')?k.data:$.param(k.data)}m.open(j.type,j.url);m.send(h)},abort:function(){if(m){m.abort()}}}});return $}));

//fill DataTable
jpath = 'https://raw.githubusercontent.com/henrynu/NlgTube/master/data/';
urlmd = {"FAQ":"https://raw.githubusercontent.com/henrynu/NlgTube/master/FAQ.md",
"Guide":"https://raw.githubusercontent.com/henrynu/NuLagoon/master/Fund%20Deposit%20and%20Withdraw%20Guide.md"};
rd = {};
datedata = {};
tubetx = [];

if( $("html").hasClass("IE89") ) {
 jpath = '//crossorigin.me/'+jpath;
 urlmd['FAQ'] = '//crossorigin.me/'+urlmd['FAQ'];
 urlmd['Guide'] = '//crossorigin.me/'+urlmd['Guide'];
};

function genmagic(){
    do{
        var magic = 1532;
        var n = Math.round((Math.random() * 0.899 + 0.101) * 1000)/1000;
        var a = n * magic;
        var b = parseInt(String(a).replace('.','').slice(-5,-1)) * magic;
        /*console.log(b)*/
        var c = parseInt(String(b).replace('.','').slice(3,6))/100000.0
    }
    while (isNaN(c) || c < 0.001);
    /*console.log(c)*/
    $("#magic_n").html(String(n));
    $("#magic_b").html(String(c));
};
genmagic();//gen magic number for register
$(function () {
    $( "span.register" ).click(function() {
        $("a#guidetab").click();
        $(".blink").animate({backgroundColor:'lightgreen'},800,"linear",function(){
            $(this).animate({backgroundColor:'white'},600);
        });

    });
    $("a.toliveap").click(function(){
        $("a#liveap").click();
    });

});
function RefreshData() {
    $.ajax ({
        type: "GET",
        url: jpath+'datetu.json',
        dataType: "json",
        error: function(data) {
        },
        success: function(dat1) {
        datedata = dat1;
        tubetx = dat1['data'];
        },
        complete: function(data, status) {
            $.ajax ({
            type: "GET",
            url: jpath+'rd.json',
            dataType: "json",
            error: function(data) {
            },
            success: function(data) {
                rd = data;
            },
            complete: function(data, status) {
                    vol24 = rd['24vol'];
                    $("span#ask_price").html(Math.round(100 * rd['ask'])/100);
                    $("span#bid_price").html(Math.round(100 * rd['bid'])/100);

                    $("span#bal_nbt").html(datedata['bal']['NBT']);
                    $("span#bal_btc").html(datedata['bal']['BTC']);
                    NBTpercent =  100 * datedata['bal']['NBT'] / (datedata['bal']['NBT'] + datedata['bal']['BTC']*rd['price']);
                    BTCpercent = 100 - NBTpercent;
                    $("#NBTPercent").css('width', NBTpercent+'%').attr('aria-valuenow', NBTpercent);
                    $("#BTCPercent").css('width', BTCpercent+'%').attr('aria-valuenow', BTCpercent);
                    $('#todayvol').html(Math.round(vol24[0]*100)/100);
                    var volchange = Math.round((vol24[0] - vol24[1])*100)/100;
                    if(volchange > 0){
                        $('#volchange').html("+"+volchange);
                    }else{
                        $('#volchange').html(volchange);
                    }
            }
        });
        $('#pvchart').sparkline(datedata['volume'], {type: 'bar',barColor: '#00a65a',height: '55px', barWidth: '12px'});
        $('#pvchart').sparkline(datedata['price'], {composite: true, spotRadius:3, fillColor: false, lineColor: 'red'});
        $('#txschart').sparkline(datedata['txs'], {type: 'bar',barColor: '#888',height: '30px',barSpacing:'5px', barWidth: '8px'});

        var table = $('#tubetx').DataTable( {
        "lengthMenu": [[12, 25, 60, -1], [12, 25, 60, "All"]],
        data: tubetx,
        responsive: true,
        "bRetrieve": true,
        "columns": [
        {
                "render": function ( data, type, row ) {
                    if(row[2]=='BTC'){return row[3]+' <span class="badge bg-yellow ccy" title="Bitcoin">B</span>';}
                    else if(row[2]=='NBT'){return row[3]+' <span class="badge bg-black ccy" title="US-Nubits">N</span>';}
                },
                "targets": 1
            },
        {
                "render": function ( data, type, row ) {
                    if(row[1]=='RegisterReq'){return '<span class="text-blue""><i class="fa fa-fw fa-link"></i><span class="fu">Register</span></span>';}
                    else if(row[1]=='TubeOut'){return '<span class="text-green"><i class="fa fa-fw fa-arrow-right"></i><span class="fu">Exchange</span></span';}
                    else if(row[1].search('Refund')>=0){return '<span class="text-yellow" ><i class="fa fa-fw fa-undo"></i><span class="fu">Refund</span></span>';}
                },
                "targets": 2
            },
        {
                "render": function ( data, type, row ) {
                    if(row[5]=='BTC'){return row[6]+' <span class="badge bg-yellow ccy" title="Bitcoin">B</span>';}
                    else if(row[5]=='NBT'){return row[6]+' <span class="badge bg-black ccy" title="US-Nubits">N</span>';}
                },
                "targets": 3
            },
        {"data":"8"},
        {
            "render": function ( data, type, row ) {
                return '<span title="'+row[4]+'">'+row[4].slice(0,6)+'...'+row[4].slice(28,34)+'</span>';
            },
            "targets": 5
        },
        {
            "render": function ( data, type, row ) {
                return '<span title="'+row[7]+'">'+row[7].slice(0,6)+'...'+row[7].slice(28,34)+'</span>';
            },
            "targets": 6
        },
        {"data":"0"}
        ],
        "order": [[ 6, "desc" ]],
        "initComplete": function () {
            $('.dataTables_length,.dataTables_filter').addClass( 'fu' );
        }
    } );

    }
    });
};


$(function () {
  $("a.anchor").click(function () {
    var $this = $(this);
    var target = $this.attr("href");
    if (typeof target === 'string') {
      $("body").animate({
        scrollTop: ($(target).offset().top - 60 ) + "px"
      }, 500);
    }
  });
});

$.ajax({
    url:urlmd['FAQ'],
    dataType:"text",
    success:function(text){
        var converter = new showdown.Converter();
        $("#FAQ").find(".md").html(converter.makeHtml(text));
    }
});

$.ajax({
    url:urlmd['Guide'],
    dataType:"text",
    success:function(text){
        var converter = new showdown.Converter();
        $("#Guide").find(".md").html(converter.makeHtml(text));
    }
});

$(document).ready(function() {
    RefreshData();
    setTimeout(RefreshData, 2*60*1000);
} );
$("#libctx").click(function(){
var table = $('#tabbctx').DataTable( {
        "lengthMenu": [[12, 25, 60, -1], [12, 25, 60, "All"]],
        "ajax": jpath+'bcpair.json',
        responsive: true,
        cache: false,
        "bRetrieve": true,
        "columns": [
        {
                "render": function ( data, type, row ) {
                    return '<span class="fu">'+row[0]+'</span><span class="ab">'+row[0].slice(8,16)+'</span>';
                },
                "targets": 0
            },
        {
                "render": function ( data, type, row ) {
                    if(row[1]=='TubeIn' || row[1]=='CashDeposit'){return '<span class="text-green"><i class="fa fa-sign-in fa-rotate-90"></i> <span class="fu">'+row[1]+'</span></span>';}
                    else if(row[1].search('Refund')>=0){return '<span class="text-yellow" ><i class="fa fa-fw fa-undo"></i><span class="fu">'+row[1]+'</span></span>';}
                    else if(row[1].search('Invalid')>=0 || row[1]=='Failed'){return '<span class="text-red" ><i class="fa fa-fw fa-warning"></i><span class="fu">'+row[1]+'</span></span>';}
                    else if(row[1]=='TubeOut' || row[1]=='CashWithdraw'){return '<span class="text-green"><i class="fa fa-sign-out fa-rotate-270 "></i> <span class="fu">'+row[1]+'</span></span>';}
                    else if(row[1]=='RegisterReq'){return '<span class="text-blue"><i class="fa fa-link"></i> <span class="fu">'+row[1]+'</span></span>';}
                    else {return row[1];}
                },
                "targets": 1
            },
        {"data":"3"},
        {
                "render": function ( data, type, row ) {
                    if(row[2]=='BTC'){return '<span class="badge bg-yellow ccy" title="Bitcoin">B</span>';}
                    else if(row[2]=='NBT'){return '<span class="badge bg-black ccy" title="Nubits">N</span>';}
                },
                "targets": 3
            },
        {"data":"4"},
            {
            "render": function ( data, type, row ) {
                if(row[8]=='Pen'){return '<img class="st" src="img/tx0.png" title="Pending"></img>';}
                else if(row[8]=='Con'){return '<img class="st" src="img/tx2.png" title="Confirmed"></img>';}
            },
            "targets": 5
        },
            {
            "render": function ( data, type, row ) {
                if(row[9]=='Pen'){return '<img class="st" src="img/tx0.png" title="Pending"></img>';}
                else if(row[9]=='Con'){return '<img class="st" src="img/tx2.png" title="Confirmed"></img>';}
            },
            "targets": 6
        },
        {"data":"6"},
        {"data":"5"},
        {"data":"7"},
        {"render": function ( data, type, row ) {
                    var url='';
                    if(row[2] == 'NBT'){
                    url =  'https://blockexplorer.nu/transactions/'+row[7];
                    }else if(row[2] == 'BTC')
                    {
                    url =  'https://blockchain.info/tx/'+row[7];
                    }
                    return '<a target="_blank" href="'+url+'">View It On Blockexplorer</a>';
                },
                "targets": 10
            }
        ],
        "order": [[ 0, "desc" ]],
        "initComplete": function () {
            $('.dataTables_length,.dataTables_filter').addClass( 'fu' );
        }
    } );
});
$("#liveap").click(function(){
var table = $('#addrpair').DataTable( {
        "lengthMenu": [[12, 25, 60, -1], [12, 25, 60, "All"]],
        "ajax": {
            "url": jpath+'bcpair.json',
            "dataSrc": "pair"
        },
        responsive: true,
        cache: false,
        "bRetrieve": true,
        "columns": [
            {
            "render": function ( data, type, row ) {
                return '<span class="ab">'+row[1].slice(0,6)+'...'+row[1].slice(28,34)+'</span><span class="led fu">'+row[1]+'</span>';
            },
            "targets": 1
        },
                {
            "render": function ( data, type, row ) {
                return '<span class="ab">'+row[2].slice(0,6)+'...'+row[2].slice(28,34)+'</span><span class="led fu">'+row[2]+'</span>';
            },
            "targets": 2
        },
        {"data":"3"},
        {"data":"4"},
        {"data":"0"}
        ],
        "order": [[ 4, "desc" ]],
        "initComplete": function () {
            $('.dataTables_length,.dataTables_filter').addClass( 'fu' );
        }
    } );
});
/*todo: add a fresh button to data table */