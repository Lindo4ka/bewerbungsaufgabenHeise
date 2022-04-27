async function fetchNews() {
    try {
        const options = {
            method: 'GET',
            headers: {
                'X-Heise-Token': 'zcJulkgE',
                'Content-Type': 'application/json'}
        };
        const response = await fetch('https://www.heise.de/extras/frontend/news/?offset=4&limit=12', options);
        const data = await response.json();
        //console.log(data); 
        displayNews(data);
    } catch (error) {
        console.log("ERROR")
        console.log(error)
    }
};
fetchNews();


function displayNews(data){
                data.forEach(element => {
                    //console.log(element);

                    let {title, synopsis, image, id } = element;
                    let {src, alt} = element.image;
                    //let {pubDate } = element.meta;

                    /*CONTAINER FÜR JEWEILIGE NACHRICHT*/
                    var divHTML = document.createElement("div");
                    divHTML.setAttribute("class", "containerNews");
                    var container = document.getElementById("container").appendChild(divHTML);

                    /*ID für Weiterleiten */
 
                    container.setAttribute("id", id);
                    container.setAttribute("onclick", `myFunc(${id})`);

                        /*CONTAINER FÜR BILD*/
                        var divBildHTML = document.createElement("div");
                        divBildHTML.setAttribute("class", "divBild");
                        container.appendChild(divBildHTML);

                            /*BILD*/
                            const imageHTML = document.createElement("img");
                            imageHTML.innerHTML = image;
                            imageHTML.setAttribute("src", src);
                            imageHTML.setAttribute("alt", alt);
                            divBildHTML.appendChild(imageHTML); 


                        /*CONTAINER FÜR TEXT */
                        var divTextHTML = document.createElement("div");
                        divTextHTML.setAttribute("class", "divText");
                        container.appendChild(divTextHTML);

                            /*ÜBERSCHRIFT*/
                            var titleHTML = document.createElement("h3");
                            titleHTML.innerHTML = title;
                            divTextHTML.appendChild(titleHTML);

                            /*SYNOPSIS*/
                            var synopsisHTML = document.createElement("p");;
                            synopsisHTML.innerHTML = synopsis;
                            divTextHTML.appendChild(synopsisHTML);
                    });
}

function myFunc(id){
        var params = new URLSearchParams();
        params.append("id", id);
            
        var url = "jeweiligeNachricht.html?" + params.toString();
        //location.href = url;
        window.open(url);
}
myFunc()

