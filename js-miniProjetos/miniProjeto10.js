// Criar função para mostrar os números primos

// CONSEGUI RESOLVER PORCAMENTE
// exibirNumerosPrimos(15);

// function exibirNumerosPrimos(limite) {
//     console.log(2);
//     console.log(3);
//     for (let i = 2; i <= limite; i++) {
//         if (i % 2 != 0 && i % 3 != 0)
//             console.log(i);
//     }
// }

// CORRECÃO
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (NumeroPrimo(numero)) console.log(numero);
    }
}

function NumeroPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            return false;
        }
    }
    return true;
}