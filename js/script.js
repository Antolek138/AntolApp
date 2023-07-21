const body = document.querySelector('body')
const logo = document.querySelector('.nav__logo')
const menu = document.querySelector('.nav__menu')
const bars = document.querySelector('.nav__bars')
const dropdown = document.querySelector('.nav__dropdown')
const navItems = document.querySelectorAll('.nav__menu-items')

const handleDarkMode = () => {
	if (body.getAttribute('data-mode') === 'light') {
		body.setAttribute('data-mode', 'dark')
	} else {
		body.setAttribute('data-mode', 'light')
	}
}

const handleNav = () => {
	menu.classList.toggle('nav__menu--active')
	bars.classList.toggle('nav__bars--active')
	body.classList.toggle('blocked')
	body.classList.remove('unlocked')

	navItems.forEach(item =>
		item.addEventListener('click', () => {
			menu.classList.remove('nav__menu--active')
			bars.classList.remove('nav__bars--active')
			body.classList.remove('blocked')
			body.classList.add('unlocked')
		})
	)
}

function toggleButton() {
	const button = document.getElementById('nav__theme')

	if (button.innerHTML === 'D') {
		button.innerHTML = 'L'
		button.style.backgroundColor = '#252A34'
		button.style.color = '#EAEAEA'
	} else {
		button.innerHTML = 'D'
		button.style.backgroundColor = '#EAEAEA'
		button.style.color = '#252A34'
	}
}

function dropDownClose() {
	const dropdownContents = document.querySelectorAll('.nav__dropdown-content')

	dropdownContents.forEach(dropdownContent => {
		dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block'
	})
}

function closeLogo() {
	const dropdownContents = document.querySelectorAll('.nav__dropdown-content')

	dropdownContents.forEach(dropdownContent => {
		dropdownContent.style.display = dropdownContent.style.display = 'none'
	})
}

function logoClosed() {
	menu.classList.remove('nav__menu--active')
	bars.classList.remove('nav__bars--active')
	body.classList.remove('blocked')
	body.classList.add('unlocked')
}

// Funkcja, która będzie dodawać klasę "success" do diva o id "box" po kliknięciu przycisku
function handleClick() {
	const box = document.querySelector('.contact__msg-box')
	box.classList.add('succes')

	// Usunięcie klasy "success" po 20 sekundach (20000 ms)
	setTimeout(function () {
		box.classList.remove('succes')
	}, 10000)
}

// Dodanie Event Listenera do przycisku, który wywoła funkcję po kliknięciu
document.getElementById('succes').addEventListener('click', handleClick)

bars.addEventListener('click', handleNav)
logo.addEventListener('click', logoClosed)
logo.addEventListener('click', closeLogo)
dropdown.addEventListener('click', dropDownClose)
