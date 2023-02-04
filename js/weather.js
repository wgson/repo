const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

const APIKEY = "5b816613c7b2a7fa2f2292fcde7a4cf6";

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      city.innerText = data.name;
      weather.style.color = "white";
      city.style.color = "white";
    });
}

function error() {
  alert("Can't find my location");
}

navigator.geolocation.getCurrentPosition(success, error);
