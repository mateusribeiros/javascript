// Using the Express framework and routes

const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.end(`Welcome to my initial WebSite

    Routes to quotes:
    Shakespeare -> http://localhost:8085/shakespeare
    Nietzsche -> http://localhost:8085/nietzsche
    Clarice Lispector -> http://localhost:8085/lispectorClarice `)
})

app.get('/shakespeare', function(req, res) {
    res.end(`"Oh, beware, my lord, of jealousy!
    It is the green-eyed monster which doth mock
    The meat it feeds on."
    
    -Shakespeare`)
})

app.get('/nietzsche', function(req, res) {
    res.end(`"Whoever fights monsters should see to it 
    that in the process he does not become a monster. 
    And if you gaze long enough into an abyss, 
    the abyss will gaze back into you."
    
    -Nietzsche`)
})

app.get('/lispectorClarice', function(req, res) {
    res.end(`"Do you ever suddenly find it 
    strange to be yourself?"
    
    -Clarice Lispector`)
})

app.listen(8085, function(){
    console.log('Open server in http://localhost:8085')
}) // Always the last line