<?php

require("dbcon.php");
require('middleware.php');
require_once('../vendor/autoload.php');
use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

// getting token from cookie
$token = $_COOKIE["admin_jwt"];

// checking is the user authorized 
if(auth($token)){

    $sql = "SELECT field_id, field_frontend_id, form_response_answer as answer FROM form_response_table
    WHERE form_id=:form_id AND user_id=:user_id";
    $query = $con -> prepare($sql);
    $query->bindParam(':form_id', $form_id, PDO::PARAM_STR);
    $query->bindParam(':user_id', $user_id, PDO::PARAM_STR);
    $query->execute();

    if($query->rowCount() === 0){
        $status = 203;
        $response = [
            "msg" => "No responses  found"
        ]; 
    }else{
        $response = $query->fetchAll(PDO::FETCH_ASSOC);
        
        $status = 200;
        $response = [
            "msg" => "Responses fetched successsfully",
            "response" => $response
        ];
    }

}