let nome = prompt("Insira o seu nome:")
let sobrenome = prompt("Insira o seu sobrenome:")
let estudo = prompt("Insira o seu campo de estudo:")
let anoNascimento = prompt("Insira o seu ano de nascimento:")

let plNome = nome.charAt(0).toUpperCase()
nome = plNome + (nome.substring(1, nome.length).toLowerCase())

let plSobrenome = sobrenome.charAt(0).toUpperCase()
sobrenome = plSobrenome + (sobrenome.substring(1, sobrenome.length).toLowerCase())

let idade = 2022 - anoNascimento;

alert("Nome: " + nome + " " + sobrenome + 
    "\nCampo de estudo: " + estudo +  
    "\nIdade: " + idade)
