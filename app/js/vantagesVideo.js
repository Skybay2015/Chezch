(function() {
   $(document).ready(function() {
      $('.vantage_video-slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         adaptiveHeight: true,
         prevArrow: $('.vantage_video-previous-button'),
         nextArrow: $('.vantage_video-next-button'),
         dots: true,
         appendDots: $('.vantage_main-video-container'),
         dotsClass: 'slider-dots',
      });
   });
})();
