let idade = 20; // Valor mutavel
const minutos = 160; // Valor constante


// ----------------------------------------
console.log(idade); // Impressao
console.log(minutos);


// ----------------------------------------
let nome = 'Mateus'; // string literal
let altura = 1.73; // number literal
const estaReprovado = false; // boolean
let sobrenome; // Undefined
let peso = null; // Redefinir um valor


//----------------------------------------
let pessoa = {   // Objeto
    nome: "Juan",
    sobrenome: "Pablo",
    idade: 18,
    altura: 1.80,
    peso: 58,
};
console.log(pessoa.idade);


//----------------------------------------
let familia = [20,38,11,42,1,2,1]; // Array
console.log(familia);
console.log(familia.length);
console.log(familia[2]);


//----------------------------------------
// Verbo + Substantivo
let corSite = "azul";
function resetaCor(cor, tonalidade){ // Funcao
    corSite = cor + ' ' + tonalidade;
};
console.log(corSite);
resetaCor('rosa',"claro");
console.log(corSite);

// ----------------------------------------
// Operadores Aritmeticos(matematicos)
// Operadores de atribuicao
// Operadores de comparacao
// Operadores lógicos
// Operadores Bitwise


// ----------------------------------------
// Codicionais: If.. Else / Switch.. Case
if (nome == nome) {}
else if (nome != nome) {}
else {}

switch (nome) {
    case 1:
        break;
    default:
}


// ----------------------------------------
// LOOPS
// For / While / Do..While / For..In / For..Of



// ----------------------------------------
// FACTORY FUNCTIONS - FUNÇÕES DE FÁBRICA


// -------------------------------------------
// CONSTRUCTOR FUNCTIONS - FUNÇÕES DE CONSTRUTOR

// -------------------------------------------
// NATUREZA DINÂMICA DOS OBJETOS
let mouse = {
    color: 'red',
    brand: 'dazz'
}
mouse.velocidade = 4500;
mouse.velocidadeDPI = function() {
    console.log('mudando DPI...');
};

delete mouse.velocidade;
delete mouse.velocidadeDPI;
console.log(mouse);

//-----------------------------------------------
// CLONANDO OBJETOS
 
// -----------------------------------------------
// MATH
Math.random()  // N* aleatório de 0-1
Math.max(3,6,8,10) // Qual o maior valor
Math.min(5,8,4,7) // Qual o menor valor
Math.PI(x) // N* PI
Math.abs(x) // Módulo, valor absoluto de (|x|)
Math.pow(x,y) // Eleva X à Y
Math.round(x) // Arredonda X p/ o valor inteiro + prox
Math.sqrt(x) // Raiz quadrada de X
Math.trunc(x) // Retorna a parte inteira de x, removendo quaisquer dígitos fracionários.


// ------------------------------------------
// STRING
const mensage = 'First Mensage' // tipo primitivo
const newMensage = new String('good day') // tipo objeto
newMensage.length // comprimento da string
newMensage[2] // letra na 2 posição 
mensage.includes('First') // Procurando dentro da string
mensage.startsWith('First') // Primeira palavra da string = true
mensage.endsWith('Mensage') // Última palavra da string = true
mensage.indexOf('Mensage') // Qual o índice de Mensage
mensage.replace('First','Second') // Substitui
mensage.trim() // Tira os Espaços excedentes
mensage.split(' ') // Separa as palavras por espaço

// -----------------------------------------
// TEMPLATE LITERAL
const mensagem = 'Oi isso é a minha\n' + '\'primeira\' mensagem';
//object {}
//Boolean true,false
//String '', ""
//Template ``
const meuNome = 'Mateus';
const outraMensagem = `Oi ${meuNome}, isso é a minha
'primeira' mensagem`; // Mantém igual digitado

// -----------------------------------------
// DATE
const data1 = new Date(); // Data atual
const date2 = new Date(`March 06 2019 09:30`);
const date3 = new Date(2019,03,06,09,30);

date3.getHours(); // 'GET' - Mostra o tempo em Horas
date3.setFullYear(2030); // 'SET' - Altera o valor
date3.toDateString(); // Converte a data para string
date3.toTimeString(); // Inclui inf de tempo local em string
date3.toISOString(); // Inf completa de tempo e data em string

// ------------------------------------------
// INTRODUÇÃO A ARRAYs



