const express = require('express');
const { log } = require('node:console');
const app = express();
const https = require('node:https');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=> {
    res.sendFile(__dirname + "/index.html");
})

app.post('/', (req,res) =>{
    const query = req.body.cityName
    const apikey = 'e9134544bff71af4e4c896ca40eb0e2a';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+query+'&appid='+apikey+'&units=metric'
    https.get(url,
        (response)=> { 
            // console.log(response);
            response.on('data',(data) => {
                // console.log(data);
                const WeatherData = JSON.parse(data);
                console.log(WeatherData)
                const temp = WeatherData.main.temp;
                const description = WeatherData.weather[0].description;
                console.log(description)
                console.log(temp)
                res.write("<h1>The temparature in " + query + " is " + temp + " degreee celsius</h1>")
                res.write("<p>The weather description is  "+ description +"</p>")
            })

        }
    )
})




app.listen(3000, () => console.log("our server is running at port 3000"));

