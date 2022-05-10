const express = require('express')
const app = express()
const Post = require('./models/Post')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')

// Config body Parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Config handlebars
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine','handlebars')

// Routs
app.get('/', function(req,res) {
    res.send('Hello People')
})

app.get('/form', function(req, res) {
    res.render('form')
})




app.listen(8087, function() {
    console.log('Site open in http://localhost:8087')
})