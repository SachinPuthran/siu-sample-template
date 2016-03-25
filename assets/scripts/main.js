var SIU = {
  init: function () {
    var $headerNav = $('.responsiveMenu');
    var hideMenuWhenSmartphoneSized = function () {
      var $mainNavMenuButtons = $('section.control-bar');

      if (Modernizr.mq("(min-width: 768px)")) {
        $mainNavMenuButtons.css('display', 'inline').show();
      } else {
        $mainNavMenuButtons.css('display', 'block').hide();
      }
    };
    hideMenuWhenSmartphoneSized();
    $(window).resize(hideMenuWhenSmartphoneSized);

    $headerNav.on('click', function () {
      $('section.control-bar').fadeToggle("fast");
    });
  }
};
