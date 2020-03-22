(function() {
   $(document).ready(function() {
      $('.vantage_video-slider').slick({
         slidesToShow: 3,
         slidesToScroll: 1,
         adaptiveHeight: true,
         prevArrow: $('.vantage_video-previous-button'),
         nextArrow: $('.vantage_video-next-button'),
         dots: true,
         appendDots: $('.vantage_main-video-container'),
         dotsClass: 'slider-dots',
         responsive: [ {
            breakpoint: 1134,
            settings: {
               slidesToShow: 1
            }
         }]
      });
   });
})();
