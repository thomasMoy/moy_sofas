<?php

$emailAddress = $_POST['sign-up-email-address'];

$msg = "You've been successfully signed up";


$msg = wordwrap($msg,70);


if(mail($emailAddress,"Moy Sofas",$msg)){
    echo("<script>alert('Mail was sent !');</script>");
    echo "<script>document.location.href='/moy_sofas'</script>";
} else {
    echo("<script>alert('Mail was not sent. Please try again later');</script>");
}


?>