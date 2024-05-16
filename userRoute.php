<?php

header('Access-Control-Allow-Origin: *');
// header('Content-Type: application/json');
// header('Access-Control-Allow-Methods: GET, POST, DELETE');
// header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

include('userfunction.php');

$requestMethod = $_SERVER['REQUEST_METHOD'];

if ($requestMethod == "GET") {
    $userList = getUserList();
    echo json_encode($userList);
} else if ($requestMethod == "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['username']) && isset($data['fullname']) && isset($data['email']) && isset($data['password'])) {
        $result = addUser($data['username'], $data['fullname'], $data['email'], $data['password']);
        echo json_encode($result);
    } else {
        $data = [
            'status' => 400,
            'message' => 'Bad Request: Missing required fields'
        ];
        http_response_code(400);
        echo json_encode($data);
    }
}else if ($requestMethod == "PUT") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['userid']) && isset($data['username']) && isset($data['fullname']) && isset($data['email']) && isset($data['password'])) {
        $result = updateUser($data['userid'], $data['username'], $data['fullname'], $data['email'], $data['password']);
        echo json_encode($result);
    } else {
        $data = [
            'status' => 400,
            'message' => 'Bad Request: Missing required fields'
        ];
        http_response_code(400);
        echo json_encode($data);
    }
} else if ($requestMethod == "DELETE") {
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['userid'])) {
        $result = deleteUser($data['userid']);
        echo json_encode($result);
    } else {
        $data = [
            'status' => 400,
            'message' => 'Bad Request: Missing userid'
        ];
        http_response_code(400);
        echo json_encode($data);
    }
}  else {
    $data = [
        'status' => 405,
        'message' => $requestMethod . ' Method Not Allowed'
    ];
    http_response_code(405);
    echo json_encode($data);
}

?>
