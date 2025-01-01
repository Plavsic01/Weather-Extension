import { fetchWeatherData } from "./fetch.js";

// let units = "metric";

navigator.geolocation.getCurrentPosition(async (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  await fetchWeatherData(lat, lon);
});
