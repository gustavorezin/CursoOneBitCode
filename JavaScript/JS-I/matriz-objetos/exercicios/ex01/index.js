let menu
let imoveis = []

do {
    menu = parseInt(prompt(
        "Cadastro de imóveis!\n" +
        `Qtd. de imóveis cadastrados: ${imoveis.length}\n` +
        "\n[1] - Cadastrar imóvel" +
        "\n[2] - Mostrar imóveis cadastrados" +
        "\n[3] - Sair"
    ))

    switch(menu) {
        case 1:
            const novoImovel = {}
            novoImovel.proprietario = prompt("Informe o proprietário:")
            novoImovel.quarto = prompt("Informe a qtd. de quartos:")
            novoImovel.banheiro = prompt("Informe a qtd. de banheiros:")
            novoImovel.garagem = (parseInt(prompt("Possui garagem?\n[1] - Sim\n[2] - Não")) === 1) ? "Sim" : "Não"
            
            const salvar = confirm(
                "Salvar este imóvel?\n" +
                `\nProprietário: ${novoImovel.proprietario}` +
                `\nQtd. de quartos: ${novoImovel.quarto}` +
                `\nQtd. de banheiros: ${novoImovel.banheiro}` +
                `\nPossui garagem: ${novoImovel.garagem}`
            )

            if(salvar) {
                imoveis.push(novoImovel)
            }

            break
        case 2:
            for(let i = 0; i < imoveis.length; i++) {
                alert(
                    `Imovel [${i + 1}]:` +
                    `\nProprietário: ${imoveis[i].proprietario}` +
                    `\nQtd. de quartos: ${imoveis[i].quarto}` +
                    `\nQtd. de banheiros: ${imoveis[i].banheiro}` +
                    `\nPossui garagem: ${imoveis[i].garagem}`
                )
            }
            break
        case 3:
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
    }

} while(menu !== 3)