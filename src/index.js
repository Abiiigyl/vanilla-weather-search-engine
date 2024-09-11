function showCity(city) {
  let apiKey = "8e443a1126360b143996f5ft64df2bo5";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
  let temperature = document.querySelector("#weather-temperature");
  temperature.innerHTML = Math.round(response.data.temperature.current);
  let h1 = document.querySelector("#city");
  h1.innerHTML = response.data.city;
}

function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("#city");
  h1.innerHTML = `${searchInput.value}`;
  showCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);

showCity("Nairobi");