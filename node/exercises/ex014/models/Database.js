const Sequelize = require('sequelize')

// Mysql database
const sequelize = new Sequelize('form', 'root', 'mycolor', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}