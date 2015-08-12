// Animation spéciale pour le scroll de la page (clavier et souris)
function scrollEffects(event) {
	// Si scroll la souris, ou qu'on appuie sur la barre espace ou une des fleches directionnelles
	if (!$('textarea, input').is(':focus') && ((event.keyCode == 32 || event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40)) || (event.originalEvent.wheelDelta > 0 || event.originalEvent.wheelDelta <= 0)) {

		event.preventDefault();

		$('section').each(function(i, lmt) {

			// Si le haut de la section est plus haut de ce qu'on voit ET que le bas de la section est plus bas de ce qu'on voit
			if ((Math.round($(lmt).offset().top) - $('nav').outerHeight() <= $(window).scrollTop()) && Math.round($(lmt).offset().top) + $(lmt).outerHeight() - $('nav').outerHeight() > $(window).scrollTop()) {

				// Si la section n'est pas affiché entièrement
				if ($(lmt).outerHeight() > $(window).innerHeight()) {

					// Si on n'est pas tout en haut ET qu'on scroll vers le haut ou qu'on appuie sur les flèches 'gauche' ou 'haut'
					if (i !== 0 && ((event.keyCode == 37 || event.keyCode == 38)) || event.originalEvent.wheelDelta > 0) {

						// Si on ne voit pas encore le haut de la section
						if (Math.round($(lmt).offset().top) - $('nav').outerHeight() < $(window).scrollTop()) {

							$('body').animate({'scrollTop' : Math.round($(lmt).offset().top) - $('nav').outerHeight()}, 800);

						}
						// On est en bas de la section
						else {

							$('body').animate({'scrollTop' : Math.round($('section').eq(i-1).offset().top) - $('nav').outerHeight()}, 800);

						}

					}
					// Si on n'est pas tout en bas ET qu'on scroll vers le bas ou qu'on appuie sur la touche espce ou une des flèches 'droite' ou 'bas'
					else if (($('section').length - 1 != i) && ((event.keyCode == 32 || event.keyCode == 39 || event.keyCode == 40)) || event.originalEvent.wheelDelta <= 0) {

						// Si on ne voit pas encore le bas de la section
						if (Math.round(($(lmt).offset().top) + $(lmt).outerHeight() - $('nav').outerHeight() - $(window).scrollTop()) > $(window).innerHeight()) {

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

					// Si on scroll vers le haut ou qu'on appuie sur les flèches 'gauche' ou 'haut'
					if ((event.keyCode == 37 || event.keyCode == 38) || event.originalEvent.wheelDelta > 0) {

						// Si on est pas a la home
						if (i !== 0) {

							$('body').animate({'scrollTop' : Math.round($('section').eq(i-1).offset().top) - $('nav').outerHeight()}, 800);

						}
						// On est dans la home
						else {

							$('body').animate({'scrollTop' : Math.round($(lmt).offset().top) - $('nav').outerHeight()}, 800);

						}

					}
					// Si on n'est pas tout en bas ET qu'on scroll vers le bas ou qu'on appuie sur la touche espce ou une des flèches 'droite' ou 'bas'
					else if (($('section').length - 1 != i) && ((event.keyCode == 32 || event.keyCode == 39 || event.keyCode == 40)) || event.originalEvent.wheelDelta <= 0) {

						$('body').animate({'scrollTop' : Math.round($('section').eq(i+1).offset().top) - $('nav').outerHeight()}, 800);

					}

				}

				return false;

			}

		});

	}
}


function scrollEffect(event) {

	if (!$('input, textarea').is(':focus')) {

		// if (event.keyCode == 32 || event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) {
		//
		// 	event.preventDefault();
		//
		// 	if (event.keyCode == 32 || event.keyCode == 39 || event.keyCode == 40) {
		//
		// 		for (var i = 0; i < sections.length; i++) {
		//
		// 			if ($(window).scrollTop() + menuHeight < sections[i]) {
		//
		// 				$('body').animate({
		// 					'scrollTop' : sections[i]
		// 				}, 800);
		// 				console.log($(window).scrollTop() + ' / ' + sections[i]);
		//
		// 				return false;
		//
		// 			}
		//
		// 		}
		//
		// 	}
		//
		// }

	}

}


$('body').keydown(function(event) {

	scrollEffect(event);

});

// $(window).on('mousewheel', function(event) {
//
// 	scrollEffect(event);
//
// });
