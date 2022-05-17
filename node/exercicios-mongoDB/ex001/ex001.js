//  Conexao ao banco de dados MongoDB, utilizando Mongoose
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/jogo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log(`MongoDB conectado...`)
}).catch((error) => {console.log(`ERROR: ${error}`)})