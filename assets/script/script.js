$(function() {
	// Déclaration de differentes dimensions
	var heightWindow = window.innerHeight;
	var widthWindow = window.innerWidth;
	var heightHome = $('header').height();
	/*var heightD = $('body').height();
	var widthD = $('body').width();

	// Centrage du "D" de fond par rapport a l'écran
	/*$('.body').css({
		'top': (heightWindow - heightD) / 2,
		'left': (widthWindow - widthD) / 2
	});*/

	// Ajustement de la "home"
	$('header section').css('height', heightWindow);
	$('header section').css('top', ((heightWindow - heightHome) / 2) - parseInt($('header section').css('padding-top')));

	//
	$('nav').fadeOut(0);

	// Fonction qui gère les liens
	$('header a').click(function(event) {
		var sectionTop = 0;

		// Si c'est un lien interne on bloque l'evenement
		if($(this).attr('target') == undefined)
			event.preventDefault();

		// Récupère la position de la catégorie en fonction du menu choisi
		if($(this).is($('header a').eq(0)))
			sectionTop = $('section:eq(0)').offset().top;
		else if($(this).is($('header a').eq(1)))
			sectionTop = $('section:eq(1)').offset().top;
		else if($(this).is($('header a').eq(2)))
			sectionTop = $('section:eq(2)').offset().top;
		else if($(this).is($('header a').eq(3)))
			sectionTop = $('section:eq(3)').offset().top;
		else if($(this).is($('header a').eq(4)))
			sectionTop = $('section:eq(0)').offset().top;
		else if($(this).is($('header a').eq(5)))
			sectionTop = $('section:eq(1)').offset().top;

		// Scroll sur la bonne section
		$('body').animate({scrollTop: sectionTop - $('nav ul').height()}, 800);
	});
	// Quand on scroll la page
	$(window).scroll(function() {
		var i = $('main section').length;
		var ok = false;
		var that = $('header a');
		var color = '#474646';

		$('header li a').removeClass('actif').css('color', '#474646');

		// Si la page n'est pas sur la "home"
		if($(window).scrollTop() >= heightWindow){
			$('nav').css('position', 'fixed'); // Le menu devient fixe
			$('nav').fadeIn(0); // On affiche le menu
			$('main section').css('top', $('nav').height()); // On baisse les "pages" pour qu'elles soit a la bonne hauteur
		}
		// Si la page est encore sur la "home"
		else {
			$('nav').fadeOut(0); // On cache le menu			
		}
		while(ok == false) {
			if(i > 0) {
				// Si on se trouve au niveau de la premiere section
				if(i == 1) {
					$('.chart').easyPieChart({
						barColor: 'rgb(204,0,51)',
						trackColor: 'rgb(204,204,204)',
						scaleColor: false,
						lineCap: 'butt',
						lineWidth: 3,
						size: 60,
						animate: 5000
					});
				}
				// Vérifie ou se trouve la page
				if($(window).scrollTop() >= $('main section:nth-child('+i+')').offset().top){
					that = $('header li a:nth-child('+i+')');
					color = '#c0143c';
					ok = i;
				}
			}
			else
				ok = i;

			i--;
		}
		// Colorise le menu
		that.addClass('actif').css('color', color);

	});
});