// Carregando Módulos
    const express = require('express')
    const app = express()
    const handlebars = require('express-handlebars')
    const bodyParser = require('body-parser')
    const admin = require('./routes/admin')
    const path = require('path')
    // const mongoose = require('mongoose')
// Configurações
    // Handlebars
        app.engine('handlebars', handlebars.engine({
            defaultLayout: 'main',
            runtimeOptions: {
                allowProtoPropertiesByDefault: true,
                allowProtoMethodsByDefault: true,
            }
        }))
        app.set('view engine', 'handlebars')
    // Body Parse
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
    // Mongoose 
        //
    // Public
        app.use(express.static(path.join(__dirname + '/public')))
// Rotas
    app.use('/admin', admin)
// Outros
const PORT = 8087
app.listen(PORT, () => {console.log('Servidor aberto em: http://localhost:8087')})