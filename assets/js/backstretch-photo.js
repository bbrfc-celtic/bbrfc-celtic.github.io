$(document).ready(function() {

  function shuffle(o) {
    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };
  var originalPhotos = [
    "assets/img/banner-men.jpg",
    "assets/img/banner-men2.jpg",
    "assets/img/banner-ladies.jpg",
    "assets/img/banner-touch.jpg",
    "assets/img/banner-school.jpg",
    "assets/img/banner-school2.jpg"
  ];

  /* Pictures are shuffled on refresh, so sections do not complain one
  particular photo is always the first one to show on screen. Only 3
  are chosen at a time */
  function activation() {
    $('div#banner').backstretch(shuffle(originalPhotos).slice(0, 3), {duration: 2000, fade: 550});
  }

  function checkOnResize() {
    var status = $('div#banner').data("backstretch");
    if (checkSize() == "big" &&  status == undefined) {
      activation();
    } else if (checkSize() == "big") {
      $.noop();
    } else if (checkSize() == "small" && status == undefined) {
      $.noop();
    } else {
      activation();
    }
  }

  function switchStates() {
    if ($("i.fa", $('div#banner')).hasClass("fa-pause")) {
      $('div#banner').backstretch('pause');
      $("i.fa-pause").attr("class", "fa fa-play");
    } else {
      $('div#banner').backstretch('resume');
      $("i.fa-play").attr("class", "fa fa-pause");
    }
  }

  function checkSize(){
    if ($('#banner').width() < 768 ){
      return "small"
    } else {
      return "big"
    }
  }

  activation();
  /* Init stuff */
  /* if (checkSize() == "big") {
     activation();
     } */
  /* $(window).resize(checkOnResize); */
  /* Click on div to decide if pause or resume, navbar not included */
  $('div#banner > :not(.navbar)').click(switchStates);

});
