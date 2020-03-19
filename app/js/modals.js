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
         $('#confidential_modal').css('display', 'block');
      });
   });

   $('.consultation_btn').each(function() {
      $(this).on('click', function() {
         $('#consultation_modal').css('display', 'block');
         $('body').css('overflow', 'hidden');
      });
   });

   $('#hero_order').on('click', function() {
      $('#question_modal').css('display', 'block');
      $('body').css('overflow', 'hidden');
   });

   $('.btn_price').each(function() {
      $(this).on('click', function() {
         $('#price_modal').css('display', 'block');
         $('body').css('overflow', 'hidden');
      });
   });

   $('.modal_form').each(function() {
      $(this).submit(function(e) {
         e.preventDefault();
         const formName = $(this).attr('name');
         const phone = $(this)[0].phone.value;
         const name = $(this)[0].name.value;
         const agree = $(this)[0].agree.checked;
         const actionUrl = e.currentTarget.action;

         if (agree) {
            $.ajax({
               url: actionUrl,
               type: 'post',
               dataType: 'application/json',
               data: {
                  phone,
                  name,
                  formName,
               },
            });
         }
      });
   });
})();
