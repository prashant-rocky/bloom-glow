<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bloom_glow";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form type
$form_type = isset($_POST['form_type']) ? $_POST['form_type'] : 'unknown';

// Sanitize input
$name = $conn->real_escape_string($_POST['name']);
$email = $conn->real_escape_string($_POST['email']);
$phone = isset($_POST['phone']) ? $conn->real_escape_string($_POST['phone']) : '';
$subject = isset($_POST['subject']) ? $conn->real_escape_string($_POST['subject']) : '';
$message = isset($_POST['message']) ? $conn->real_escape_string($_POST['message']) : '';

// Insert data into database
$sql = "INSERT INTO contact_form ( name, email, phone, subject, message) 
        VALUES ( '$name', '$email', '$phone', '$subject', '$message')";

if ($conn->query($sql) === TRUE) {
    // Redirect to thank you page
    header("Location: thankyou.html");
    exit();
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
