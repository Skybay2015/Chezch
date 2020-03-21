(function() {
   $(document).ready(function() {
      $('.vantage_video-slider').slick({
         slidesToShow: 3,
         centerMode: true,
         variableWidth: true,
         prevArrow: $('.vantage_video-previous-button'),
         nextArrow: $('.vantage_video-next-button'),
         dots: true,
         appendDots: $('.vantage_main-video-container'),
         dotsClass: 'slider-dots',
      });
   });
})();
