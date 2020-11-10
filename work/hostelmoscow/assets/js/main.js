$(function () {
	$('[data-fancybox]').fancybox({
    // Options will go here
  });

	$('.modal-btn').fancybox();

	$('.stars__star').hover(function () {
		if (!$(this).parent().hasClass('set')) {
			$(this).parent().find('.stars__star').removeClass('active');
			$(this).addClass('active');
			$(this).prevAll().addClass('active');
		}
	}, function () {
		if (!$(this).parent().hasClass('set')) {
			$(this).parent().find('.stars__star').removeClass('active');
		}
	});

	$('.stars__star').on('click', function () {
		$(this).parent().addClass('set');
		$(this).parent().find('.stars__star').removeClass('active');
		$(this).addClass('active');
		$(this).prevAll().addClass('active');
	});


	$('.section-slider__slider-singleitem').slick({
		prevArrow: '<button class="prev-btn"><img src="assets/img/img-slick-prev.jpg"></button>',
		nextArrow: '<button class="next-btn"><img src="assets/img/img-slick-next.jpg"></button>',
		dots: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1			
			}
		},	
		{
			breakpoint: 513,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});
	$(function () {

		$('#datetimepicker').datetimepicker({
			format: 'DD/MM/YYYY',
			locale: 'ru',
			allowInputToggle: true,
			widgetPositioning: {
				horizontal: 'left',
				vertical: 'bottom',
			},
			useCurrent: false,
		});
	

	});
});

