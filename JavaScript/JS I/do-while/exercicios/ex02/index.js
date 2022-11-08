let money = parseFloat(prompt("Informe quanto dinheiro você tem(R$): "))

let menu;

do {
    menu = parseFloat(prompt(
        `Saldo atual: R$${money}` +
        "\n\nSELECIONE:" +
        "\n[1] - Depositar" +
        "\n[2] - Sacar" +
        "\n[3] - Encerrar"
    ))

    switch(menu) {
        case 1:
            money += parseFloat(prompt("Informe quanto deseja depositar(R$):"))
            break
        case 2:
            money -= parseFloat(prompt("Informe quanto deseja depositar(R$):"))
            break
        case 3:
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
    }
} while (menu !== 3)