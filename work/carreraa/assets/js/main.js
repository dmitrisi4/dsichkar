(function($) {
	$(function() {
		$("ul.tabs-caption").on("click", "li:not(.active)", function() {
			$(this)
			.addClass("active")
			.siblings()
			.removeClass("active")
			.closest("section.catalog, section.novelties, section.information-block")
			.find("div.catalog__content, .novelties-box, .content-info")
			.hide()
			.eq($(this).index())
			.fadeIn(500);
		});
	});
})(jQuery);

$(document).ready(function(){
	if ($(window).width()<768) {

		$(".main-menu").slideUp();
	}
	$("#menu").on("click","a", function (event) {
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
// Cache selectors
var lastId,
topMenu = $("#menu"),
topMenuHeight = topMenu.outerHeight(),
		// All list items
		menuItems = topMenu.find("a"),
		// Anchors corresponding to menu items
		scrollItems = menuItems.map(function(){
			var item = $($(this).attr("href"));
			if (item.length) { return item; }
		});

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
	var href = $(this).attr("href"),
	offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight-240;
	$('html, body').stop().animate({ 
		scrollTop: offsetTop
	}, 300);
	e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
	 // Get container scroll position
	 var fromTop = $(this).scrollTop()+topMenuHeight;
	 
	 // Get id of current scroll item
	 var cur = scrollItems.map(function(){
	 	if ($(this).offset().top < fromTop)
	 		return this;
	 });
	 // Get the id of the current element
	 cur = cur[cur.length-1];
	 var id = cur && cur.length ? cur[0].id : "";
	 
	 if (lastId !== id) {
	 	lastId = id;
			 // Set/remove active class
			 menuItems
			 .parent().removeClass("active")
			 .end().filter("[href='#"+id+"']").parent().addClass("active");
			}                   
		});


$('[data-fancybox="gallery"]').fancybox({
	thumbs : {
		showOnStart : true
	},
	hash : true
})

$(".header__burger button").on("click", function () {
	$(".main-menu").slideToggle();
})
$(document).ready(function(){
	$('.info-slider-2').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			},
		}
		]
	});

	
});

// google maps
function initMap() {
	var myLatLng = {lat: 45.414081, lng: 11.148430};

	var map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 17,
		disableDefaultUI: true
	});

	// Create a marker and set its position.
	var marker = new google.maps.Marker({
		map: map,
		position: myLatLng,
		title: 'Hello World!'
	});
}
// end - google maps

// modal form
$('.modal-quest, .btn-callback, .btn-request').fancybox();

// 