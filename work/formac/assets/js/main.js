$(".fancybox").fancybox({
	padding: 0
})
$(".more-btn button").on("click", function () {
	$(".hidden-work").fadeIn();
	$(".more-btn button").hide();
})

$(".show-btn button").on("click", function () {
	$(".hidden-cont").fadeIn();
	$(".show-btn button").hide();
})

$(".burger button").on("click", function () {
	$(".burger button").toggleClass("active");
	$(".menu").slideToggle();
})
$(".slider").slick({
	autoplay: true,
	autoplaySpeed: 2000,
	pauseOnHover: false,
	speed: 1500,
	fade: true,
	cssEase: 'linear',
});