<?php
    // Let's get all form values
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)){ // If email and message fields are not empty

    }else{
        echo "Email and message field are required!";
    }
?>