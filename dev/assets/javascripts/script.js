$(function() {

   var windowHeight = window.innerHeight;
   var windowWidth  = window.innerWidth;
   var menuHeight   = $('nav').outerHeight(true);
   var screenHeight = windowHeight - menuHeight;
   var sections     = [];


   // Redimensionnage des sections trop petites
   function sectionResize() {

      $('section[id]').each(function(i, lmt) {

         if (i === 0) {

            if ($(lmt).outerHeight(true) < windowHeight) {

               $(lmt).outerHeight(windowHeight);

            }

         }
         else {

            if ($(lmt).outerHeight(true) < screenHeight) {

               $(lmt).outerHeight(screenHeight);

            }

         }

      });

   }


   // Fonction permettant de calculer et determiner le positionnement de chaque étapes des scrolls
   function sectionSteps() {

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

   }

   function alignHome() {

      var trueHeight = 0;
      var total      = $('#home > *').length - 1;
      $('#home > *').each(function(i, lmt) {

         trueHeight += $(this).outerHeight();
         if (i !== 0) trueHeight += parseFloat($(this).css('margin-top'));
         if (i !== total) trueHeight += parseFloat($(this).css('margin-bottom'));

      });

      trueHeight = Math.round(trueHeight);

      if (windowHeight > trueHeight) {

         var ok = (windowHeight - trueHeight) / 3;

         $('#home >*:first-child').animate({
            'margin-top': ok
         }, 800);

      }

   }


   @@include('menuAnimation.js')
   @@include('popin.js')
   @@include('formulaire.js')


   sectionResize();
   alignHome();


   $(window).load(function() {

      $('.spinner').remove();
      sectionSteps();
      @@include('scrollEffect.js')
      alignHome();

   }).resize(function() {

      sections = [];
      sectionResize();
      sectionSteps();

   });

});
