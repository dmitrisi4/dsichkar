 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoHeight: true,
  asNavFor: '.slider-nav',
  prevArrow: '<img class="prev-btn" src="assets/img/prev-big.png">',
  nextArrow: '<img class="next-btn" src="assets/img/next-big.png">',
});

 $('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  prevArrow: '<img class="prev-btn" src="assets/img/prev-small.png">',
  nextArrow: '<img class="next-btn" src="assets/img/next-small.png">',
  responsive: [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true
    }
  }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
 $('.projects_item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1000,
  infinite: true,
  dots:true,
  prevArrow: '<img class="prev-btn" src="assets/img/prev-big.png">',
  nextArrow: '<img class="next-btn" src="assets/img/next-big.png">',
});


$('.js-markers').each(function() {
  var $this = $(this);
  var markers = $this.find('.js-marker');
  var activeClass = 'is-active';

  $(document).mouseup(function(e) {
    if (!markers.is(e.target) && markers.has(e.target).length === 0) {
      markers.removeClass(activeClass);
    }
  });

  markers.each(function() {
    var marker = $(this);
    var btn = marker.find('.js-marker__btn');
    var tooltip = marker.find('.js-marker__tooltip');

    btn.on('click', function() {
      marker.toggleClass(activeClass);

      markers.not(marker).removeClass(activeClass);
    });
  });
});

