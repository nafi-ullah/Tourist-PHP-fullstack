<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST, OPTIONS'); // Add OPTIONS method
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

include('userfunction.php');

$requestMethod = $_SERVER['REQUEST_METHOD'];

if ($requestMethod == "OPTIONS") { // Handle preflight requests
    http_response_code(200);
    exit();
}

if ($requestMethod == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['username']) && isset($data['password'])) {
        $result = login($data['username'], $data['password']);
        echo json_encode($result);
    } else {
        $data = [
            'status' => 400,
            'message' => 'Bad Request: Missing required fields'
        ];
        http_response_code(400);
        echo json_encode($data);
    }
} else {
    $data = [
        'status' => 405,
        'message' => $requestMethod . ' Method Not Allowed'
    ];
    http_response_code(405);
    echo json_encode($data);
}
?>
