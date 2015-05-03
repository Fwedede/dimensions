(function($) {
	'use strict';

	// Déclaration de differentes dimensions
	var heightWindow = window.innerHeight;
	var widthWindow = window.innerWidth;
	var heightHome = $('header section').height();

	// Ajustement de la "home"
	$('header').css('height', heightWindow);
	$('header section').css('top', ((heightWindow - heightHome) / 3));

	window.mainNavFlag = false;
	chronos_sticky();

	$(document).on('click','header a', function(e){
		var target = this.hash;
		var $target = $(target);
		if(target !== '' && $target.length !== 0) {
			window.mainNavFlag = true;
			var $mainWrapper = $('.main-body-wrap');
			var $topScroll = $target.offset().top - $('nav').height()+1;
			$('html, body').animate({'scrollTop' : $topScroll}, 800);
		}
	});

	var target = window.location.hash;
	var $target = $(target);
	if($('.main-body-wrap').length > 0){
		if(target !== '' && $target.length !== 0) {
			window.mainNavFlag = true;
			var $mainWrapper = $('.main-body-wrap');
			var $topScroll = $target.offset().top - $('nav').height()+1;
			$('html, body').animate({'scrollTop' : $topScroll}, 800);
		}
	}
	chronos_sticky();

	$(window).resize(function(){
		chronos_sticky();
	}).scroll(function(){
		chronos_sticky();
		window.mainNavFlag = true;
	});

	function chronos_sticky() {
		var $wind_scr = $(window).scrollTop();
		var endIndex = $('#index').height();
		if($wind_scr > endIndex) $('nav').removeClass('sticky');
		else $('nav').addClass('sticky');

		var $windowHeight = $(window).height();
		if($('.main-body-wrap').length > 0){
			$('.list-inline a').each(function(){
				if (window.mainNavFlag === true) {
					if($(this).attr('href').indexOf('#') >= 0) {
						var $offsetElement = $($(this).attr('href').substr($(this).attr('href').indexOf('#')));
						var $offsetTop = $offsetElement.offset().top;

						if(($offsetTop >= $wind_scr && $offsetTop <= $wind_scr + 1/8 * $windowHeight) || ($offsetTop+$offsetElement.height() >= $wind_scr + 1/8 * $windowHeight && $offsetTop+$offsetElement.height() <= $wind_scr + $windowHeight)) {
							$('.list-inline li').removeClass('active');
							$(this).parent().addClass('active');
						}
					}
				}
			});
		}
	}

})(jQuery);
