// How to connect to MySQL with sequelize

/*
    1*: database name, 2*: your username, 3*: password, 
    {4*:server with your database, 5*: type database}
*/
const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', 'mycolor', {
    host: 'localhost',
    dialect: 'mysql'
})

// Testing database connection
/* 
    .then() = sucessfull
    .catch() = error
*/
sequelize.authenticate().then(function() {
    console.log(`Database initialization successful!`)
}).catch(function(error) {
    console.log(`Database initialization error: ${error}`)
})