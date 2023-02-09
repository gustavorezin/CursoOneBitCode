const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
const screenCalc = document.getElementById('screen')
const charKeys = document.querySelectorAll('.charKey')

charKeys.forEach((charKey) => {
	charKey.addEventListener('click', () => {
		const keyValue = charKey.dataset.value
		screenCalc.value += keyValue
		screenCalc.focus()
	})
})

screenCalc.addEventListener('keydown', (ev) => {
	ev.preventDefault()
	if (allowedKeys.includes(ev.key)) {
		screenCalc.value += ev.key
		return
	}
	if (ev.key === 'Backspace') {
		screenCalc.value = screenCalc.value.slice(0, -1)
	}
	if (ev.key === 'C' || ev.key === 'c') {
		clearScreen()
	}
	if (ev.key === 'Enter') {
		screenCalc.value = eval(screenCalc.value)
		clearScreen()
	}
})

function clearScreen() {
	screenCalc.value = ''
}
