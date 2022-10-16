listaInscritos()

function cadastraInscritos() {
  const vNome = document.getElementById("Nome")
  const vEmail = document.getElementById("Email")
  const vTelefone = document.getElementById("Telefone")


  const inscritos = {
    Nome: vNome.value,

    Email: vEmail.value,

    Telefone: vTelefone.value,

  }
  return fetch('http://localhost:3000/inscritos', {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'

    },
    body: JSON.stringify(inscritos)

  }).then(function (resp) {
    return resp.json()

  }).then(function (resposta) {
    vNome.value = ""
    vEmail.value = ""
    vTelefone.value = ""
    alert('inscritos com sucesso')
    listaInscritos()
  })

}

function listaInscritos() {
  const elTable = document.getElementById("tabela-lista-inscritos")

  fetch('http://localhost:3000/inscritos',
    {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(function (resp) {
      return resp.json()
    }).then(function (inscritos) {
      const el = document.getElementById("numeros-inscritos")
      el.innerText = inscritos.length

      for (let i = 0; i < inscritos.length; i++) {
        const inscrito = inscritos[i];
        elTable.innerHTML += "<tr><td>" + inscrito.Nome + "</td><td>" + inscrito.Email +
          "</td><td>" + inscrito.Telefone + "</td><tr>"
          console.log(inscrito)
      }
    }
    )
}