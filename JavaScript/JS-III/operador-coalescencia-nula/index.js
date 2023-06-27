// De forma padrao 

const a1 = 0 // false
const b1 = null // false
const c1 = "Teste" // true

console.log(a1 || b1 || c1)

// ?? não aceita apenas null e undefined
let a = 0

let b = a || 42

console.log({ a, b })

b = a ?? 42

console.log({a, b})

let c = false ?? 42

console.log({c})