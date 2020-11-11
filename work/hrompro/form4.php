<?php

$recepient = "rustalkfusion@yandex.ru";
$sitename = "hrom";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);



$pagetitle1 = "Новая заявка с сайта \"$sitename\"";
$message1 = "Имя: $name, Телефон: $phone";
mail($recepient, $pagetitle1, $message1, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");


?>