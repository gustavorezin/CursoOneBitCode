const num = parseFloat(prompt("Informe um número para ver sua tabuada: "))

let tabuada = "";

for (let i = 1; i < 10; i++) {
    const resultado = i * num
    tabuada += `\n${i} x ${num} = ${resultado}` // "\n" + i + " x " + num + " = " + resultado
    alert(tabuada)
}