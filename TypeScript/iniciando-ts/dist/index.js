let spaceships = [];
function newSpaceship() {
    let spaceship = {
        name: prompt("Nome da nave: "),
        pilot: prompt("Nome do piloto: "),
        crewLimit: Number(prompt("Tamanho máximo de tripulantes:")),
        crew: [],
        inMission: false,
    };
    spaceships.push(spaceship);
}
function addCrew() {
    let menu = "Em qual nave?\n" + listSpaceships();
    const op = Number(prompt(menu));
    let spaceship = spaceships[op];
    let continueAdd = true;
    do {
        if (spaceship.crew.length >= spaceship.crewLimit) {
            alert("Numero máximo de tripulantes atingido!");
            continueAdd = false;
        }
        else {
            const newCrew = prompt("Nome do novo tripulante: ");
            spaceship.crew.push(newCrew);
            continueAdd = confirm("Deseja adicionar mais um tripulante a esta nave?");
        }
    } while (continueAdd === true);
}
function sendToMission() {
    let menu = "Nova missão com a nave:\n" + listSpaceships();
    const op = Number(prompt(menu));
    let spaceship = spaceships[op];
    const minCrew = Math.floor(spaceship.crewLimit / 3);
    if (spaceship.inMission === true) {
        alert("Nave já esta em missão");
    }
    else if (spaceship.crew.length < minCrew) {
        alert("Nave não possui tripulação suficiente");
    }
    else {
        spaceship.inMission = true;
        alert(`${spaceship.name} foi enviada para uma missão`);
    }
}
function listSpaceships() {
    let list = "";
    spaceships.forEach((item, index) => list += `${index} - ${item.name}\n`);
    return list;
}
function listSpaceshipsComplete() {
    let list = "";
    spaceships.forEach((ship) => {
        list += `Nave: ${ship.name}
        | Piloto: ${ship.pilot}
        | Tripulação máxima: ${ship.crewLimit}
        | Tripulação: ${ship.crew}
        | Em missão: ${ship.inMission}\n\n`;
    });
    return list;
}
const menu = `
    1 - Nova nave
    2 - Adicionar tripulante
    3 - Iniciar missão
    4 - Listar naves
    5 - Sair
`;
let op = "";
do {
    op = prompt(menu);
    switch (op) {
        case "1":
            newSpaceship();
            break;
        case "2":
            addCrew();
            break;
        case "3":
            sendToMission();
            break;
        case "4":
            alert(listSpaceshipsComplete());
            break;
        case "5":
            alert('Encerrando o sistema...');
            break;
        default:
            alert('Opção inválida! Retornando ao painel principal...');
            break;
    }
} while (op !== "5");
