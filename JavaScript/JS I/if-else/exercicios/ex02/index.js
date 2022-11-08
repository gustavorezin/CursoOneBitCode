const nomeVeic1 = prompt("Informe o nome do veículo 1: ")
const veloVeic1 = parseInt(prompt("Informe a velocidade: "))
const nomeVeic2 = prompt("Informe o nome do veículo 2: ")
const veloVeic2 = parseInt(prompt("Informe a velocidade: "))

if (veloVeic1 > veloVeic2) {
    alert("O veículo " + nomeVeic1 + " é mais rápido do que " + nomeVeic2)
} else if (veloVeic2 > veloVeic1) {
    alert("O veículo " + nomeVeic2 + " é mais rápido do que " + nomeVeic1)
} else {
    alert("Os dois veículos estão na mesma velocidade")
}