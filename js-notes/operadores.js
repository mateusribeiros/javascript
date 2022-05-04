// OPERADORES ARITMÉTICOS(MATEMÁTICOS)
let salario = 100; // + , - , * , / , ** , ++, --

console.log(salario + salario);
console.log(salario - salario);
console.log(salario / salario);
console.log(salario * salario);
console.log(5 ** 5);


// OPERADORES DE ATRIBUIÇÃO
let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer;
valorTecladoGamer -= valorTecladoGamer;


// OPERADORES DE IGUALDADE
console.log(1 === 1); // estrito -> + recomendado
console.log(1 == 1); // solta


// OPERADORES TERNÁRIOS
let pontos = 110; // Tem um cliente, 100 pts premium, < comum
let tipo = pontos > 100 ? 'premium' : 'comum';


// OPERADORES LÓGICOS
// E(&&) -> Retorna TRUE se os dois forem true
console.log(true && true) = true;
// OU(||) -> Um dos dois forem true
console.log(true || false) = true;
// NOT(!) -> Nenhum for true


// OPERADORES COMPARADORES NÃO BOOLEANOS
// Falsy: undefined, false, '', null, 0, NaN
// Truthy: 