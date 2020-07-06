(function() {
   $('.close').each(function() {
      $(this).on('click', function() {
         $(this)
            .closest('.modal')
            .css('display', 'none');
         $('body').css('overflow', 'auto');
      });
   });

   $('.confidential').each(function() {
      $(this).on('click', function() {
         $('#confidential_modal').css('display', 'flex');
         $('body').css('overflow', 'hidden');
      });
   });

   $('.consultation_btn').each(function() {
      $(this).on('click', function() {
         $('#consultation_modal').css('display', 'flex');
         $('body').css('overflow', 'hidden');
      });
   });

   $('#hero_order').on('click', function() {
      $('#question_modal').css('display', 'flex');
      $('body').css('overflow', 'hidden');
   });

   $('.btn_price').each(function() {
      $(this).on('click', function() {
         $('#price_modal').css('display', 'flex');
         $('body').css('overflow', 'hidden');
      });
   });
})();
