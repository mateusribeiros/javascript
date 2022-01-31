// const celular = {
//     marcaCelular: 'ASUS',
//     tamanhoTela: {
//         vertical: 155,
//         horizontal: 75
//     },
//     capacidadeBateria: 5000,
//     ligar: function() {
//         console.log('Fazendo ligação...')
//     }
// }

// FACTORY FUNCTIONS - FUNÇÕES DE FÁBRICA
// camelCase - umDoisTrês
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('Fazendo ligação...')
        }
    }
}
const celular1 = criarCelular('Zenfone',5.5,4500);


// CONSTRUCTOR FUNCTIONS - FUNÇÕES DE CONSTRUTOR
// Pascal Case - UmDoisTrês
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function() {
        console.log('Fazendo ligação...');
    }
}

const celular = new Celular('Asus',7.5, 4500);

