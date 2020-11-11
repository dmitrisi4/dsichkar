function initMap() {
	var mark = {lat: 55.700931, lng: 37.724862}
	var uluru = {lat: 55.701660, lng: 37.717771};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: uluru,
		disableDefaultUI: true

	});
	var marker = new google.maps.Marker({
		position: mark,
		map: map
	});

}

var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
	header = document.querySelector( '.header' ),
	didScroll = false,
	changeHeaderOn = 100;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 300 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			header.classList.add("header-shrink");
		}
		else {
			header.classList.remove("header-shrink");
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();






// 
$(document).ready(function() {
	$('.js-calc-block').each(function(index) {
		var block = $(this);
		var btns = block.find('.js-calc-block__btn');
		var steps = block.find('.js-calc-block__step');
		var form = block.find('.js-calc-block__form');

		block.data('calc-block-number', index);

		// btns.on('click', function(e) {
		//   var btn = $(this);
		//   var step = parseInt(btn.data('to-step'));
		//   var value = btn.data('value');

		//   if (!!value) {
		//     var parsedValue = value.split(':');

		//     form.find('input[name="' + parsedValue[0] + '"]').val(parsedValue[1]);
		//   }

		//   if (step) {
		//     block.trigger('step-changed', { step: step });
		//   }

		//   e.preventDefault();
		// });

		// block.on('step-changed', function (event, payload) {
		//   steps.stop().each(function(index, elem) {
		//     var step = $(elem);

		//     if (step.data('step') === payload.step) {
		//       step.show(payload.fast ? 0 : 'slow');
		//     } else if (step.is(':visible')) {
		//       step.hide(payload.fast ? 0 : 'slow');
		//     }
		//   });
		// });

		form.submit(function(e) {
			sendMail(form, function() {
				openSuccessModal();
				block.trigger('step-changed', { step: 1, fast: true });
			});

			e.preventDefault();
		});

		block.trigger('step-changed', { step: 1, fast: true });
	});

	setupCounter($('.counter'));
});

function openSuccessModal() {
	$.fancybox.open({
		src: '#thx-mesage',
		padding: 0,
		helpers: {
			overlay: {
				locked: false,
			},
		},
	});
}

function sendMail(form, callback) {
	$.ajax({
		type: 'POST',
		url: 'mail.php',
		data: form.serialize(),
		success: function() {
			form.find('input,textarea').val('');
			callback();
		},
	});
}


$(document).ready(function() {
	$("#form2").submit(function(e) {
		// e.preventDefault();
		$.ajax({
			type: "POST",
			url: "form2.php",
			data: $("#form2").serialize(),
			success: function(response) {
				$.fancybox.open({
					src:'#thx-mesage', 
					'padding' : 0, 
					helpers : { 
						overlay : { 
							locked : false 
						} 
					}
				});
				// $(".thx-mesage").show();
				
			}
		});
		return false;
	}); 
});

$(document).ready(function() {
	$("#form3").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "form3.php",
			data: $("#form3").serialize(),
			success: function(response) {
				$.fancybox.open({
					src:'#thx-mesage', 
					'padding' : 0, 
					helpers : { 
						overlay : { 
							locked : false 
						} 
					}
				});
				// $(".thx-mesage").show();
				
			}
		});
		return false;
	}); 
});

$(document).ready(function() {
	$("#form4").submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "form4.php",
			data: $("#form4").serialize(),
			success: function(response) {
				$.fancybox.open({
					src:'#thx-mesage', 
					'padding' : 0, 
					helpers : { 
						overlay : { 
							locked : false 
						} 
					}
				});
				// $(".thx-mesage").show();
				
			}
		});
		return false;
	}); 
});

$( ".form-btn-1" ).click(function() {
	$( ".form-wrap" ).hide( "slow" );
	$( ".form-wrap-2" ).show( 1000 );
});

$( ".form-btn-2" ).click(function() {
	$( ".form-wrap-1" ).hide( "slow" );
	$( ".form-wrap-2" ).show( 1000 );
	
	
});

$( ".form-btn-1-2" ).click(function() {
	$( ".form-wrap" ).hide( "slow" );
	$( ".form-wrap-1" ).show( 1000 );

});


function setupCounter(element) {
	var storageKey = 'counter';
	var maxIntervalTime = 7000; // in milisecond
	var defaultValue = 654;

	function updateValue() {
		var value = parseInt(element.html()) + 1;

		element.html(value);
		localStorage.setItem(storageKey, value);
	}

	function setValueOverTime() {
		setTimeout(function() {
			updateValue();
			setValueOverTime();
		}, Math.floor(Math.random() * Math.floor(maxIntervalTime)));
	}

	function initCounter() {
		element.html(localStorage.getItem(storageKey) || defaultValue);
		setValueOverTime();
	}

	initCounter();
}

// Paralax

$(window).bind('scroll',function(e){
	parallaxScroll();
});

function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg3').css('top',(0-(scrolled*.85))+'px');

}
//end paralax

$(document).ready(function(){
		$('.main-btn-js').click( function(){ // ловим клик по ссылке 
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
				if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
		}
			return false; // выключаем стандартное действие
		});
	});

var text;

$('.call-back-btn').on('click', function() {
	text = $(this).parents('.example-item').find('.example-item__title').text();
	$('.callback-modal').find('p').text(text);
	return text;
})

$('.call-back-btn').fancybox({
	padding: 0,
	helpers : {
		overlay : {
			locked : false // try changing to true and scrolling around the page
		}
	},
	beforeLoad: function () {
		$('.serv').val(text);
	}
});