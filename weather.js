/*This document allows for the collection of Json data from an API.*/
//This creates the reference points
const weather = document.getElementById("weather");
//Declaring lists and arrays
let currentWeather = {};
let availableWeather = [];
let potchWeather = [];
//using FETCH to call the API
fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=potchefstroom,za&APPID=a59b589d0b4f381723716fc12af15c66'
)
    .then((res)=>{
        return res.json();//Get results as JSON
    })
    .then((loadedWeather)=>{
        potchWeather = loadedWeather.weather.map((LoadedInfo)=>{//loading results into array
            const formattedWeather = {
                description: LoadedInfo.description,
            }
            return formattedWeather;
        });
        startGame();//Calls start game method     
    })
    .catch((err)=>{//catch any error that may arise
        console.error(err);
    });

startGame = () => {//This method takes all the potchWeather array elements and expands them into a list
    availableWeather = [...potchWeather];
    getWeather();//This calls the getWeather method
}
/*This method the currrent weather of Potchefstroom and sets the results as the innerText element of the weather*/
getWeather=()=>{
    for (i = 0; i<1;i++)
    currentWeather = availableWeather[i];
    weather.innerText = currentWeather.description;
}