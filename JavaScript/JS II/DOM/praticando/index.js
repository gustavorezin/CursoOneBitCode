function addContact() {
  const contactsList = document.getElementById('contacts-list')

  const h3 = document.createElement('h3')
  h3.innerText = "Contato"
  
  const ul = document.createElement('ul')

  const nameLi = document.createElement('li')
  nameLi.innerText = "Nome: "
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput)

  const phoneLi = document.createElement('li')
  phoneLi.innerText = "Telefone: "
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput)

  const addressLi = document.createElement('li')
  addressLi.innerText = "Endereço: "
  const addressInput = document.createElement('input')
  addressInput.type = 'text'
  addressInput.name = 'address'
  addressLi.appendChild(addressInput)

  ul.append(nameLi, phoneLi, addressLi)
  
  contactsList.append(h3, ul)
}

function removeContact() {
  const contactsList = document.getElementById('contacts-list')
  const titles = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  contactsList.removeChild(titles[titles.length - 1])
  contactsList.removeChild(contacts[contacts.length - 1])
}