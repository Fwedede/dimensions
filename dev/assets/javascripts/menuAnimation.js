var menuAnimation = function() {

	// Quand on clique sur un lien du menu
	$('a[href^="#"]').click(function(event) {

		event.preventDefault();

		var target = $(event.currentTarget.hash).offset().top;

		$('html, body').animate({

			'scrollTop' : target - menuHeight

		}, 800);

		if($(window).innerWidth() <= 768) {

			$('.menu_query ul').fadeOut(200);

		}

	});


	$(window).scroll(function() {

		// Pour afficher le menu quand on scroll
		if ($(window).scrollTop() >= screenHeight / 3 * 2 && !$('nav').is(':visible')) {

			$('nav').fadeIn(400);

		}
		else if ($(window).scrollTop() < screenHeight / 3 * 2 && $('nav').is(':visible')) {

			$('nav').fadeOut(400);

		}

		// Pour la colorisation du menu en fonction de la section ou l'on se trouve
		$('section').each(function(i, lmt) {

			if ($('body').scrollTop() + (windowHeight / 1 / 3) > $(lmt).offset().top) {

				$('nav a[href^="#"]').removeClass('active');
				$('nav a[href="#'+$(lmt).attr('id')+'"]').addClass('active');

			}

		});

	});
}.call(this);
