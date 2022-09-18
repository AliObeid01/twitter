<?php

header('Access-Control-Allow-Origin: http://localhost/');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header("Content-type:application/json");

include("connection.php");

$follow_id=$_POST['follow_id'];

$query = $mysqli->prepare("DELETE from relations where follow_id=$follow_id");
$query->execute();
$array = $query->get_result();

$response = [];

$response["succes"] = true;

echo json_encode($response);

?>