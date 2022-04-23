let weather = {
apiKey: "523b7de4f2c7edd4212feaa1179180d7",
fetchWeather: function (city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        +"&units=metric&appId=" 
        + this.appKey)
    
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
},
displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind
    console.log(name,icon,description,temp,humidity,speed)

    // info na pagina

    document.querySelector(".city").innerText = "Previsão em" + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png" 
}

};