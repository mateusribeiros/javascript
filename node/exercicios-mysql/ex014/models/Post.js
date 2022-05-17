const database = require('./database')

const Post = database.sequelize.define('posts', {
    title: {
        type: database.Sequelize.STRING
    },
    content: {
        type: database.Sequelize.TEXT   
    }
})

// Post.sync({force: true})

module.exports = Post