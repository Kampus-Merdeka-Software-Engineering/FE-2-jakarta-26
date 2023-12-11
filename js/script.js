var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }

// news api 

async function fetchNews() {
    const apiKey = "61e80d9448f346da9b4717ba608bf1d7"; //masukan api key pribadi
    const apiUrl = `https://newsapi.org/v2/everything?q=apple&from=2023-11-30&to=2023-11-30&sortBy=popularity=us&apiKey=${apiKey}`;

    try {
        
        const response = await fetch(apiUrl);
        const data = await response.json();

        
        if (data.status === 'ok') {  
            return data.articles;
        } else {
            console.error('Error fetching news:', data.message);
            return [];
        }
    } catch (error) {
        console.error('Error fetching news:', error);
        return [];
    }
}

// Function menampilkan artikel
async function displayNews() {
    const mainContent = document.getElementById('main-content');
    const headlines = document.getElementById('headlines');


    const newsData = await fetchNews();
    mainContent.innerHTML = '';

    if (newsData.length === 0) {
        mainContent.innerHTML = '<p>No news available at the moment.</p>';
        return;
    }

    newsData.forEach((articleData, index) => {
        const article = document.createElement('article');
        article.innerHTML = `
            <img class='imageArtikel'>${article.urlToImage}</img>
            <h2>${articleData.title}</h2>
            <p><strong>${articleData.source.name}</strong></p>
            <p>${articleData.description}</p>
            <a href="artikel.html?article=${index}">Read more</a>
        `;
        mainContent.appendChild(article);
    });
}

window.onload = displayNews;





