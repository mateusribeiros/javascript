// Models + Schemas
const mongoose = require('./models/conect')
const {Schema} = mongoose

// Definindo Model
const userSchema = new Schema({
    name: {type: String, require: true},
    country: {type: String, require: false},
    age: {type: Number, require: true},
    gender: {type: String, require: true}
})

// Collection
const Users = mongoose.model('Users', userSchema)
const Bryan = mongoose.model('Users')

// Adicionar dados
new Bryan({
    name: 'Bryan Spancer',
    country: 'Canada',
    age: 36,
    gender: 'masculino'
}).save().then(() => {
    console.log(`Usuário ${Bryan.name} criado com sucesso!`)
}).catch((error) => {
    console.log(`ERRO ENCONTRADO: ${error}`)
})


// show collections; - Mostra todas collections dentro do database
// db.collection.find() - Mostra todos os dados dentro da collection
// db.collection.drop() - Deleta todos os dados dentro da collection