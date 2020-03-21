(function() {
   $('.submit').each(function() {
      $(this).on('click', function() {
         const checked = $(this)
            .closest('.btn_container')
            .next()
            .find('input[type="checkbox"]')[0].checked;
         const name = $(this).closest('form')[0].name.value || 'true';
         const phone = $(this).closest('form')[0].phone.value;
         console.log(name, phone);
         if (!(checked && name.length && phone)) {
            alert(
               'Заполните форму и подтвердите соглашение с политикой конфиденциальности',
            );
         } else {
            window.location.href += '/thanks.html';
         }
      });
   });
})();
