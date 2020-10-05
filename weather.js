const weather = document.getElementById("weather");

let currentWeather = {};
let availableWeather = [];
let potchWeather = [];

fetch(
    'http://api.openweathermap.org/data/2.5/weather?q=potchefstroom,za&APPID=a59b589d0b4f381723716fc12af15c66'
)
    .then((res)=>{
        return res.json();
    })
    .then((loadedWeather)=>{
        potchWeather = loadedWeather.weather.map((LoadedInfo)=>{
            const formattedWeather = {
                description: LoadedInfo.description,
            }
            return formattedWeather;
        });
        startGame();
    })
    .catch((err)=>{
        console.error(err);
    });

startGame = () => {
    availableWeather = [...potchWeather];
    getWeather();
}

getWeather=()=>{
    for (i = 0; i<1;i++)
    currentWeather = availableWeather[i];
    weather.innerText = currentWeather.description;
}