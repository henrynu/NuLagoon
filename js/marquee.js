(function(){
	$.fn.scrollup = function(options){
		var defaults = {showcount:5,speed:1000,interval:3000},options = $.extend(defaults,options);
		return this.each(function(){
			var thisObj = $(this),intervalId = 0;
			var sObj = {
				_resetHtml:function(_t,_o){
					_t.wrap("<div class='scrollWrap'></div>");
					$(".scrollWrap").css({"height":parseInt(_o.showcount)*parseInt(_t.children().outerHeight())+"px","overflow":"hidden"});
				},
				_active:function(_t,_o){
					_t.stop(true,true).animate({marginTop:parseInt(-_t.children().height())+"px"},_o.speed,function(){
						$(this).css({"marginTop":0}).children(":first").appendTo(_t);
					});
				},
				_bind:function(_t,_o){
					var $t = this;
					intervalId = setInterval(function(){
						$t._active(_t,_o);
					},_o.interval);
					_t.hover(
						function(){
							clearInterval(intervalId);
						},
						function(){
							intervalId = setInterval(function(){
								$t._active(_t,_o);
							},_o.interval);
						}
					);
				},
				init:function(obj,opt){
					if(obj.children().length > opt.showcount){
						this._resetHtml(obj,opt);
						this._bind(obj,opt);
					}
				}
			};
			sObj.init(thisObj,options);
		});
	};
})(jQuery);

function bartext ( d ) {
    var html = "<b>"+d[0]+"</b>";
    var textclass = "";
    if (d[1]>0){
        textclass = "text-greenl";
        sign = '+';
    }else if(d[1]<0){
        textclass = "text-red";
        sign = '';
    }
    html = html + '<span class="'+textclass+'"> ' + sign + d[1];
    html = html + ' ('+sign+d[2]+'%)</span>';
    return html;
}

function anntext(d){
    var text = "";
    for (var i = 0; i < d.length; i++) {
        var text = text + '<p><a target="_blank" href="'+d[i]['url']+'"><i class="fa fa-quote-left"></i> '+d[i]['text']+' <i class="fa fa-quote-right"></i></a></p>';
    }
    return text;
}
 $.ajax(
        {
        url:jpath+"bar.json",
        dataType:"json",
        success:function(bardata)
        {
                $(".scrollUp").find('.barDT').html(bardata['barDT']);
                $(".scrollUp").find('.barA').html(bartext(bardata['barA']));
                $(".scrollUp").find('.barC').html(bartext(bardata['barC']));
                $(".scrollUp").find('.barD').html(bartext(bardata['barD']));
                $(".scrollUp").html($(".scrollUp").html() + anntext(bardata['ANN']));

                $(".scrollUp").scrollup({
                    showcount:1, // 默认显示行数
                    speed:1000, // 速度
                    interval:5000 // 间隔
                });

                $("#toTop").scrollToTop();
        }}
        );

