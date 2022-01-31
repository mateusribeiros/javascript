// Velocidade máx até 70; a cada 5km leva 1 pt;
// pts >= 12 === 'Carteira Suspensa'
// Consegui Resolver

// verificarVelocidade(85);

// function verificarVelocidade(velocidade) {
//     let pontos = 0;
//     if (velocidade <= 70) 
//         console.log("Ok");
//     else {
//         for (let i = 75; i <= velocidade; i+=5) {
//             pontos++;
//         }

//         if (pontos >= 12) 
//             console.log("Carteira Suspensa");
//         else {
//             console.log("Pontos:" + pontos);
//         }
//     }
// }

//  RESPOSTA 
verificarVelocidade();

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log('Ok');
    else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPonto);
        if ( pontos >= 12)
            console.log("Carteira Suspensa");
        else 
            console.log('Pontos', pontos);
    }
}