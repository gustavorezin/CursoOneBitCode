function show() {
  const contactList = document.getElementById('contact-list')
  console.log(contactList)

  const listElement = document.getElementsByTagName('li')
  console.log(listElement)

  const contactInputs = document.getElementsByClassName('contact-input')
  console.log(contactInputs)

  const contacts = document.querySelectorAll('#contact-list > li > label')
  console.log(contacts)

  const contact1 = document.getElementsByName('contact1')
  console.log(contact1)

  const firstContact = document.querySelector('#contact-list > li > label') // pega apenas o primeiro elemento
  console.log(firstContact)
}