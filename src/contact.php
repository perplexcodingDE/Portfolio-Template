<?php $name = $_POST['full_name'];
$email = $_POST['mail_address'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "pascalhaupt@gmx.de";
$subject = "Kontakt Formular";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header("Location: /?contact_send=true");
die();
?>