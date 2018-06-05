/* Navpill navigation */

$('.nav-pills').affix({
  offset: {
    top: 8,
    bottom: function () {
      return $('div.container-third').outerHeight() + $('footer').outerHeight() + 30;
    }
  }
});
