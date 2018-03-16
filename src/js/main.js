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






//  --------------CARD-PAGE--------------------

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
// appendDots: '.comment-slider__dots',
arrows: false
});

$(".js-carousel-0").slick({
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  dots: true,
  autoplay: false,
// fade: true,
adaptiveHeight: true,
arrows: true,
appendArrows: '.sect-info__arrow'
});

// + Ховер меню + 
function n() {
  var n = $("#main-nav").find("ul"),
  i = $("#main-nav").find(".indicator"),
  // t = n.find("li").first().children().outerWidth(),
  t = n.find("li").first().children().outerWidth(),
  nav = $("#main-nav");
  nav.removeClass("header-page__menu--nojs");

  i.css("width", t + "px"),
  n.find("a").on("mouseover", function() {
    var n = $(this).outerWidth(),
    t = 0;
    $(this).parent().prevAll().each(function() {
      t += parseInt($(this).find("a").outerWidth())
    }), i.css({
      width: n + "px",
      transform: "translate3d(" + t + "px, 0, 0)"
    });
  })
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

$(document).ready(function() {
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
});
// - ANCHOR-LIST -
















});


// svg
!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});
svg4everybody();






// + Video slider + 

// var slideWrapper = $(".main-slider"),
// iframes = slideWrapper.find('.embed-player'),
// lazyImages = slideWrapper.find('.slide-image'),
// lazyCounter = 0;

// // POST commands to YouTube or Vimeo API
// function postMessageToPlayer(player, command){
//   if (player == null || command == null) return;
//   player.contentWindow.postMessage(JSON.stringify(command), "*");
// }

// // When the slide is changing
// function playPauseVideo(slick, control){
//   var currentSlide, slideType, startTime, player, video;

//   currentSlide = slick.find(".slick-current");
//   slideType = currentSlide.attr("class").split(" ")[1];
//   player = currentSlide.find("iframe").get(0);
//   startTime = currentSlide.data("video-start");

//   if (slideType === "vimeo") {
//     switch (control) {
//       case "play":
//       if ((startTime != null && startTime > 0 ) && !currentSlide.hasClass('started')) {
//         currentSlide.addClass('started');
//         postMessageToPlayer(player, {
//           "method": "setCurrentTime",
//           "value" : startTime
//         });
//       }
//       postMessageToPlayer(player, {
//         "method": "play",
//         "value" : 1
//       });
//       break;
//       case "pause":
//       postMessageToPlayer(player, {
//         "method": "pause",
//         "value": 1
//       });
//       break;
//     }
//   } else if (slideType === "youtube") {
//     switch (control) {
//       case "play":
//       postMessageToPlayer(player, {
//         "event": "command",
//         "func": "mute"
//       });
//       postMessageToPlayer(player, {
//         "event": "command",
//         "func": "playVideo"
//       });
//       break;
//       case "pause":
//       postMessageToPlayer(player, {
//         "event": "command",
//         "func": "pauseVideo"
//       });
//       break;
//     }
//   } else if (slideType === "video") {
//     video = currentSlide.children("video").get(0);
//     if (video != null) {
//       if (control === "play"){
//         video.play();
//       } else {
//         video.pause();
//       }
//     }
//   }
// }

// // Resize player
// function resizePlayer(iframes, ratio) {
//   if (!iframes[0]) return;
//   var win = $(".main-slider"),
//   width = win.width(),
//   playerWidth,
//   height = win.height(),
//   playerHeight,
//   ratio = ratio || 16/9;

//   iframes.each(function(){
//     var current = $(this);
//     if (width / ratio < height) {
//       playerWidth = Math.ceil(height * ratio);
//       current.width(playerWidth).height(height).css({
//         left: (width - playerWidth) / 2,
//         top: 0
//       });
//     } else {
//       playerHeight = Math.ceil(width / ratio);
//       current.width(width).height(playerHeight).css({
//         left: 0,
//         top: (height - playerHeight) / 2
//       });
//     }
//   });

// }

// // DOM Ready
// $(function() {
// // Initialize
// slideWrapper.on("init", function(slick){
//   slick = $(slick.currentTarget);
//   setTimeout(function(){
//     playPauseVideo(slick,"play");
//   }, 1000);
//   resizePlayer(iframes, 16/9);
// // vidRescale();
// });
// slideWrapper.on("beforeChange", function(event, slick) {
//   slick = $(slick.$slider);
//   playPauseVideo(slick,"pause");
// });
// slideWrapper.on("afterChange", function(event, slick) {
//   slick = $(slick.$slider);
//   playPauseVideo(slick,"play");
// });
// slideWrapper.on("lazyLoaded", function(event, slick, image, imageSource) {
//   lazyCounter++;
//   if (lazyCounter === lazyImages.length){
//     lazyImages.addClass('show');
// // slideWrapper.slick("slickPlay");
// }
// });

// //start the slider
// slideWrapper.slick({
// // fade:true,
// autoplaySpeed:4000,
// lazyLoad:"progressive",
// speed:600,
// arrows:false,
// dots:true,
// cssEase:"cubic-bezier(0.87, 0.03, 0.41, 0.9)"
// });
// });

// // Resize event
// $(window).on("resize.slickVideoPlayer", function(){  
//   resizePlayer(iframes, 16/9);
// });

// $(window).on('load resize', function(){
//   vidRescale();
// });


// var tag = document.createElement('script');
// tag.src = 'https://www.youtube.com/player_api';
// var firstScriptTag = document.getElementsByTagName('script')[0];

// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// var vidLink = $('.tv-video').attr('data-video-yt').split('watch?v=')[1];

