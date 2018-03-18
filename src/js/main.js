// console.log('Hello world!');
$(document).ready(function () {

  // lang-list
  $('.js-lang-list .lang-list__btn').click(function() {
    $(this).closest('.js-lang-list').toggleClass('active');
    $(this).closest('.lang-list__item').addClass('active').siblings().removeClass('active');
  });

  // .main-slider
  $(".js-slider-ban").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.js-prev-slider',
    dots: false,
    focusOnSelect: true,
    draggable: false,
    infinite: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $(".js-prev-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.js-slider-ban',
    dots: true,
    arrows: false,
    focusOnSelect: true,
    draggable:false,
    infinite: true,
    variableWidth: true,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        vertical: true,
        variableWidth: false,
      }
    }
    ],
  });

  // modal
  $('[data-modal]').click(function () {
    var thisId = $(this).attr('data-modal');
    $('body').toggleClass('fixed');
    $('[data-id=' + thisId +']').toggleClass('active');

    setTimeout(function() {
      $('[data-id=' + thisId +']').toggleClass('open');
    }, 50);
  });

  $('[data-close]').click(function () {
    setTimeout(function() {
      $('body').removeClass('fixed');
      $('[data-id]').removeClass('active');
    }, 500);

    $('[data-id]').removeClass('open');
  });

  // mob-menu
  if ($(window).width() < 1024) {
    $('.js-parent .main-menu__link').removeAttr('href');

    $('.js-parent .main-menu__link').click(function () {
      $(this).closest('.js-parent').find('.main-menu__submenu').slideToggle(300);
    });
  }

  //  product-card-SLIDER 
  $(".slick-slider-3").slick({
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: false,
        vertical: false,
        infinite: true
      }
    }]
  });

  //  img
  $('.product-galery__pic').attr('src', $('.prod-slider__item:first-child  img').attr('src'));

  $('body').on('click', '.prod-slider__wp-img', function() {
    var src = $(this).find('img').attr('src');

    $('.product-galery__pic').attr('src', src);

  });

  //   Toggle switch between view_columns__style & view_list__style
  function swichColumnAndListstyles() {
    grid_button = $(".toolbar__link--grid");
    list_button    = $(".toolbar__link--list");
    block_products = $(".product-item__wrap");

    wrapperImg = $(".product-item__wrap");

    grid_button.click(function() {

      console.log("column");

      $('.product-item__wrap > .product-item__item--list').attr('class', 'product-item__item  product-item__item--grid');

      $(".toolbar__link--grid").addClass("toolbar__link--active");

      $(".toolbar__link--list").removeClass("toolbar__link--active");

    });


    list_button.click(function() {

      console.log("list");

      $('.product-item__wrap > .product-item__item--grid').attr('class', 'product-item__item  product-item__item--list');

      $(".toolbar__link--list").addClass("toolbar__link--active");

      $(".toolbar__link--grid").removeClass("toolbar__link--active");

    });

  }

  swichColumnAndListstyles();

  $(".js-carousel-1").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: true,
    autoplay: false,
    arrows: false
  });

  $(".js-carousel-0").slick({
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: true,
    autoplay: false,
    adaptiveHeight: true,
    arrows: true,
    appendArrows: '.sect-info__arrow'
  });

  // + Ховер меню + 
  function n() {
    var n = $("#main-nav").find("ul"),
    i = $("#main-nav").find(".indicator"),
    li_padding = 0,
    li_width = 0,
    nav_width = $("#main-nav").find("ul").outerWidth(),
    count_li = $(".info-menu").children('.info-menu__item').length;
    t = n.find("li").first().children().outerWidth(),
    nav = $("#main-nav");

    if ($(window).width() >= 1200) {

      nav.removeClass("header-page__menu--nojs");

      $('.info-menu__link').each(function(){
        li_width = li_width + $(this).width();
      });

      li_padding = (nav_width - li_width) / count_li;

      i.css("width", t + "px"),
      n.find("a").on("mouseover", function() {
        var n = $(this).width() + li_padding,
        t = 0;

        $(this).parent().prevAll().each(function() {
          t += $(this).find("a").width() + li_padding;
        }), i.css({
          width: n + "px",
          transform: "translate3d(" + t + "px, 0, 0)"
        });
      })

    }
  }

  n();
  // - Ховер меню - 


  // + ANCHOR-LIST +
  
  var menu_selector = ".js-anchor-list";

  function onScroll() {
    var scroll_top = $(document).scrollTop();
    $(menu_selector + " a").each(function() {
      var hash = $(this).attr("href");
      var target = $(hash);
      if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
        $(menu_selector + " a.active").removeClass("active");
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });
  }

  $(document).on("scroll", onScroll);

  $("a[href^=#]").click(function(e) {
    e.preventDefault();
    $(document).off("scroll");
    $(menu_selector + " a.active").removeClass("active");
    $(this).addClass("active");
    var hash = $(this).attr("href");
    var target = $(hash);

    $("html, body").animate({
      scrollTop: target.offset().top - 50
    }, 500, function() {
      window.location.hash = hash - 50;
      $(document).on("scroll", onScroll);


    });
  });
  // - ANCHOR-LIST -


});


