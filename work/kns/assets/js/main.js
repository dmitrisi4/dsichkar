(function($) {
	"use strict";

	var imgToBg = function(elem, image, bgStyle) {
		var imageUrl = image.attr('src');
		if (!!imageUrl) {
			elem.css({
				background: bgStyle,
				backgroundImage: 'url(' + imageUrl + ')',
			});

			image.remove();			
		}
	};

	$.fn.imgToBg = function(config) {
		var elems = this,
      l = elems.length;

	  for (var i = 0; i < l; i++) {
      var elem = $(elems[i]);
      var image = elem.find(config.imageSelector);

      if (!!image) {
      	imgToBg(elem, image, config.bgStyle);      	
      }

	  }

	  return elems;
	}
})($);

$('.js-img-to-bg').imgToBg({
	imageSelector: '.js-img-to-bg__image',
	bgStyle: 'no-repeat center / cover',
});

$(function(){
	 $('.modal-btn').fancybox();

	$('form.form').submit(function(e) {
		e.preventDefault();

		var form = $(this);
		form.find('.form__input').val('');

		var instance = $.fancybox.getInstance();
		if (instance) {
			instance.close();			
		}

		$.fancybox.open({
			src: '#modal-success',
		});
	})
});
