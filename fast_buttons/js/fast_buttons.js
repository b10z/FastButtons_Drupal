(function ($, Drupal) {
  Drupal.behaviors.fastButtonDublicate = {
    attach: function (context, settings) {
      $('main', context).once('fastButtonDublicate').each(function () {
        // Apply only once
        var cloned_button = document.getElementById('edit-submit').cloneNode(true);
        cloned_button.id = "fast_buttonsID"
        cloned_button.classList.add("button--small");
        var drupal_form = document.getElementById('edit-filters');
        if(location.pathname === '/admin/modules/uninstall'){
          cloned_button.classList.add("uninstallFastButtons")
        }
        drupal_form.appendChild(cloned_button);
    

      
      });
    }
  };
})(jQuery, Drupal);

