// LEARNING TO STORE DATA

const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

// CONFIG
    // Handlebars
    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        },
    }))
    app.set('view engine', 'handlebars')
    // Body Parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())
// ROUTS

app.get('/', function(req,res){
    Post.findAll({order: [['id','DESC']]}).then(function(allPosts){ // DESC = descending & ASC = growing
        res.render('principal', {posts: allPosts})
    })
})

app.get('/form', function(req,res) {
    res.render('form')
})

app.post('/second', function(req, res) {
    Post.create({
        title: req.body.title,
        content: req.body.content
    }).then(function() {
        res.redirect('/')
    }).catch(function(error) {
        res.send(`Could not post, error: ${error}`)
    })

})

// SERVER
app.listen(8087, function(){
    console.log('Open server in url> http://localhost:8087')
})