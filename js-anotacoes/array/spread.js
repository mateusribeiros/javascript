// OPERADOR SPREAD
const primeiro = [1,2,3];
const segundo = [4,5,6];

// Combinar com spread
// const combinado = primeiro.concat(segundo);
const combinado = [...primeiro,'%',...segundo];
console.log(combinado);

// Clonar com spread
// const cortado = combinado.slice(1,4);
const clonado = [...combinado];
console.log(clonado);