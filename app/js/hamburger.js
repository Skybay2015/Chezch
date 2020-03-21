(function() {
   $('.hamburger_container').on('click', function() {
      console.log('hamb');
      $('.hamburger').toggleClass('hamburger-active');
      $('.header_main_container').toggleClass('header_main_container_close');
   });
})();
