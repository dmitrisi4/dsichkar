<?php

$recepient = "rustalkfusion@yandex.ru";
$sitename = "hrom";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);

$serv = trim($_POST["serv"]);

$message1 = "Имя: $name, Телефон: $phone, Услуга: $serv";
mail($recepient, $pagetitle1, $message1, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>