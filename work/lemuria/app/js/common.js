

// burger
(function topMenuResponse(){

	var topMenu = $(".main-board"),
	buttonResponseToggle = topMenu.find(".btn-burger");
	navResponseToggle = topMenu.find(".nav-wrap");

	buttonResponseToggle.on('click', function(){
		navResponseToggle.slideToggle();
		$(".main-board").toggleClass("push-wrap");

	});

})();
// end - burger

$( document ).ready(function() {
	$(window).resize(function() {
		if ($(window).width() <= 992) {
			navResponseToggle.css('display', 'none');
			$('.main-board').prepend( $('.header__wrap > .nav-wrap') );
			$('.col-wrap > img').attr("src", "img/feature4.jpg");
		}

		if ($(window).width() > 992) {
			navResponseToggle.css('display', 'block');

			$('.header__wrap').append( $('.main-board > .nav-wrap') );
			$('.col-wrap > img').attr("src", "img/feature5.jpg");
		}

		if ($(window).width() <= 767) {
			$('.footer__left').prepend( $('.footer__center > .lemuria-icon') );
			$('.nav-wrap').append( $('.first-board__wrap > .social-networks') );
		}
		if ($(window).width() > 767) {
			$('.footer__center').prepend( $('.footer__left > .lemuria-icon') );
			$('.first-board__wrap').prepend( $('.nav-wrap > .social-networks') );
		}
	});

	if ($(window).width() <= 992) {
		navResponseToggle.css('display', 'none');
		$('.main-board').prepend( $('.header__wrap > .nav-wrap') );
		$('.col-wrap > img').attr("src", "img/feature4.jpg")		
	}

	if ($(window).width() > 992) {
		$('.header__wrap').prepend( $('.main-board > .nav-wrap') );
		$('.col-wrap > img').attr("src", "img/feature5.jpg");
	}

	if ($(window).width() <= 767) {
		$('.footer__left').prepend( $('.footer__center > .lemuria-icon') );
		$('.nav-wrap').append( $('.first-board__wrap > .social-networks') );
	}
	if ($(window).width() > 767) {
		$('.footer__center').prepend( $('.footer__left > .lemuria-icon') );
		$('.first-board__wrap').prepend( $('.nav-wrap > .social-networks') );
	}
});

if(!Array.prototype.indexOf){Array.prototype.indexOf=function(a,b){if(this===undefined||this===null){throw new TypeError('"this" is null or not defined')}var c=this.length>>>0;b=+b||0;if(Math.abs(b)===Infinity){b=0}if(b<0){b+=c;if(b<0){b=0}}for(;b<c;b++){if(this[b]===a){return b}}return -1}}this["orbitvu_domready"]=(function(w){function d(a){q=1;while(a=A.shift()){a()}}var A=[],j,b=!1,m=document,B=m.documentElement,g=B.doScroll,z="DOMContentLoaded",y="addEventListener",v="onreadystatechange",k="readyState",x=g?/^loaded|^c/:/^loaded|c/,q=x.test(m[k]);return m[y]&&m[y](z,j=function(){m.removeEventListener(z,j,b),d()},b),g&&m.attachEvent(v,j=function(){/^c/.test(m[k])&&(m.detachEvent(v,j),d())}),w=g?function(a){self!=top?q?a():A.push(a):function(){try{B.doScroll("left")}catch(c){return setTimeout(function(){w(a)},50)}a()}()}:function(a){q?a():A.push(a)}})();if(typeof(window.orbitvu_global_scripts)=="undefined"){window.orbitvu_global_scripts=[]}if(typeof(inject_orbitvu_scripts)=="undefined"){function inject_orbitvu_scripts(a){if(window.orbitvu_global_scripts.indexOf(a)==-1){window.orbitvu_global_scripts.push(a);var b=document.createElement("script");b.src=a;b.async=true;b.type="text/javascript";orbitvu_head.appendChild(b)}}}var orbitvu_head=document.getElementsByTagName("head")[0]||document.documentElement;

inject_orbitvu_scripts('//cdn.orbitvu.co/orbitvu12/3529/orbitvu.js');

