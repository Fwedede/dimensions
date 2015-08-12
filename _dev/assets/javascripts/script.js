$(function() {

   var windowHeight = window.innerHeight;
   var windowWidth  = window.innerWidth;
   var menuHeight   = $('nav').outerHeight();
   var screenHeight = windowHeight - menuHeight;


   @@include('globale.js')
   @@include('menuAnimation.js')
   @@include('scrollEffect.js')
   @@include('popin.js')
   @@include('formulaire.js')


   globale();
   menuAnimation();

});
