let arr = ["Flamengo", "Vasco", "Corinthias", "Palmeiras", "Gremio"]
console.log(arr)

// ADICIONAR ELEMENTOS
// push - final
let tamanhoArray = arr.push("Inter") // retorna o tamanho da array
console.log(arr)
console.log(tamanhoArray)

// unshift - inicio
tamanho = arr.unshift("Avai")
console.log(arr)
console.log(tamanhoArray)

// -----------------------------------------------------------------------------
// REMOVER ELEMENTOS
// pop - final
const ultimoElemento = arr.pop() // alem de excluir, retorna o elemento retirado
console.log(arr)
console.log(ultimoElemento)

// shift - inicio
const primeiroElemento = arr.shift()
console.log(arr)
console.log(primeiroElemento)

// -----------------------------------------------------------------------------
// PESQUISAR ELEMENTO
// includes - se elemento existe na array
const inclui = arr.includes("Flamengo") // nome tem de ser exato
console.log(inclui)

//indexOf - posição
const indice = arr.indexOf("Flamengo")
console.log(indice)

// -----------------------------------------------------------------------------
// CORTAR E CONCATENAR ARRAYS
// slice - copiar uma parte
const timesRJ = arr.slice(0,2) // vai pegar a posição 0 e 1  ==> o 2 não pega
const outros = arr.slice(-3) // qundo coloca o "-" ele pega o contrario (0, 1, 2, 3, 4) ==> (-5, -4, -3, -2, -1)
console.log(arr)
console.log(timesRJ)
console.log(outros)

// concat - concatenar
const junta = timesRJ.concat(outros, "Bragantino", "Coritiba") 
console.log(junta)

// -----------------------------------------------------------------------------
// SUBSTITUICAO DOS ELEMENTOS
// splice 
const elementosRemovidos = junta.splice(indice, 1, "Rei da América", 1 , true) // (a partir, quantos, add, add, add...)
console.log(junta)
console.log(elementosRemovidos) // retorna uma array de itens removidos

// -----------------------------------------------------------------------------
// ITERAR SOBRE OS ELEMENTOS
for(let i = 0; i < junta.length; i++) {
    const elemento = junta[i]
    console.log(`${elemento} se encontra na posição ${i}`)
}