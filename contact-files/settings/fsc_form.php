<?php
//do not allow direct access
if ( strpos(strtolower($_SERVER['SCRIPT_NAME']),strtolower(basename(__FILE__))) ) {
  header('HTTP/1.0 403 Forbidden');
  exit('Forbidden');
}
//**AUTO-GENERATED DATA, DO NOT HAND EDIT!**
//Settings for 'Fast Secure Contact Form' PHP Script
$array = array (
  'form_name' => '',
  'welcome' => '',
  'email_to' => 'hess@pfri.hr',
  'php_mailer_enable' => 'phpmailer',
  'email_from' => '',
  'email_from_enforced' => 'false',
  'email_bcc' => '',
  'email_reply_to' => '',
  'email_subject' => 'hess Contact:',
  'email_subject_list' => '',
  'name_format' => 'name',
  'name_type' => 'required',
  'email_type' => 'required',
  'subject_type' => 'not_required',
  'message_type' => 'required',
  'preserve_space_enable' => 'false',
  'max_fields' => '4',
  'double_email' => 'false',
  'name_case_enable' => 'false',
  'sender_info_enable' => 'true',
  'domain_protect' => 'true',
  'email_check_dns' => 'false',
  'email_html' => 'false',
  'smtp_enable' => 'false',
  'smtp_host' => 'smtp.gmail.com',
  'smtp_encryption' => 'ssl',
  'smtp_port' => '465',
  'smtp_auth_enable' => 'true',
  'smtp_user' => 'you@gmail.com',
  'smtp_pass' => 'YourPassword',
  'akismet_disable' => 'false',
  'akismet_send_anyway' => 'true',
  'captcha_enable' => 'true',
  'captcha_difficulty' => 'medium',
  'captcha_small' => 'false',
  'captcha_no_trans' => 'false',
  'enable_audio' => 'false',
  'enable_audio_flash' => 'false',
  'redirect_enable' => 'false',
  'redirect_seconds' => '3',
  'redirect_url' => 'http://www.pfri.uniri.hr/~hess/',
  'redirect_query' => 'false',
  'redirect_ignore' => '',
  'redirect_rename' => '',
  'redirect_add' => '',
  'redirect_email_off' => 'false',
  'silent_send' => 'off',
  'silent_url' => '',
  'silent_ignore' => '',
  'silent_rename' => '',
  'silent_add' => '',
  'silent_email_off' => 'false',
  'border_enable' => 'false',
  'ex_fields_after_msg' => 'false',
  'date_format' => 'mm/dd/yyyy',
  'cal_start_day' => '0',
  'time_format' => '12',
  'attach_types' => 'doc,docx,xls,xlsx,ppt,pptx,pdf,zip,rar',
  'attach_size' => '10mb',
  'textarea_html_allow' => 'false',
  'enable_areyousure' => 'false',
  'auto_respond_enable' => 'false',
  'auto_respond_html' => 'false',
  'auto_respond_from_name' => 'hess',
  'auto_respond_from_email' => 'hess@pfri.hr',
  'auto_respond_reply_to' => 'hess@pfri.hr',
  'auto_respond_message' => '',
  'auto_respond_subject' => '',
  'req_field_indicator' => ' *',
  'req_field_label_enable' => 'true',
  'req_field_indicator_enable' => 'true',
  'form_style' => 'width:100%;',
  'border_style' => 'border:1px solid black; padding:10px;',
  'required_style' => 'text-align:left;',
  'notes_style' => 'text-align:left;',
  'title_style' => 'text-align:left; padding-top:5px;',
  'select_style' => 'text-align:left;',
  'field_style' => 'text-align:left; margin:0;',
  'field_div_style' => 'text-align:left;',
  'error_style' => 'text-align:left; color:red;',
  'captcha_div_style_sm' => 'width: 175px; height: 50px; padding-top:10px;',
  'captcha_div_style_m' => 'width: 250px; height: 65px; padding-top:10px;',
  'captcha_input_style' => 'text-align:left; margin:0; width:50px;',
  'submit_div_style' => 'text-align:left; padding-top:8px; display:inline-block; float:right;',
  'button_style' => 'cursor:pointer; margin:0; color:#FFFFFF; background-color:#FF9900; border-color:#CC7500; margin:0 10px 0 0;',
  'reset_style' => 'cursor:pointer; margin:0; color:#FFFFFF; background-color:#A8A8A8; border-color:#333333;',
  'powered_by_style' => 'font-size:x-small; font-weight:normal; padding-top:5px;',
  'field_size' => '40',
  'captcha_field_size' => '6',
  'text_cols' => '50',
  'text_rows' => '12',
  'aria_required' => 'false',
  'title_border' => '',
  'title_dept' => '',
  'title_select' => '',
  'title_name' => 'Vaše ime',
  'title_fname' => '',
  'title_lname' => '',
  'title_mname' => '',
  'title_miname' => '',
  'title_email' => 'Vaš email',
  'title_email2' => 'upišite Vaš email',
  'title_email2_help' => 'upišite Vaš email',
  'title_subj' => 'Subjekt / naslov',
  'title_mess' => 'Poruka',
  'title_capt' => 'Unesite gornju šifru',
  'title_submit' => 'POŠALJI',
  'title_reset' => 'OBRIŠI',
  'title_areyousure' => '',
  'text_message_sent' => 'VAŠA PORUKA JE USPJEŠNO POSLANA NASTAVNIKU !',
  'tooltip_required' => 'obvezno ispuniti',
  'tooltip_captcha' => '',
  'tooltip_audio' => '',
  'tooltip_refresh' => '',
  'tooltip_filetypes' => '',
  'tooltip_filesize' => '',
  'enable_reset' => 'true',
  'enable_credit_link' => 'false',
  'error_contact_select' => '',
  'error_name' => 'Upišite ime',
  'error_email' => 'Nedostaje vaš email',
  'error_email2' => '',
  'error_field' => 'Potrebno je ispuniti',
  'error_subject' => '',
  'error_message' => 'Upišite poruku',
  'error_input' => '',
  'error_captcha_blank' => 'Unesite šifru',
  'error_captcha_wrong' => 'Šifra pogrešna',
  'error_correct' => 'Učinite dole navedene ispravke i pokušajte ponovo',
  'ex_field1_label' => '',
  'ex_field1_type' => 'text',
  'ex_field1_default' => '0',
  'ex_field1_default_text' => '',
  'ex_field1_max_len' => '',
  'ex_field1_label_css' => '',
  'ex_field1_input_css' => '',
  'ex_field1_attributes' => '',
  'ex_field1_regex' => '',
  'ex_field1_regex_error' => '',
  'ex_field1_req' => 'false',
  'ex_field1_notes' => '',
  'ex_field1_notes_after' => '',
  'ex_field2_label' => '',
  'ex_field2_type' => 'text',
  'ex_field2_default' => '0',
  'ex_field2_default_text' => '',
  'ex_field2_max_len' => '',
  'ex_field2_label_css' => '',
  'ex_field2_input_css' => '',
  'ex_field2_attributes' => '',
  'ex_field2_regex' => '',
  'ex_field2_regex_error' => '',
  'ex_field2_req' => 'false',
  'ex_field2_notes' => '',
  'ex_field2_notes_after' => '',
  'ex_field3_label' => '',
  'ex_field3_type' => 'text',
  'ex_field3_default' => '0',
  'ex_field3_default_text' => '',
  'ex_field3_max_len' => '',
  'ex_field3_label_css' => '',
  'ex_field3_input_css' => '',
  'ex_field3_attributes' => '',
  'ex_field3_regex' => '',
  'ex_field3_regex_error' => '',
  'ex_field3_req' => 'false',
  'ex_field3_notes' => '',
  'ex_field3_notes_after' => '',
  'ex_field4_label' => '',
  'ex_field4_type' => 'text',
  'ex_field4_default' => '0',
  'ex_field4_default_text' => '',
  'ex_field4_max_len' => '',
  'ex_field4_label_css' => '',
  'ex_field4_input_css' => '',
  'ex_field4_attributes' => '',
  'ex_field4_regex' => '',
  'ex_field4_regex_error' => '',
  'ex_field4_req' => 'false',
  'ex_field4_notes' => '',
  'ex_field4_notes_after' => '',
);
?>