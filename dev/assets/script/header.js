function animationScroll() {
	var windowOffset = $(window).scrollTop();
	var endIndex = $('nav').outerHeight();

	if(windowOffset > endIndex)
	$('nav').fadeIn(300);
	else
	$('nav').fadeOut(500);

	$('section').each(function(i, lmt) {
		if($(lmt).offset().top - endIndex <= windowOffset) {
			if(i === 0) {
				// Si on est dans la #home
				$('a[href^="#"]').parent().removeClass('active');
			}
			else {
				$('a[href="#'+$(lmt).attr('id')+'"]').parent().addClass('active').siblings().removeClass('active');
			}
		}
	});
}

function resizeSection() {
	var heightWindow = window.innerHeight;
	var heightHome = $('header section').outerHeight();

	$('header').outerHeight(heightWindow);
	$('main section').css('min-height', heightWindow - $('nav').outerHeight());
	$('header section').css('padding-top', ((heightWindow - heightHome) / 2.5));
}
function up() {
	if(!$('.popin-bg').is(':visible')){
		var anchors = $('section');
		if($(window).scrollTop() - $('nav').outerHeight() > 0) {

			for (var i = anchors.length - 1; i >= 0; i--) {
				if($(anchors[i]).offset().top < $(window).scrollTop()) {
					$('body').animate({'scrollTop' : Math.round($(anchors[i]).offset().top) - $('nav').outerHeight()}, 800);

					i = -1;
				}
			}
		}
	}
}
function down() {
	if(!$('.popin-bg').is(':visible')){
		var anchors = $('section');
		for (var j = 0; j < anchors.length; j++) {
			if(Math.floor($(anchors[j]).offset().top - $('nav').outerHeight()) > $(window).scrollTop()) {
				$('body').animate({'scrollTop' : Math.round($(anchors[j]).offset().top) - $('nav').outerHeight()}, 800);

				j = anchors.length;
			}
		}
	}
}

$(function() {
	resizeHome();

	$('a[href^="#"]').click(function(e) {
		e.preventDefault();

		var target = $(e.currentTarget.hash).offset().top;
		var menuHeight = $('nav').outerHeight() - 1;

		$('body').animate({'scrollTop' : target-menuHeight}, 800, function() {
			if($(window).innerWidth() <= 768) {
				$('.menu_query ul').fadeOut(200);
			}
		});
	});

	$('.menu_query img').mouseover(function(event) {
		$(this).next('ul').removeAttr('style');
	});


	$('body').keydown(function(e) {
		if(e.keyCode == 32 || e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
			if(!$('textarea, input').is(':focus')) {
				e.preventDefault();

				if(e.keyCode == 37 || e.keyCode == 38) {
					up();
				}
				if(e.keyCode == 32 || e.keyCode == 39 || e.keyCode == 40) {
					down();
				}
			}
		}
	});

	$(window).resize(function(){
		animationScroll();
		resizeSection();

		if($(window).innerWidth() >= 768) {
			$('.menu_query ul').fadeIn(0).removeAttr('style');
		}
	}).scroll(function(){
		animationScroll();
	}).on('mousewheel', function(e) {
		if(e.originalEvent.wheelDelta > 0) {
			up();
		}
		if(e.originalEvent.wheelDelta <= 0) {
			down();
		}
	});
});
