(function() {
   $(document).ready(function() {
      $('.reviews_slider').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         autoPlay: true,
         autoplaySpeed: 2000,
         prevArrow: $('.reviews_previous-button'),
         nextArrow: $('.reviews_next-button'),
         dots: true,
         appendDots: $('.reviews_main-container'),
         dotsClass: 'slider-dots',
      });
   });
})();
