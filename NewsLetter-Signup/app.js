//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + '/signup.html')
})

app.post("/failure", function(req, res) {
    res.redirect('/')
});

app.post("/", function(req, res) {
    const userData = req.body;
    const dc = 'us21'

    const firstName = userData.firstName;
    const lastName = userData.lastName;
    const email = userData.email;

    // res.write(`<h1>First_Name: ${firstName}</h1>`)
    // res.write(`<h1>Last Name: ${lastName}</h1>`)
    // res.write(`<h1>Email: ${email}</h1>`)

    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = `https://${dc}.api.mailchimp.com/3.0/lists/36d5bcbe29`;

    const options = {
        method: "POST",
        auth: "your_auth_key"
    }

    const request = https.request(url, options, function(response){

        if (response.statusCode === 200) {
            res.sendFile(__dirname + '/failure.html');
        } else {
            res.sendFile(__dirname + '/failure.html');
        }

        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end()
});

app.listen(8000, function(){
    console.log("Server is running on port: 8000")
});