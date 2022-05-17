const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jogo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log(`MongoDB conectado...`)
}).catch((error) => {console.log(`Erro: ${error}`)})


module.exports = mongoose