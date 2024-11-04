function buscarDados(){
    var id = document.getElementById('identificador').value

    fetch(`http://localhost:3000/pessoas`,{
        method: 'GET'
    })
    .then(response => response.json())
    .then(dados => {
        var pessoaEncontrada = dados.find(pessoa => pessoa.id == id)

        if(pessoaEncontrada) {
            document.getElementById('nomeAtualizar').value = pessoaEncontrada.nome
            document.getElementById('idadeAtualizar').value = pessoaEncontrada.idade
            document.getElementById('identificador').value = pessoaEncontrada.id

        }else{
            alert("Pessoa não encontrada")
        }
    })
}

//PUT

function atualizarDados(){
    var id = document.getElementById('identificador').value
    var nome = document.getElementById('nomeAtualizar').value
    var idade = document.getElementById('idadeAtualizar').value

    fetch(`http://localhost:3000/pessoas/${id}`,{
        method: 'PUT',
        header: {
            'content type' : 'application/json'
        },
        body: JSON.stringify({nome : nome, idade : idade})
    })
    .then(response => response.json())
}