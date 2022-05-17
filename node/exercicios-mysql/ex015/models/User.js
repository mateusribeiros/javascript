const database = require('./Database')

const User = database.sequelize.define('users', {
    firstName: {
        type: database.Sequelize.STRING
    },
    lastName: {
        type: database.Sequelize.STRING
    },
    age: {
        type: database.Sequelize.INTEGER
    },
    email: {
        type: database.Sequelize.STRING
    }
})

// User.sync({
//     force: true
// })

module.exports = User