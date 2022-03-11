/*
Procurar e destruir
Você receberá um array inicial (o primeiro argumento na destroyerfunção), seguido
por um ou mais argumentos. Remova todos os elementos da matriz inicial que tenham o 
mesmo valor desses argumentos.

Nota: Você tem que usar o argumentsobjeto.
*/


function destroyer(arr, ...others) {
    return arr
          .filter(curr => !others.includes(curr))
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3, 1], 2, 3));