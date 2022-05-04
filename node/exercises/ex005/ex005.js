// Creando um server local e imprimindo: 'Irasshaimase, Arigato, Sayonara!'

var http = require('http')

http.createServer(function(req, res) {
    res.end(`Welcome, Thanks, Goodbye in 3 languages

    Japanase: Irasshaimase | Arigato | Sayonara
    Portuguese: Bem-vindos | Obrigado | Adeus
    English: Welcome | Thank you | Bye`)
}).listen(8081)

console.log(`Open Server!`)

// Ctrl + C = Fechar server
// localhost: porta