 // # Projeto de Segurança Virtual
function VerificarEntrada() {
    nome = document.getElementById('nome').value;
    convidados = ['Gabriel','Paula','Igor','Maria','Petûnia','Juan'];

    permitidos = document.getElementById('permitidos').value;
    permissaoDeConvidar = ['Samuel','Ingrid','Pedro','Mateus'];

    if (convidados.includes(nome) && permissaoDeConvidar.includes(permitidos)) { 
        document.getElementById('PermissaoDeEntrada').innerText = 'Você está Convidado!';
    } else {
        document.getElementById('PermissaoDeEntrada').innerText = 'Você não está Convidado!';
    }
}

