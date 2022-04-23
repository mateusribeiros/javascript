function verificarAno() {
   const data = new Date()
   const ano = data.getFullYear()
   const fano = document.querySelector('input#ano')

   if (fano.value.length == 0 || fano.value > ano) {
       alert('[ERROR] Confira os dados e tente novamente!')
   } else {
       const idade = ano - Number(fano.value)   
       const sexf = document.getElementsByName('sexo')
       let img = document.createElement('img')
       img.setAttribute('id','foto')
       let genero = ''

       if (sexf[0].checked) {
           genero = 'Homem'
           if (idade >= 0 && idade <= 10) {
               img.setAttribute('src', 'img/menino.png')
           } else if (idade < 20) {
               img.setAttribute('src', 'img/jovemMas.png')
           } else if (idade < 50) {
               img.setAttribute('src', 'img/adulto.png')
           } else {
               img.setAttribute('src', 'img/idoso.png')    
           }
       } else if (sexf[1].checked){
           genero = 'Mulher'
           if (idade >= 0 && idade <= 10) {
            img.setAttribute('src', 'img/menina.png')    
           } else if (idade < 20) {
            img.setAttribute('src', 'img/jovemFem.png')    
           } else if (idade < 50) {
            img.setAttribute('src', 'img/adulta.png')    
           } else {
            img.setAttribute('src', 'img/idosa.png')    
           }
       }
       const res = document.querySelector('div#res')
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
   }
}