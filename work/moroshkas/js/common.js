$(document).ready(function() {
	$('.baner-top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		speed: 300,
		dots: true,
		focusOnSelect: true
	});
	$(".header__burger button").on("click", function () {
		$(".header__burger").toggleClass("active");
		$(".header__nav > ul").slideToggle();
	})
	$(".btn-sidebar").on("click", function () {
		$(".side-bar").slideToggle();
	})
	$(".rule-item__title").on("click", function () {
		$(this).parent('.rule-item').siblings().removeClass("active");
		$(this).parent('.rule-item').siblings().children('.rule-item__text').slideUp();
		$(this).siblings('.rule-item__text').slideToggle();
		$(this).parent('.rule-item').toggleClass("active");
	})
	$(".vacansy-item__title").on("click", function () {
		$(this).parent('.vacansy-item').siblings().removeClass("active");
		$(this).parent('.vacansy-item').siblings().children('.vacansy-item__text').slideUp();
		$(this).siblings('.vacansy-item__text').slideToggle();
		$(this).parent('.vacansy-item').toggleClass("active");
	})
	$(".fancy").fancybox({
		wrapCSS: "box",
		padding: 0
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
})


$(document).ready(function() {
	var title = $(".info-product h3").text();
	$(".mobile-title").text(title);
	$(window).on('resize', function () {
		if ($(window).width()>991) {
			$(".mobile-title").hide();
			$(".info-product h3").show();
		}
		else{
			if ($(window).width()<991) {
				$(".mobile-title").show();
				$(".info-product h3").hide();

			}
		}
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

});
