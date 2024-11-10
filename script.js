document.addEventListener("DOMContentLoaded", function() {
  const weatherElement = document.getElementById("weather");

  function getWeather() {
    const hours = new Date().getHours();
    let weatherText;

    if (hours >= 6 && hours < 12) {
      weatherText = "朝: 晴れ";
    } else if (hours >= 12 && hours < 18) {
      weatherText = "昼: 曇り";
    } else {
      weatherText = "夜: 雨";
    }

    return weatherText;
  }

  weatherElement.textContent = getWeather();
});
