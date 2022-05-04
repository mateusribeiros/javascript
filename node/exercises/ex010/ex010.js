// Como conectar o MySql com sequelize 

/*
    1*: nome banco de dados, 2*: seu usuário, 3*: senha, 
    {4*:server com seu banco de dados, 5*: tipo do banco de dados}
*/
const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', 'mycolor', {
    host: 'localhost',
    dialect: 'mysql'
})

// Testando conexão com banco de dados
/* 
    .then() = sucesso
    .catch() = erro
*/
sequelize.authenticate().then(function() {
    console.log(`Database initialization successful!`)
}).catch(function(error) {
    console.log(`Database initialization error: ${error}`)
})