<?php

header('Access-Control-Allow-Origin: http://localhost/');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header("Content-type:application/json");

include("connection.php");


$query = $mysqli->prepare("SELECT fullname,username,text,date_time from users, tweets where tweets.user_id=users.id");
$query->execute();
$array = $query->get_result();

$response = [];

while($info = $array->fetch_assoc()){
    $response[] = $info;
}

$json = json_encode($response);
echo $json;

?>