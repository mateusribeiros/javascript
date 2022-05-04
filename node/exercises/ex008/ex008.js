// Using HTML files

const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/html/ex008/principal.html')
})
 
app.get('/public', function(req, res) {
    res.sendFile(__dirname + '/html/ex008/public.html')
})

app.get('/private/:secret', function(req, res) {
    res.sendFile(__dirname + '/html/ex008/private.html')
})


app.listen(8086, function() {
    console.log('Open server in http://localhost:8086')
})