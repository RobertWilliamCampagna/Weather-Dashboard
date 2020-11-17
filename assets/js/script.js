let appID = 'eb872728b08aff5219c6297b30680980';
let units = 'imperial';
let searchMethod = "";

function searchWeather(searchTerm){
fetch(`https://api.openweathermap.org/data/2.5/weather?q${searchMethod}=${searchTerm}&APPID=${appID}&units=${units}`)
.then(result => {
  return result.json();
}).then(result => {
  init(result);
})
}

function init(resultFromServer){
  console.log(resultFromServer);

let weatherDescriptionHeader = document.getElementById('weatherDescriptionHeader');
let temperatureElement = document.getElementById('temperature');
let humidityElement = document.getElementById('humidity');
let windSpeedElement = document.getElementById('windSpeed');
let cityHeader = document.getElementById('cityHeader');
let weatherIcon = document.getElementById('documentIconImg');

weatherIcon.src = 'http://openweathermap.org/img/w/' + resultFromServer.weather[0].icon + '.png';

let resultDescription = resultFromServer.weather[0].description;
weatherDescriptionHeader.innerText = resultDescription.charAt(0).toUpperCase() + resultDescription.slice(1);

temperatureElement.innerHTML = Math.floor(resultFromServer.main.temp) + '&#176';
windSpeedElement.innerHTML = 'Winds at ' + Math.floor(resultFromServer.wind.speed) + ' m/s';
cityHeader.innerHTML = resultFromServer.name;
humidityElement.innerHTML = 'Humidity levels at ' + resultFromServer.main.humidity + '%';
}

document.getElementById('searchBtn').addEventListener('click',() => {
  let searchTerm = document.getElementById('searchInput').value;
  if(searchTerm)
  searchWeather(searchTerm);
})








// var searchBarEl = document.querySelector("#searchBar");
// var searchCityEl = document.querySelector("#searchCity");
// var searchBtnEl = document.querySelector("#searchButton").value;
// var locationEl = document.querySelector("#locationResult");
// var weatherDisplayEl = document.querySelector("#weatherDisplay");
// const APIkey = "&api_key=f0c403d2e251d72ef484c5068f83156e";


// searchBarEl.addEventListener("click", function(event) {
//   var searchBarEl = document.querySelector("#searchButton").value;
//   event.preventDefault();

//   console.log(searchBtnEl);
//   getWeather(searchBarEl);
//   console.log(searchBarEl);
// });

// fetch(
//       'https://api.openweathermap.org/data/2.5/weather?q=' + searchCityEl + "&appid=" + APIkey
  
// )
// .then(function(response){
//   return response.json();
// })
// searchBarEl.addEventListener("submit",formSubmitHandler);

// // function myfunction() {

// // //     let searchCity = document.querySelector('#searchCity').value;
// // //     fetch(
// // //       'https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&api_key=f0c403d2e251d72ef484c5068f83156e'
// // //     )
// // // .then(function(response){
// // //     let container = document.querySelector("#searchCity");
// // // })

