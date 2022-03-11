/*
Diferenciar duas matrizes
Compare duas matrizes e retorne uma nova matriz com todos os itens encontrados apenas em uma das duas 
matrizes fornecidas, mas não em ambas. Em outras palavras, retorne a diferença simétrica das duas matrizes.

Nota: Você pode retornar o array com seus elementos em qualquer ordem.

*/

function diffArray(arr1, arr2) {
    return arr1
        .concat(arr2)
        .filter(curr => !arr1.includes(curr) || !arr2.includes(curr))
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));