function normalSum(a, b) {
	return a + b
}
console.log(`soma normal: 2 + 2 = ${normalSum(2, 2)}`)

const anonymousSum = function(a, b) {
	return a + b
}
console.log(`soma anonima: 2 + 2 = ${anonymousSum(2, 2)}`)

const arrowSum = (a, b) => {
	return a + b
} 
console.log(`soma arrow function: 2 + 2 = ${arrowSum(2, 2)}`)

const subtract = (a, b) => a - b
console.log(`subtracao arrow function: 5 - 2 = ${subtract(5, 2)}`)

const double = n => `O dobro de ${n} é ${n * 2}`
console.log(double(5))

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Geffen', 'Morroc']
// Filtrar as cidades que começam com a letra 'P'
const startingWithP = towns.filter(town => town[0] === 'P')
console.log(startingWithP)  // Imprime as cidades que começam com a letra 'P'

towns.forEach(town => {
	console.log(town)
});