<?php
    $to = "rustalkfusion@yandex.ru";
	$from = "noreply@mysite.ru";

	$order_name    = htmlspecialchars($_POST['order_name']);
	$order_phone   = htmlspecialchars($_POST['order_phone']);
	$order_date_from = htmlspecialchars($_POST['order_date_from']);
	$order_link    = htmlspecialchars($_POST['order_link']);
    $rewiew_message = htmlspecialchars($_POST['rewiew_message']);

	$subject = htmlspecialchars($_POST['subject']);

    
    $headers = 'From: ' . $from . "\r\n" .

               'Reply-To: ' . $from . "\r\n" .

               'Content-type: text/html; charset=utf-8' . "\r\n" .

               'X-Mailer: PHP/' . phpversion();


    $message = '';


    if ($order_name  != '') {
    	$message .= '<br><b>Имя:</b> '.$order_name;
    }
    if ($order_phone != '') {
    	$message .= '<br><b>Телефон:</b> '.$order_phone;
    }
    if ($order_date_from != '') {
    	$message .= '<br><b>Прибытие:</b> '.$order_date_from;
    }
    if ($order_link != '') {
    	$message .= '<br><b>Страница VK:</b> '.$order_link;
    }
   
    if ($rewiew_message != '') {
        $message .= '<br><b>Отзыв:</b> '.$rewiew_message;
    }
   

    $sent = mail($to, $subject, $message, $headers);

    if ($sent) {
        echo 'success';
    } else {
        echo 'error';
    }
?>
