<?php
function get_ip()
{
    $value = '';
    if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
        $value = $_SERVER['HTTP_CLIENT_IP'];
    } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
        $value = $_SERVER['HTTP_X_FORWARDED_FOR'];
    } elseif (!empty($_SERVER['REMOTE_ADDR'])) {
        $value = $_SERVER['REMOTE_ADDR'];
    }

    return $value;
}

$ch = curl_init('https://api.goden-do.ru/' . $_GET['action']);
//$ch = curl_init('http://godendoapi/' . $_GET['action']);
$payload = file_get_contents("php://input");
$taskList = json_decode($payload,TRUE);
unset($payload);
$taskList['ip'] = get_ip();
$payload = json_encode($taskList);
unset($taskList);

curl_setopt( $ch, CURLOPT_POSTFIELDS, $payload );
curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch, CURLOPT_SSL_VERIFYPEER, false );
$result = curl_exec($ch);
curl_close($ch);
echo $result;