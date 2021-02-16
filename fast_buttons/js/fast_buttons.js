(function ($, Drupal, drupalSettings) {

  'use strict';

  var initialized;

    function init() {
    if (!initialized) {
      initialized = true;
      var cloned_button = document.getElementById('edit-submit').cloneNode(true);
    	cloned_button.id = "fast_buttonsID"
    	cloned_button.classList.add("button--small");
    	var drupal_form = document.getElementById('edit-filters');
    	
    	if(cloned_button.value === 'Uninstall'){
    		console.log(cloned_button.value);
    		cloned_button.classList.add("uninstallFastButtons")
    	}
    	drupal_form.appendChild(cloned_button);
    }
  }


  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
     init();
      
    }
  };

})(jQuery, Drupal, drupalSettings);