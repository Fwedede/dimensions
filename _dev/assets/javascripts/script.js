$(function() {

   var windowHeight = window.innerHeight;
   var windowWidth  = window.innerWidth;
   var menuHeight   = $('nav').outerHeight();
   var screenHeight = windowHeight - menuHeight;
   var sections     = [];


   // Adapter la home a l'écran
   if($('header section').outerHeight() < windowHeight) {

      $('header section').outerHeight(windowHeight);

   }

   // Adapter chaques sections a l'écran
   $('main section').each(function(i, lmt) {

      if ($(lmt).outerHeight() < screenHeight) {

         $(lmt).outerHeight(screenHeight);

      }

   });


   @@include('menuAnimation.js')
   menuAnimation();


   $(window).load(function() {

      $('section').each(function(i, lmt) {

         if (i === 0) {

            sections.push(0);

         }
         else {

            sections.push($(lmt).attr('id') + ' top: ' + Math.floor($(lmt).offset().top - menuHeight));
            // sections.push(Math.floor($(lmt).offset().top - menuHeight));

            // La section est plus grande que l'écran
            if (Math.round($(lmt).outerHeight(true)) > screenHeight) {

               var nbScroll = Math.floor($(lmt).outerHeight() / screenHeight);
               var reste    = $(lmt).outerHeight() % screenHeight;
               var wia;

               // La section est minimum x2 plus grande que l'écran
               if (nbScroll > 1) {

                  for (var k = 0; k < nbScroll; k++) {

                     wia = $(lmt).offset().top - menuHeight + (screenHeight * (k + 1));
                     sections.push($(lmt).attr('id') + ' mid: ' + wia);

                     if (k == nbScroll - 1) {

                        sections.push($(lmt).attr('id') + ' bot: ' + (wia + reste - screenHeight));

                     }

                  }

               }
               if (reste > 0) {

                  if (nbScroll <= 1) {

                     wia = $(lmt).offset().top - menuHeight + (screenHeight);

                  }

                  sections.push($(lmt).attr('id') + ' bott: ' + (wia + reste));

               }

               // // Si elle est très grande (minimum 2x ecran)
               // if (($(lmt).outerHeight(true) / screenHeight) > 2) {
               //
               //
               //
               // }
               // else {
               //
               //
               //
               // }
               //
               // var resteAScroll = Math.round($(lmt).outerHeight(true) / screenHeight);
               //
               // for (var x = 0; x < resteAScroll; x++) {
               //
               //    sections.push(Math.floor(screenHeight * (x+1) + $(lmt).offset().top - menuHeight));
               //
               // }
               //
               // sections.push(resteAScroll + Math.floor($(lmt).offset().top));

            }

         }

      });

      console.log(sections);

      @@include('scrollEffect.js')

   });

});
