(function() {
   $(document).ready(function() {
      $('.vantage_photo-slider').slick({
         prevArrow: $('.vantage_photo-previous-button'),
         nextArrow: $('.vantage_photo-next-button'),
         dots: true,
         appendDots: $('.vantage_main-photo-container'),
         dotsClass: 'slider-dots',
      });
   });
})();
