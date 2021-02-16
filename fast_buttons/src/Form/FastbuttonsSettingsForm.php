<?php
namespace Drupal\fast_buttons\Form;


use Drupal\Core\Form\ConfigFormBase;
use Symphony\Component\HttpFoundation\Request;
use Drupal\Core\Form\FormStateInterface;


class FastButtonsSettingsForm extends ConfigFormBase {


	public function getFormID(){
		return 'fast_buttons_admin_settings';
	}

   /**
   * {@inheritdoc}
   */

	protected function getEditableConfigNames(){
		return [
			'fast_buttons.settings'
		]; 
	}

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = \Drupal::config('fast_buttons.settings');
    $def = $config->get('displayOption');
    $form['fast_buttons_types'] = [
      '#type' => 'radios',
      '#title' => $this->t('Select Display Style: '),
      '#description' => $this->t('Currently two methods of displaying FastButtons are available.'),
      '#options' => ['simple' => $this->t('Simple'), 'sticky' => $this->t('Sticky')],
      '#default_value' => $def,
    ];
  
    return parent::buildForm($form, $form_state);
  }


  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
  	
  
    $config = \Drupal::service('config.factory')->getEditable('fast_buttons.settings');
    $config->set('displayOption', $form_state->getValue('fast_buttons_types'));
    $config->save();


    parent::submitForm($form, $form_state);
    
  }




}