// + Btn top +
  $(".btn-ancor").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
    // $("body, html").animate({ scrollTop:offset },400,"easeOutQuint");
  });


  $(window).scroll(function () {

    var ancor = $(".btn-ancor"),
    windowHeight = $(window).height() / 2;

    var screenWidth = screen.width;

    if ($(this).scrollTop() > windowHeight) {
      ancor.removeClass("hidden");

    } else {
      ancor.addClass("hidden");
    }

    // if (($(this).scrollTop() >= topNavigation) && (screenWidth >= 1027)) {
    //   mainNavigation.addClass(mainNavigationFixed);
    // } else {
    //   mainNavigation.removeClass(mainNavigationFixed);
    // }

  });
// - Btn top -

// svg
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});
svg4everybody();

// + Video slider + 

// Load YouTube Frame API
(function(){ //Closure, to not leak to the scope
  var tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/player_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
})();


var vidLink = $('#tv').attr('data-video-yt').split('watch?v=')[1];

var tv,
playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
var vid = {'videoId': vidLink, 'suggestedQuality': 'hd1080', 'startSeconds': 1};

function onYouTubePlayerAPIReady(){
  tv = new YT.Player('tv', {events: {'onReady': onPlayerReady("video-bord"), 'onStateChange': onPlayerStateChange("video-bord")}, playerVars: playerDefaults});
}

function onPlayerReady(){

  return function (event) {
    console.log('2222: ');

    var the_div = $('#video-bord');

    $('.mythumb').click(function() {
      console.log('Clicked: ');
      var $this = $(this);
      $this.fadeOut().parent().addClass('playing');
      if ($this.parent().hasClass('playing')) {
        tv
        .loadVideoById(vid)
        .seekTo(Math.floor(Math.random() * (180 - 1 + 1)))
        .mute();
      }
    });
  }
}

function onPlayerStateChange(){
  return function (event) {

    var the_div = $('#video-bord');
    var play_state = tv.getPlayerState();

    // video is playing
    if ( play_state === 1 ) {
      the_div.addClass('playing');
      $('.mythumb').fadeOut();
      console.log('Clicked: 00009');
    }

    // video is ended
    if (play_state === 0 ) {
      the_div.removeClass('playing');
      $('.mythumb').fadeIn();
    }

    // video is paused
    if (play_state === 2 ) {
      the_div.removeClass('playing');
      $('.mythumb').fadeIn();
      $('.mythumb').click(function() {
        console.log('Clicked: 99');
        var $this = $(this);
        the_div.addClass('playing');
        if (the_div.hasClass('playing')) {
          tv.playVideo();
        }
      });
    }
  }
}

function vidRescale(){

  var w = $(window).width()+200,
  h = $(window).height()+200;

  if (w/h > 16/9){
    tv.setSize(w, w/16*9);
    $('.tv .screen').css({'left': '0px'});
  } else {
    tv.setSize(h/9*16, h);
    $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
  }
}


$(window).on('load resize', function(){
  vidRescale();
});

// - Video slider -

































