<?php

header('Access-Control-Allow-Origin: http://localhost/');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');

include("connection.php");


$dob = $_POST["dob"];
$bio = $_POST["bio"];
$phone =$_POST["phone"];
$user_id =$_POST["user_id"];

$query = $mysqli->prepare("INSERT INTO users_information(dob, bio, phone, user_id) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss",$dob, $bio, $phone, $user_id);
$query->execute();

$response = [];
$response["succes"] = true;

echo json_encode($response);


?>