//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")


const app = express();

// when using const before the array in JS,
// we can't assign it to a new array but can do adding or removing
const items = [];
const workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// Embedded JavaScript Server
app.set("view engine", "ejs");


app.get('/', function (req, res){

const day = date.getDate();

    res.render("list", {listTitle: day, newListItems: items});

});

app.post("/", function(req, res){
    const item = req.body.newItem;

    // console.log(req.body);

    if (req.body.list == "Work List") {
        workItems.push(item);
        res.redirect("/work");

    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res){
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems 
    });
});

app.get("/about", function(req, res){
    res.render("about");
});


app.listen(8000, function(){
    console.log("Server started on port:8000");
});

