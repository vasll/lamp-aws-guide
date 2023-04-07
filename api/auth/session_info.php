<?php
    /* Returns session information if user is logged in */
    include('../db_connection.php');
    $response = [];
    session_start();

    if(isset($_SESSION)){
        $response['user_id'] = $_SESSION['user_id'];
        $response['nickname'] = $_SESSION['nickname'];
        $response['message'] = 'user is logged in';
    }else{
        http_response_code(400);
        $response['message'] = 'user is not logged in';
    }

    echo json_encode($response);
?>