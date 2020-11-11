<?php
$to = "rustalkfusion@yandex.ru";
$from = "noreply@mysite.ru";

$order_brand = htmlspecialchars($_POST['order_brand']);
$order_model    = htmlspecialchars($_POST['order_model']);
$order_name    = htmlspecialchars($_POST['order_name']);
$order_number   = htmlspecialchars($_POST['order_number']);

$subject = htmlspecialchars($_POST['subject']);


$headers = 'From: ' . $from . "\r\n" .

'Reply-To: ' . $from . "\r\n" .

'Content-type: text/html; charset=utf-8' . "\r\n" .

'X-Mailer: PHP/' . phpversion();


$message = '';


if ($order_brand  != '') {
 $message .= '<br><b>Марка автомобиля:</b> '.$order_brand;
}
if ($order_model != '') {
 $message .= '<br><b>Модель автомобиля:</b> '.$order_model;
}
if ($order_name != '') {
 $message .= '<br><b>Имя клиента:</b> '.$order_name;
}
if ($order_number != '') {
 $message .= '<br><b>Номер клиента:</b> '.$order_number;
}


$sent = mail($to, $subject, $message, $headers);

if ($sent) {
  echo 'success';
} else {
  echo 'error';
}
?>
