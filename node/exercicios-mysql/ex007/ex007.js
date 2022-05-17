// Criando parâmetros

const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.end(`Welcome to Webspace
    
    Routes:
    /kids
    /kids/name
    /kids/name/hero`)
})

app.get('/kids', function(req, res) { // Para a rota funcionar sem parâmetro
    res.send(`You're a Sponge Bob!!!!!!!`)
})

app.get('/kids/:name', function(req, res) { // Com parâmetro aleatório
    res.send("<h1> Hello " + req.params.name + "</h1>" +
    "<h2> What's hero you are?? </h2>")
})

app.get('/kids/:name/:hero', function(req, res) { // Para mostrar os parâmetros
    res.send(`<h1>Now you're the ${req.params.hero}!!</h1>`)
})
// REQ.PARAMS.NAME usará o parâmetro passado em NOME

app.listen(8085, function() {
    console.log('Open server in http://localhost:8085')
})