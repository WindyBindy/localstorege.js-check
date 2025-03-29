const button = document.getElementById('toggle-theme')
const currentTheme = localStorage.getItem('theme')

// Устанавливаем сохранённую тему при загрузке страницы
if (currentTheme) {
	document.body.classList.add(currentTheme)
}

// Обработчик смены темы
button.addEventListener('click', () => {
	if (document.body.classList.contains('dark')) {
		document.body.classList.replace('dark', 'light')
		localStorage.setItem('theme', 'light') // Сохраняем в localStorage
	} else {
		document.body.classList.replace('light', 'dark')
		localStorage.setItem('theme', 'dark') // Сохраняем в localStorage
	}
})
