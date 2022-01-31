// Encontrar elementros(Tipo Referência)
const marcas = [
    {id:1 , nome: 'a'},
    {id:2 , nome: 'b'},
];

// console.log(marcas.includes({id:1,nome:'a'}));
// Não dá certo, pois há um obj(ref) dentro do array

const achar = marcas.find(function(marca) {
    return marca.id === 1;
});    // RETORNA O 1* valor que satisfaça a função
console.log(achar);


// Exercício

const cavalos = [
    {id:0 , raça:'Mustangue' , especie:'Cavalo'},
    {id:1 , raça:'Hanoveriano' , especie:'Cavalo'},
    {id:2 , raça:'Fjord' , especie:'Uni'},
    {id:3 , raça:'Shetland' , especie:'Pônei'},
];

const procurarCavalo = cavalos.find(function(cavalo) {
    return cavalo.raça === 'Fjord';
}); 
console.log(procurarCavalo);