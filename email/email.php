<?php
use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';
require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];
    $sujet = $_POST['sujet'];
    $message = $_POST['message'];
}

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    $mail->charset= 'UTF-8';
    //Server settings
    $mail->isSMTP();
    $mail->Host = 'smtp.mailtrap.io';
    $mail->SMTPAuth = true;
    $mail->Port = 2525;
    $mail->Username = '400b72471cf924';
    $mail->Password = '9e247cf5c709d6';
   //$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
   
    //Recipients
    $mail->setFrom('from@example.com', 'Mailer');
    $mail->addAddress('joe@example.net', 'Joe User');     //Add a recipient
    $mail->addAddress('ellen@example.com');               //Name is optional
    $mail->addReplyTo('info@example.com', 'Information');
    $mail->addCC('cc@example.com');
    $mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $sujet;
    $mail->WordWrap   = 50; 	
    $mail->Body    = $message;
    $mail->AltBody = $message;
   

   $mail->send(); 
    echo 'Email envoyé avec succès';
} catch (Exception $e) {
    echo 'erreur est survenu lors de l : {$mail->ErrorInfo}';
   }

?>