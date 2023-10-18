function first(array) {
  return array[0]
}

// T == type; Poderia ser colocado qualquer outro nome. Ex: ArrayType
function last<T>(array: T[]): T | undefined {
  return array[array.length - 1]
}

const pilots = ['Gustavo', 'Arthur', 'Liep', 'Bigode']

const firstPilot = first(pilots)
const lastPilot = last(pilots)

console.log(`first: ${firstPilot}   -   last: ${lastPilot}`)