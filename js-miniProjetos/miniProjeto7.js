// Criar função somar que retorna a soma de todos os
// múltiplos de 3 e 5

// CONSEGUI RESOLVER
// somar(10);
// function somar(limite) {
//     let soma = 0;
//     for (let i=1; i<=limite; i++) {
//         if (i % 3 === 0)
//            soma += i;
//         if (i % 5 === 0)
//            soma += i; 
//     }
//     console.log(soma);
// }

// RESPOSTA
somar(10);
function somar(limite) {
    let multiplosDe3 = 0;
    let multiplosDe5 = 0;
    for (let i=1; i<=limite; i++) {
        if (i % 3 === 0)
           multiplosDe3 += i;
        if (i % 5 === 0)
           multiplosDe5 += i;
    }
    console.log(multiplosDe3 + multiplosDe5);
}