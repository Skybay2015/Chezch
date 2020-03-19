(function() {
   $('.header-item').each(function() {
      $(this).on('click', function() {
         $('.header-item').each(function() {
            $(this).removeClass('header-item-selected');
         });
         $(this).addClass('header-item-selected');
      });
   });
})();
