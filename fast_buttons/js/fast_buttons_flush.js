(function ($, Drupal) {
  Drupal.behaviors.fastButtonFlush = {
    attach: function (context, settings) {
      $('main', context).once('fastButtonFlush').each(function () {
        // Apply only once
        // Creating new button and applying it inside of 'edit-filters'
         var flush_button = document.createElement("BUTTON");
         flush_button.innerHTML = "Flush All";
         var drupal_form = document.getElementById('edit-filters');
         flush_button.classList.add("button");
         flush_button.classList.add("form-submit");
         flush_button.classList.add("button--primary");
         flush_button.classList.add("js-form-submit");
         flush_button.classList.add("button--small");
         flush_button.classList.add("flushFastButtons");
         drupal_form.appendChild(flush_button);
         flush_button.addEventListener("click", function() {
            console.log(window.location.href);
            window.location.href = '/fast_buttons/flush';

        });
      });
    }
  };
})(jQuery, Drupal);



