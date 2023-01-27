const input = document.getElementById('input')

document.getElementById('valueBtn').addEventListener('click', () => {
	input.value = input.value === '' ? 'Olá, Mundo!' : ''
	console.log(input.value) // pega value atual
	console.log(input.getAttribute('value')) // pega value original do html
})

document.getElementById('typeBtn').addEventListener('click', () => {
	input.type = input.type === 'text' ? 'radio' : 'text'
	//input.setAttribute('type', 'radio')
})

document.getElementById('placeholderBtn').addEventListener('click', () => {
	input.value = ''
	input.placeholder = 'Digite algo...'
})

document.getElementById('disableBtn').addEventListener('click', () => {
	input.setAttribute('disabled', !input.disabled)
})

document.getElementById('dataBtn').addEventListener('click', () => {
	const data = input.dataset.somethingElse
	const data2 = input.dataset.somethingElse = 'Outro valor'
	alert(`O valor do atributo data.something-else: ${data}\nApós o clique: ${data2}`)
})