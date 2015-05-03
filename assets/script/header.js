$(function(){

	// Déclaration de differentes dimensions
	var heightWindow = window.innerHeight;
	var widthWindow = window.innerWidth;
	var heightHome = $('header section').height();

	// Ajustement de la "home"
	$('header').css('height', heightWindow);
	$('header section').css('top', ((heightWindow - heightHome) / 3));

	var headerGutter;
	window.mainNavFlag = false;
	$(document).ready(function(){
		/*  Navigation click animate  */
		//$headerGutter = $('nav').height()-1;
		$('.list-inline').each(function(){
			var $this = $(this);
			$this.find('a').each(function(){
				var $parent = $(this);
				while(!$parent.hasClass('list-inline')){
					if($parent.get(0).tagName == 'ul'){
					}
					$parent=$parent.parent();
				}
			});
		});
		chronos_sticky();
	});

	$(document).on('click','header a', function(e){
		$headerGutter = $('nav').height()-1;
		var target = this.hash;
		var $target = $(target);
		if(target != '' && $target.length != 0) {
			window.mainNavFlag = true;
			var $mainWrapper = $('.main-body-wrap');
			var $topScroll = $target.offset().top - $('nav').height()+1;
			$('html, body').animate({'scrollTop' : $topScroll}, 800);
		}
	});

	$(window).load(function(){
		$headerGutter = $('nav').height()-1;
		var target = window.location.hash;
		var $target = $(target);
		if($('.main-body-wrap').length > 0){
			if(target != '' && $target.length != 0) {
				window.mainNavFlag = true;
				var $mainWrapper = $('.main-body-wrap');
				var $topScroll = $target.offset().top - $('nav').height()+1;
				$('html, body').animate({'scrollTop' : $topScroll}, 800);
			}
		}
		chronos_sticky();
	});

	$(window).resize(function(){
		chronos_sticky();
	});

	$(window).scroll(function(){
		chronos_sticky();
		window.mainNavFlag = true;
	});

	function chronos_sticky(){
		var wind_scr = $(window).scrollTop();
		var endIndex = $('#index').height();
		/*if($(window).width() > 1140){*/
			if(wind_scr > endIndex) $('nav').removeClass('sticky');
			else $('nav').addClass('sticky');

		/*}
		else{
			$('nav').removeClass('sticky');
		}*/
		var $windScr = $(window).scrollTop();
		var $windowHeight = $(window).height();
		if($('.main-body-wrap').length > 0){
			$('.list-inline a').each(function(){
				if (window.mainNavFlag == true) {
					if($(this).attr('href').indexOf('#') >= 0){
						var $offsetElement = $($(this).attr('href').substr($(this).attr('href').indexOf('#')));
						var $offsetTop = $offsetElement.offset().top;
						if(($offsetTop >= $windScr && $offsetTop <= $windScr + 1/8 * $windowHeight) ||
							($offsetTop+$offsetElement.height() >= $windScr + 1/8 * $windowHeight && $offsetTop+$offsetElement.height() <= $windScr + $windowHeight)){
							$('.list-inline li').removeClass('active');
							$(this).parent().addClass('active');
						}

					}
				}
			});
		}
	}
	$(function() {
		$('.cell').popin();
	});
});
