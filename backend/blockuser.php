<?php

header('Access-Control-Allow-Origin: http://localhost/');
header('Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, PATCH, DELETE');
header("Content-type:application/json");

include("connection.php");

$user_id=$_POST['user_id'];
$follow_id=$_POST['follow_id'];

$query = $mysqli->prepare("DELETE FROM relations WHERE user_id IN ($user_id, $follow_id) AND follow_id IN ($user_id, $follow_id)");
$query->execute();
$array = $query->get_result();

$response = [];

$response["succes"] = true;

echo json_encode($response);

?>