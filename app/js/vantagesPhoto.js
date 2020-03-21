(function() {
   $(document).ready(function() {
      $('.vantage_photo-slider').slick({
         prevArrow: $('.vantage_photo-previous-button'),
         nextArrow: $('.vantage_photo-next-button'),
         dots: true,
         appendDots: $('.vantage_main-photo-container'),
         dotsClass: 'slider-dots',
         slidesToShow: 6,
         slidesToScroll: 6,
         responsive: [
            {
               breakpoint: 1100,
               settings: {
                  slidesToShow: 5,
                  slidesToScroll: 5,
               }
            } ,
            {
               breakpoint: 900,
               settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
               }
            },
            {
               breakpoint: 780,
               settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
               }
            },
            {
               breakpoint: 600,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
               }
            }
         ]
      });
   });
})();
