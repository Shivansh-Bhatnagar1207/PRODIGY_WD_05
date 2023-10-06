//? selecting all elements

const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloudOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.getElementById("locationinput");
const search = document.querySelector(".search");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".cities");

//! default city when the page loads
let cityinput = "Lucknow";

cities.forEach((city) => {
  city.addEventListener("click", (e) => {
    cityinput.e.target.innerHTML;
    fetchWeatherData();
    app.style.opacity = "0";
  });
});

form.addEventListener("submit", (e) => {
  if (search.value.length == 0) {
    alert("Please Enter city Name");
  } else {
    cityinput = search.value;
    fetchWeatherData();
    search.value = "";
    // app.style.opacity = "0";
  }

  e.preventDefault();
});

function dayofweek(day, month, year) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wedmsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[new Date(`${day}/${month}/${year}`.getDay())];
}

function fetchWeatherData() {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=c302c49ca9bf474490673500230610&q=${cityinput}&aqi=no`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
