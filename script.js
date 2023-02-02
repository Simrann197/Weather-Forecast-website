const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fe37f3a4ffmsh0bed5ac94bed610p189626jsn06a429b4a25a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
let cloud_pct;
const getWeather = (city)=>{
	cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
.then(response => response.json())
.then((response) => {
		console.log(response)
		temp.innerHTML = response.temp
		temp2.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		humidity2.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_speed2.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		cloud_pct=response.cloud_pct;
		addrecent(response);
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")
var con=document.getElementById("recent-container")
var icon=document.createElement("img");
city.value="Delhi";
var con=document.getElementById("recent-container")
function addrecent(response)
{
	var icon=document.createElement("img");
	var icont=document.createElement("img");
	var icons=document.getElementById("icons");
	icon.setAttribute("id","gif");
	icon.style="height:80px";
	icont.style="height:35px";
	icon.setAttribute("src","");
	calculate_type(icont,response.temp,cloud_pct);
	icons.append(icon);
    var tr=document.createElement("tr");
    var th=document.createElement("th");
	var td=document.createElement("td");
	td.append(icont);
	tr.append(td);
	tr.append(icont);
    th.classList.add("text-middle");
    th.setAttribute("scope","row");
    th.innerHTML=city.value;
    tr.append(th);
    var td=document.createElement("td");
    td.innerHTML=response.temp;
    tr.append(td);
    td=document.createElement("td");
    td.innerHTML=response.humidity;
    tr.append(td);
    td=document.createElement("td");
    td.innerHTML=response.wind_speed;
    tr.append(td);
    con.append(tr);
}

function calculate_type(icont,_feels_like,_cloud_pct)
{
	if(_feels_like>15&&_cloud_pct<50)
	{
		icon.setAttribute("src","gif/sun.gif");
		icont.setAttribute("src","gif/sun.gif");
	}
	else if(_feels_like>15&&_cloud_pct>50)
	{
		icon.setAttribute("src","gif/cloudy.gif");
		icont.setAttribute("src","gif/cloudy.gif");
	}
	else if(_feels_like<0)
	{
		icon.setAttribute("src","gif/rain.gif");
		icont.setAttribute("src","gif/rain.gif");
	}
	else if(_feels_like<0&&_cloud_pct<40)
	{
		icon.setAttribute("src","gif/snow.gif");
		icont.setAttribute("src","gif/snow.gif");
	}
	else if(_feels_like>20&&_cloud_pct<40)
	{
		icon.setAttribute("src","gif/storm.gif");
		icont.setAttribute("src","gif/storm.gif");
	}
	else
	{
		icon.setAttribute("src","gif/storm.gif");
		icont.setAttribute("src","gif/storm.gif");
	}
}
