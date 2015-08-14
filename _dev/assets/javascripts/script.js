$(function() {

   var windowHeight = window.innerHeight;
   var windowWidth  = window.innerWidth;
   var menuHeight   = $('nav').outerHeight(true);
   var screenHeight = windowHeight - menuHeight;
   var sections     = [];


   // Adapter la home a l'écran
   if($('header section').outerHeight(true) < windowHeight) {

      $('header section').outerHeight(windowHeight);

   }

   // Adapter chaques sections a l'écran
   $('main section').each(function(i, lmt) {

      if ($(lmt).outerHeight(true) < screenHeight) {

         $(lmt).outerHeight(screenHeight);

      }

   });


   @@include('menuAnimation.js')


   $(window).load(function() {

      @@include('scrollEffect.js')

   });

});
