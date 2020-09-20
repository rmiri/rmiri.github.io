const blogDiv = document.querySelector('.blogPosts')

let isArticles = false;

function fetcharticles() {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@r.miriuk')
    .then((res) => res.json())
    .then(data => {
        isArticles = true;
        const res = data.items
        const posts = res.filter(item => item.categories.length > 0)

        let output = ''
        posts.forEach( item => {
            output += createArticle(item)
        })
    })
    }

const createArticle = (article) => {
    console.log(article)
    blogDiv.innerHTML = `<div>
    
        HELLLowqq 
    </div>`
}

fetcharticles()

