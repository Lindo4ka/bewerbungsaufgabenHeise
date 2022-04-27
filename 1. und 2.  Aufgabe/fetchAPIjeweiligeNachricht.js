/*ID von der angeklickten Nachricht */

var params = new URLSearchParams(window.location.search),
id = params.get("id");


async function fetchSingleNews() {

    try {
        const options = {
            method: 'GET',
            headers: {
                'X-Heise-Token': 'zcJulkgE',
                'Content-Type': 'application/json'}
        };
        const response = await fetch(`https://www.heise.de/extras/frontend/news/${id}`, options);
        const data = await response.json();
        //console.log(data); 
        displaySingleNews(data);
    } catch (error) {
        console.log("ERROR")
        console.log(error)
    }
};

fetchSingleNews();

function displaySingleNews(data){
    const {title, synopsis, content } = data;
    document.getElementById("title").innerHTML = title;
    document.getElementById("synopsis").innerHTML = synopsis;
    document.getElementById("content").innerHTML = content;

    const {author, pubDate } = data.meta;
    document.getElementById("author").innerHTML = author + ",";
    
    const d = new Date(pubDate);
    let jahr = d.getFullYear();
    document.getElementById("pubDate").innerHTML = jahr;
    
    const {src, alt} = data.image;
    document.getElementById("image").setAttribute("alt", alt);
    document.getElementById("image").setAttribute("src", src);
} 