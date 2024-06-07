const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', (req, res) => {
    const query = req.body.cityName;
    const apikey = 'e9134544bff71af4e4c896ca40eb0e2a';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apikey}&units=metric`;
    https://api.openweathermap.org/data/2.5/weather?q=Chico&appid=e9134544bff71af4e4c896ca40eb0e2a&units=metric
    https.get(url, (response) => {
        response.on('data', (data) => {
            const WeatherData = JSON.parse(data);
            const temp = WeatherData.main.temp;
            const description = WeatherData.weather[0].description;
            res.write(`<h1>The temperature in ${query} is ${temp} degrees Celsius</h1>`);
            res.write(`<p>The weather description is ${description}</p>`);
            res.send();
        });
    }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
        res.send("Error fetching data.");
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
