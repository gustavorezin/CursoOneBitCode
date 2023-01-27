const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
const main = document.querySelector("main")
const root = document.querySelector(":root")
const screenCalc = document.getElementById('screen')
const screenRecult = document.getElementById('result')
const charKey = document.querySelectorAll('.charKey')
const themeSwitcher = document.getElementById('themeSwitcher')
const copyToClipboard = document.getElementById('copyToClipboard')
document.getElementById('clear').addEventListener('click', clearScreenCalc)
document.getElementById('equal').addEventListener('click', calculate)

charKey.forEach( (charKeyBtn) => {
	charKeyBtn.addEventListener('click', () => {
		const valueKey = charKeyBtn.dataset.value
		screenCalc.value += valueKey
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
	if (ev.key === 'Enter') {
		calculate()
	}
	if (ev.key === 'c' || ev.key === 'C') {
		clearScreenCalc()
	}
})

function clearScreenCalc() {
	screenCalc.value = ''
	screenCalc.focus()
}

function calculate() {
	screenRecult.value = 'error'
	screenRecult.classList.add('error')
	const result = eval(screenCalc.value)
	screenRecult.value = result
	screenRecult.classList.remove('error')
	clearScreenCalc()
}

themeSwitcher.addEventListener('click', () => {
	if (main.dataset.theme === 'dark') {
		switchColors('#f1f5f9', '#aaa', '#212529', '#26834a', 'light')
	} else {
		switchColors('#212529', '#666', '#f1f5f9', '#4dff91', 'dark')
	}
})

function switchColors(bgColor, borderColor, fontColor, primaryColor, theme) {
	root.style.setProperty("--bg-color", bgColor)
	root.style.setProperty("--border-color", borderColor)
	root.style.setProperty("--font-color", fontColor)
	root.style.setProperty("--primary-color", primaryColor)
	main.dataset.theme = theme
}

copyToClipboard.addEventListener('click', (ev) => {
	const button = ev.currentTarget
	if (button.innerText === 'Copy') {
		button.innerText = 'Copied!'
		button.classList.add('success')
		navigator.clipboard.writeText(screenRecult.value)
	} else {
		button.innerText = 'Copy'
		button.classList.remove('success')
	}
})