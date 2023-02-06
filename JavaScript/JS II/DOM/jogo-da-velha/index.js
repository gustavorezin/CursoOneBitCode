const boardRegions = document.querySelectorAll('#gameBoard span')
let vBoard = []
let turnPlayer = ''

function updateTitle() {
    const playerNameInput = document.getElementById(turnPlayer)
    document.getElementById('currentPlayer').innerText = playerNameInput
}

function initGame() {
    vBoard = [['', '', ''], ['', '', ''], ['', '', '']]
    turnPlayer = 'player1'
    document.querySelector('h2').innerHTML = 'Vez de: <span id="currentPlayer"></span>'
    updateTitle()
    boardRegions.forEach(element => {
        // reiniciando o jogo 
        element.classList.remove('win')
        element.innerText = ''
        element.addEventListener('click', handleBoardClick)
    }) 
}

function handleBoardClick() {
    
}