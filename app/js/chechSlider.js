(function() {
   $(document).ready(function() {
      $('.chech_container').slick({
         slidesToShow: 4,
         slidesToScroll: 4,
         prevArrow: $('.chech_previous-button'),
         nextArrow: $('.chech_next-button'),
         dots: true,
         appendDots: $('.chech_main-container'),
         dotsClass: 'slider-dots',

         responsive: [
            {
               breakpoint: 1068,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
               },
            },
            {
               breakpoint: 802,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
               },
            },
            {
               breakpoint: 625,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
               },
            },
         ],
      });
   });
})();
