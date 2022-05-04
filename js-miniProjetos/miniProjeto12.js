// Igualdade de objetos

// Fiquei em dúvida sobre o que fazer em cada função,
// mas consegui desenvolver os dois processos
function criarEndereco(rua,cidade,cep) {
    return {
        rua,
        cidade,
        cep
    }
}

const endereco1 = criarEndereco('a','b','c');
const endereco2 = criarEndereco('a','b','c');

console.log(saoIguais(endereco1,endereco2));

function saoIguais(endereco1,endereco2) {
    for (chave in endereco1,endereco2) {
        return endereco1[chave] === endereco2[chave];
    }
}

console.log(temEnderecoMemoriaIguais(endereco1, endereco2));

function temEnderecoMemoriaIguais(endereco1,endereco2) {
    return endereco1 === endereco2;
}