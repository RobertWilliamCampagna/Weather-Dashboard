var searchBarEl = document.querySelector("#searchBar");
var searchCityEl = document.querySelector("#searchCity");
var searchBtnEl = document.querySelector("#searchButton").value;
var locationEl = document.querySelector("#locationResult");
var weatherDisplayEl = document.querySelector("#weatherDisplay");
const APIkey = "&api_key=f0c403d2e251d72ef484c5068f83156e";


searchBarEl.addEventListener("click", function(event) {
  var searchBarEl = document.querySelector("#searchButton").value;
  event.preventDefault();

  console.log(searchBtnEl);
  getWeather(searchBarEl);
  console.log(searchBarEl);
});

fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=' + searchCityEl + "&appid=" + APIkey
  
)

searchBarEl.addEventListener("submit",formSubmitHandler);

// function myfunction() {

// //     let searchCity = document.querySelector('#searchCity').value;
// //     fetch(
// //       'https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&api_key=f0c403d2e251d72ef484c5068f83156e'
// //     )
// // .then(function(response){
// //     let container = document.querySelector("#searchCity");
// // })

