// Adicionar elementos  ----------------------------
const numeros = [1,2,3];

// Início
numeros.unshift(0); // add
console.log(numeros);

// Meio
numeros.splice(1,0,'a'); //Posição, Delete ou add, item
console.log(numeros);
// Final
numeros.push(5);
console.log(numeros);

// ----------------------------------------------------
// REMOVER ELEMENTOS

const letras = ['a','b','c','d','e'];

// Início
letras.shift(); // Remove primeiro
console.log(letras);

// Meio
letras.splice(1,1); // Posição, Qts itens remover
console.log(letras);

// Final
letras.pop(); // Remove último
console.log(letras);