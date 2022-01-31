// Exercício Nota Escolar
// Obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

// CONSEGUI RESOLVER
// const array = [70,70,80];

// console.log(mediaDoAluno(array));

// function mediaDoAluno(notas) {
//     let media = 0;
//     for (let chave of notas) {
//         media += chave;
//     }
//     media = media / notas.length;
//     if (media <= 59)
//         return 'F';
//     else if (media <= 69)
//         return 'D';
//     else if (media <= 79)
//         return 'C';
//     else if (media <= 89)
//         return 'B';
//     return 'A';
// }

// RESPOSTA CORRETA
const array = [70,70,80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    const media = calcularMedia(notas);
    
    if (media <= 59) return 'F';
    if (media <= 69) return 'D';
    if (media <= 79) return 'C';
    if (media <= 89) return 'B';
    return 'A';
}

function calcularMedia(array) {
    let soma = 0;
    for (let valor of array) {
        soma += valor;
    }
    return soma / (array.length);
}