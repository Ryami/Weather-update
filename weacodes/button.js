function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function displayWeather(response) {
  document.querySelector("#researchArea").innerHTML = response.data.name;
  document.querySelector("#temperature-description").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#weather-Type").innerHTML =
    response.data.weather[0].main;
}

function searchCity(city) {
  let apiKey = "fa5cccda27fd9109e12bd86078c8d2e8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function displayCity(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let tempType = document.querySelector("#temperature-description");
  tempType.innerHTML = 70;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let typePrimary = document.querySelector("#type-primary");
typePrimary.addEventListener("submit", displayCity);

searchCity("Auburn, WA");
