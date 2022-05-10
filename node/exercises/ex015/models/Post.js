const database = require('./Database')

const Post = database.sequelize.define('users', {
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

// Post.sync({
//     force: true
// })

module.exports = Post