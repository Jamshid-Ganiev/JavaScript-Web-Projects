//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/", function(req, res){

    var num1 = req.body.num1;
    var num2 = req.body.num2;
    
    var result = Number(num1) + Number(num2)

    res.send(`Result: ${result}`);
})

app.post("/bmicalculator", function(req, res){

    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height) / 100;
    
    var result = weight / (height**2)

    res.send(`<h1>Your BMI is ${result.toFixed(2)}</h1>`);
})

app.listen(3000, function(){
    console.log("Server is running on port: 3000");
});