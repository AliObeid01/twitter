<?php

header('Access-Control-Allow-Origin: http://localhost/');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header("Content-type:application/json");

include("connection.php");


$email=$_POST['email'];
$password= hash("sha256", $_POST['password']);
$query = $mysqli->prepare("SELECT id,fullname,email,username FROM users where email='$email' and password='$password'");
$query->execute();
$array = $query->get_result();

$response = [];

while($info = $array->fetch_assoc()){
    $response[] = $info;
}

$json = json_encode($response);
echo $json;

?>
