// Keep track of fetched articles
let fetchedArticles = new Set();
let unreadCount = 0;

document.getElementById('fetchButton').addEventListener('click', fetchAllFeeds);

// Add filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const activeFilters = new Set(['NOS', 'Nu.nl', 'Telegraaf', 'Volkskrant', 'AD']);

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const source = btn.dataset.source;
        btn.classList.toggle('active');
        
        if (activeFilters.has(source)) {
            activeFilters.delete(source);
        } else {
            activeFilters.add(source);
        }
        
        // Update article visibility by matching data-source attribute
        const articles = document.querySelectorAll('.article-card');
        articles.forEach(article => {
            const articleSource = article.getAttribute('data-source');
            if (activeFilters.has(articleSource)) {
                article.classList.remove('hidden');
            } else {
                article.classList.add('hidden');
            }
        });
    });
});

const NEWS_FEEDS = {
    'NOS': {
        url: 'https://feeds.nos.nl/nosnieuwsalgemeen',
        icon: 'logos/nos.png'
    },
    'Nu.nl': {
        url: 'https://www.nu.nl/rss/Algemeen',
        icon: 'logos/nu.png'
    },
    'Telegraaf': {
        url: 'https://www.telegraaf.nl/rss',
        icon: 'logos/telegraaf.png'
    },
    'Volkskrant': {
        url: 'https://www.volkskrant.nl/rss.xml',
        icon: 'logos/volkskrant.png'
    },
    'AD': {
        url: 'https://www.ad.nl/home/rss.xml',
        icon: 'logos/ad.png'
    }
};

// Helper functions to determine article properties
function determineCategory(title, content) {
    const categories = {
        'Sport': ['sport', 'voetbal', 'tennis', 'olympisch'],
        'Economie': ['economie', 'financieel', 'beurs', 'handel', 'bedrijf'],
        'Politiek': ['politiek', 'kabinet', 'tweede kamer', 'minister'],
        'Tech': ['tech', 'technologie', 'digital', 'internet', 'cyber'],
        'Entertainment': ['entertainment', 'film', 'muziek', 'kunst', 'cultuur'],
        'Wetenschap': ['wetenschap', 'onderzoek', 'studie']
    };

    const lowercaseText = (title + ' ' + content).toLowerCase();
    for (const [category, keywords] of Object.entries(categories)) {
        if (keywords.some(keyword => lowercaseText.includes(keyword))) {
            return category;
        }
    }
    return 'Algemeen';
}

function determineGeography(content) {
    const regions = {
        'Internationaal': ['wereld', 'international', 'buitenland'],
        'Nationaal': ['nederland', 'landelijk', 'nederlands'],
        'Regionaal': ['provincie', 'regio', 'gemeente'],
        'Lokaal': ['stad', 'dorp', 'lokaal', 'plaats']
    };

    const lowercaseContent = content.toLowerCase();
    for (const [region, keywords] of Object.entries(regions)) {
        if (keywords.some(keyword => lowercaseContent.includes(keyword))) {
            return region;
        }
    }
    return 'Nationaal'; // Default
}

function determineTimeRelevance(pubDate) {
    const now = new Date();
    const hoursDiff = (now - pubDate) / (1000 * 60 * 60);
    
    if (hoursDiff < 1) return 'Breaking';
    if (hoursDiff < 4) return 'Recent';
    if (hoursDiff < 24) return '24 uur';
    return 'Archief';
}

function updateTitle(newArticlesCount = 0) {
    const baseTitle = 'Nederlands Nieuws Reader';
    if (newArticlesCount > 0) {
        document.title = `(${newArticlesCount}) ${baseTitle}`;
    } else {
        document.title = baseTitle;
    }
}

// Helper function to create unique ID for article
function createArticleId(article) {
    return `${article.source}-${article.title}-${article.pubDate.getTime()}`;
}

// Add Intersection Observer to mark articles as read when they enter viewport
const observerOptions = {
    root: null, // use viewport
    rootMargin: '0px',
    threshold: 0.5 // article needs to be 50% visible
};

const articleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const article = entry.target;
            if (article.classList.contains('new-article')) {
                article.classList.remove('new-article');
                unreadCount = Math.max(0, unreadCount - 1);
                updateTitle(unreadCount);
            }
            // Stop observing once marked as read
            articleObserver.unobserve(article);
        }
    });
}, observerOptions);

