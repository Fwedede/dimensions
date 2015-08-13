function scrollEffect(event) {

	if (!$('input, textarea').is(':focus')) {

		if (event.keyCode == 32 || event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40 || event.originalEvent.wheelDelta > 0 || event.originalEvent.wheelDelta <= 0) {

			event.preventDefault();

			// Si on veut descendre
			if (event.keyCode == 32 || event.keyCode == 39 || event.keyCode == 40 || event.originalEvent.wheelDelta <= 0) {

				for (var i = 0; i < sections.length; i++) {

					if ($(window).scrollTop() + menuHeight < sections[i]) {

						$('body').animate({
							'scrollTop' : sections[i]
						}, 800);

						return false;

					}

				}

			}
			// Si on veut monter
			else if (event.keyCode == 37 || event.keyCode == 38 || event.originalEvent.wheelDelta > 0) {

				for (var j = sections.length - 1; j > 0; j--) {

					if ($(window).scrollTop() + menuHeight > sections[j]) {

						$('body').animate({
							'scrollTop' : sections[j-1]
						}, 800);

						return false;

					}

				}

			}

		}

	}

}


// Fonction permettant de calculer et determiner le positionnement de chaque étapes des scrolls
$('section').each(function(i, lmt) {

	var sectionTop  = Math.round($(lmt).offset().top - menuHeight);
	var sectionSize = Math.round($(lmt).outerHeight(true));
	var wia			 = sectionTop;


	if (i === 0) {

		// Ajout du haut de la section #home dans l'array
		sections.push(0);

	}
	else {

		// Ajout du haut de la section (pas #home) dans l'array
		sections.push(Math.floor(sectionTop));

	}

	// Si la section plus grande que l'écran
	if (sectionSize > screenHeight) {

		var restant = sectionSize % screenHeight;

		// Si la section est au moins x2 plus grande que l'écran
		if (sectionSize / screenHeight > 2) {

			wia = sectionTop + screenHeight;

			// Ajout du 'page' de la section dans l'array
			sections.push(Math.floor(wia));

		}

		// Si on n'est pas dans #home
		if (i !== 0) {

			// Ajout du bas de la section
			sections.push(Math.floor(restant + wia));

		}

	}

});


$(window).keydown(function(event) {

	scrollEffect(event);

}).on('mousewheel', function(event) {

	scrollEffect(event);

});
