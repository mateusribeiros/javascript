// Obj imutável
const people = {
    name: 'Gael',
    age: 05
};

Object.freeze(people);

// Definir param padrao para as funçoes
console.log(imprimirCor('azul'));

function imprimirCor(cor = 'branco') {
    return cor;
}

// Use o param de descanso com parâmetros de função
console.log(imprimirCores('branco','azul','amarelo'));

function imprimirCores(...cor) {
    return cor;
}

// REDUCE
const arr = [0,5,10,15,20,25,30,35,40,45,50];
const soma = arr.reduce((accum,curr) => accum + curr,0);
console.log(soma);

// MAP
const array = [0,2,4,6,8,10,12,14,16,18,20];
const newArray = array.map((curr) => curr / 2,0);
console.log(newArray);

// Use o spread para avaliar matrizes no local
const tester = [1,3,6,9,12,15,18,21];
const maiorTester = Math.max(...tester);
const menorTester = Math.min(...tester);
console.log(`Maior > ${maiorTester}
Menor > ${menorTester} `);

// Use Atribuição de Desestruturação para Extrair Valores de Objetos
const person = {
    first: {
        name: 'Mateus',
        hair: 'Black',
        eyes: 'Black'
    },
    second: {
        name: 'Clara',
        hair: 'Brown',
        eyes: 'Brown'
    }
};

const {first:{eyes: firstEyes}, second:{name}} = person;
console.log(`Olhos do primeiro ${firstEyes} e
Nome do segundo ${name}`);
console.log(person);

// Use Atribuição de Desestruturação para Atribuir Variáveis ​​de Matrizes
const dados = [18, 20, 3, 2, 14, 10, 30];
let [f,,,,s,...rest] = dados;
console.log(`f: ${f}, s: ${s}, rest: ${rest}`);
[f, s] = [s, f];

console.log(`f: ${f}, s: ${s}, rest:${rest}`);

// Use Atribuição de Desestruturação para Passar um Objeto como Param de Função
const conta = { 
        taxa: 30,
        tempo: 5,
        juros: 192
};

const calcularCapital = ({taxa,tempo,juros}) => {
    juros * (taxa / 100) * tempo};

console.log(calcularCapital);


// Escrever declarações literais concisas de objetos usando atalhos de propriedades de objetos
const aleatorio = (x, y) => ({x , y}); 


// Escreva funções declarativas concisas com ES6
const cabelo = {
    cor: 'blue',
    mudarCabelo() { `Era essa cor ${this.cor}, agora é `,  red; }
};


// Use a sintaxe de classe para definir uma função de construtor
class mostrarEmocao {
    constructor(emocao) {
        this.emocao = emocao
        console.log(emocao);
    }
};

const falar = new mostrarEmocao('Tristeza');


// Use getters e setters para controlar o acesso a um objeto
class Thermostat {
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }

    get temperature() {
        return (5 / 9) * (this.fahrenheit - 32);
    }

    set temperature(celsius) {
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
};


// ----------------------------------------------------------------------------------------
// Crie um script de módulo
<script type="module" src="./commands.js"></script>

// Use a exportação e importação para compartilhar um bloco de código
const nome = 'Mateus';
Object.freeze(nome);

export {nome};

import {nome} from "./commands.js"

//  Use * para importar tudo de um arquivo
import * as Variaveis from "./commands.js";
Variaveis.nome('Gabriel');

// Criar um substituto de exportação com padrão de exportação e importação
export default function soma(x,y) {
    return x + y;
}

import soma from './commands.js';


// --------------------------------------------------------------------------------------------------
// Crie uma promessa de JavaScript
const newPromise = new Promise((resolve, reject) => {
    if (resolve === 1) {
        resolve('Completo');
    } else {
        reject('Incompleto');
    }

    newPromise.then(result => { console.log(result); });

    newPromise.catch(error => { console.log(error); });
});


//Expressões Regulares
const testString = '  Estou com um baita cansaço mental sem nem ter estudado muito hoje, Aaaaaah  ';
const testString2 = 'menta';
const testString3 = '52 52 52 52';

const regex = /.em/g;
console.log(testString.match(regex));

const regex1 = /MENTAL/i;
console.log(testString.match(regex1));

const regex2 = /cansaço/;
console.log(regex2.test(testString));

const regex3 = /.[ou]m|.[e]./g;
console.log(testString.match(regex3));

const regex4 = /.[o-u0-9]m/;
console.log(testString.match(regex4));

const regex5 = /[^c-h]/;
console.log(testString.match(regex5));

const regex6 = /a+/g;
console.log(testString.match(regex6));

const regex7 = /Aa*/;
console.log(testString.match(regex7));

const regex8 = /m[a-z]*l/; // Correspondência gulosa
const regex9 = /m[a-z]*?l/; // Correspondência preguiçosa
console.log(testString.match(regex8));
console.log(testString.match(regex9));

const regex10 = /^Estou/;
console.log(testString.match(regex10));

const regex11 = /Aa+h$/;
console.log(testString.match(regex11));

const regex12 = /\w+/;
console.log(testString.match(regex12));

const regex13 = /\W*/;
console.log(testString.match(regex13));

const regex14 = /\d+/;
console.log(testString.match(regex14));

const regex15 = /\D+/;
console.log(testString.match(regex15));

const regex16 = /\s/g;
console.log(testString.match(regex16));

const regex17 = /\S/g;
console.log(testString.match(regex17));

const regex18 = /Aa{2,8}h/;
console.log(testString.match(regex18));

const regex19 = /Aa{2,}h/;
console.log(testString.match(regex19));

const regex20 = /Aa{5}h/;
console.log(testString.match(regex20));

const regex21 = /mental?/;
console.log(testString.match(regex21));

const regex22 = /menta(?=l)/;
const regex23 = /menta(?!l)/;
console.log(testString.match(regex22)); // Return ["menta"]
console.log(testString2.match(regex23)); // Return ["menta"]

const regex24 = /menta(""|l)/;
console.log(testString.match(regex24));

const regex25 = /^(\d+)(\s)\1\2\1$/g;
console.log(testString3.match(regex25));

const regex26 = /baita/;
console.log(testString.replace(regex26, 'grande'));

const regex27 = /^\s+|\s+$/g;
console.log(testString.replace(regex27, ""));


// -----------------------------------------------------------------
//  