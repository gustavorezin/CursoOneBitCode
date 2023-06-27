function addPlayer() {
  const name = document.getElementById('name').value
  const position = document.getElementById('position')
  const positionSelected = position.options[position.selectedIndex].text
  const number = document.getElementById('number').value

  const confirmation = confirm(`Convocar:\n${name} - ${positionSelected} - ${number}`)

  if (confirmation) {
    const teamList = document.getElementById('team-list')
  
    const newPlayer = document.createElement('li')
    newPlayer.id = 'player' + number
    newPlayer.innerText = `${positionSelected}: ${name} | ${number}`

    teamList.appendChild(newPlayer)

    document.getElementById('name').value = ""
    document.getElementById('number').value = ""
  }
}

function removePlayer() {
  const number = document.getElementById('numberToRemove').value
  const playerToRemove = document.getElementById('player' + number)

  const confirmation = confirm(`Remover:\n${playerToRemove.innerText}`)

  if (confirmation) {
    playerToRemove.remove()
    document.getElementById('numberToRemove').value = ""
  }
}