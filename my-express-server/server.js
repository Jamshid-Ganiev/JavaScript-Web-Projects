//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send('<h1>Hello, World!</h1>');
});

app.get("/contact", function(req, res){
    res.send('<h1>Contact me at james@gmail.com</h1>');
});

app.get("/about", function(req, res){
    res.send('<h1>Jamshid Ganiev</h1><h1>A Full Stack Software Engineer</h1>');
});

app.get("/hobbies", function(req, res){
    res.send('<ul><li>Basketball</li><li>Football</li> <li>Billiards</li> <li>Cooking</li></ul>'); 
});

app.listen(3000, function(){
    console.log("Server started on port:3000");
});
