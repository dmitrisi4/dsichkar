<?php 

$to = "aigubov.zheka@yandex.ru"; 

$name = htmlspecialchars($_POST['name']);  
$number = htmlspecialchars($_POST['number']); 

$subject = "Заявка с сайта"; 

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: ".$from."\r\n"; 

$message = 'Имя: '.$name.'<br>Номер телефона: '.$number; 

if(mail($to, $subject, $message, $headers)){
	header("Location: thank.html");
	exit();
}
?>