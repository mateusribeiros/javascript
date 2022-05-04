// FizzBuzz
// Consegui fazer, mas não ficou tão rebuscado

// MEU
// const resultado = fizzBuzz(true);
// console.log(resultado);

// function fizzBuzz(entrada) {
//     if (entrada / 1 !== entrada) {
//         return 'Não é um número';
//     }
//     else if (entrada % 3 === 0 && entrada % 5 === 0) {
//         return 'FizzBuzz';
//     }
//     else if (entrada % 3 === 0 && entrada % 5 !== 0) {
//         return 'Fizz';
//     }
//     else if (entrada % 5 === 0 && entrada % 3 !== 0) {
//         return 'Buzz';
//     }

//     return entrada;
// };

// RESPOSTA
const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if ((entrada % 3 === 0) && (entrada % 5 === 0))
        return 'FizzBuzz';
    if (entrada % 3 === 0) 
        return 'Fizz';
    if (entrada % 5 === 0) 
        return 'Buzz';

    return entrada
};