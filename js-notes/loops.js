// For ----------------------------------------
for (let i = 0; i < 5; i++) {
    console.log("Estou aprendendo!");
}



// While ---------------------------------------------------------------------------------------
let nome;
let idade;

let pessoa = {
    nome: 'Mateus',
    idade: 19
}; 

while (pessoa.idade <= 23) {
    console.log(pessoa.nome, " ganhará ", 1+pessoa.idade, " chocolates");
    pessoa.idade++;
}



// Do..While  ----------------------------------------
i = 15;
do {
    console.log("Digitando...");
    i--;
} while (i > 5);



// For..in ----------------------------------------
const individuo = {
    nome: 'Mateus',
    idade: 19
};

// key-value
for (let chave in individuo) {
    console.log(chave, individuo);
}


// For..of ----------------------------------------
// Melhor para ser usado em ARRAYs
const personagens = ['Morgana','Kayle','Lulu','Nami','Ekko'];

for (let person of personagens) {
    console.log(person);
}
