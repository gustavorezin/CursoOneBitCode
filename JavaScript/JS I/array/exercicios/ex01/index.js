let menu;
let pacientes = [];

do {
    listaPacientes = ""
    for(let i = 0; i < pacientes.length; i++) {
        listaPacientes += `${i+1}. ${pacientes[i]} \n`
    }

    menu = parseInt(prompt(
        "Consultório médico!\n\n" +
        listaPacientes +
        "\n[1] - Novo paciente"+
        "\n[2] - Consultar paciente"+
        "\n[3] - Sair"
        ))
    
    switch(menu) {
        case 1:
            pacientes.push(prompt("Informe o nome do novo paciente:"))
            break
        case 2:
            const pacienteConsultado = pacientes.shift()
            if(pacienteConsultado) { // se existe pacienteConsultado
                alert(`Paciente consultado: ${pacienteConsultado}`)
            } else {
                alert("Não há pacientes na fila!")
            }
            break
        case 3:
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
    }

} while(menu !== 3)