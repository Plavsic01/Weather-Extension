# Chrome Extension for Weather Report

This is a simple Chrome extension that fetches and displays the current weather based on the user's geolocation.

## Features

- Fetches user's current geolocation using the browser's Geolocation API.
- Uses OpenWeather API to get the current weather data for the user's location.
- Displays weather information such as temperature, wind speed, and weather description.

## How It Works

1. The extension uses the **Geolocation API** to get the current latitude and longitude of the user.
2. It then makes a request to the **OpenWeather API** with those coordinates to fetch the weather data.
3. The weather data is displayed in a user-friendly interface within the extension.

## Setup and Installation

To use the extension locally, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/Plavsic01/Weather-Extension.git
   ```

2. Navigate to `chrome://extensions/` in your Chrome browser.

3. Enable **Developer Mode** (toggle switch at the top-right).

4. Click on **Load unpacked** and select the directory where your project is located.

5. Your extension should now appear in the browser toolbar. Click on the extension icon to view the weather report.

## API Key

To use the OpenWeather API, you need an API key. Follow these steps:

1. Visit [OpenWeather API](https://openweathermap.org/api).
2. Sign up and generate an API key.
3. Replace `'YOUR_API_KEY'` in the config.js with your actual API key.

## File Structure

- **manifest.json**: Chrome extension metadata and permissions.
- **index.html**: The HTML file that displays the weather information.
- **script.js**: The JavaScript file that handles geolocation and API requests.
- **fetch.js**: For handling background processes like API requests.
- **config.js**: Where you put your `'API_KEY'`.
- **style.css**: The stylesheet for styling the popup window.

## Example Usage

Once the extension is installed, click on the extension icon in the toolbar to display the weather report for your current location.

The report will include:

- Current temperature (in Celsius or Fahrenheit depending on the API response).
- Max and Min temperature
- Weather description through icon (clear, cloudy, etc.).
- Sunrise and Sunset

## Troubleshooting

- If the extension is not fetching the weather, make sure you have enabled location access in your browser settings.
- Ensure that you have added the correct API key to the code.
