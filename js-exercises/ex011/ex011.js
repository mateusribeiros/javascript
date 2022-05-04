function contador() {
    // Armazenando Variáveis
    const ini = document.getElementById('inicio').value
    const fin = document.getElementById('final').value
    const pro = document.getElementById('passo').value
    const res = document.getElementById('result')

    // Declarando Variáveis para receber os valores numéricos dos inputs
    let inicio = Number(ini)
    let final = Number(fin)
    let passo = Number(pro)

    /* IFs para detectar possíveis erros(Há outros, porém decidi
        deixá-los de fora por enquanto)
    */
   // Detecta espaços não preenchidos
    if(ini.length == 0 || fin.length == 0 || pro.length == 0) {
        res.innerHTML = `Espaço em Branco! Tente Novamente!`
    } // Detecta Passo = 0 e Valores altos(preferi reduzir)
    else if (passo <= 0 || inicio > 1000 || final > 1000) {
        res.innerHTML = `Passo = 0 ou Valores muito grandes!`
    }
    else { 
        res.innerHTML = `Contagem: <br>`

        if  (inicio < final) { // Crescente
            for (let i = inicio; i <= final; i += passo) {
                res.innerHTML += `${i} &#x269C; `
            }
        } else { // Decrescente
            for (let i = inicio; i >= final; i -= passo) {
                res.innerHTML += `${i} &#x269C; `
            }
        }
        res.innerHTML += ` &#x1F33B;`
    }
}