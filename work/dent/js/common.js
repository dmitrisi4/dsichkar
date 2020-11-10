$(document).ready(function() {
// scroll
var $page = $('html, body');
$('a[href*="#"]').click(function() {
	$page.animate({
		scrollTop: $($.attr(this, 'href')).offset().top
	}, 400);
	return false;
});
// edn scroll

	// slider slick
	$('.slider-stock').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		focusOnSelect: true,
		fade: true,
		responsive: [
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}
		}
		]
	});
	// slider-discounts
	$('.slider-discounts').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 690,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false,
				dots: true
			}
		}
		]
	});
	// end - slider-discounts
	$('.slider-staff').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 993,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
// slider-examples
$('.slider-examples').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	focusOnSelect: true,
	responsive: [
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			dots: true
		}
	}
	]
});
// end - slider-examples
// certificates-slider
$('.certificates-slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	focusOnSelect: true,
	responsive: [
	{
		breakpoint: 993,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false, 
			dots: true
		}
	}
	]
});
// end - certificates-slider
// services-slider
$('.services-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	focusOnSelect: true,
	dots: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	responsive: [
	{
		breakpoint: 576,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false, 
			dots: true
		}
	}
	]
});
// end - services-slider

$('.topical-articles').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	focusOnSelect: true,
	responsive: [
	{
		breakpoint: 1025,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	},
	{
		breakpoint: 767,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}
	]
});

$('.baner-block-slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	focusOnSelect: true,
	dots: true,
	speed: 500,
	fade: true,
	autoplay: true,
	autoplaySpeed: 3000,
	cssEase: 'linear'
});


// end - slider - slick

// burger
(function topMenuResponse(){

	var topMenu = $(".header-page"),
	buttonResponseToggle = topMenu.find(".burger-button");
	navResponseToggle = topMenu.find(".mobile-nav");

	buttonResponseToggle.on('click', function(){
		navResponseToggle.slideToggle();
		$(".header-page").toggleClass("push-wrap");

	});

})();
// end - burger

// burger mobile-services
(function navbarResponse(){

	var navbarMenu = $(".main-page"),
	buttonResponseToggle2 = navbarMenu.find(".burger-navbar");
	navResponseToggle2 = navbarMenu.find(".navbar-mobile");

	buttonResponseToggle2.on('click', function(){
		navResponseToggle2.slideToggle();
		$(".main-page").toggleClass("push-wrap");

	});

})();
// end - burger mobile-services



// nav responsive
if ($(window).width() <= 992) {
	$(".main-nav").prependTo(".mobile-nav");
	$(".header-page__center .numbers-list").prependTo(".header-page__main-wrap");
	$(".header-page .burger-button").addClass("header-burger");
	$(".header-burger").click(function() {
		$('.main-page').removeClass("push-wrap");
	});
	navResponseToggle.css('display', 'none');
	navResponseToggle2.css('display', 'none');
}

if ($(window).width() > 992) {
	$(".main-nav").prependTo(".header-page__nav-wrap");
	$(".header-page__main-wrap .numbers-list").prependTo(".header-page__center");
}

if ($(window).width() >= 992) {
	navResponseToggle2.css('display', 'block');
}
// end - nav responsive




// Navbar - submenu //
$('.dropdown-list__list-item .dropdown-list__click-btn').click(function(e) {
	e.preventDefault();
	$(this).next('.dropdown-list__list-inner').fadeToggle(250);
	$(this).toggleClass("active");
});
// end - Navbar - submenu //
});

// autocolumnlist
(function ($) {
	$(function () {
		$('#ul-row').autocolumnlist({
			columns: 2
		});
	})
})(jQuery)
// end - autocolumnlist

// datetimepicker
jQuery(document).ready(function () {
	'use strict';

	jQuery('#datetimepicker').datetimepicker();
})
// end - datetimepicker


//  responsive

$(window).resize(function(){
	if ($(window).width() <= 991) {

	}

	if ($(window).width() <= 992) {
		$(".main-nav").prependTo(".mobile-nav");
		$(".header-page__center .numbers-list").prependTo(".header-page__main-wrap");
		$( ".main-page" ).removeClass( "push-wrap");
		$( ".header-page" ).removeClass( "push-wrap");
		$(".header-page .burger-button").addClass("header-burger");
		navResponseToggle.css('display', 'none');
		navResponseToggle2.css('display', 'none');
		$(".header-burger").click(function() {
			$('.main-page').removeClass("push-wrap");
		});
	}

	if ($(window).width() > 992) {
		$(".main-nav").prependTo(".header-page__nav-wrap");
		$(".header-page__main-wrap .numbers-list").prependTo(".header-page__center");
		navResponseToggle2.css('display', 'block');
		
	}

})
$('.navbar-mobile__title').on('click', function(e) {
	if ($(window).width() <= 991) {
		f_acc($(this));
	}
});
// end - responsive


function f_acc(title){
		//скрываем все кроме того, что должны открыть
		$('.navbar-mobile__title').not($(title)).removeClass('active');
		$('.navbar-mobile__wrap').not($(title).next()).slideUp(1000);
		// открываем или скрываем блок под заголовоком, по которому кликнули
		$(title).siblings('.navbar-mobile__wrap').slideToggle();
		$(title).toggleClass('active');
	}

	// $(".doctor-btn").fancybox({
	// });
	// $(".question-btn").fancybox({
	// });

	$(".doctor-btn").on("click", function(){
		var name = $(this).closest(".doctors-slot").find(".doctors-name").text();
		console.log(name);
		$(".name-slot").text(name);
	});