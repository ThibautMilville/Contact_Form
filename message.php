<?php
    // Let's get all form values
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];

    if(!empty($email) && !empty($message)){ // If email and message fields are not empty
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){ // If user entered email is valid
            $receiver = "tmilville.test@gmail.com";
            $subject = "From $name <$email>"; //Subject of the email : "From: Thibaut <abc@gmail.com>"
            // Concatened chain for the email's body
            $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\nMessage: $message\n\nRegards,\n$name";
            $sender = "From: $email";
            if(mail($receiver, $subject, $body, $sender)){ // mail() is an inbuilt php function to send email
                echo "Your message has been sent!";
            }else{
                echo "Sorry, failed to send your message!";
            }
        }else{
            echo "Enter a valid email address!";
        }
    }else{
        echo "Email and message fields are required!";
    }
?>