function newTime(timestamp){
    let date=new Date(timestamp);
    let hours=date.getHours();
    if(hours<10){hours=`0${hours}`}
let minutes=date.getMinutes();
if (minutes<10){minutes=`0${minutes}`}
let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
let day=days[date.getDay()];
return`${day} ${hours}:${minutes}`
}
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
hum.innerHTML=response.data.main.humidity;
let time=document.querySelector("#date");
time.innerHTML=newTime(response.data.dt * 1000 );
let icon=document.querySelector("#image");
let picture=response.data.weather[0].icon;
icon.setAttribute("src", `http://openweathermap.org/img/wn/${picture}@2x.png`);
icon.setAttribute("alt", "response.data.weather[0].description");
celsiustemp=Math.round(response.data.main.temp);}

function citySearch(city){
let apikey = "b40b135798f82a05aed08769f9275f50";
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apikey}&units=metric`;
axios.get(api).then(displayWeather);}

function search(event){event.preventDefault();
let place=document.querySelector("#cityInput");
citySearch(place.value);}


let searching=document.querySelector("#searchInput");
searching.addEventListener("submit",search);

function newFarenheit(event){event.preventDefault();
    let temperatureElement=document.querySelector("#temperature");
    let farenheitTemp=(celsiustemp*9)/5 + 32;
    temperatureElement.innerHTML=Math.round(farenheitTemp);
    CelsiusLink.classList.add("active");
    farenheitLink.classList.remove("active");
    
}

let farenheitLink=document.querySelector("#farenheit");
farenheitLink.addEventListener("click", newFarenheit);

function newcelsius(event){event.preventDefault();
let temperatureElement=document.querySelector("#temperature")
temperatureElement.innerHTML=Math.round(celsiustemp);
CelsiusLink.classList.remove("active");
    farenheitLink.classList.add("active");
}

let CelsiusLink=document.querySelector("#celsius");
CelsiusLink.addEventListener("click", newcelsius);

let celsiustemp=null;

function displayforecast(){
    let forecastelement=document.querySelector("#forecast");
    let forecastHTML=`<div class="row">`;
    let days=["thur", "fri", "sat", "sun"];
    days.forEach(function (day){
    forecastHTML=forecastHTML + 
`<div class="col-2">
  <h4>
   <strong>${day}</strong>
  </h4>
  <div id="emoji">
  🔆
  </div>
  <div>
    <span id="tempMax">12°</span> <span id="tempMini">13°</span>
  </div>
</div>`});
    
forecastHTML=forecastHTML+`</div>`;

    forecastelement.innerHTML=forecastHTML;}


citySearch("paris");
displayforecast();