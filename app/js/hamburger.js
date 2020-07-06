(function() {
   $('.hamburger_container').on('click', function() {
      $('.hamburger').toggleClass('hamburger-active');
      $('.header_main_container').toggleClass('header_main_container_close');
   });
})();
