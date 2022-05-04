/*                      Verificador de Palíndromo
Retorna true se a string fornecida for um palíndromo. Caso contrário, retorne false.
Um palíndromo é uma palavra ou frase que é escrita da mesma maneira para frente e para trás, ignorando 
pontuação, maiúsculas e minúsculas e espaçamento.

Nota: Você precisará remover todos os caracteres não alfanuméricos (pontuação, espaços e símbolos) e
transformar tudo no mesmo caso (maiúsculas ou minúsculas) para verificar palíndromos.
Passaremos strings com formatos variados, como racecar, RaceCar, e race CAR entre outros.
Também passaremos strings com símbolos especiais, como 2A3*3a2, 2A3 3a2e 2_A3*3#A2.
*/


function palindrome(str) {
    var regex = /[\W_]/g; // Armazena todos os NÃO termos (espaços,pontuação)
    var correcao = str.toLowerCase().replace(regex, '') // Variavel p/ igualar todas as letras e excluir espaços em branco
    var troca = correcao.split('').reverse().join('') // Forma uma Array com cada letra e inverte os termos
  
    return troca === correcao // Compara: True = Palíndromo; False = Não Palíndromo
  }
  
  palindrome("eye");