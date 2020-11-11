<?php
if (isset($_POST['mail'])) {

    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_from = "mailer@cx20182.tmweb.ru";
    $email_to = "tolkachev.valentin@yandex.ru";
    $email_subject = "Новая заявка";

    function problem($error) {
        http_response_code(400);
        $response = array(
            'error' => true,
            'message' => $error,
        );
        return json_encode($response);
    }

    function clean_string($string) {
        $bad = array("content-type", "bcc:", "to:", "cc:", "href");
        return str_replace($bad, "", $string);
    }
    
    // validation expected data exists
    if (
        !isset($_POST['name']) ||
        !isset($_POST['mail']) ||
        !isset($_POST['number'])
    ) {
        exit(problem('Please fill all required fields (name, number, email)'));
    }

    $name = $_POST['name']; // required
    $email = $_POST['mail']; // required
    $number = $_POST['number']; // required

    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

    if (!preg_match($email_exp, $email)) {
        exit(problem('The Email address you entered does not appear to be valid'));
    }

    if (strlen($name) == 0) {
        exit(problem('The Name you entered does not appear to be valid'));
    }

    if (strlen($number) < 2) {
        exit(problem('The Number you entered does not appear to be valid'));
    }

    $email_message = "Form details below.\n\n";
    $email_message .= "Name: " . clean_string($name) . "\n";
    $email_message .= "Email: " . clean_string($email) . "\n";
    $email_message .= "Number: " . clean_string($number) . "\n";

    // create email headers
    $headers = 'From: ' . $email_from . "\r\n" .
        'Reply-To: ' . $email_from . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
        
    @mail($email_to, $email_subject, $email_message, $headers);
    
    $response = array(
        'success' => true,
        'message' => 'Thank you for contacting us. We will be in touch with you very soon',
    );
    exit(json_encode($response));
}
?>