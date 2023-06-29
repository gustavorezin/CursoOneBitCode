export default function calculate() {
	const screenRecult = document.getElementById('result')
	screenRecult.value = 'ERROR'
	screenRecult.classList.add('error')
	const result = eval(screenCalc.value)
	screenRecult.value = result
	screenRecult.classList.remove('error')
	clearScreenCalc()
}