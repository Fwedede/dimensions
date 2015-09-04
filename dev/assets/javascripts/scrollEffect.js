// function scrollEffect(event) {
//
// 	if (!$('input, textarea').is(':focus')) {
//
// 		if (event.keyCode == 32 || event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40 || event.deltaY > 0 || event.deltaY <= 0) {
//
// 			event.preventDefault();
//
// 			// Si on veut descendre
// 			if (event.keyCode == 32 || event.keyCode == 39 || event.keyCode == 40 || event.deltaY <= 0) {
//
// 				for (var i = 0; i < sections.length; i++) {
//
// 					if ($(window).scrollTop() + menuHeight < sections[i]) {
//
// 						$('body').animate({
// 							'scrollTop' : sections[i]
// 						}, 800);
//
// 						return false;
//
// 					}
//
// 				}
//
// 			}
// 			// Si on veut monter
// 			else if (event.keyCode == 37 || event.keyCode == 38 || event.deltaY > 0) {
//
// 				for (var j = sections.length - 1; j > 0; j--) {
//
// 					if ($(window).scrollTop() + menuHeight > sections[j]) {
//
// 						$('body').animate({
// 							'scrollTop' : sections[j-1]
// 						}, 800);
//
// 						return false;
//
// 					}
//
// 				}
//
// 			}
//
// 		}
//
// 	}
//
// }
//
//
// $(window).keydown(function(event) {
//
// 	scrollEffect(event);
//
// }).on('mousewheel', function(event) {
//
// 	scrollEffect(event);
//
// });

function scrollEffect(event, delta) {

	if (!$('input, textarea').is(':focus')) {

		if (event.keyCode == 32 || event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40 || event.deltaY > 0 || event.deltaY <= 0) {

			event.preventDefault();

			var o = '', id = event.currentTarget.id || event.currentTarget.nodeName;
			o = '#' + id + ':';
			if (delta > 0)
			o += ' up (' + delta + ')';
			else if (delta < 0)
			o += ' down (' + delta + ')';
			if (event.deltaY > 0)
			o += ' north (' + event.deltaY + ')';
			else if (event.deltaY < 0)
			o += ' south (' + event.deltaY + ')';

			o += ' deltaFactor (' + event.deltaFactor + ')';


			// Si on veut descendre
			if (event.keyCode == 32 || event.keyCode == 39 || event.keyCode == 40 || event.deltaY < 0) {

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
			else if (event.keyCode == 37 || event.keyCode == 38 || event.deltaY > 0) {

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


$(window).keydown(function(event) {

	scrollEffect(event);

}).on('mousewheel', function(event, delta) {

	scrollEffect(event, delta);

});
