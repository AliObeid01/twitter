<?php

header('Access-Control-Allow-Origin: http://localhost/');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');

include("connection.php");


$text = $_POST["text"];
$image = $_POST["image"];
$user_id =$_POST["user_id"];

$query = $mysqli->prepare("INSERT INTO tweets(text, image, user_id) VALUE (?, ?, ?)");
$query->bind_param("sss",$text, $image , $user_id);
$query->execute();

$response = [];
$response["succes"] = true;

echo json_encode($response);


?>