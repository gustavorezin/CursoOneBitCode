const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
const screenCalc = document.getElementById('screen')
const screenRecult = document.getElementById('result')
const charKeys = document.querySelectorAll('.charKey')

charKeys.forEach((charKeyBtn) => {
	charKeyBtn.addEventListener('click', () => {
		const keyValue = charKeyBtn.dataset.value
		screenCalc.value += keyValue
		screenCalc.focus()
	})
})

screenCalc.addEventListener('keydown', (ev) => {
	ev.preventDefault()
	if(allowedKeys.includes(ev.key)) {
		screenCalc.value += ev.key
	}
	if(ev.key === 'Backspace') {
		screenCalc.value = screenCalc.value.slice(0, -1)
	}
	if(ev.ctrlKey && (ev.key === 'C' || ev.key === 'c')) {
		clearScreenCalc()
	}
	if(ev.key === 'Enter') {
		calculate()
	}
})

document.getElementById('clear').addEventListener('click', clearScreenCalc)
document.getElementById('equal').addEventListener('click', calculate)

function clearScreenCalc(){
	screenCalc.value = ''
	screenCalc.focus()
}

function calculate() {
	const result = eval(screenCalc.value)
	screenCalc.value = result
	screenRecult.value = result
	screenCalc.focus()
}