// var tv,
// playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
// var vid = {'videoId': vidLink, 'suggestedQuality': 'hd1080', 'startSeconds': 1};

// function onYouTubePlayerAPIReady(){
//   tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
// }

// function onPlayerReady(){
//   tv
//   .loadVideoById(vid)
//   .seekTo(Math.floor(Math.random() * (180 - 1 + 1)))
//   .mute();
// }

// function onPlayerStateChange(e){
//   if (e.data === 1){
//     $('.tv-video, .cover').addClass('on');
//   } else if (e.data === 0){
//     tv.seekTo(vid.startSeconds);
//   }
// }
// function vidRescale(){

//   var w = $(window).width()+200,
//   h = $(window).height()+200;

//   if (w/h > 16/9){
//     tv.setSize(w, w/16*9);
//     $('.tv .screen').css({'left': '0px'});
//   } else {
//     tv.setSize(h/9*16, h);
//     $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
//   }
// }





// $(window).on('load resize', function(){
//   vidRescale();
// });




// $('body').on('click', '.video-play-yt', function(){
//   tv.playVideo();
//   $('.video-stop-yt').show();
//   $('.video-play-yt').hide();
// });

// $('body').on('click', '.video-stop-yt', function(){
//   tv.pauseVideo();
//   $('.video-play-yt').show();
//   $('.video-stop-yt').hide();
// });


// $('body').on('click', '.audio-play-yt', function(){
//   if( tv.isMuted() == true ){
//     tv.unMute();
//     $('.video-panel__ico.audio').removeClass('active');
//   }else{
//     tv.mute();
//     $('.video-panel__ico.audio').addClass('active');
//   }
// });



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
  // tv
  // .loadVideoById(vid)
  // .seekTo(Math.floor(Math.random() * (180 - 1 + 1)))
  // .mute();
  // console.log('000000000000: ');

    return function (event) {
      console.log('2222: ');
       // var the_div = $('#video-bord');
      // console.log(the_div);
        // var player = players[frameID]; // player object
        var the_div = $('#video-bord');
        // the_div.children('.mythumb').click(function() {
          $('.mythumb').click(function() {
          console.log('Clicked: ');
            var $this = $(this);
            $this.fadeOut().parent().addClass('playing');
            if ($this.parent().hasClass('playing')) {

              tv
              .loadVideoById(vid)
              .seekTo(Math.floor(Math.random() * (180 - 1 + 1)))
              .mute();

                // tv.playVideo();
            }
        });
    }
}

function onPlayerStateChange(){

  // console.log(e.data);
 
  // if (e.data === 1) {
  //   $('#tv, .cover').addClass('on');
  // } else if (e.data === 0) {
  //   tv.seekTo(vid.startSeconds);
  // }

   return function (event) {
  
        // var player = players[frameID]; // player object
        var the_div = $('#video-bord');
        var play_state = tv.getPlayerState();

      console.log('Clicked: 99');
    console.log(play_state);
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


// $('body').on('click', '#video-play-yt', function(){
//   tv.playVideo();
//   $('#video-stop-yt').show();
//   $('#video-play-yt').hide();
// });

// $('body').on('click', '#video-stop-yt', function(){
//   tv.pauseVideo();
//   $('#video-play-yt').show();
//   $('#video-stop-yt').hide();
// });


// $('body').on('click', '#audio-play-yt', function(){
//   if( tv.isMuted() == true ){
//     tv.unMute();
//     $('.video-panel__ico.audio').removeClass('active');
//   }else{
//     tv.mute();
//     $('.video-panel__ico.audio').addClass('active');
//   }
// });






// // Load YouTube Frame API
//  (function(){ //Closure, to not leak to the scope
//   var tag = document.createElement('script');
//   tag.src = 'https://www.youtube.com/player_api';
//   var firstScriptTag = document.getElementsByTagName('script')[0];
//  })();

// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// var vidLink = $('#tv').attr('data-video-yt').split('watch?v=')[1];

// var tv,
// playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
// var vid = {'videoId': vidLink, 'suggestedQuality': 'hd1080', 'startSeconds': 1};

// function onYouTubePlayerAPIReady(){
//   tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
// }

// function onPlayerReady(){
//   tv
//   .loadVideoById(vid)
//   .seekTo(Math.floor(Math.random() * (180 - 1 + 1)))
//   .mute();
// }

// function onPlayerStateChange(e){
//   if (e.data === 1){
//     $('#tv, .cover').addClass('on');
//   } else if (e.data === 0){
//     tv.seekTo(vid.startSeconds);
//   }
// }
// function vidRescale(){

//   var w = $(window).width()+200,
//   h = $(window).height()+200;

//   if (w/h > 16/9){
//     tv.setSize(w, w/16*9);
//     $('.tv .screen').css({'left': '0px'});
//   } else {
//     tv.setSize(h/9*16, h);
//     $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
//   }
// }

// $(window).on('load resize', function(){
//   vidRescale();
// });


// $('body').on('click', '#video-play-yt', function(){
//   tv.playVideo();
//   $('#video-stop-yt').show();
//   $('#video-play-yt').hide();
// });

// $('body').on('click', '#video-stop-yt', function(){
//   tv.pauseVideo();
//   $('#video-play-yt').show();
//   $('#video-stop-yt').hide();
// });


// $('body').on('click', '#audio-play-yt', function(){
//   if( tv.isMuted() == true ){
//     tv.unMute();
//     $('.video-panel__ico.audio').removeClass('active');
//   }else{
//     tv.mute();
//     $('.video-panel__ico.audio').addClass('active');
//   }
// });



// - Video slider -