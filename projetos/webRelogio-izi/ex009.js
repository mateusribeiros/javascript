function carregar() {
    const msg = document.getElementById('msg')
    const imagem = document.getElementById('imagem')
    const fundo = document.querySelector('body')
    const dataAtual = new Date()
    const horaAtual = dataAtual.getHours()
    msg.innerHTML = `Agora são ${horaAtual} horas.`


    if (horaAtual >= 0 && horaAtual < 12) {
        imagem.src = "img/manha350.png"
        fundo.style.background = "rgb(163, 148, 128)"
    }
    else if (horaAtual >= 12 && horaAtual <= 18) {
        imagem.src = "img/tarde350.png"
        fundo.style.background = "rgb(151, 90, 19)"
    }
    else {
        imagem.src = "img/noite350.png"
        fundo.style.background = "rgba(19, 18, 18)"
        fundo.style.color = "white"
        msg.style.color = "black"
    }
}