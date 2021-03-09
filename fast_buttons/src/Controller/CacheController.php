<?php

namespace Drupal\fast_buttons\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RedirectResponse;

class CacheController extends ControllerBase {
	


 /**
   * Display the markup.
   *
   * @return array
   *   Return markup array.
   */
 function clear(){
 
 	drupal_flush_all_caches();
 	\Drupal::messenger()->addMessage("Cache Flushed!");
 	if(\Drupal::requestStack()->getCurrentRequest()->server->get('HTTP_REFERER'))
 		return  new RedirectResponse(\Drupal::requestStack()->getCurrentRequest()->server->get('HTTP_REFERER')); 
 	else
 		return  new RedirectResponse('/');	

 }



}