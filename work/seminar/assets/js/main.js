$(function(){
	$('#btn-seminars').on('click', function(e){
		e.preventDefault();

		$(this).next('.seminars-modal').fadeToggle();
	})

	$('.seminars-modal__btn').on('click', function(){
		$(this).parent().fadeOut();
	})

	$('a.btn-modal').fancybox();

	$('.gallery-b').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
	})
})