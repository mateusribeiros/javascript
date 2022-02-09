let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = [] // ARRAYS globais

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100)
        return true;
    return false;
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1)
        return true;
    return false;
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(1)}.</p>`
    }
}


// function finalizar() {
//     const maior = Math.max(...array) // Maior valor
//     const menor = Math.min(...array) // Menor valor
//     const soma = array.reduce((acum, curr) => acum + curr, 0) // Soma de todos
//     const media = soma / Number(array.length) // Média de todos

//     saida.style.marginTop = '10px' // Config da saída
//     saida.style.lineHeight = '30px'
//     saida.style.fontSize = '15px'
//     // Saídas de informações ao usuário
//     saida.innerHTML = ''
//     saida.innerHTML += `Ao todo, temos ${array.length} números cadastrados. <br>`
//     saida.innerHTML += `O maior valor informado foi ${maior}. <br>`
//     saida.innerHTML += `O menor valor informado foi ${menor}. <br>`
//     saida.innerHTML += `Somando todos o valores, temos ${soma}. <br>`
//     saida.innerHTML += `A média dos valores digitados é ${media.toFixed(1)}.`
// }