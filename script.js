const API_KEY = "3827d7e7a6773f227ab9f5d6ebdf4c52";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SEARCH_BOX = document.querySelector(".search input");
const SEARCH_BTN = document.querySelector(".search button");
const WEATHER_ICON = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const RESPONSE = await fetch(API_URL + city + `&appid=${API_KEY}`);
    
    if(RESPONSE.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else {
        let data = await RESPONSE.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        WEATHER_ICON.src = "imgs/clouds.png";

    }else if(data.weather[0].main == "Clear"){
        WEATHER_ICON.src = "imgs/clear.png";

    }else if(data.weather[0].main == "Rain"){
        WEATHER_ICON.src = "imgs/rain.png";

    }else if(data.weather[0].main == "drizzel"){
        WEATHER_ICON.src = "imgs/drizzel.png";

    }else if(data.weather[0].main == "Mist"){
        WEATHER_ICON.src = "imgs/mist.png";

    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";


    }

    

}


SEARCH_BTN.addEventListener("click", ()=>{
    checkWeather(SEARCH_BOX.value);
})
