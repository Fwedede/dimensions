$(function() {
   'use strict';

   function checkName() {
      if($.trim($('form').find('#name').val()).length >= 3 && !$('form').find('#name').next('.tooltip').hasClass('hidden')) {
         $('form').find('#name').next('.tooltip').addClass('hidden');
      }
      else {
         var message = "Chaîne trop courte. Il faut un minimum de 3 caractères.";
         if($.trim($('form').find('#name').val()).length < 1) {
            message = "Ce champ est requis.";
         }
         $('form').find('#name').next('.tooltip').text(message).removeClass('hidden');
      }
   }
   // @TODO Faire la vérification de l-email
   function checkMail() {
      if($.trim($('form').find('#email').val()).length >= 3 && !$('form').find('#email').next('.tooltip').hasClass('hidden')) {
         $('form').find('#email').next('.tooltip').addClass('hidden');
      }
      else {
         var message = "Chaîne trop courte. Il faut un minimum de 3 caractères.";
         if($.trim($('form').find('#email').val()).length < 1) {
            message = "Ce champ est requis.";
         }
         $('form').find('#email').next('.tooltip').text(message).removeClass('hidden');
      }
   }
   function checkObject() {
      if($.trim($('form').find('#object').val()).length >= 5 && !$('form').find('#object').next('.tooltip').hasClass('hidden')) {
         $('form').find('#object').next('.tooltip').addClass('hidden');
      }
      else {
         var message = "Chaîne trop courte. Il faut un minimum de 5 caractères.";
         if($.trim($('form').find('#object').val()).length < 1) {
            message = "Ce champ est requis.";
         }
         $('form').find('#object').next('.tooltip').text(message).removeClass('hidden');
      }
   }
   function checkMessage() {
      if($.trim($('form').find('#message').val()).length >= 10 && !$('form').find('#message').next('.tooltip').hasClass('hidden')) {
         $('form').find('#message').next('.tooltip').addClass('hidden');
      }
      else {
         var message = "Votre message est trop court. Mettez plus de détails";
         if($.trim($('form').find('#message').val()).length < 1) {
            message = "Ce champ est requis.";
         }
         $('form').find('#message').next('.tooltip').text(message).removeClass('hidden');
      }
   }

   $('form').submit(function(event) {
      event.preventDefault();

      checkName();
      checkMail();
      checkObject();
      checkMessage();

      $(this).find('#name').keyup(function() {
         checkName();
      });
      $(this).find('#email').keyup(function() {
         checkMail();
      });
      $(this).find('#object').keyup(function() {
         checkObject();
      });
      $(this).find('#message').keyup(function() {
         checkMessage();
      });
   });
});
