const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    ligar: function() {
        console.log('Fazendo ligação...')
    }
}

const newObject = Object.assign({},celular); // OU
const newObject0 = {...celular};
const newObject1 = Object.assign({
    bateria: 5000,
    custo: 'R$'+ 4500
},celular);



console.log(newObject);
console.log(newObject0);
console.log(newObject1);