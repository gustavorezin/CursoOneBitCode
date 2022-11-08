const value = parseFloat(prompt("Informe um valor em metros(m): "))
const unity = prompt(
    "Escolha uma conversão:" + 
    "\nmm) milimetro"  +
    "\ncm) centimetro" +
    "\nkm) quilometro"
    ).toLowerCase()

let result = 0

switch(unity) {
    case "mm":
        result = value * 1000
        break
    case "cm":
        result = value * 100
        break
    case "km":
        result = value / 1000
        break
    default:
        alert("Opção inválida!")
}

alert(value + "m  --> " + result + unity)
