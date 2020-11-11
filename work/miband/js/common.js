 $("body, .slider-reviews").removeClass("no-js")

 // slider
 $('.sl-js-1, .sl-js-2, .sl-js-3, .sl-js-4, .sl-js-5, .sl-js-6 ').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.sl-js-1-nav, .sl-js-2-nav, .sl-js-3-nav, .sl-js-4-nav, .sl-js-5-nav, .sl-js-6-nav '});
 
 $('.sl-js-1-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sl-js-1',
  vertical: true,
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 769,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: false,
    }
  }
  ]
});

 $('.sl-js-2-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sl-js-2',
  vertical: true,
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 481,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: false,
    }
  }
  ]
});

 $('.sl-js-3-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sl-js-3',
  vertical: true,
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 481,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: false,
    }
  }
  ]
});

 $('.sl-js-4-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sl-js-4',
  vertical: true,
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 481,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: false,
    }
  }
  ]
});

 $('.sl-js-5-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sl-js-5',
  vertical: true,
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 481,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: false,
    }
  }
  ]
});

 $('.sl-js-6-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.sl-js-6',
  vertical: true,
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 481,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      vertical: false,
    }
  }
  ]
});


 $('.slider-box').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 481,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
});
// end

// accordeon
$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
  $('#accordeon .acc-head').on('click', f_acc);
});

function f_acc(){
//скрываем все кроме того, что должны открыть
$('#accordeon .acc-head').not($(this)).removeClass('active');
$('#accordeon .acc-body').not($(this).next()).slideUp(1000);
// открываем или скрываем блок под заголовоком, по которому кликнули
$(this).next().slideToggle(1000);
$(this).toggleClass('active');

}
// end

// tab menu
(function($) {
  $(function() {
    $("ul.tabs-caption").on("click", "li:not(.active)", function() {
      $(this)
      .addClass("active")
      .siblings()
      .removeClass("active")
      .closest("div.card-info")
      .find(".card-info__content")
      .hide()
      .eq($(this).index())
      .fadeIn(500);
    });
  });
})(jQuery);
// end

// counter
$(".dec").on("click", function() {
  event.preventDefault();
  var i = $(this).siblings("input").val();
  i--;
  if (i<0) {
    i=0
  }
  $(this).siblings("input").val(i)
})
$(".inc").on("click", function() {
  event.preventDefault();
  var i = $(this).siblings("input").val();
  i++;
  $(this).siblings("input").val(i)
})
// end

// input-required
$('.order-form button').on('click', function(){
  $('.order-form input').each(function(){
    if($(this).val() != ''){
      $(this).removeClass('error');
      $(this).next('.empty').hide();
    }else {
      $(this).addClass('error');
      $(this).next('.empty').show();
    }
  });
});

$('.empty').on('click', function(){
  $(this).hide();
});
// end


// menu mobile
(function topMenuResponse(){

  var topMenu = $("#main-nav-js"),
  buttonResponseToggle = topMenu.find(".open-menu");
  navResponseToggle = topMenu.find("#main-nav");

  buttonResponseToggle.on('click', function(){
    navResponseToggle.slideToggle();
    $(".header__nav").toggleClass("push-wrap");
    navResponseToggle1.css('display', 'none')
  });

})();
// end

$(window).resize(function(){
  if ($(window).width() > 768) {
    navResponseToggle.css('display', 'flex')
    $(".header__nav").removeClass("push-wrap");
    $("#tell-mobile-js").hide();
  }
});

$(window).resize(function(){
  if ($(window).width() < 769) {
   
    $("#tell-mobile-js").show();
  }
});

// menu tel
(function topTellResponse(){

  var topTell = $("#tell-mobile-js"),
  buttonResponseToggle1 = $(".open-tel");
  navResponseToggle1 = topTell.find("#tell-mobile");

  buttonResponseToggle1.on('click', function(){
    navResponseToggle1.slideToggle();
    navResponseToggle.css('display', 'none')
    $(".header__nav").removeClass("push-wrap");
  });

})();
// end

// Table accordeon
$(document).ready(function() {
  //прикрепляем клик по заголовкам acc-head
  $('#accordeon-table .acc-head-table').on('click', t_acc);
});

$( init );

function init(){
//скрываем все кроме того, что должны открыть
if ( $(window).width() < 768 ) {

  $('#accordeon-table .acc-body-table').not($(this).next()).slideUp(1000);
// открываем или скрываем блок под заголовоком, по которому кликнули
$(this).next().slideToggle(1000);
}
return;
}
// end
$(document).on('click', '.region_list_2_cards .region_name', function(){
  $('.region_list_2_cards').removeClass('active');
  $(this).parent().addClass('active');
  return false;
});

// modal form
$('.modal-select-city, .btn-callback-js, .btn-feedback-js').fancybox({
  padding: 0,
  helpers : {
    overlay : {
            locked : false // try changing to true and scrolling around the page
          }
        }
      });


// 

// maps
//Дождёмся загрузки API и готовности DOM.
ymaps.ready(mapinit);

function mapinit() {

  // var result = document.getElementById('result'),
  myMap = new ymaps.Map('map', {
      center: [55.774725, 37.617779], // Москва
      zoom: 17
    });  
};
// end

$( ".map-info-close" ).click(function() {
  $( ".map-info-js" ).hide( "slow" );
});


