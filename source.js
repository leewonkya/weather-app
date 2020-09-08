const appKey = "d6d42139d3b214908eede78ee1be3d6c";

// var key = [
//     "Bright",
//     "Sunny",
//     "Clear",
//     "Fine",
//     "Partly cloudy",
//     "Cloudy",
//     "Overcast",
//     "Gloomy",
//     "Foggy",
//     "Misty",
//     "Drizzle",
//     "Shower",
//     "Downpour",
//     "Torrential rain",
//     "Hail",
//     "Bright",
//     "Sunny",
//     "Clear",
//     "Bright",
//     "Sunny",
//     "Clear",
//     "Bright",
//     "Sunny",
//     "Clear",
//     "Bright",
//     "Sunny",
//     "Clear",
//     "Bright",
//     "Sunny",
//     "Clear",
//     "Bright",
//     "Sunny",
//     "Clear",
//     "Bright",
//     "Sunny",
//     "Clear",
// ];

var keys = [
    "few clouds",
    "broken clouds",
    "overcast clouds"
];

var results = [
    "Có ít mây",
    "Mây tan",
    "Mây u ám"
];

var obj ={};

for(var i = 0; i < keys.length; i++){
    obj[keys[i]] = results[i];
}

var searchButton = document.getElementById("search-btn"),
  searchInput = document.getElementById("search-txt"),
  cityName = document.getElementById("city"),
  temperature = document.getElementById("temperature"),
  humidity = document.getElementById("humidity");
  wind = document.getElementById("wind");
  cloud = document.getElementById("cloud");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === "") {
  
  }else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  cityName.innerHTML = jsonObject.name;
  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°"; //nhiet do tra ve sẽ theo do K nên chúng ta phải chuyen qua do C
  humidity.innerHTML = jsonObject.main.humidity + "%";
  wind.innerHTML = jsonObject.wind.speed + "km/h";
//   console.log(jsonObject.weather.description);
//   for (var key of Object.keys(obj)) { 
//         if(jsonObject.weather.description == obj[key]){
//             cloud.innerHTML = obj[key];
//         }
//     } 
}

function httpRequestAsync(url, callback)
{
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = () => { 
      if (httpRequest.readyState == 4 && httpRequest.status == 200)
          callback(httpRequest.responseText);
  }
  httpRequest.open("GET", url, true); 
  httpRequest.send();
}