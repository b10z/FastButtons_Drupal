(function ($, Drupal) {
  Drupal.behaviors.fastButtonSticky = {
    attach: function (context, settings) {
      $('main', context).once('fastButtonSticky').each(function () {
        // Apply only once
         var sticky_button = document.getElementById('edit-actions');
         sticky_button.classList.add("stickyFastButtons");
      });
    }
  };
})(jQuery, Drupal);


