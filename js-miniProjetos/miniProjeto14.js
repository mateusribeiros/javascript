/*
Soma todos os números em um intervalo
    Passaremos a você uma matriz de dois números. 
Retorna a soma desses dois números mais a soma de todos os números entre eles. 
O número mais baixo nem sempre virá primeiro.
Por exemplo, sumAll([4,1])deve retornar 10 porque a soma de todos os números entre 1 e 4 (ambos inclusive)
é 10.
*/

function sumAll(arr) {
    let soma = 0;
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        soma += i;
    }

    return soma
}

sumAll([1, 4])