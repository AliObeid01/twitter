<?php

header('Access-Control-Allow-Origin: http://localhost/');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Headers: Authorization, Content-Type, x-xsrf-token, x_csrftoken, Cache-Control, X-Requested-With');

include("connection.php");

$fullname = $_POST["fullname"];
$email = $_POST["email"];
$username = $_POST["username"];
$password = hash("sha256", $_POST["password"]);


$query = $mysqli->prepare("INSERT INTO users(fullname, email, username, password) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss",$fullname, $email, $username, $password);
$query->execute();

$response = [];
$response["id"] = $mysqli->insert_id;

echo json_encode($response);


?>