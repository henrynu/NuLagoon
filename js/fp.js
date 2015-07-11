/*scroll to top*/
(function(a){a.fn.scrollToTop=function(c){var d={speed:800};c&&a.extend(d,{speed:c});return this.each(function(){var b=a(this);a(window).scroll(function(){100<a(this).scrollTop()?b.fadeIn():b.fadeOut()});b.click(function(b){b.preventDefault();a("body, html").animate({scrollTop:0},d.speed)})})}})(jQuery);

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

$.ajax({
    url:urlmd['Risk'],
    dataType:"text",
    success:function(text){
        var converter = new showdown.Converter();
        $("#Risk").find(".md").html(converter.makeHtml(text));
    }
});

$.ajax({
    url:urlmd['TermA'],
    dataType:"text",
    success:function(text){
        var converter = new showdown.Converter();
        $("#TermA").find(".md").html(converter.makeHtml(text));
    }
});

$.ajax({
    url:urlmd['TermCD'],
    dataType:"text",
    success:function(text){
        var converter = new showdown.Converter();
        $("#TermCD").find(".md").html(converter.makeHtml(text));
    }
});

/*
 * Documentation JS script
 */
$(function () {
  $(".navbar-nav .dropdown-menu li:not(.treeview) a").click(function () {
    var $this = $(this);
    var target = $this.attr("href");    
    if (typeof target === 'string') {
      $("body").animate({
        scrollTop: ($(target).offset().top - 60 ) + "px"
      }, 500);
    }
  });
});

