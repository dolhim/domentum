const API_KEY = '701371d3556ad90cd2ce051f562aaded';

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const weather = document.querySelector('#weather span:first-child');
            const city = document.querySelector('#weather span:last-child');
            weather.innerText = data.name;
            city.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      });
}

function onGeoError() {
    alert('위치를 찾을 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);