$(function() {
   $('.cell').click(function() {
      $.getJSON('assets/script/realisations2.json', function(data) {
         $('.txt').html('<p><b>Nom</b> : ' + data.titre + '</p>');
         /*$('#r').append('<p><b>Age</b> : ' + data.age + '</p>');
         $('#r').append('<p><b>Ville</b> : ' + data.ville + '</p>');
         $('#r').append('<p><b>Domaine de compétences</b> : ' + data.domaine + '</p>');*/
      });
   });
});
