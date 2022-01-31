// ARROW FUCTIONS
const cavalos = [
    {id:0 , raça:'Mustangue' , especie:'Cavalo'},
    {id:1 , raça:'Hanoveriano' , especie:'Cavalo'},
    {id:2 , raça:'Fjord' , especie:'Uni'},
    {id:3 , raça:'Shetland' , especie:'Pônei'},
];

// const encontrarCavalo = cavalos.find(function(cavalo) {
//     return cavalo.raça === 'Fjord';
// });

const result = cavalos.find(
    cavalo => cavalo.raça === 'Fjord' ); 
//Parâmetro    Return         Item procurado
console.log(result);        