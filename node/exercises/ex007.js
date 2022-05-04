//Creating Parameters

const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.end(`Welcome to Webspace
    
    Routes:
    /kids
    /kids/name
    /kids/name/hero`)
})

app.get('/kids', function(req, res) { // For the route to work without parameter
    res.send(`You're a Sponge Bob!!!!!!!`)
})

app.get('/kids/:name', function(req, res) { // With aleatory parameter
    res.send("<h1> Hello " + req.params.name + "</h1>" +
    "<h2> What's hero you are?? </h2>")
})

app.get('/kids/:name/:hero', function(req, res) { // To show params
    res.send(`<h1>Now you're the ${req.params.hero}!!</h1>`)
})
// REQ.PARAMS.NAME will use the parameter passed in name

app.listen(8085, function() {
    console.log('Open server in http://localhost:8085')
})