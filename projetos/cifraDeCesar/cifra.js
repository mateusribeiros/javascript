/*                              Cifra de César
Uma das cifras mais simples e conhecidas é a cifra de César , também conhecida como cifra de deslocamento . 
Em uma cifra de deslocamento, os significados das letras são deslocados por uma determinada quantidade.
Um uso moderno comum é a cifra ROT13 , onde os valores das letras são deslocados em 13 casas. 
Assim A ↔ N, B ↔ Oe assim por diante.
Escreva uma função que receba uma string codificada em ROT13 como entrada e retorne uma string decodificada.

Todas as letras serão maiúsculas. Não transforme nenhum caractere não alfabético (ou seja, espaços, 
pontuação), mas passe-os adiante.
*/


/* Funcao para desconsiderar os espacos em branco e
  pontuacoes, alem de declarar a variavel ALPHABET
*/
function rot13(str) {
    const alphabet = ['A','B','C','D','E','F',
    'G','H','I','J','K','L','M','N','O','P',
    'Q','R','S','T','U','V','W','X','Y','Z']
    const regex = /[\W_]/g
    const arr = str.split('')
    const bool = arr.map(function(curr) {
      return !regex.test(curr)
    }) // Bool sera TRUE caso o value seja uma letra
  
    return calcularCifra(arr, bool, alphabet)
  }
  
  /* Funcao para realizar os calculos da cifra de cesar
    e imprimir o resultado final
  */
  function calcularCifra(array, bool, alphabet) {
    var armazenar = [] // Receber o codigo criptografado
    var deslocamento = 13
  
    for(let i = 0; i < array.length; i++) { // for para percorrer todos os termos inseridos pelo usuario
      if (bool[i]) { // Bool === True significa que eh uma letra
        for(let j = 0; j < alphabet.length; j++) { // for para percorrer toda variavel ALPHABET
          if(array[i] == alphabet[j]) { // Essa condicao ocorrera para localizar dentro do alfabeto a letra analisada
            armazenar[i] = alphabet[(j + deslocamento) % alphabet.length]
            // PosicaoNoAlfabeto + Deslocamento % TamanhoAlfabeto
          }
        }
      } 
      else {
        armazenar[i] = array[i] // Armazena os espaços em branco e pontuações onde estavam anteriormente
      }
    }
    return armazenar.join('')
  }
  
  
  console.log(rot13("SERR PBQR PNZC"));