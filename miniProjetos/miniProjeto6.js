// Criar um método para ler propriedades de um objeto
// e exibir somente as propriedades do tipo string que
// estão nesse objeto

// CONSEGUIR RESOLVER COM UMA PEQUENA DÚVIDA, POIS
// ESTAVA TROCANDO A [] PELO . E DEU CONFUSÃO
// Ficou igual a resposta
const lol = {
    personagem: 'Akali',
    regiao: 'Ionia',
    maestria: 25000,
    classe: 'Assassino'
};

exibirPropriedades(lol);
function exibirPropriedades(obj) {
    for (chave in obj) {
        if (typeof obj[chave] === 'string') {
            console.log(chave,':', obj[chave]);
        }
    }
}