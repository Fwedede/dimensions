// Permets d'affecter une classe au menu pour savoir ou l'on se trouve
function animationScroll() {
	var windowOffset = $(window).scrollTop(); // Positionnement de la page à l'écran
	var endIndex = $('nav').outerHeight(); // Taille du menu

	if(windowOffset > endIndex) {
		$('nav').fadeIn(300);
	}
	else {
		$('nav').fadeOut(500);
	}

	$('section').each(function(i, lmt) {
		// Si le haut de la section n'est pas visible (par ce que trop haut dans l'écran)
		if($(lmt).offset().top - endIndex <= windowOffset) {
			// Si on est dans la #home
			if(i === 0) {
				$('a[href^="#"]').parent().removeClass('active');
			}
			else {
				$('a[href="#'+$(lmt).attr('id')+'"]').parent().addClass('active').siblings().removeClass('active');
			}
		}
	});
}

// Réajuste la taille minimale des sections en fonction de la taille de l'écran
function resizeSection() {
	var heightWindow = window.innerHeight; // Taille de la fenetre
	var heightHome = $('header section').outerHeight(); // Taille de la section du header

	$('main section').css('min-height', heightWindow - $('nav').outerHeight());
	// @TODO pourquoi la valeur 2.5 divise le tout ?
	$('header section').outerHeight(heightWindow).css('padding-top', ((heightWindow - heightHome) / 2.5));
}

// Animation spéciale pour le scroll de la page (clavier et souris)
function scrollEffect(event) {
	// Si scroll la souris, ou qu'on appuie sur la barre espace ou une des fleches directionnelles
	if(!$('textarea, input').is(':focus') && ((event.keyCode == 32 || event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40)) || (event.originalEvent.wheelDelta > 0 || event.originalEvent.wheelDelta <= 0)) {
		event.preventDefault();

		$('section').each(function(i, lmt) {
			// Si le haut de la section est plus haut de ce qu'on voit ET que le bas de la section est plus bas de ce qu'on voit
			if(($(lmt).offset().top - $('nav').outerHeight() <= $(window).scrollTop()) && $(lmt).offset().top + $(lmt).outerHeight() - $('nav').outerHeight() > $(window).scrollTop()) {

				// Si la section n'est pas affiché entièrement
				if($(lmt).outerHeight() > $(window).innerHeight()) {

					// Si on n'est pas tout en haut ET qu'on scroll vers le haut ou qu'on appuie sur les flèches 'gauche' ou 'haut'
					if(i !== 0 && ((event.keyCode == 37 || event.keyCode == 38)) || event.originalEvent.wheelDelta > 0) {
						// Si on ne voit pas encore le bas de la section
						if($(lmt).offset().top - $('nav').outerHeight() < $(window).scrollTop()) {
							$('body').animate({'scrollTop' : $(lmt).offset().top - $('nav').outerHeight()}, 800);
						}
						// On est en bas de la section
						else {
							$('body').animate({'scrollTop' : Math.round($('section').eq(i-1).offset().top) - $('nav').outerHeight()}, 800);
						}
					}
					// Si on n'est pas tout en bas ET qu'on scroll vers le bas ou qu'on appuie sur la touche espce ou une des flèches 'droite' ou 'bas'
					else if(($('section').length - 1 != i) && ((event.keyCode == 32 || event.keyCode == 39 || event.keyCode == 40)) || event.originalEvent.wheelDelta <= 0) {
						// Si on ne voit pas encore le bas de la section
						if(($(lmt).offset().top + $(lmt).outerHeight() - $('nav').outerHeight() - $(window).scrollTop()) > $(window).innerHeight()) {
							$('body').animate({'scrollTop' : $(window).innerHeight() + $(window).scrollTop() - $('nav').outerHeight()}, 800);
						}
						// On est en bas de la section
						else {
							$('body').animate({'scrollTop' : Math.round($('section').eq(i+1).offset().top) - $('nav').outerHeight()}, 800);
						}
					}
				}
				// La section fait la taille qu'on voit (pas plus grande)
				else {
					// Si on n'est pas tout en haut ET qu'on scroll vers le haut ou qu'on appuie sur les flèches 'gauche' ou 'haut'
					if(i !== 0 && ((event.keyCode == 37 || event.keyCode == 38)) || event.originalEvent.wheelDelta > 0) {
						$('body').animate({'scrollTop' : Math.round($('section').eq(i-1).offset().top) - $('nav').outerHeight()}, 800);
					}
					// Si on n'est pas tout en bas ET qu'on scroll vers le bas ou qu'on appuie sur la touche espce ou une des flèches 'droite' ou 'bas'
					else if(($('section').length - 1 != i) && ((event.keyCode == 32 || event.keyCode == 39 || event.keyCode == 40)) || event.originalEvent.wheelDelta <= 0) {
						$('body').animate({'scrollTop' : Math.round($('section').eq(i+1).offset().top) - $('nav').outerHeight()}, 800);
					}
				}
				return false;
			}
		});

	}
}


$(function() {
	resizeSection();


	$('a[href^="#"]').click(function(event) {
		event.preventDefault();

		var target = $(event.currentTarget.hash).offset().top;
		var menuHeight = $('nav').outerHeight();

		$('body').animate({'scrollTop' : target-menuHeight}, 800, function() {
			if($(window).innerWidth() <= 768) {
				$('.menu_query ul').fadeOut(200);
			}
		});
	});


	$('.menu_query img').mouseover(function(event) {
		$(this).next('ul').removeAttr('style');
	});


	$('body').keydown(function(event) {
		scrollEffect(event);
	});


	$(window).resize(function(){
		animationScroll();
		resizeSection();

		if($(window).innerWidth() >= 768) {
			$('.menu_query ul').fadeIn(0).removeAttr('style');
		}
	}).scroll(function(){
		animationScroll();
	}).on('mousewheel', function(event) {
		scrollEffect(event);
	});
});
