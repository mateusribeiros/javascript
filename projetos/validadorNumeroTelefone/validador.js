/*      Validador de número de telefone
Retorne true se a string passada parecer um número de telefone válido dos EUA.

O usuário pode preencher o campo do formulário da maneira que quiser, desde que tenha o formato de um 
número americano válido. Veja a seguir exemplos de formatos válidos para números dos EUA (consulte os 
testes abaixo para outras variantes):

output = TRUE
555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
1(555)555-5555

output = FALSE
-1 (757) 622-7382
2 757 622-7382
(6054756961)
123**&!!asdf#
1 555)555-5555
555)-555-5555
(555-555-5555
55555555

Para este desafio, você receberá uma string como 800-692-7753ou 8oo-six427676;laskdjf. 
Seu trabalho é validar ou rejeitar o número de telefone dos EUA com base em qualquer combinação dos 
formatos fornecidos acima. O código de área é obrigatório. Se o código do país for fornecido, você deverá 
confirmar que o código do país é 1. Retorna truese a string for um número de telefone dos EUA válido; caso
contrário, retorne false.
*/

function telephoneCheck(str) {
    const tel = str
    const regex = /^(\(?[1]\)?\s?)?(\s?\d{3}\s?\-?\d{3}\s?\-?\d{4}||\(\d{3}\)\s?\d{3}\s?\-?\d{4})$/g
    return regex.test(tel)
}

console.log(telephoneCheck("1 555-555-5555"));

/*    ^(\(?[1]\)?\s?)?  
  Esta primeira parte da regex serve para o DDD

    (\s?\d{3}\s?\-?\d{3}\s?\-?\d{4}||\(\d{3}\)\s?\d{3}\s?\-?\d{4})$
  Esta segunda parte da regex serve para o 'Corpo' do número

  Utilizei duas possibilidades de 'corpo', separadas por ||
  1* SEM parênteses ao redor dos 3 primeiros termos
  2* COM parênteses ao redor dos 3 primeiros termos

  ?  = Torna os espaços em branco e - como opcionais, tirando sua obrigatoriedade
  \d = [0-9] Apenas números de 0 a 9
  /s = Espaços em branco
  /- = Traço -
  {} = Estipula a quantidade de números que aparecerão em sequência
  ^ = Termo aparece no início
  $ = Termo aparece no final(Neste caso eu uso para essa finalidade)
*/