let weather = {
    apiKey: "523b7de4f2c7edd4212feaa1179180d7",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" + //função para a busca da cidade + conversão de medida para ceslsius
          city +
          "&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + "@2x.png";  // ícone relacionado a temperatura
      document.querySelector(".description").innerText = description;
      document.querySelector (".temp").innerText = (Math.trunc)(temp) + "°C";
      document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText =
        "Wind speed: " + speed + "km/h";
      document.querySelector(".weather").classList.remove("loading");
      document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + city + "')";

      // função para realizar a pesquisa
    },
    search: function () {
      this.fetchWeather(document.querySelector(".searchbar").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  //  função para usar a tecla ENTER para a pesquisa

  document
    .querySelector(".searchbar")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
  weather.fetchWeather("Rio de Janeiro");
 