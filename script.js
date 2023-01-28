const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fe37f3a4ffmsh0bed5ac94bed610p189626jsn06a429b4a25a',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
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
		addrecent(response);
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi")
city.value="Delhi";
var con=document.getElementById("recent-container")
function addrecent(response)
{
	var icon=document.createElement("img");
	var icont=document.createElement("img");
	var icons=document.getElementById("icons");
	icons.innerHTML=""
	icon.setAttribute("id","gif");
	icon.style="height:80px";
	icont.style="height:50px";
	icon.setAttribute("src","");
	if(response.temp>9)
	{
		icon.setAttribute("src","sun.gif");
		icont.setAttribute("src","sun.gif");
	}
	else if(response.temp<0)
	{
		icon.setAttribute("src","snow.gif");
		icont.setAttribute("src","snow.gif");
	}
	icons.append(icon);
    var tr=document.createElement("tr");
    var th=document.createElement("th");
	var td=document.createElement("td");
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
