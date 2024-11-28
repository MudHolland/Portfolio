<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

function fetchArticles() {
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

    $articles = json_decode($response, true);

    // Add timestamp to each article
    foreach ($articles as &$article) {
        if (!isset($article['fetchedAt'])) {
            $article['fetchedAt'] = time();
        }
    }

    return $articles;
}

echo json_encode(fetchArticles());
?> 