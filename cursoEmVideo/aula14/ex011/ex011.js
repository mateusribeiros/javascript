function contador() {
    // Declarando e Armazenando variáveis
    const start = Number(document.getElementById('inicio').value)
    const end = Number(document.getElementById('final').value)
    const mat = Number(document.getElementById('passo').value)
    const result = document.getElementById('test')

    /* Verificando possíveis respostas fora da curva(Ainda há alguns
        resultados fora da curva que passam despercebidos, porém
        decidi deixar esses menos prováveis de serem usados) 
    */
    if (String(start).length == 0 || start < 0 || start > 1000)
        alert('[ERROR] Confira os dados e tente novamente!');
    if (end < 1 || end > 1001)
        alert('[ERROR] Confira os dados e tente novamente!');
    if (String(mat).length == 0 || mat === 0 || mat > 1001) {
        alert('[ERROR] Confira os dados e tente novamente!');
    }
    
    // Criando no HTML uma TAG que receberá os valores de I
    const res = document.createElement('p')
    res.setAttribute('id', 'result')
    result.appendChild(res)
    

    // FOR para fazer as partes de cálculos básicas
    for (let i = start; i <= end; i += mat) {
        res.innerHTML += i + "&#x2796;"
        if (i + 1 > end)
            res.innerHTML += "&#x1F308;";
    }

}