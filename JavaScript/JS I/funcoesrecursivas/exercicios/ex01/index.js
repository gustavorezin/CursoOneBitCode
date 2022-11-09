function areaTriangulo() {
  const base = parseFloat(prompt("Informe a base:"))
  const altura = parseFloat(prompt("Informe a altura:"))
  return (base * altura) / 2
}

function areaRetangulo() {
  const base = parseFloat(prompt("Informe a base:"))
  const altura = parseFloat(prompt("Informe a altura:"))
  return base * altura
}

function areaQuadrado() {
  const lado = parseFloat(prompt("Informe o lado:"))
  return lado * lado
}

function areaTrapezio() {
  const baseMaior = parseFloat(prompt("Informe a base maior:"))
  const baseMenor = parseFloat(prompt("Informe a base menor:"))
  const altura = parseFloat(prompt("Informe a altura:"))
  return (baseMaior + baseMenor) * altura / 2
}

function areaCirculo() {
  const raio = parseFloat(prompt("Informe o raio:"))
  return 3.14 * (raio * raio)
}

function exibirMenu() {
  return parseInt(prompt(
    "Calculadora geométrica!" +
    "\n\nSelecione qual calculo de área deseja:" +
    "\n1. Triângulo\n2. Retângulo\n3. Quadrado\n4. Trapézio\n5. Circulo" +
    "\n0. Sair"
    )) 
}

function executar() {
  let menu
  do {
    menu = exibirMenu()
    let resultado
    switch(menu) {
      case 1:
        resultado = areaTriangulo()
        break
      case 2:
        resultado = areaRetangulo()
        break
      case 3:
        resultado = areaQuadrado()
        break
      case 4:
        resultado = areaTrapezio()
        break
      case 5:
        resultado = areaCirculo()
        break
      case 0:
        alert("Saindo...")
        break
    }
    if(resultado) {
      alert(`Resultado: ${resultado}`)
    }
  
  } while (menu !== 0)
}

executar()