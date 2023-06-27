let menu;

do {
    menu = parseFloat(prompt(
        "SELECIONE:" +
        "\n[1] - Home" +
        "\n[2] - Sobre" +
        "\n[3] - Portfólio" +
        "\n[4] - Contato" +
        "\n[5] - Encerrar"
    ))

    switch(menu) {
        case 1:
            alert("Home")
            break
        case 2:
            alert("Sobre")
            break
        case 3:
            alert("Portfólio")
            break
        case 4:
            alert("Contato")
         break
        case 5:
            alert("Encerrar")
            break
        default:
            alert("Opção inválida!")
    }
} while (menu !== 5)