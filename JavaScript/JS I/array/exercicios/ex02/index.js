let menu;
let cartas = ["K | ♥", "8 | ♦","J | ♠"]

do {
    let listaCartas = "";
    console.log(cartas)
    for(let i = cartas.length - 1; i >= 0; i--) {
        const carta = cartas[i]
        listaCartas += `- ${carta}\n`
    }
    menu = parseInt(prompt(
        "Baralho de cartas\n" +
        `Qtd de cartas: ${cartas.length}\n\n` +
        listaCartas +
        "\n[1] - Adicionar carta" +
        "\n[2] - Puxar carta" +
        "\n[3] - Sair"
        ))
    switch(menu) {
        case 1:
            const valor = prompt("Informe o valor da carta:\nDe 2 --> A").toUpperCase()
            let naipe;
            do{
                naipe = parseFloat(prompt("Selecione o naipe:" +
                    "\n[1] - Copas" +
                    "\n[2] - Ouros" +
                    "\n[3] - Espadas" +
                    "\n[4] - Paus"
                    ))

                switch(naipe) {
                    case 1:
                        naipe = "♥"
                        break
                    case 2:
                        naipe = "♦"
                        break
                    case 3:
                        naipe = "♠"
                        break
                    case 4:
                        naipe = "♣"
                        break
                    default:
                        naipe = null
                }
            } while(naipe < 1 || naipe > 4 || typeof naipe === "null")
            cartas.push(`${valor} | ${naipe}`)
            break
        case 2:
            if(cartas.length > 0) {
                const cartaPuxada = cartas.pop()
                alert(`Carta puxada: ${cartaPuxada}`)
            } else {
                alert("Adicione mais cartas! ")
            }
            break
        case 3:
            alert("Saindo...")
            break
        default:
            alert("Opção inválida!")
    }
} while(menu !== 3)