// ITERANDO/REPETIR UM ARRAY
const feelings = ['angry','sad','love','tired'];

feelings.forEach((termo,indice) => console.log(termo,indice));
// Uso do forEach no lugar do For Of para tornar o programa mais
// limpo e dentro desse forEach temos uma function Arrow que
// imprimirá todos os elementos do Array e seu respectivo indice

console.log(`----------------------------`);

// No for OF seria assim
for (termo of feelings) {
    console.log(termo, feelings.indexOf(termo));
}
// Menos compacto