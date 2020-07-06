(function() {
   $('.vantage_video-item').each(function() {
      $(this).on('click', function() {
         const video = $(this).find('video')[0];
         const playButton = $(this).find(
            '.vantage_video-item_playpause_container',
         );

         if (video.paused) {
            video.play();
            video.setAttribute('controls', 'controls');
            playButton.css('display', 'none');
         } else {
            video.pause();
            video.removeAttribute('controls');
            playButton.css('display', 'block');
         }
         video.onended = function() {
            playButton.css('display', 'block');
         };
      });
   });
})();
