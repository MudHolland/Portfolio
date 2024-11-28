<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

function fetchArticles() {
    // Define news sources
    $sources = [
        'nos' => 'https://feeds.nos.nl/nosnieuwsalgemeen',
        'nu' => 'https://www.nu.nl/rss/Algemeen',
        'telegraaf' => 'https://www.telegraaf.nl/feed',
        'volkskrant' => 'https://www.volkskrant.nl/nieuws-achtergrond/rss.xml',
        'ad' => 'https://www.ad.nl/nieuws/rss.xml'
    ];
    
    $allArticles = [];
    
    foreach ($sources as $source => $url) {
        try {
            $response = file_get_contents($url);
            if ($response !== false) {
                $xml = simplexml_load_string($response);
                if ($xml) {
                    $items = $xml->channel->item;
                    foreach ($items as $item) {
                        $article = [
                            'title' => (string)$item->title,
                            'description' => (string)$item->description,
                            'url' => (string)$item->link,
                            'publishedAt' => (string)$item->pubDate,
                            'source' => ucfirst($source),
                            'fetchedAt' => time()
                        ];
                        $allArticles[] = $article;
                    }
                }
            }
        } catch (Exception $e) {
            // Log error but continue with other sources
            error_log("Error fetching $source: " . $e->getMessage());
            continue;
        }
    }
    
    // Sort articles by publish date
    usort($allArticles, function($a, $b) {
        return strtotime($b['publishedAt']) - strtotime($a['publishedAt']);
    });
    
    return $allArticles;
}

echo json_encode(fetchArticles());
?> 