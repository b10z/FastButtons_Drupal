(function ($, Drupal, drupalSettings) {

  'use strict';

  var initialized;

    function init() {
    if (!initialized) {
      initialized = true;
      var sticky_button = document.getElementById('edit-actions');
    	sticky_button.classList.add("stickyFastButtons");
    }
  }


  Drupal.behaviors.mybehavior = {
    attach: function (context, settings) {
     init();
      
    }
  };

})(jQuery, Drupal, drupalSettings);