let vagas = []

function exibirMenu() {
  return parseInt(prompt(
    "VAGAS DE EMPREGO!\n"+ 
    "\n1. Listar vagas disponíveis"+ 
    "\n2. Criar uma nova vaga"+ 
    "\n3. Visualizar vaga"+ 
    "\n4. Inscrever candidato em uma vaga"+ 
    "\n5. Excluír vaga"+ 
    "\n0. Sair"
  ))
}

function listarVagas() {
  const listaVagasTexto = vagas.reduce((listaVagasTexto, vaga, indice) => {
    listaVagasTexto += `${indice + 1}. ${vaga.nome} | ${vaga.candidatos.length} candidatos\n`
    return listaVagasTexto
  }, "") 

  return listaVagasTexto
}

function criarVaga() {
  const nome = prompt("Informe o nome da vaga:")
  const descricao =  prompt("Descrição da vaga:")
  const dataLimite =  prompt("Informe a data limite:")
  
  const confirmar = confirm(
    "Confirme as informações:\n" +
    `\nNome da vaga: ${nome}` +
    `\nDescrição: ${descricao}` +
    `\nData limite: ${dataLimite}`
  )

  if(confirmar) {
    const novaVaga = {nome, descricao, dataLimite, candidatos: []}
    vagas.push(novaVaga)
    alert("Vaga cadastrada com sucesso!")
    console.log(vagas)
  }
}

function verVaga() {
  const selecionaVaga = parseInt(prompt("Selecione uma vaga:\n" + `\n${listarVagas()}`)-1)

  if (selecionaVaga >= vagas.length || selecionaVaga < 0) {
    alert ("Vaga inválida!")
    return
  }

  const vaga = vagas[selecionaVaga]

  const candidatosEmTexto = vaga.candidatos.reduce((listaCandidatosTexto, candidato) =>
    listaCandidatosTexto + "\n - " + candidato, ""
  )

  alert(
    `Vaga nº ${selecionaVaga+1}` +
    `\nNome: ${vaga.nome}` +
    `\nDescrição: ${vaga.descricao}` +
    `\nData limite: ${vaga.dataLimite}` +
    `\nQuantidade de candidatos: ${vaga.candidatos.length}` +
    `\nCandidatos inscritos: ${candidatosEmTexto}`
  )
}

function inscreverCandidato() {
  const candidato = prompt("Informe o nome do candidato:")
  const selecionaVaga = parseInt(prompt("Selecione uma vaga:\n" + `\n${listarVagas()}`)-1)
  const vaga = vagas[selecionaVaga]
  
  const confirmar = confirm(
    "Confirme as informações:\n" +
    `\nNome: ${candidato}` +
    `\nVaga: ${vaga.nome}` +
    `\nDescrição da vaga: ${vaga.descricao}`
  )

  if(confirmar) {
    vaga.candidatos.push(candidato)
    alert("Candidato cadastrado com sucesso!")
    console.log(vagas)
  }
}

function excluirVaga() {
  const selecionaVaga = parseInt(prompt("Selecione uma vaga:\n" + `\n${listarVagas()}`)-1)
  const vaga = vagas[selecionaVaga]

  const confirmar = confirm(
    `Tem certeza que deseja excluir a vaga ${vaga.nome}?` +
    `\nDescrição: ${vaga.descricao}` +
    `\nData limite: ${vaga.dataLimite}`
  )

  if(confirmar) {
    vagas.splice(selecionaVaga, 1)
    alert("Vaga excluída com sucesso!")
  }
}

function executar() {
  let menu

  do {
    menu = exibirMenu()
    switch(menu) {
      case 1:
        alert(listarVagas())
        break
      case 2:
        criarVaga()
        break
      case 3:
        verVaga()
        break
      case 4:
        inscreverCandidato()
        break
      case 5:
        excluirVaga()
        break
      case 0:
        alert("Saindo...")
        break
    }
  } while (menu !== 0)
}

executar()