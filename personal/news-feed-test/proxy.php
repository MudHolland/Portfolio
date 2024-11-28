<?php
header('Content-Type: application/xml');
header('Access-Control-Allow-Origin: *');

$url = $_GET['url'];

// Basic security check
if (!filter_var($url, FILTER_VALIDATE_URL)) {
    die('Invalid URL');
}

// Use file_get_contents instead of curl
$response = file_get_contents($url);

if ($response === false) {
    die('Failed to fetch feed');
}

echo $response;
?> 