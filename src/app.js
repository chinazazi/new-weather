function displayWeather(response)
{console.log(response.data)
    let cityName=document.querySelector("#city");
    cityName.innerHTML=response.data.name;
    let desc=document.querySelector("#description");
    desc.innerHTML=response.data.weather[0].description;
    let newTemp=document.querySelector("#temperature");
newTemp.innerHTML=Math.round(response.data.main.temp);
let windspeed=document.querySelector("#wind");
windspeed.innerHTML=Math.round(response.data.wind.speed);
let hum=document.querySelector("#humidity");
hum.innerHTML=response.data.main.humidity;}

let apikey = "b40b135798f82a05aed08769f9275f50";
let city="france";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}&units=metric`;
axios.get(api).then(displayWeather);