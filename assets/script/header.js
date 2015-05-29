function animationScroll() {
	var windowOffset = $(window).scrollTop();
	var endIndex = $('nav').outerHeight();

	if(windowOffset > endIndex)
	$('nav').fadeIn(400);
	else
	$('nav').fadeOut(400);

	var anchors = $('section[id]');

	for(var i = 0; i < anchors.length; i++) {
		if($(anchors[i]).offset().top - endIndex <= windowOffset) {
			if(i === 0)
			$('a[href^="#"]').parent().removeClass('active');
			else
			$('a[href="#'+$(anchors[i]).attr('id')+'"]').parent().addClass('active').siblings().removeClass('active');
		}
	}
}

function resizeHome() {
	var heightWindow = window.innerHeight;
	var heightHome = $('header section').outerHeight();

	$('header').outerHeight(heightWindow);
	$('header section').css('padding-top', ((heightWindow - heightHome) / 3));
}

$(function() {
	resizeHome();

	$('a[href^="#"]').click(function(e) {
		e.preventDefault();

		var target = $(e.currentTarget.hash).offset().top;
		var menuHeight = $('nav').outerHeight() - 1;

		$('html, body').animate({'scrollTop' : target-menuHeight}, 800);
	});

	$(window).resize(function(){
		animationScroll();
		resizeHome();
	}).scroll(function(){
		animationScroll();
	});
});