// Replace tryFetchWithProxies with this simpler function
async function fetchFeed(url) {
    const response = await fetch(`proxy.php?url=${encodeURIComponent(url)}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.text();
}

// Update the createArticleContent function
function createArticleContent(content) {
    const wrapper = document.createElement('div');
    wrapper.className = 'article-content-wrapper';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'article-content collapsed';
    contentDiv.innerHTML = content;
    
    wrapper.appendChild(contentDiv);
    
    // Create expand button only after appending content
    // so we can check the actual height
    setTimeout(() => {
        if (contentDiv.scrollHeight > 100) {
            const expandButton = document.createElement('button');
            expandButton.className = 'expand-button';
            expandButton.textContent = 'Lees meer';
            
            expandButton.addEventListener('click', () => {
                contentDiv.classList.toggle('collapsed');
                contentDiv.classList.toggle('expanded');
                expandButton.classList.toggle('expanded');
                expandButton.textContent = contentDiv.classList.contains('collapsed') ? 'Lees meer' : 'Lees minder';
            });
            
            wrapper.appendChild(expandButton);
        }
    }, 0);
    
    return wrapper.outerHTML;
}

// Add these functions at the top of your script
function showLoading() {
    const loadingIndicator = document.querySelector('.loading-indicator');
    const fetchButton = document.getElementById('fetchButton');
    loadingIndicator.classList.add('active');
    fetchButton.disabled = true;
}

function hideLoading() {
    const loadingIndicator = document.querySelector('.loading-indicator');
    const fetchButton = document.getElementById('fetchButton');
    loadingIndicator.classList.remove('active');
    fetchButton.disabled = false;
}

// Modify the fetchAllFeeds function
async function fetchAllFeeds() {
    showLoading();
    
    try {
        const articlesContainer = document.getElementById('articles');
        let newArticles = [];
        const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
        
        for (const [source, feedInfo] of Object.entries(NEWS_FEEDS)) {
            try {
                const text = await fetchFeed(feedInfo.url);
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(text, 'text/xml');
                const items = xmlDoc.querySelectorAll('item');
                
                items.forEach(item => {
                    const title = item.querySelector('title')?.textContent;
                    const content = item.querySelector('description')?.textContent;
                    const link = item.querySelector('link')?.textContent;
                    const pubDate = new Date(item.querySelector('pubDate')?.textContent);
                    
                    // Only include articles from the last 24 hours
                    if (title && content && link && pubDate && pubDate > twentyFourHoursAgo) {
                        const article = {
                            title,
                            content,
                            link,
                            pubDate,
                            source,
                            category: determineCategory(title, content),
                            geography: determineGeography(content),
                            timeRelevance: determineTimeRelevance(pubDate)
                        };

                        const articleId = createArticleId(article);
                        
                        if (!fetchedArticles.has(articleId)) {
                            fetchedArticles.add(articleId);
                            newArticles.push(article);
                        }
                    }
                });
            } catch (error) {
                console.error(`Error fetching ${source} feed:`, error);
                const errorCard = document.createElement('div');
                errorCard.className = 'error-card';
                errorCard.textContent = `Kon ${source} feed niet laden: ${error.message}`;
                articlesContainer.appendChild(errorCard);
            }
        }
        
        // Sort only the new articles (newest first)
        newArticles.sort((a, b) => a.pubDate - b.pubDate);
        
        // Update unread count and title
        unreadCount += newArticles.length;
        updateTitle(unreadCount);
        
        // Prepend new articles to the container in reverse order
        // so newest appears at the top
        for (let i = newArticles.length - 1; i >= 0; i--) {
            const article = newArticles[i];
            const articleCard = document.createElement('article');
            articleCard.className = 'article-card new-article';
            articleCard.setAttribute('data-source', article.source);
            
            if (!activeFilters.has(article.source)) {
                articleCard.classList.add('hidden');
            }
            
            const formattedDate = article.pubDate.toLocaleString('nl-NL', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            
            articleCard.innerHTML = `
                <div class="article-meta">
                    <span class="article-source-badge">
                        <img src="${NEWS_FEEDS[article.source].icon}" alt="${article.source}">
                        ${article.source}
                    </span>
                    <span class="article-date">${formattedDate}</span>
                </div>
                <h2 class="article-title">
                    <a href="${article.link}" target="_blank" rel="noopener noreferrer">${article.title}</a>
                </h2>
                <div class="article-tags">
                    <span class="tag category">${article.category}</span>
                    <span class="tag geography">${article.geography}</span>
                    <span class="tag time">${article.timeRelevance}</span>
                </div>
                ${createArticleContent(article.content)}
            `;
            
            articlesContainer.prepend(articleCard);
            
            // Start observing the new article
            articleObserver.observe(articleCard);
        }

    } catch (error) {
        console.error('Error fetching feeds:', error);
        alert('Error fetching news feeds. Please try again later.');
    } finally {
        hideLoading();
    }
} 