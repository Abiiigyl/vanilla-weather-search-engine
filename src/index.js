function showCity(city) {
  let apiKey = "8e443a1126360b143996f5ft64df2bo5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperature = document.querySelector("#weather-temperature");
  let description = document.querySelector("#description");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let time = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let icon = document.querySelector("#weather-icon");
  
  icon.innerHTML = `<img src="${response.data.condition.icon_url}" class="weather-icon">`
  temperature.innerHTML = Math.round(response.data.temperature.current);
  description.innerHTML = response.data.condition.description;
  humidity.innerHTML = `${response.data.temperature.humidity}%`;
  wind.innerHTML = `${response.data.wind.speed}km/h`;
  let h1 = document.querySelector("#city");
  h1.innerHTML = response.data.city;
  time.innerHTML = formatDate(date);

  getForecast(response.data.city);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[date.getDay()];
  if (minutes < 10){
    minutes = `0${getMinutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("#city");
  h1.innerHTML = `${searchInput.value}`;
  showCity(searchInput.value);
}

function getForecast(city) {
  let apiKey = "8e443a1126360b143996f5ft64df2bo5";
  let apiUrl =`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);
  let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml= "";

  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      `
    <div class="forecast-details">
       <div class="forecast-day">${day}</div>
       <div class="forecast-icon">🌦</div>
       <div class="forecast-temperatures">
        <div class="forecast-temp"><strong>26°</strong></div>
        <div class="forecast-temp">14°</div>
       </div>  
      </div>`;
  }
);

let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHtml;
}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);

showCity("Nairobi");

