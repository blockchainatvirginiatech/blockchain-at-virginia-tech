<?php




if (isset($_POST['submit'])) {
  $email = $_POST['email'];


  $subject = "BIC Signup";
  $mailTo = "contact@blockchaininvestmentclub.com";
  $headers = 'BlockchainInvestmentClub Signup';
  $txt = "The email signed up is: ".$email;




  mail($mailTo, $subject, $txt, $headers);

  header("Location: thankyou.html");

}
