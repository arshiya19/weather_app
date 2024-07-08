# Weather Application based on City NAmes around the world

Created a very simple weather application using Node.js and Express, with a simple frontend to display weather information for a given city.

<img width="800" alt="image" src="https://github.com/arshiya19/weather_app/assets/72481315/49baad9c-4c2b-410f-a5fb-62592e88b197">


## Backend:

1. Endpoints:

GET /: Serves an HTML file (index.html) as the main page.
POST /: Handles form submissions to fetch weather data from the OpenWeatherMap API based on the city name input.

2. API Integration:

Upon receiving a city name from a form, the server makes a request to the OpenWeatherMap API.
The API response is parsed to extract temperature and weather description.
The server sends this data back to the client as HTML.

## Frontend:
1. HTML (index.html):

Basic structure with an input field for the city name and a button to trigger the weather fetch.A container to display the weather information.

2. CSS:
An external stylesheet (app.css) linked to the HTML (path corrected).

3. JavaScript:
A function (getWeather()) to fetch weather data from the OpenWeatherMap API using fetch when the button is clicked.
The fetched data is displayed dynamically on the page.




