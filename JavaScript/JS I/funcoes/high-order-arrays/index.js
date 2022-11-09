const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]

// MAP ---------------------------------------------------------------
// const nomes = []
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i];
//   nomes.push(personagem.nome)
// }

// map: permite obter um novo array a partir de um array existenste
const nomes = personagens.map(function (personagem) {
  return personagem.nome
})

console.log(nomes)

// FILTER -------------------------------------------------------------
// const orcs = []
// for (let i = 0; i < personagens.length; i++) {
//   const personagem = personagens[i]
//   if (personagem.raca === "Orc") {
//     orcs.push(personagem)
//   }
// }

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente
const orcs = personagens.filter(function (personagem) {
  return personagem.raca === "Orc"
})

console.log(orcs)