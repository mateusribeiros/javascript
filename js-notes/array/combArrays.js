// Combinando Arrays com Strings
const eyesColors = ['blue','brown','green','black'];

const combinado = eyesColors.join(` & `); // ADD entre elementos
console.log(combinado); 

const frase = `Esteja bem consigo mesmo e brilhe`;
const resultado = frase.split(' ');
console.log(resultado);

console.log(resultado.join('-'));
// Slug = Url com traços entre cada palavra