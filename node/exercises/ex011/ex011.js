// How to create a model(create tables in node) in sequelize

const Sequelize = require('sequelize')
const sequelize = new Sequelize('leagueoflegends','root','mycolor',{
    host: 'localhost',
    dialect: 'mysql'
})


// Model to post
const Post = sequelize.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
})



// Model to create table for users
const User = sequelize.define('users', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    },
    email: {
            type: Sequelize.STRING
        }
})

// Data insert
Post.create({
title: `Latin`,
content: `Fugiat et magna veniam non ad proident eiusmod 
aute reprehenderit elit ad. Ex commodo in consectetur 
ipsum elit quis incididunt nostrud esse fugiat ipsum. 
    Culpa qui nisi laborum in velit est irure eu reprehenderit.`
})

User.create({
    firstName: 'Bruno',
    lastName: 'Alencar',
    age: 25,
    email: 'brunoalencar123@outlook.com'
})

// Post.sync({force:true})
// User.sync({force: true})

sequelize.authenticate().then(function() {
    console.log('DATABASE INITIALIZATION SUCCESSFUL!')
}).catch(function(error) {
    console.log(`DATABASE INITIALIZATION ERROR: ${error}`)
})