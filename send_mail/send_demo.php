<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

// Переменные, которые отправляет пользователь
$file = $_FILES['myfile'];

// Формирование самого письма
$title = "Запись на демо";
$body = '
<html>
<p>Компания/отель: '.$obj['company'].'</p>
<p>Имя: '.$obj['name'].'</p>
<p>Email: '.$obj['email'].'</p>
<p>Телефон: '.$obj['phone'].'</p>
</html>
';
$altBody = '
Телефон: '.$obj['phone'].'
';

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    #$mail->Host       = 'smtp.mail.ru';
    #$mail->Username   = 'info@druffle.me';
    #$mail->Password   = '4ZZ6NeyF3v6bq3Qhda9k';
    #$mail->SMTPSecure = 'ssl';
    #$mail->Port       = 465;
    #$mail->setFrom('info@druffle.me', 'druffle');

    $mail->Host       = 'smtp.yandex.ru';
    $mail->Username   = 'druffle@yandex.ru';
    $mail->Password   = 'loxmtbgczqwdlrpf';
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('druffle@yandex.ru', 'druffle');

    // Получатель письма
    $mail->addAddress('info@druffle.me');

    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;
    $mail->AltBody = $altBody;

    $mail->addCustomHeader('List-Unsubscribe', '<mailto: info@druffle.me?subject=unsubscribe>');

    // Проверяем отравленность сообщения
    if ($mail->send()) {$result = "success";} 
    else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
