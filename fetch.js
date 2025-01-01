import { setDataToDOM } from "./utils.js";

const container = document.getElementById("container");
const loading = document.getElementById("loading");
const data = document.getElementById("data");

export const fetchWeatherData = async (lat, lon) => {
  loading.style.display = "block";
  container.style.justifyContent = "center";

  const url = `https://weather-extension-backend.onrender.com/api/weather?lat=${lat}&lon=${lon}`;

  try {
    const response = await fetch(url);
    const json = await response.json();

    data.style.display = "block";

    setDataToDOM(json);
  } catch (err) {
    console.log(err);
  } finally {
    container.style.justifyContent = "start";
    loading.style.display = "none";
  }
};
