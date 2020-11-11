$(document).ready(function() {
	$(".header-main__burger button").on("click", function () {
		$(".header__burger").toggleClass("active");
		$(".header-main__nav").slideToggle();
	})

	$(".dec").on("click", function() {
		event.preventDefault();
		var i = $(this).siblings("span").children(".cap-value").text();
		i--;
		if (i<0) {
			i=0
		}
		$(this).siblings("span").children(".cap-value").text(i);
	})
	$(".inc").on("click", function() {
		event.preventDefault();
		var i = $(this).siblings("span").children(".cap-value").text();
		i++;
		$(this).siblings("span").children(".cap-value").text(i);
	})
})

$(".fancy").fancybox({
	wrapCSS: "box",
	padding: 0
});
$('.catalouge-slider').slick({
	slidesToShow: 6,
	arrows: true,
	slidesToScroll: 1,
	speed: 300,
	focusOnSelect: true,
	responsive: [
	{
		breakpoint: 1800,
		settings: {
			slidesToShow: 4,
		}
	},
	{
		breakpoint:1200,
		settings: {
			slidesToShow: 2,
			vertical: false
		}
	},
	{
		breakpoint:767,
		settings: {
			slidesToShow: 1,
			vertical: false
		}
	},

	]
});
$('.aside-slider').slick({
	slidesToShow: 4,
	arrows: true,
	slidesToScroll: 1,
	speed: 300,
	focusOnSelect: true,
	responsive: [
	{
		breakpoint: 1800,
		settings: {
			slidesToShow: 3,
		}
	},
	{
		breakpoint:992,
		settings: {
			slidesToShow: 2,
			vertical: false
		}
	},
	{
		breakpoint:768,
		settings: {
			slidesToShow: 1,
			vertical: false
		}
	},

	]
});
$(document).ready(function(){
	$(".arow-down").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
});
});
$(document).ready(function(){
	jQuery(function(){
		jQuery(".tell_inp").mask("+7 999 999 99 99");
	});
	var myMap; 
	ymaps.ready(
		function () { 
			var myMap = new ymaps.Map('map', { 
				center: [56.012934, 93.010064], 
				zoom: 17,
				controls: []
			}); 

			var myPlacemark0 = new ymaps.Placemark( 
				[56.012934, 93.010064] , { 
				}); 

			myMap.geoObjects.add(myPlacemark0);
			myMap.behaviors.disable(['rightMouseButtonMagnifier', 'scrollZoom'])

		}
		); 
	var myMap; 
})

$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	fade: true,
	arrows: false,
	asNavFor: '.slider-nav',
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
		}
	},
	{
		breakpoint: 769,
		settings: {
			asNavFor: null,
			dots: true,
		}
	}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});

$('.slider-nav').slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.slider-for',
	focusOnSelect: true,
	
});

$('.slider-watched').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 769,
		settings: {
			asNavFor: null,
		}
	},
	{
		breakpoint: 426,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: null,
		}
	}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
});




