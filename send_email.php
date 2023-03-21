<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';
require 'vendor/phpmailer/phpmailer/src/Exception.php';

if(isset($_POST['submit'])){
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
    $mail->Host = 'sandbox.smtp.mailtrap.io';
    $mail->SMTPAuth = true;
    $mail->Port = 2525;
    $mail->Username = 'a4e1d3bea9164a';
    $mail->Password = '71b90b3dc5f4dd';
   //$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
   
    //Recipients
    $mail->setFrom('from@example.com', 'mailstrap');
    $mail->addAddress ('from@example.com', 'mailstrap');     //Add a recipient
  //  $mail->addAddress('ellen@example.com');               //Name is optional
   // $mail->addReplyTo('info@example.com', 'Information');
  //  $mail->addCC('cc@example.com');
   // $mail->addBCC('bcc@example.com');

    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = $_POST['subject'];
    $mail->WordWrap = 50;
    $mail->Body    = $_POST['message'];
    $mail->AltBody = $_POST['message'];

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>