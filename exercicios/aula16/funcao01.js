function parImpar(num) {
    if(num % 2 === 0) 
        return 'Par'
    return 'Ímpar'
}

console.log(parImpar(24))
// ----------------------------
function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(5,5))
//-----------------------------
let div = (a1=1,a2=1) => {return a1 / a2;}

console.log(div(2))
//-----------------------------
