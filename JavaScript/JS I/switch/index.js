const result = prompt("Escolha: \na) Flamengo\nb) Vasco\nc) Fluminense").toLowerCase()

switch(result) {
    case "a":
        alert("FLAMENGO")
        break
    case "b":
        alert("VASCO")
        break
    case "c":
        alert("FLUMINENSE")
        break
    default:
        alert("Outro")
}
