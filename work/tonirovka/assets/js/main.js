// slider slick

$(document).ready(function () {
	$('.wrap-info').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		}
		],
	});
// slider slick -end

// expand btn
$('.info-company__content-btn').on('click', function() {
	$(this).hide();
});
});
// expand btn -end

// map api

  ymaps.ready(init);

  function init() {
  	var myMap = new ymaps.Map("map", {
  		center: [53.256160, 34.347318],
  		zoom: 17
  	});
  	myMap.controls.remove('geolocationControl');
  	myMap.controls.remove('searchControl');
  	myMap.controls.remove('trafficControl');
  	myMap.controls.remove('typeSelector');
  	myMap.controls.remove('fullscreenControl');
  	myMap.controls.remove('rulerControl');
  	myMap.behaviors.disable(['scrollZoom']);

    // Создаем геообъект с типом геометрии "Точка".

    myMap.geoObjects
    .add(new ymaps.Placemark([53.256160, 34.347318], {
    	balloonContent: '<strong>"Rulek Vinil"</strong><p>Советская, 82</p><a href="tel:+89307226952" class="map__link-call">8 (930) 722-69-52</a>'
    }, {
    	preset: 'islands#dotIcon',
    	iconColor: '#2862a2'
    }));
    
  };

  // map api -end

  // smooth scrolling

  $(document).ready(function(){
  	$("#transition,#transition1").on("click","a", function (event) {
  		event.preventDefault();
  		var id  = $(this).attr('href'),
  		top = $(id).offset().top;
  		$('body,html').animate({scrollTop: top}, 1500);
  	});
  });

  // smooth scrolling -end

// fancybox
$('.form-calculator').submit(function(e){
	e.preventDefault();
	form = $(this);
	$.ajax({ 
		type: "POST", 
		url: "mail.php", 
		data: form.serialize(), 
		success: function(response){ 
			$.fancybox.open({
				src:'#success-modal', 
				'padding' : 0, 
				helpers : { 
					overlay : { 
						locked : false 
					} 
				}
			})
			form.find('input').val('');
		}, 
		error: function (xhr, ajaxOptions, thrownError) { 
			alert(xhr.status); 
			alert(thrownError);
		} 
	}); 
});
// fancybox -end