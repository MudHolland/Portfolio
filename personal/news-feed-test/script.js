let displayedArticles = new Set();

function loadArticles(appendNew = true) {
    const loadingIndicator = document.querySelector('.loading-indicator');
    loadingIndicator.style.display = 'flex';

    // Get active sources
    const activeSources = Array.from(document.querySelectorAll('.filter-btn.active'))
        .map(btn => btn.dataset.source);

    fetch('proxy.php')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(articles => {
            if (!Array.isArray(articles)) {
                console.error('Received data is not an array:', articles);
                return;
            }

            const articlesContainer = document.getElementById('articles');
            
            // Filter new articles
            const newArticles = articles.filter(article => {
                return !displayedArticles.has(article.url) &&
                    activeSources.includes(article.source);
            });

            // Create elements for new articles
            newArticles.forEach(article => {
                displayedArticles.add(article.url);
                
                const articleElement = document.createElement('article');
                articleElement.className = 'news-article';
                articleElement.dataset.source = article.source;
                
                articleElement.innerHTML = `
                    <div class="article-header">
                        <img src="logos/${article.source.toLowerCase()}.png" 
                             alt="${article.source}" 
                             class="source-icon">
                        <span class="publish-date">
                            ${new Date(article.publishedAt).toLocaleString('nl-NL')}
                        </span>
                    </div>
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                    <a href="${article.url}" target="_blank" rel="noopener noreferrer">
                        Lees meer
                    </a>
                `;

                if (appendNew) {
                    articlesContainer.insertBefore(articleElement, articlesContainer.firstChild);
                } else {
                    articlesContainer.appendChild(articleElement);
                }
            });

            loadingIndicator.style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching articles:', error);
            loadingIndicator.style.display = 'none';
        });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadArticles(false);
});

document.getElementById('fetchButton').addEventListener('click', () => {
    loadArticles(true);
});

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        filterArticles();
    });
});

function filterArticles() {
    const activeSources = Array.from(document.querySelectorAll('.filter-btn.active'))
        .map(btn => btn.dataset.source);

    document.querySelectorAll('.news-article').forEach(article => {
        const source = article.dataset.source;
        article.style.display = activeSources.includes(source) ? 'block' : 'none';
    });
} 