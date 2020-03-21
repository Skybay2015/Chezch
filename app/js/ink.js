(function() {
   $('.ripplelink').each(function() {
      var $this = $(this);

      var ink, d, x, y;

      setInterval(function() {
         if ($this.find('.ink').length === 0) {
            $this.prepend("<span class='ink'></span>");
         }

         ink = $this.find('.ink');
         ink.removeClass('animate');

         if (!ink.height() && !ink.width()) {
            d = Math.max($this.outerWidth(), $this.outerHeight());
            ink.css({ height: d, width: d });
         }

         x = Math.round(Math.random() * ink.width() - ink.width() / 2);
         y = Math.round(Math.random() * ink.height() - ink.height() / 2);
         // y = 0;
         // x = e.pageX - $this.offset().left - ink.width()/2;
         // y = e.pageY - $this.offset().top - ink.height()/2;

         ink.css({ top: y + 'px', left: x + 'px' }).addClass('animate');
      }, 3000);
   });
})();
