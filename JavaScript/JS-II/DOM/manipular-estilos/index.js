document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)

function useLightTheme() {
	document.body.style.color = '#000'
	document.body.style.backgroundColor = '#fff'
}

function useDarkTheme() {
	document.body.style.color = '#fff'
	document.body.style.backgroundColor = '#000'
}

function switchTheme() {
	document.body.classList.toggle('isLight')
	document.body.classList.toggle('isDark')
}