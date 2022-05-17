// Simple calculator
var functionAdd = require('./add')
var functionMult = require('./multiply')
var functionShare = require('./share')
var functionSub = require('./subtract')

console.log(`Counts with two numbers 10...`)
console.log(`Sum: ${functionAdd(10, 10)}`)
console.log(`Multiply: ${functionMult(10, 10)}`)
console.log(`Share: ${functionShare(10, 10)}`)
console.log(`Subtract: ${functionSub(10, 10)}`)
