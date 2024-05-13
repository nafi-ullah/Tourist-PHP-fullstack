<?php

require 'dbconnection.php';

function getUserList()
{
    global $connection;

    $query = "SELECT * FROM users";
    $query_run = mysqli_query($connection, $query);

    if ($query_run) {
        if (mysqli_num_rows($query_run) > 0) {
            $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);

            $data = [
                'status' => 200,
                'message' => 'User List fetched',
                'data' => $res
            ];
            return $data;
        } else {
            $data = [
                'status' => 404,
                'message' => 'No users found',
            ];
            return $data;
        }
    } else {
        $data = [
            'status' => 500,
            'message' => 'Internal Server Error',
        ];
        return $data;
    }
}

function addUser($username, $fullname, $email, $password)
{
    global $connection;

    $query = "INSERT INTO users (username, fullname, email, password) VALUES ('$username', '$fullname', '$email', '$password')";
    if (mysqli_query($connection, $query)) {
        $data = [
            'status' => 201,
            'message' => 'User added successfully',
            'username' => $username,
            'email' => $email
        ];
        return $data;
    } else {
        $data = [
            'status' => 500,
            'message' => 'Internal Server Error'
        ];
        return $data;
    }
}

function updateUser($userid, $username, $fullname, $email, $password)
{
    global $connection;

    $query = "UPDATE users SET username='$username', fullname='$fullname', email='$email', password='$password' WHERE userid=$userid";
    if (mysqli_query($connection, $query)) {
        $data = [
            'status' => 200,
            'message' => 'User updated successfully'
        ];
        return $data;
    } else {
        $data = [
            'status' => 500,
            'message' => 'Internal Server Error'
        ];
        return $data;
    }
}

function deleteUser($userid)
{
    global $connection;

    $query = "DELETE FROM users WHERE userid=$userid";
    if (mysqli_query($connection, $query)) {
        $data = [
            'status' => 200,
            'message' => 'User deleted successfully'
        ];
        return $data;
    } else {
        $data = [
            'status' => 500,
            'message' => 'Internal Server Error'
        ];
        return $data;
    }
}

?>
