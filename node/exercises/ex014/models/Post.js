const database = require('./Database')

const Post = database.sequelize.define('posts', {
    title: {
        type: database.Sequelize.STRING
    },
    content: {
        type: database.Sequelize.TEXT
    }
})

// Post.sync({force: true}) - Use just 1 time 

module.exports = Post