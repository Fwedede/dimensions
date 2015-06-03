$(function() {
   'use strict';

   function checkName() {
      if($.trim($('form').find('#name').val()).length >= 3) {
         if(!$('form').find('#name').prev('.tooltip').hasClass('hidden'))
            $('form').find('#name').prev('.tooltip').addClass('hidden');
      }
      else {
         var message = "Chaîne trop courte. Il faut un minimum de 3 caractères.";
         if($.trim($('form').find('#name').val()).length < 1) {
            message = "Ce champ est requis.";
         }
         $('form').find('#name').prev('.tooltip').text(message).removeClass('hidden');
      }
   }
   function checkMail() {
		if(/^[\w-\._%\+]+@[\w-\._%\+]+\.[a-z]{2,6}$/g.test($.trim($('form').find('#email').val()))) {
         if(!$('form').find('#email').prev('.tooltip').hasClass('hidden'))
            $('form').find('#email').prev('.tooltip').addClass('hidden');
      }
      else {
         var message = "Cette valeur n'est pas une adresse email valide.";
         if($.trim($('form').find('#email').val()).length < 1) {
            message = "Ce champ est requis.";
         }
         $('form').find('#email').prev('.tooltip').text(message).removeClass('hidden');
      }
   }
   function checkObject() {
      if($.trim($('form').find('#object').val()).length >= 5) {
         if(!$('form').find('#object').prev('.tooltip').hasClass('hidden'))
            $('form').find('#object').prev('.tooltip').addClass('hidden');
      }
      else {
         var message = "Chaîne trop courte. Il faut un minimum de 5 caractères.";
         if($.trim($('form').find('#object').val()).length < 1) {
            message = "Ce champ est requis.";
         }
         $('form').find('#object').prev('.tooltip').text(message).removeClass('hidden');
      }
   }
   function checkMessage() {
      if($.trim($('form').find('#message').val()).length >= 10) {
         if(!$('form').find('#message').prev('.tooltip').hasClass('hidden'))
            $('form').find('#message').prev('.tooltip').addClass('hidden');
      }
      else {
         var message = "Votre message est trop court. Mettez plus de détails";
         if($.trim($('form').find('#message').val()).length < 1) {
            message = "Ce champ est requis.";
         }
         $('form').find('#message').prev('.tooltip').text(message).removeClass('hidden');
      }
   }

   $('form').submit(function(event) {
      event.preventDefault();

         var isFinish;

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

      $(this).find('.tooltip').each(function() {
         if(!$(this).hasClass('hidden')) {
            isFinish = false;
         }
      });

      if(isFinish !== false) {
         $('.tooltip-submit').removeClass('hidden');
         setTimeout(function() {
            $('.tooltip-submit').fadeOut(400, function() {
               $('.tooltip-submit').addClass('hidden');
            });
         }, 5000);
      }
   });
});
