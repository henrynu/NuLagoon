
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
  var slideToTop = $("<div />");
  slideToTop.html('<i class="fa fa-chevron-up"></i>');
  slideToTop.css({
    position: 'fixed',
    bottom: '20px',
    right: '25px',
    width: '40px',
    height: '40px',
    color: '#eee',
    'font-size': '',
    'line-height': '40px',
    'text-align': 'center',
    'background-color': '#222d32',
    cursor: 'pointer',
    'border-radius': '5px',
    'z-index': '99999',
    opacity: '.7',
    'display': 'none'
  });
  slideToTop.on('mouseenter', function () {
    $(this).css('opacity', '1');
  });
  slideToTop.on('mouseout', function () {
    $(this).css('opacity', '.7');
  });
  $('.wrapper').append(slideToTop);
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 150) {
      if (!$(slideToTop).is(':visible')) {
        $(slideToTop).fadeIn(500);
      }
    } else {
      $(slideToTop).fadeOut(500);
    }
  });
  $(slideToTop).click(function () {
    $("body").animate({
      scrollTop: 0
    }, 500);
  });
  $(".navbar-custom-menu li:not(.treeview) a").click(function () {
    var $this = $(this);
    var target = $this.attr("href");    
    if (typeof target === 'string') {
      $("body").animate({
        scrollTop: ($(target).offset().top - 60 ) + "px"
      }, 500);
    }
  });
});

