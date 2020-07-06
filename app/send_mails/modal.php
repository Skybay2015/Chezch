<?php 
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$phone = $_POST['phone'];
$name = $_POST['name'];
$formName = $_POST['formName']; 

$text = "Имя";

if (strlen($name) === 0) {
   $name = 'Не указал(а) имени';
}

if ($formName == 'Вопрос') {
   $text = 'Вопрос';
}


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'chechMailSend@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = '5432167890'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom("chechMailSend@yandex.ru"); // от кого будет уходить письмо?
$mail->addAddress('info@evromig.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Письмо с формы ' .$formName;
$mail->Body    = ' <h2>Заказан обратний звонок с формы: ' .$formName . '</h2> 
                     <p>' .$text .': ' .$name . '</p>
                    <p>Номер телефона: '.$phone . '</p>';
$mail->AltBody = '';

if (isset($_POST['agree']) && isset($phone)) {
    $mail->send();
    header('location: thanks.html');
}   

?>