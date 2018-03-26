<?php

//Variables
$to = "5597608596@txt.att.net";
$subject = "Your Pizza Factory Order";

$eta = $_POST['etaValue'];

//Email Message
$message = "Your Order Should Be Delivered in about " . $eta . " Minutes.";

mail($to, $subject, $message);
?>

You Should Receive An Email In Less Than A Minute...