function inject_viewer_fJoAgk9UzhrtYZtnFe4wBo(){
	if (typeof(inject_orbitvu) === "undefined"){
		window.setTimeout(inject_viewer_fJoAgk9UzhrtYZtnFe4wBo, 50);
	}
	else{
		if (document.getElementById('ovContent-fJoAgk9UzhrtYZtnFe4wBo')){
			inject_orbitvu(
				"ovContent-fJoAgk9UzhrtYZtnFe4wBo",
				'//cdn.orbitvu.co/orbitvu12/3529/orbitvuer12.swf',
				'//cdn.orbitvu.co/orbitvu12/3529/expressInstall.swf',
				{"buttons_type": "auto", "continous": "yes", "wmode": "default", "transition": "no", "html5_hint": "no", "preload_height": "0", "mousewheel": "yes", "preload_width": "0", "max_scale": "1", "color_theme": "", "first_frame": "1", "frame_rate": "5", "background_color": "0xFFFFFF00", "border_color": "0xffffff", "auto_rotate": "no", "preload": "yes", "teaser": "autorotate", "style": "4", "gui_background": "0x000000c8", "gui_foreground": "0xffffffc8", "gui_foreground_active": "0x00b5a7c8", "lang": "en", "auto_rotate_dir": "left", "rotate_dir": "right", "social": "no", "social_url": "http://orbitvu.co/001/fJoAgk9UzhrtYZtnFe4wBo/ov3601/3/view", "vmove": "yes", "ovskin": "no", "border": "yes", "html5_initial_info": "no", "vmove_dir": "down", "width": "100%", "height": "100%", "report_bugs": "no", "force_flash": "no", "auto_drag_switch": "yes", "partial_load": "yes", "ovus_folder": "http://cdn.orbitvu.co/058/fJoAgk9UzhrtYZtnFe4wBo/ov3601/", "content2": "yes", "beacon_url": "http://orbitvu.co/beacon/1/xDjQuAJaeghJQgWHMC0hjWl5E87jWlAjXIQRlsk-oxBJIlGTlN3Qpts9dwK3oXXO.jpg", "viewer_base": "//cdn.orbitvu.co/orbitvu12/3529/", "use_config_url": "no", "content_data": {"scales": [{"cols": 2, "rows": 2, "width": 1807, "height": 1745, "tile_width": 904, "tile_height": 873, "value": "100.0"}, {"cols": 1, "rows": 1, "width": 1024, "height": 988, "tile_width": 1024, "tile_height": 988, "value": "56.7"}, {"cols": 1, "rows": 1, "width": 768, "height": 741, "tile_width": 768, "tile_height": 741, "value": "42.5"}, {"cols": 1, "rows": 1, "width": 512, "height": 494, "tile_width": 512, "tile_height": 494, "value": "28.3"}, {"cols": 1, "rows": 1, "width": 256, "height": 247, "tile_width": 256, "tile_height": 247, "value": "14.2"}, {"cols": 1, "rows": 1, "width": 128, "height": 123, "tile_width": 128, "tile_height": 123, "value": "7.1"}], "images": [{"new_name": "a_", "num": 0, "name": "a_0_0", "ext": "png"}, {"new_name": "a_", "num": 1, "name": "a_0_1", "ext": "png"}, {"new_name": "a_", "num": 2, "name": "a_0_2", "ext": "png"}, {"new_name": "a_", "num": 3, "name": "a_0_3", "ext": "png"}, {"new_name": "a_", "num": 4, "name": "a_0_4", "ext": "png"}, {"new_name": "a_", "num": 5, "name": "a_0_5", "ext": "png"}, {"new_name": "a_", "num": 6, "name": "a_0_6", "ext": "png"}, {"new_name": "a_", "num": 7, "name": "a_0_7", "ext": "png"}, {"new_name": "a_", "num": 8, "name": "a_0_8", "ext": "png"}, {"new_name": "a_", "num": 9, "name": "a_0_9", "ext": "png"}, {"new_name": "a_", "num": 10, "name": "a_0_10", "ext": "png"}, {"new_name": "a_", "num": 11, "name": "a_0_11", "ext": "png"}, {"new_name": "a_", "num": 12, "name": "a_0_12", "ext": "png"}, {"new_name": "a_", "num": 13, "name": "a_0_13", "ext": "png"}, {"new_name": "a_", "num": 14, "name": "a_0_14", "ext": "png"}, {"new_name": "a_", "num": 15, "name": "a_0_15", "ext": "png"}, {"new_name": "a_", "num": 16, "name": "a_0_16", "ext": "png"}, {"new_name": "a_", "num": 17, "name": "a_0_17", "ext": "png"}], "max_height": 1745, "max_width": 1807, "hangles": 18, "vangles": 1}, "ovus_cache_modifier": "b5f60738e9ea07d2bc7709be0cd2ad85"}
				);
		}
		else {
			console.log('You have to put the following element into HTML: <div id="ovContent-fJoAgk9UzhrtYZtnFe4wBo" class="orbitvu-container"></div>');
		}
	}
}

orbitvu_domready(function(){
	inject_viewer_fJoAgk9UzhrtYZtnFe4wBo();
});