function createLabel(text, htmlFor) {
  const label = document.createElement('label')
  label.innerText = text
  label.htmlFor = htmlFor
  return label
}

function createInput(id, value, name, type = 'text', placeholder = '') {
  const input = document.createElement('input')
  input.id = id
  input.value = value
  input.name = name
  input.type = type
  input.placeholder = placeholder
  return input
}

const addTechBtn = document.getElementById('addTechBtn')
let lines = 0

addTechBtn.addEventListener('click', () => {
  const techsList = document.getElementById('techsList')

  const newLi = document.createElement('li')
  const liIndex = lines
  lines++
  newLi.id = `liIndex-${liIndex}`
  newLi.classList = 'line'

  const techNameLabel = createLabel('Nome: ', `techName-${liIndex}`)
  const techNameInput = createInput(`techName-${liIndex}`, null, 'techName')

  newLi.append(
    techNameLabel, techNameInput
  )

  techsList.appendChild(newLi)
})