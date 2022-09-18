<?php

header('Access-Control-Allow-Origin: http://localhost/');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');

include("connection.php");

$user_id=$_POST["user_id"];
$tweet_id=$_POST["tweet_id"];


$query = $mysqli->prepare("INSERT INTO likes(tweet_id,user_id) VALUE (?, ?)");
$query->bind_param("ss",$tweet_id,$user_id);
$query->execute();

$response = [];
$response["succes"] = true;

echo json_encode($response);


?>