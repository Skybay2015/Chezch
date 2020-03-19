(function() {
   $('.submit').each(function(index) {
      $(this).on('click', function(e) {
         const checked = $(this)
            .closest('.btn_container')
            .next()
            .find('input[type="checkbox"]')[0].checked;
         const name = $(this).closest('form')[0].name.value;
         const phone = $(this).closest('form')[0].phone.value;
         if (!(checked && name.length && phone.length)) {
            alert('Подтвердите соглашение с политикой конфиденциальности');
         } else {
            window.location.href = 'http://localhost:3000/thanks.html';
         }
      });
   });
})();
