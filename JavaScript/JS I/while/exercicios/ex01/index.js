const name = prompt("Informe o seu nome: ")
let question = prompt("Você já visitou alguma cidade? [S] | [N]").toUpperCase()

let cities = "cidades visitadas: "
let count = 0

while (question === 'S') {
    cities += "\n" + prompt("Qual o nome da cidade?")
    count++
    question = prompt("Visitou alguma outra? [S] | [N]").toUpperCase()
}

if (count > 0) {
    alert(`Que legal, ${name}!\n${count} ${cities}`)
} else {
    alert("Nenhuma cidade visitada =(")
}