const news = [];
const carouselIndicators = document.querySelector('#carousel-indicators');
const prevBtn = document.querySelector('#carousel-navigation #prev');
const nextBtn = document.querySelector('#carousel-navigation #next');
const newsContainer = document.querySelector('#news-container');

let currentNews = 0;
let maxNewsCount = 0;
let timer = 0;

let displayOnly = 5;

fetch('/news/ka/json')
    .then(response => response.json())
    .then(data => {
        data.forEach((newsData, i) => {
            if (i < displayOnly) {
                maxNewsCount++;

                article = createArticle(newsData);

                newsContainer.appendChild(article);
                news.push(article);
            }
        });
    })
    .then(() => {
        maxNewsCount = news.length;

        news.forEach((_, i) => {
            const indicator = document.createElement('i');
            indicator.classList.add('bi', 'bi-circle');
            indicator.id = `indicator-${i}`;
            carouselIndicators.appendChild(indicator);
        });
        updateNews(currentNews);
    });

function createArticle(news) {
    article = document.createElement('article');
    article.classList.add('news-item');
    article.id = 'news';

    article.innerHTML = `
        <div class="news-thumbnail">
            <img src="${ news.thumbnail }" alt="Image">
        </div>
        <div class="news-details">
            <div class="news-info">
                <h3 class="news-title">${ news.title }</h3>
                <p class="news-date"><span>თარიღი:</span> <span lang="en">${ news.date }</span></p>
            </div>
            <a href="news/${ news.id }" class="read-more-link">სრულად წაკითხვა</a>
        </div>   
    `

    return article;
}


function resetIndicators() {
    const indicators = document.querySelectorAll('#carousel-indicators i');
    indicators.forEach((indicator) => {
        indicator.classList.remove('bi-circle-fill');
        indicator.classList.add('bi-circle');
    });
    indicators[currentNews].classList.remove('bi-circle');
    indicators[currentNews].classList.add('bi-circle-fill');
}

function resetControlButtons() {
    prevBtn.classList.toggle('disabled', currentNews === 0);
    nextBtn.classList.toggle('disabled', currentNews === maxNewsCount - 1);
}

function displayNews() {
    news.forEach((news, i) => {
        news.style.transform = `translateX(${-100 * currentNews}%)`;
    });
}

function updateNews(index) {
    timer = 0;
    currentNews = index;
    resetIndicators();
    resetControlButtons();
    displayNews();
}

prevBtn.addEventListener('click', () => {
    updateNews((currentNews - 1 + maxNewsCount) % maxNewsCount);
});

nextBtn.addEventListener('click', () => {
    updateNews((currentNews + 1) % maxNewsCount);
});

setInterval(() => {
    timer += 100;
    if (timer >= 7000) {
        updateNews((currentNews + 1) % maxNewsCount);
    }
}, 100);

const indicators = document.querySelectorAll('#carousel-indicators i');
indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
        updateNews(i);
    });
});
