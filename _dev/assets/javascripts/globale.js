function globale() {

	// Adapter la home a l'écran
	if( $('header section').outerHeight() < windowHeight ) {

		$('header section').outerHeight(windowHeight);

	}


	// Adapter chaques sections a l'écran
	$('main section').each(function(i, lmt) {

		if ($(lmt).outerHeight() < screenHeight) {

			$(lmt).outerHeight(screenHeight);

		}

	});

}
