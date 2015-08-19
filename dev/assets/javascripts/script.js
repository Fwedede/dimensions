var test = '<p class="fuckyou" style="position:fixed;text-align:center;top:0;bottom:0;font-size:5rem;width:100%;text-shadow:0 0 2px #666;background:#ccc;">IL FAUT ATTENDRE</p>';
$('body').append(test);


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


   @@include('menuAnimation.js')
   @@include('popin.js')
   @@include('formulaire.js')


   sectionResize();


   $(window).load(function() {

      $('.fuckyou').remove();
      sectionSteps();
      @@include('scrollEffect.js')

   }).resize(function() {

      sections = [];
      sectionResize();
      sectionSteps();

   });

});
