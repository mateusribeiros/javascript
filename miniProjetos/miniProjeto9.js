// Criar uma função que exibe a quantidade de *
// que aquela linha possui

// NÃO CONSEGUI
// 1* resolução
// exibirAsteriscos(5);

// function exibirAsteriscos(linhas) {
//     let padrao = '';
//     for (let linha = 1; linha <= linhas; linha++) {
//         padrao += '*';
//         console.log(padrao);
//     }
// }

exibirAsteriscos(5);

function exibirAsteriscos(linhas) {
    for (let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for (let i = 0; i < linha; i++) {
            padrao += '*';
        }
        console.log(padrao);
    }
}