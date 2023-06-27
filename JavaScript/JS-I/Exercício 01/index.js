let menu
let novaCompra
let compras = []

do {
    novaCompra = confirm(`Cliente ${compras.length + 1}` + "\nDeseja fazer uma compra?")
    
    if(novaCompra) {
        let valorCompra = 0
        let produtos = 0
        do {
            menu = parseInt(prompt(
                `Cliente [${compras.length + 1}]\n` +
                "\n[1] - R$23,00" +
                "\n[2] - R$18,00" +
                "\n[3] - R$12,00" +
                "\n[4] - R$2,80" +
                "\n[5] - R$5,40" +
                "\n[6] - Sair"
            ))
    
            switch (menu) {
                case 1:
                    valorCompra += 23
                    break
                case 2:
                    valorCompra += 18
                    break
                case 3:
                    valorCompra += 12
                    break
                case 4:
                    valorCompra += 2.8
                    break
                case 5:
                    valorCompra += 5.4
                    break
                case 6:
                    alert("Fechando compra...")
                    break
                default:
                    alert("Opção inválida!")
            }

            (menu >= 1 && menu <= 5) ? alert("Produto comprado com sucesso!") : null;
            produtos++
        } while (menu !== 6 && produtos < 5)

        alert(`Compra finalizada\nValor total da compra: R$${valorCompra}`)
        compras.push(valorCompra)
        console.log(compras)
    }

} while(novaCompra)

let valorTotal = 0

for(let i = 0; i < compras.length; i++) {
    valorTotal += compras[i]
}

alert(`Total vendido no dia: R$${valorTotal}`)