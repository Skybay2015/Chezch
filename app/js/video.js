(function() {
   $('.vantage_video-item').each(function() {
      $(this).on('click', function() {
         const video = $(this).find('video')[0];
         const playButton = $(this).find(
            '.vantage_video-item_playpause_container',
         );

         if (video.paused) {
            video.play();
            playButton.css('display', 'none');
         } else {
            video.pause();
            playButton.css('display', 'block');
         }
         video.onended = function() {
            playButton.css('display', 'block');
         };
      });
   });
})();
