$(document).ready(function() {
	$('.top-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		speed: 300,
		dots: true,
		focusOnSelect: true
	});
	$('.partners').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: true,
		speed: 300,
		dots: false,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint:991,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint:767,
			settings: {
				slidesToShow: 1
			}
		},

		]
	});
	$('.tovar-card-slider-nav').slick({
		slidesToShow: 3,
		arrows: false,
		slidesToScroll: 1,
		speed: 300,
		asNavFor: '.tovar-card-slider-for',
		focusOnSelect: true,
		vertical: false,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				vertical: false
			}
		},
		{
			breakpoint:768,
			settings: {
				slidesToShow: 3,
				vertical: false
			}
		},

		]
	});

	function tabInit(){ 
		$('.tabs__content').not('.tabs__content_active').hide(); 
		$('.tabs-list__item button').click(function(){ 
			$('.tabs-list__item').not($(this).parent()).removeClass('tabs-list__item_active'); 
			$(this).parent().addClass('tabs-list__item_active'); 
			$('.tabs__content').not('#'+$(this).attr('data-content')).removeClass('tabs__content_active').hide(); 
			$('#'+$(this).attr('data-content')).addClass('tabs__content_active').fadeIn(); 
		}); 
	};  
	tabInit();
	$('.tovar-card-slider-for').slick({
		slidesToShow: 1,
		arrows: false,
		slidesToScroll: 1,
		speed: 600,
		asNavFor: '.tovar-card-slider-nav',
		focusOnSelect: true
	});
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
	$(".header__burger button").on("click", function () {
		$(".header__burger").toggleClass("active");
		$(".header__nav").slideToggle();
	})
	$(".nav-catalog__title").on("click", function () {
		$(".nav-catalog__title").toggleClass("active");
		$(".nav-catalog > ul").slideToggle();
	})
	$(".question-item__title").on("click", function () {
		$(this).parent('.question-item').siblings().removeClass("active");
		$(this).parent('.question-item').siblings().children('.question-item__text').slideUp();
		$(this).siblings('.question-item__text').slideToggle();
		$(this).parent('.question-item').toggleClass("active");
	})
	$(".nav-catalog > ul > li > a").on("click", function () {
		event.preventDefault();
		$(this).parent('li').siblings().removeClass("active");
		$(this).parent('li').siblings().children('.under-menu').slideUp();
		$(this).siblings('.under-menu').slideToggle();
		$(this).parent('li').toggleClass("active");
	})
	$(".fancy").fancybox({
		wrapCSS: "box",
		padding: 0
	});
	$(window).scroll(function() {

		if($(this).scrollTop() != 0) {

			$('.arow-top').fadeIn();

		} else {

			$('.arow-top').fadeOut();

		}

	});

	$('.arow-top').click(function() {

		$('body,html').animate({scrollTop:0},800);

	});

})


