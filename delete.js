function deletarDados() {
    var id =document.getElementById('id').value

    fetch(`http://localhost:3000/pessoas/${id}`,{
        method: 'DELETE'
    })
    .then(response => response.json())
}