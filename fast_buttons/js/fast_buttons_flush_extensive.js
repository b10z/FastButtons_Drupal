(function ($, Drupal) {
  Drupal.behaviors.fastButtonFlushSticky = {
    attach: function (context, settings) {
      $('main', context).once('fastButtonFlushSticky').each(function () {
        // Apply only once
        // Creating new button and applying it inside of 'edit-actions'
         var flush_button = document.createElement("BUTTON");
         flush_button.innerHTML = "Flush All";
         var sticky_button = document.getElementById('edit-actions');
         flush_button.classList.add("button");
         flush_button.classList.add("form-submit");
         flush_button.classList.add("button--primary");
         flush_button.classList.add("js-form-submit");
         flush_button.classList.add("flushStickyFastButtons");
         sticky_button.appendChild(flush_button);
         flush_button.addEventListener("click", function() {
         console.log(window.location.href);
         window.location.href = '/fast_buttons/flush';

        });
      });
    }
  };
})(jQuery, Drupal);

