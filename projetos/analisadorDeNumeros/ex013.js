let array = [] // ARRAYS globais

function adicionar() {
    const num = document.querySelector('#num').value
    const msg = document.querySelector('#mensagem')
    const final = document.querySelector('#saida')
    const number = Number(num)

    if (number == '' || number < 1 || number > 100) { // Possíveis erros
        alert('Digite um número correto!')
        array = []
        msg.innerHTML = ''
        final.innerHTML = ''
    } else {
        if (array.includes(number)) // Se o num já apareceu antes, resultará em erro
            alert('Impossível a repetição de números!')
        else {
            msg.innerHTML += `Valor ${number} adicionado. <br>`
            array.push(number) // empurra os valores para Array(global)
        }
    }
}

function finalizar() {
    const saida = document.querySelector('div#saida')

    const maior = Math.max(...array) // Maior valor
    const menor = Math.min(...array) // Menor valor
    const soma = array.reduce((acum, curr) => acum + curr, 0) // Soma de todos
    const media = soma / Number(array.length) // Média de todos

    saida.style.marginTop = '10px' // Config da saída
    saida.style.lineHeight = '30px'
    saida.style.fontSize = '15px'
    // Saídas de informações ao usuário
    saida.innerHTML = ''
    saida.innerHTML += `Ao todo, temos ${array.length} números cadastrados. <br>`
    saida.innerHTML += `O maior valor informado foi ${maior}. <br>`
    saida.innerHTML += `O menor valor informado foi ${menor}. <br>`
    saida.innerHTML += `Somando todos o valores, temos ${soma}. <br>`
    saida.innerHTML += `A média dos valores digitados é ${media.toFixed(1)}.`
}