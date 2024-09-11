function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");
  let h1 = document.querySelector("#city");
  h1.innerHTML = `${searchInput.value}`;
}




let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);
