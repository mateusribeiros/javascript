function gerarTabuada() {
    // Declarando variáveis
    const num = document.querySelector('#tab').value
    const res = document.querySelector('#saida')

    // IF para identificar campo vazio
    if (num.length == 0) {
        res.innerHTML = `<strong>Preencha o Espaço em Branco!</strong>`
    } else { // Else para fazer o cálculo necessário
        let tabuada = Number(num)

        res.innerHTML = `<strong>Tabuada de ${tabuada}: <br></strong>`
        for (let i = 0; i <= 10; i++) {
            let multip = tabuada * i;
            if (i != 10) {
                res.innerHTML += `${tabuada} x ${i} = ${multip} <br>`
            } else {
                res.innerHTML += `${tabuada} x ${i} = ${multip} `
            }
        }
    }
}
