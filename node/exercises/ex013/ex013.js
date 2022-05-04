// With Javascript/node/express/mysql/sequelize/handlebars/Body parser

const express = require('express') // Express
const app = express()
const handlebars = require('express-handlebars') // Handlebars
const Sequelize = require('sequelize') // Sequelize
const bodyParser = require('body-parser') // Body Parses

// Config
    // Handlebars
        app.engine('handlebars', handlebars.engine({
            defaultLayout: 'main'
        }))
        app.set('view engine', 'handlebars')
    // Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    // Connecting with Mysql database
        const sequelize = new Sequelize('form', 'root', 'mycolor', {
            host: 'localhost',
            dialect: 'mysql'
        })

// Routs 
    app.get('/', function (req, res) {
        res.render('form')
    })

    app.post('/sent', function(req, res) {
        // req.body.title  Value in var with name TITLE
        res.render('sent')
    })


app.listen(8087, function () {
    console.log('Open server in http://localhost:8087')
})