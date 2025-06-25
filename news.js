const apiKey = "your api key";
const container = document.querySelector(".container");

fetchNews(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);

function fetchNews(url)
{
    container.innerHTML = "";
    fetch(url).then(res=>res.json()).then(data=>
        data.articles.forEach(article => {
            const n=document.createElement("div")
            const imageHTML = article.urlToImage
                    ? `<img src="${article.urlToImage}" alt="Image Unable to Load">`
                    : ``;
            n.innerHTML=`${imageHTML}
            <h3>${article.title}</h3>
            <h4>${article.author || "Unknown Author"}</h4>
            <h5>${article.description|| "Unknown Author"}</h5>
            <p><a href=${article.url} target="_blank" class="readmore">Read More </a></p>`
            container.append(n);
        })
    
    )
}

function searchNews()
{
    var h=document.querySelector(".input").value.trim()
    if(h!=="")
    {
        const searchUrl = `https://newsapi.org/v2/everything?q=${h}&apiKey=${apiKey}`
        fetchNews(searchUrl)
    }
    else
    {
        alert("Enter Valid Search Data!")
        return
    }
}

function getNews(h)
{
    const searchUrl = `https://newsapi.org/v2/everything?q=${h}&apiKey=${apiKey}`
    fetchNews(searchUrl)
}

document.querySelector(".changemode").addEventListener("click", function () {
    document.body.classList.toggle("dark");
})
