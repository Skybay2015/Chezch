(function() {
   $(document).ready(function() {
      $('.chech_container').slick({
         slidesToShow: 4,
         slidesToScroll: 4,
         autoplay: true,
         autoplaySpeed: 2000,
         prevArrow: $('.chech_previous-button'),
         nextArrow: $('.chech_next-button'),
         dots: true,
         appendDots: $('.chech_main-container'),
         dotsClass: 'slider-dots'
      });
   });
})();
