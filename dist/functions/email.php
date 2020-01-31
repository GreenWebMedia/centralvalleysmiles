<?php
// wp api custom endpoints
add_action('rest_api_init', 'rg_register_routes');
function rg_register_routes () {
  register_rest_route('rg-mail/v1', 'appointmentform', array(
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'rg_serve_route_v1'
  ));
  register_rest_route('rg-mail/v1', 'dentalreferralform', array(
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'rg_serve_route_v2'
  ));    
}
// function for handling post request to new api route
function rg_serve_route_v1 () {
  require('wp-load.php');

  $data = json_decode(file_get_contents("php://input"), true);
  $from = 'info@wordpress.com';
  $to = 'info@rouchortho.com';

  $subject = 'Appointment Request Form';
  // $headers = "From: " . strip_tags($_POST['req-email']) . "\r\n";
  // $headers .= "Reply-To: " . "\r\n";
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $message = '<html><body>';
  $message .= '<p><h4><strong>Name:</strong></h4> ' . $data['yourName'] . '</p>';
  $message .= '<p><h4><strong>Email Address:</strong></h4> ' . $data['email'] . '</p>';
  $message .= '<p><h4><strong>Phone Number:</strong></h4> ' . $data['phoneNumber'] . '</p>';
  $message .= '<p><h4><strong>Comment:</strong></h4> ' . $data['message'] . '</p>';


  $sent_message = wp_mail($to, $subject, $message, $headers);

  if ($sent_message) {
    echo 'Email has been received!';
  } else {
    echo 'Could not send email. Did you Update SendGrid?';
  }
}

function rg_serve_route_v2 () {
  require('wp-load.php');

  $data = json_decode(file_get_contents("php://input"), true);
  $from = 'info@wordpress.com';
  $to = 'form7test@gmail.com';

  $subject = 'Request Appointment Form';
  // $headers = "From: " . strip_tags($_POST['req-email']) . "\r\n";
  // $headers .= "Reply-To: " . "\r\n";
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $message = '<html><body>';
  $message .= '<p><h4><strong>Patient Name:</strong></h4> ' . $data['patientName'] . '</p>';
  $message .= '<p><h4><strong>New Patient? </strong></h4> ' . $data['radiographs'] . '</p>';
  $message .= '<p><h4><strong>Patient Email:</strong></h4> ' . $data['patientemail'] . '</p>';
  $message .= '<p><h4><strong>Patient Address:</strong></h4> ' . $data['patientAddress'] . '</p>';
  $message .= '<p><h4><strong>Phone Number:</strong></h4> ' . $data['phoneNumber'] . '</p>';
  $message .= '<p><h4><strong>Preferred Days:</strong></h4> ' . $data['preferredDays'] . '</p>';
  $message .= '<p><h4><strong>Convenient Times:</strong></h4> ' . $data['convenientTimes'] . '</p>';
  $message .= '<p><h4><strong>Name and Address of General Dentist</strong></h4> ' . $data['generalDentist'] . '</p>';
  $message .= '<p><h4><strong>Comments</strong></h4> ' . $data['message'] . '</p>';
  $message .= '<p><h4><strong>How did you hear about our practice?</strong></h4> ' . $data['ourPractice'] . '</p>';
  $message .= '<p><h4><strong>How did you find our web site?</strong></h4> ' . $data['ourWebsite'] . '</p>';
  
 


  $sent_message = wp_mail($to, $subject, $message, $headers);

  if ($sent_message) {
    echo 'Email has been received!';
  } else {
    echo 'Could not send email. Did you Update SendGrid?';
  }
}