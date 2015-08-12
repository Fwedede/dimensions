function menuAnimation() {

	$('a[href^="#"]').click(function(event) {

		event.preventDefault();

		var target = $(event.currentTarget.hash).offset().top;

		$('body').animate({

			'scrollTop' : target - menuHeight

		}, 800);

	});


	$(window).scroll(function() {

		if ($(window).scrollTop() >= screenHeight / 3 * 2 && !$('nav').is(':visible')) {

			$('nav').fadeIn(400);

		}
		else if ($(window).scrollTop() < screenHeight / 3 * 2 && $('nav').is(':visible')) {

			$('nav').fadeOut(400);

		}


		$('section').each(function(i, lmt) {

			if (Math.floor($(lmt).offset().top - menuHeight) <= $(window).scrollTop()) {

				$('nav a[href^="#"]').removeClass('active');
				$('nav a[href="#'+$(lmt).attr('id')+'"]').addClass('active');

			}

		});

	});
}
