<?php

header('Access-Control-Allow-Origin: http://localhost/');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header("Content-type:application/json");

include("connection.php");

$id=$_POST['id'];
$query = $mysqli->prepare("SELECT id,fullname,email,username,register_time FROM users where id=$id");
$query->execute();
$array = $query->get_result();

$response = [];

while($info = $array->fetch_assoc()){
    $response[] = $info;
}

$json = json_encode($response);
echo $json;

?>
