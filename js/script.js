"use strict"


const weatherBlock = document.querySelector('#weather');

async function loadWeather(e) {
    weatherBlock.innerHTML = `
        <div class="weather__loading">
            <img src="img/loading.gif" alt="loading...">
        </div>`;

    const server = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Kryvyi Rih&appid=1d23e2bc90f69a28836e833f18e679c1';
    const response = await fetch(server, {
        method:'GET',
    });
    const responseResult = await response.json();

    if(response.ok) {
        getWeather(responseResult);
    }else{
        weatherBlock.innerHTML = responseResult.message;
    }
}

function getWeather(data){
    console.log(data);

    const location = data.name;
    const temp = Math.round(data.main.temp);
    const feelsLike = Math.round(data.main.feels_like);
    const weatherStatus = data.weather[0].main;
    const weatherIcon = data.weather[0].icon;

    const template = `
    <div class="weather__header">
    <div class="weather__main">
        <div class="weather__city">${location}</div>
        <div class="weather__status">${weatherStatus}</div>
    </div>
    <div class="weather__icon">
        <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherIcon}">
    </div>
    </div>
    <div class="weather__temp">${temp}</div>
    <div class="weather__feels_like">Feels like ${feelsLike}</div>`;

    weather.innerHTML = template;

    console.log(weatherIcon);
    console.log(feelsLike);
}

if(weatherBlock){
    loadWeather();
}