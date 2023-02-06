const boardRegions = document.querySelectorAll('#gameBoard span')
let h2 = document.querySelector('h2')
let vBoard = []
let turnPlayer = ''

document.getElementById('start').addEventListener('click', initGame)

function updateTitle() {
    const playerNameInput = document.getElementById(turnPlayer)
    document.getElementById('currentPlayer').innerText = playerNameInput.value
}

function initGame() {
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
    turnPlayer = 'player1'
    h2.innerHTML = 'Vez de: <span id="currentPlayer"></span>'
    updateTitle()
    boardRegions.forEach(element => {
        // reiniciando o jogo 
        element.classList.remove('win')
        element.innerText = ''
        element.style.cursor = 'pointer'
        element.addEventListener('click', handleBoardClick)
    }) 
}

function getWinRegions() {
    const winRegions = []
    if (vBoard[0][0] && vBoard[0][0] === vBoard[0][1] && vBoard[0][0] === vBoard[0][2])
        winRegions.push("0.0", "0.1", "0.2")
    if (vBoard[1][0] && vBoard[1][0] === vBoard[1][1] && vBoard[1][0] === vBoard[1][2])
        winRegions.push("1.0", "1.1", "1.2")
    if (vBoard[2][0] && vBoard[2][0] === vBoard[2][1] && vBoard[2][0] === vBoard[2][2])
        winRegions.push("2.0", "2.1", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][0] && vBoard[0][0] === vBoard[2][0])
        winRegions.push("0.0", "1.0", "2.0")
    if (vBoard[0][1] && vBoard[0][1] === vBoard[1][1] && vBoard[0][1] === vBoard[2][1])
        winRegions.push("0.1", "1.1", "2.1")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][2] && vBoard[0][2] === vBoard[2][2])
        winRegions.push("0.2", "1.2", "2.2")
    if (vBoard[0][0] && vBoard[0][0] === vBoard[1][1] && vBoard[0][0] === vBoard[2][2])
        winRegions.push("0.0", "1.1", "2.2")
    if (vBoard[0][2] && vBoard[0][2] === vBoard[1][1] && vBoard[0][2] === vBoard[2][0])
        winRegions.push("0.2", "1.1", "2.0")
    return winRegions
}

function handleBoardClick(ev) {
    const span = ev.currentTarget // onde clicou
    const region = span.dataset.region
    const rowColumnPair = region.split('.')
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]
    if (turnPlayer === 'player1') {
        span.innerText = 'X'
        vBoard[row][column] = 'X'
    } else {
        span.innerText = 'O'
        vBoard[row][column] = 'O'
    }
    console.clear()
    console.table(vBoard)
    disableRegion(span)
    const winRegions = getWinRegions()
    if (winRegions.length > 0) {
        alert(`${turnPlayer} venceu!`)
    } else if (vBoard.flat().includes('')) { // verifica se há espaço vazio no tabuleiro
        turnPlayer = turnPlayer === 'player1' ? 'player2' : 'player1'
        updateTitle()
    } else {
        h2.innerHTML = 'Empate!'
    }
}

function disableRegion(element) {
    element.style.cursor = 'not-allowed'
    element.removeEventListener('click', handleBoardClick)
}

