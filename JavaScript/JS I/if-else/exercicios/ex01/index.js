const nomeAta = prompt("Informe o nome do atacante: ")
const poderAta = parseInt(prompt("Informe o poder de ataque: "))

const nomeDef = prompt("Informe o nome do defensor: ")
let vidaDef = parseInt(prompt("Informe a vida: "))
const poderDef = parseInt(prompt("Informe o poder de defesa: "))
const escudoDef = prompt("O defensor possuí escudo? [S] [N]: ").toUpperCase()

let dano = 0

if (poderAta > poderDef && escudoDef === 'S') {
    dano = (poderAta - poderDef) / 2
} else if (poderAta > poderDef && escudoDef === 'N'){
    dano = poderAta - poderDef
} 

vidaDef -= dano;

alert(
    "DADOS ATUALIZADOS" +
    "\nDano total da rodada: " + dano +
    "\nVida atual do defensor: " + vidaDef
    )