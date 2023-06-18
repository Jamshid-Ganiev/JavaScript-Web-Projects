//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.use(bodyParser.urlencoded({extended: true}));

// Embedded JavaScript Server
app.set("view engine", "ejs");


app.get('/', function (req, res){

    let today = new Date();
    let currentDay = today.getDay();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    let day = today.toLocaleDateString("en-US", options);

    res.render("list", {
        kindOfDay: day,
        newListItems: items
    });
});

app.post("/", function(req, res){
    const item = req.body.newItem;
    items.push(item)

    res.redirect("/");
});


app.listen(8000, function(){
    console.log("Server started on port:8000");
});

