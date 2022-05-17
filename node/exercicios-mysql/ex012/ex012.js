// Config Handlebars

const express = require('express')
const app = express()
const handlebars = require('express-handlebars')

// Config
// Template Enginee
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')



app.listen(8087, function () {
    console.log('Server Initialization successful!')
})