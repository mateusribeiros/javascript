// Objeto de postagem de blog
// Criar um objeto de postagem de blog que vai conter
// as seguintes propriedades: titulo, mensagem, autor
// vizualizacoes, comentarios; 
// (autor,mensagem)
// estaAoVivo


// CONSEGUI RESOLVER
function criarPostagem(titulo,mensagem,autor,vizualizacoes,estaAoVivo) {
    return {
        titulo,
        mensagem,
        autor,
        vizualizacoes,
        comentarios: [
            {autor,mensagem},
            {autor:'Cairo', mensagem: 'Ruim'}
        ],
        estaAoVivo
    }
}

const blog = criarPostagem('Encontro às cegas','Conhecer desconhecidos','Mateus',420,'Sim');
console.log(blog);