(function() {
   $('.header-item').each(function() {
      $(this).on('click', function() {
         $('.header-item').each(function() {
            $(this).removeClass('header-item-selected');
         });
         $(this).addClass('header-item-selected');
      });
   });

   let topMenu = $(".header-content"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      let item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

   // Bind to scroll
   $(window).scroll(function(){
   // Get container scroll position
   let fromTop = $(this).scrollTop()+topMenuHeight;


   // Get id of current scroll item
   let cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   let id = cur && cur.length ? cur[0].id : "";
   // Set/remove active class
   menuItems
     .removeClass("header-item-selected")
     .parent().end().filter("[href='#"+id+"']").addClass("header-item-selected");
});​

   $(document).scroll(function() {
      const bottom = $('#hero')[0].getBoundingClientRect().bottom;

      if (bottom < 0) {
         $('.go_up').css('display', 'flex');
      } else {
         $('.go_up').css('display', 'none');
      }
   });
})();
