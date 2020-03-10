<?php

if (!isset($_POST['name']) || !isset($_POST['phone']) || !isset($_POST['message']))
{
	die("error!");
}

$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$to = "ufa.kreml@gmail.com";

$mess = sprintf("Имя: %s<br>Номер: %s<br>Сообщение: %s", $name, $phone, $message);
$subject = "Сообщение с сайта!";
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= 'From: BabyClub <noreply@babyClub.ru>' ."\r\n";


$success = mail($to, $subject, $mess, $headers);
echo $success;

?>
