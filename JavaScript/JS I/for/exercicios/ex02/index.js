const palavra = prompt("Informe uma palavra: ").toUpperCase()
let palindromo = "";

for(let i = palavra.length - 1; i >= 0; i--) {
    palindromo += palavra[i]
}

if (palavra === palindromo) {
    alert(`Sua palavra é um palíndromo!\n${palavra} --> ${palindromo}`)
} else {
    alert(`Sua palavra NÃO é um palíndromo!\n${palavra} --> ${palindromo}`)
}