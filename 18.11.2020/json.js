fetch('http://194.58.122.219/test/weather-api-test2/?t=ae5535f2-730c-43b0-ad75-4e5ceaa127f1&lat=54&lon=37',)
.then((response) => {
    return response.json();
})
.then((response) => {
    console.log(response);
    let temp = response.data.fact.temp;
    let feelsLike = response.data.fact.feels_like;
    let lat = response.data.info.lat;
    let lon = response.data.info.lon;
    let icon = response.data.fact.icon;
    document.querySelector('.temp').innerHTML = temp;
    document.querySelector('.feels-like').innerHTML = feelsLike;
    document.querySelector('.lat').innerHTML = lat;
    document.querySelector('.lon').innerHTML = lon;
    document.querySelector('.icon').innerHTML = 
})

