const express = require('express')
const app = express()
const User = require('./models/User')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')


// Config handlebars
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view engine', 'handlebars')

// Config body Parser
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// Routs
app.get('/', function (req, res) {
    User.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(function (allUsers) {
        res.render('form', {
            users: allUsers
        })
    })
})

app.post('/second', function (req, res) {
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        email: req.body.email
    }).then(function () {
        res.redirect('/')
    }).catch(function (erro) {
        res.send(`Erro ao carregar os dados, preencha o formulário novamente! Error: ${erro}`)
    })
})

app.get('/deletar/:id', function (req, res) {
    User.destroy({where: {'id': req.params.id}
        }).then(function() {
            res.send('Conta deletada com sucesso!')})
        .catch(function(error) {
            res.send('Essa conta não existe dentro do sistema!')})
})

app.listen(8087, function () {
    console.log('Site open in http://localhost:8087')
})