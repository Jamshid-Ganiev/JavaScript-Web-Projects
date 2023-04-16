const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html"); 
});

app.post("/", function(req, res){
    const city = req.body.cityName;
    console.log(city);

    const apiKey = "Your Api Key Here"
    const units = "metric"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`

    https.get(url, function(response){
        console.log(`Status Code: ${response.statusCode}`);

        response.on("data", (data) => {
            const weatherData = JSON.parse(data)
            const weatherDescription = weatherData.weather[0].description;
            const city = weatherData.name;
            const weatherIcon = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
            const temp = weatherData.main.temp;

            // Only one res.send   ! But we can write multiole res.write()
            res.write(`<h1> The temperature is ${temp} degrees Celcius. </h1>`);
            res.write(`The weather is currently ${weatherDescription}`);
            res.write(`<img src="${weatherIcon}">`);
            res.send();
    });
    });
});



app.listen(8000, function() {
    console.log("Server is listening on port: 8000");
});