let weather = {
"apiKey: 523b7de4f2c7edd4212feaa1179180d7"
fetchWeather: function () {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appId=523b7de4f2c7edd4212feaa1179180d7")
        .then((response) => response.json())
        .then((data) => console.log(data));
    

}