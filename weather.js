function getData()
{
    const city = search.value;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8e497af7cbmsh4340dc97b21b049p167d10jsne62df5ceba66',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

       fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
       .then(responce => responce.json())
       .then(res=>{
        console.log(res);
        temp.innerHTML = res.temp;
        ws.innerHTML = res.wind_speed;
        hmdty.innerHTML = res.humidity;

       })
       .catch(err => console.error(error))


}