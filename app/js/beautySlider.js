(function() {
   $(document).ready(function() {
      $('.beauty_slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         autoPlay: true,
         fade: true,
         speed: 500,
         cssEase: 'linear',
         autoplaySpeed: 4000,
         prevArrow: $('.beauty_previous-button'),
         nextArrow: $('.beauty_next-button'),
         dots: true,
         appendDots: $('.beauty_main-container'),
         dotsClass: 'slider-dots',
      });
   });
})();
