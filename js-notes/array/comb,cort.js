// COMBINANDO E CORTANDO ARRAYs
const primeiro = [1,2,3];
const segundo = [4,5,6];

// Combinar
const combinado = primeiro.concat(segundo);
console.log(combinado);

// Dividir
const cortado = combinado.slice(1,4);
// Pega os termos da 1* posição até a 4* - 1; 
console.log(cortado);