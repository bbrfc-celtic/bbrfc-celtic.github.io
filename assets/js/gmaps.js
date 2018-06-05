$(document).ready(function(){
  var iframe_url = "https://www.google.com/maps/embed/v1/place?q=BBRFC+Celtic+Rugby+Club,+Boulevard+du+Triomphe,+Ixelles,+Belgium&key=AIzaSyBU2T9PaAWLTUyi9N_nKeKaJ8QUcxC85ZI";
  $('iframe#pitch').attr('src', iframe_url);
});
