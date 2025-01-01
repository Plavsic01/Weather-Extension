const city = document.getElementById("city");
const weatherIcon = document.getElementById("weather-icon");
const temp = document.getElementById("temp");
const maxTemp = document.getElementById("max-temp");
const minTemp = document.getElementById("min-temp");
const sunriseTime = document.getElementById("sunrise-time");
const sunsetTime = document.getElementById("sunset-time");

export const formatTime = (date) => {
  return `${date.getHours()}:${date.getMinutes()} ${
    date.getHours() < 12 ? "AM" : "PM"
  }`;
};

export const setDataToDOM = (json) => {
  const sunriseDate = new Date(json.sunrise * 1000);
  const sunsetDate = new Date(json.sunset * 1000);

  city.innerText = json.name;
  temp.innerText = json.temp + "°";
  weatherIcon.src = `https://openweathermap.org/img/wn/${json.icon}@2x.png`;
  maxTemp.innerText = `Max: ${json.temp_max}°`;
  minTemp.innerText = `Min: ${json.temp_min}°`;
  sunriseTime.innerText = `${formatTime(sunriseDate)}`;
  sunsetTime.innerText = `${formatTime(sunsetDate)}`;
};
