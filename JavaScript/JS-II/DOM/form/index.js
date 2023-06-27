const form = document.getElementById('orderForm')

form.addEventListener('submit', function(ev) {
  ev.preventDefault()

  const name = document.querySelector('input[name="name"]').value
  const address = document.querySelector('input[name="address"]').value
  const breadType = document.querySelector('select[name="breadType"]').value
  const main = document.querySelector('input[name="main"]:checked').value
  const observations = document.querySelector('textarea[name="observations"]').value
  
  let additionals = ""
  document.querySelectorAll('input[name="additional"]:checked').forEach(function(item) {
    additionals += `- ${item.value}\n`
  })

  console.log({name, address, breadType, main, additionals, observations})
})