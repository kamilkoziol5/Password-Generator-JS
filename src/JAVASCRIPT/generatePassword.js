export default function generatePassword(
	passwordLength,
	includesLowerCase,
	includesUpperCase,
	inclucedNumbers,
	inclucedSymbols
) {
	const input = document.querySelector('#input');
	const error = document.querySelector('.error-msg');

	const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
	const numbers = '0123456789';
	const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

	let allowedChars = '';
	let password = '';

	allowedChars += includesLowerCase ? lowerCaseChars : '';
	allowedChars += includesUpperCase ? upperCaseChars : '';
	allowedChars += inclucedNumbers ? numbers : '';
	allowedChars += inclucedSymbols ? symbols : '';

	if (passwordLength <= 4) {
		input.classList.remove('success');
		input.classList.add('error');
		input.value = '';
		error.classList.add('show');
		error.textContent = 'Password must be at least 5 characters long';
		return;
	}

	if (allowedChars.length === 0) {
		input.classList.remove('success');
		input.classList.add('error');
		input.value = '';
		error.classList.add('show');
		error.textContent = 'You must select at least one option';

		return;
	}

	for (let i = 0; i < passwordLength; i++) {
		const randomIndex = Math.floor(Math.random() * allowedChars.length);
		password += allowedChars[randomIndex];
	}

	input.classList.remove('error');
	error.classList.remove('show');
	input.value = password;
	input.classList.add('success');
}
