$(function() {

   var windowHeight = window.innerHeight;
   var windowWidth  = window.innerWidth;
   var menuHeight   = $('nav').outerHeight();
   var screenHeight = windowHeight - menuHeight;
   var sections = [];


   @@include('globale.js')
   @@include('menuAnimation.js')
   @@include('scrollEffect.js')
   @@include('popin.js')
   @@include('formulaire.js')


   globale();
   menuAnimation();

   $('section').each(function(i, lmt) {

      // if (i === 0) {
      //
      //    sections.push(0);
      //    sections.push(Math.floor($(lmt).outerHeight() - menuHeight));
      //
      // }
      // else {
      //
      //    sections.push(Math.floor($(lmt).offset().top - menuHeight));
      //    sections.push(Math.floor($(lmt).offset().top - menuHeight + $(lmt).outerHeight()));
      //
      // }

      sections.push($(lmt).outerHeight());


   });
   
   console.log(sections);

});
