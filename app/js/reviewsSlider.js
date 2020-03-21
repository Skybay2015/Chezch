(function() {
   $(document).ready(function() {
      $('.reviews_slider').slick({
         slidesToScroll: 1,
         autoPlay: true,
         autoplaySpeed: 2000,
         prevArrow: $('.reviews_previous-button'),
         nextArrow: $('.reviews_next-button'),
         dots: true,
         appendDots: $('.reviews_main-container'),
         dotsClass: 'slider-dots',
         rows: 2,
         slidesPerRow: 3,
         responsive: [
            {
               breakpoint: 894,
               settings: {
                  slidesPerRow: 2,

               },
            },
            {
               breakpoint: 668,
               settings: {
                  slidesPerRow: 1,
               },
            },
         ],
      });
   });
})();
