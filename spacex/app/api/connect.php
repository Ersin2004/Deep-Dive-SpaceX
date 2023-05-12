<?php

header('Access-Control-Allow-Origin: *');
$host = 'localhost';
$user = 'root';
$password = '';
$dbname = 'spacex';
$id = '';

$con = mysqli_connect($host, $user, $password, $dbname);

$method = $_SERVER['REQUEST_METHOD'];

if (!$con) {
    die('Connection failed: ' . mysqli_connect_error());
}

switch ($method) {
    case 'GET':
        if (htmlspecialchars($_GET['id'] != '')) {
            $sql =
                'select * from ' .
                htmlspecialchars($_GET['table']) .
                ' where destination_id = ' .
                htmlspecialchars($_GET['id']) .
                '';
        } else {
            $sql = 'select * from ' . htmlspecialchars($_GET['table']) . '';
        }
        break;
}

// if (htmlspecialchars($_GET["location"]) != '') {
//   $sql = "select * from " . htmlspecialchars($_GET["table"]) . " where location = " . htmlspecialchars($_GET["table"]) . "";
// } else {

// run SQL statement
$result = mysqli_query($con, $sql);

// die if SQL statement failed
if (!$result) {
    http_response_code(404);
    die(mysqli_error($con));
}

if ($method == 'GET') {
    if (!$id) {
        echo '[';
    }
    for ($i = 0; $i < mysqli_num_rows($result); $i++) {
        echo ($i > 0 ? ',' : '') . json_encode(mysqli_fetch_object($result));
    }
    if (!$id) {
        echo ']';
    }
} elseif ($method == 'POST') {
    echo json_encode($result);
} else {
    echo mysqli_affected_rows($con);
}

$con->close();