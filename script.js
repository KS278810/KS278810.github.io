const apiKey = 'YOUR_API_KEY'; // APIキーを取得して設定
const city = 'Tokyo';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const weatherDiv = document.getElementById('weather');
        weatherDiv.innerHTML = `Temperature: ${data.main.temp}°C<br>Description: ${data.weather[0].description}`;
    })
    .catch(error => console.error('Error:', error));
