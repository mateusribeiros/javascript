let num = [2,5,4,8]
num.push(9,1)
num.sort()

console.log(num)
console.log(`Comprimento:  ${num.length}`)
console.log(`Item na posição 0: ${num[0]}`)

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i])
// }

for(let i in num) {
    console.log(num[i])
}