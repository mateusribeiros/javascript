// ESVAZIANDO UM ARRAY
const numeros = [1,2,3,4,5,6];

// Solução 1 
numeros.splice(0); // Apaga todas as referências
console.log(numeros);


// Solução 2
numeros.length = 0; // Apaga todas as referências


// Solução 3  Não recomendado
numeros = []; // Apenas para LET
const a = numeros; //NUMEROS não é apagado totalmente


// Solução 4 // Não recomendado
while (numeros.length > 0) {
    numeros.pop()
}
