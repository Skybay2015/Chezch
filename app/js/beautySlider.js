(function() {
   $(document).ready(function() {
      $('.beauty_slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         autoPlay: true,
         autoplaySpeed: 2000,
         prevArrow: $('.beauty_previous-button'),
         nextArrow: $('.beauty_next-button'),
         dots: true,
         appendDots: $('.beauty_main-container'),
         dotsClass: 'slider-dots',
      });
   });
})();
