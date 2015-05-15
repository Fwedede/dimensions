$(function() {
	'use strict';

	function animationScroll() {
		var windowOffset = $(window).scrollTop();
		var endIndex = $('nav').outerHeight();

		if(windowOffset > endIndex)
			$('nav').removeClass('sticky');
		else
			$('nav').addClass('sticky');

		var anchors = $('section[id]');

		if($(anchors[4]).offset().top - endIndex <= windowOffset) {
			$('a[href="#'+$(anchors[4]).attr('id')+'"]').parent().addClass('active').siblings().removeClass('active');
		}
		else if($(anchors[3]).offset().top - endIndex <= windowOffset) {
			$('a[href="#'+$(anchors[3]).attr('id')+'"]').parent().addClass('active').siblings().removeClass('active');
		}
		else if($(anchors[2]).offset().top - endIndex <= windowOffset) {
			$('a[href="#'+$(anchors[2]).attr('id')+'"]').parent().addClass('active').siblings().removeClass('active');
		}
		else if($(anchors[1]).offset().top - endIndex <= windowOffset) {
			$('a[href="#'+$(anchors[1]).attr('id')+'"]').parent().addClass('active').siblings().removeClass('active');
		}
		else if($(anchors[0]).offset().top - endIndex <= windowOffset) {
			$('a[href^="#"]').parent().removeClass('active');
		}
	}

	var heightWindow = window.innerHeight;
	var heightHome = $('header section').outerHeight();

	// Ajustement de la "home"
	$('header').outerHeight(heightWindow);
	$('header section').css('padding-top', ((heightWindow - heightHome) / 3));

	$('a[href^="#"]').click(function(e) {
		e.preventDefault();

		var target = $(e.currentTarget.hash).offset().top;
		var menuHeight = $('nav').outerHeight() - 1;

		$('html, body').animate({'scrollTop' : target-menuHeight}, 800);
	});

	$(window).resize(function(){
		animationScroll();
	}).scroll(function(){
		animationScroll();
	});
});
