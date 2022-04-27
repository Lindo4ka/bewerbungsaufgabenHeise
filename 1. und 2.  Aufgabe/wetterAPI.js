navigator.geolocation.getCurrentPosition(getLatLon);

function getLatLon(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;

    //var lat = null;
    //var lon = null;

    function check(lat, lon) {
        if (lat == null || lon == null){
           const lat = "52.520008";
           const lon = "13.404954";
        }
    }

    async function fetchWeather() {

        try {
    
            //const lat = "52.520008";
            //const lon = "13.404954";            
            const apiKey = "0c1030438d8605bdf7fa3c140730bd17";
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=de `);
            const data = await response.json();
            console.log(data); 
            displayWeather(data);
        } catch (error) {
            console.log("ERROR")
            console.log(error)
        }
    };
    
    fetchWeather();
}


function displayWeather(data){

    const {name} = data;
    const {feels_like, temp, temp_max, temp_min } = data.main;


    /*CONTAINER*/
    var divWeatherHTML = document.createElement("div");
    divWeatherHTML.setAttribute("id", "divWeatherHTML");
    var container = document.getElementById("Wetter").appendChild(divWeatherHTML);

    /* Stadt */
    var StadtHTML = document.createElement("p");
    StadtHTML.setAttribute("id", "Stadt");
    container.appendChild(StadtHTML);
    document.getElementById("Stadt").innerHTML = "Wetter in " + name;


    const { icon, description } = data.weather[0];

    /*ICON und DESCRIPTION */
    var icon_descriptionHTML = document.createElement("div");
    icon_descriptionHTML.setAttribute("id", "icon_description");
    container.appendChild(icon_descriptionHTML);

        /*ICON*/
        const iconHTML = document.createElement("img");
        iconHTML.setAttribute("class", `${icon}`);
        iconHTML.setAttribute("id", "icon");
        iconHTML.setAttribute("src", "https://openweathermap.org/img/wn/" + `${icon}` + ".png");
        icon_descriptionHTML.appendChild(iconHTML);

        /*DESCRIPTION*/
        const descriptionHTML = document.createElement("p");
        descriptionHTML.setAttribute("id", "description");
        icon_descriptionHTML.appendChild(descriptionHTML);
        document.getElementById("description").innerHTML = description;

    /* temp */
    var tempHTML = document.createElement("p");
    tempHTML.setAttribute("id", "temp");
    container.appendChild(tempHTML);
    document.getElementById("temp").innerHTML = temp + "°";

    /* feeals_like */
    var feeals_likeHTML = document.createElement("p");
    feeals_likeHTML.setAttribute("id", "feels_like");
    container.appendChild(feeals_likeHTML);
    document.getElementById("feels_like").innerHTML = "gefühlt wie " + feels_like + "°";

    /*div für temp_min und temp_max */
    var min_maxHTML = document.createElement("div");
    min_maxHTML.setAttribute("id", "min_max");
    container.appendChild(min_maxHTML);    
    document.getElementById("min_max").innerHTML = "↑ " + temp_max + "° " + "&nbsp &nbsp | &nbsp &nbsp" + " ↓ " + temp_min + "°";


}