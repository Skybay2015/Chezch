(function() {
   $('.submit').each(function() {
      $(this).on('click', function() {
         const checked = $(this)
            .closest('.btn_container')
            .next()
            .find('input[type="checkbox"]')[0].checked;

         const phone = $(this).closest('form')[0].phone.value;

         if (!checked && !phone) {
            alert(
               'Заполните форму и подтвердите соглашение с политикой конфиденциальности',
            );
         } else if (!phone) {
            alert('Введите номер телефона');
         }
      });
   });
})();
