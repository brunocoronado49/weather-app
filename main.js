// URL and API
const apiKey = '7a9a10b94cfc0dc055634f971248f593';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// HTML Referencias
const locationInput = document.querySelector('#locationInput');
const searchButton = document.querySelector('#searchButton');
const locationElement = document.querySelector('#location');
const temperatureElement = document.querySelector('#temperature');
const descriptionElement = document.querySelector('#description');

searchButton.addEventListener('click', () => {
  const location = locationInput.value;

  if (location) {
    fetchWeather(location);
  }
});

function fetchWeather(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;webkitURL

  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      locationElement.textContent = data.name;
      temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
      descriptionElement.textContent = data.weather[0].description;
    })
    .catch(err => console.log(err));
}
