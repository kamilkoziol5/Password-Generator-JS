import showPopup from './showPopup';

export default function copyPassword() {
	const input = document.querySelector('#input');
	const inputWrapper = document.querySelector('.input-wrapper ');
	const inputValue = input.value.trim();
	const error = document.querySelector('.error-msg');

	if (!inputValue) {
		input.classList.add('error');
		error.classList.add('show');
		error.textContent = 'Brak hasła do skopiowania!';
		return;
	}

	navigator.clipboard
		.writeText(inputValue)
		.then(() => {
			const text = 'Skopiowano';
			showPopup(text);
			inputWrapper.classList.add('animate');
			inputWrapper.addEventListener('animationend', () => {
				inputWrapper.classList.remove('animate');
			});
		})
		.catch(() => {
			const text = 'Nie udało sie skopiować';
			showPopup(text);
			console.error('ERROR');
		});
}
