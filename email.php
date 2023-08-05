<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to_email = "filmbyhim@gmail.com"; // Replace with your email address
    $subject = "Contact Form Submission from Film by Him Website";
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $headers = "From: $name <$email>" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    // Send the email
    if (mail($to_email, $subject, $message, $headers)) {
        echo "Thank you for your message. Your email has been sent successfully.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
