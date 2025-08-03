import state from './state';

export default function setPasswordStrength(
	passwordLength,
	includesLowerCase,
	includesUpperCase,
	includesNumbers,
	includesSymbols
) {
	const progressEl = document.querySelector('.strength-progress');
	const valueEl = document.querySelector('.strength-value');
	const strengthLabel = document.querySelector('.strength-label');

	if (!progressEl || !valueEl) return;

	let strength = 0;
	let progressStartValue = 0;
	let speed = 15;

	if (state.progressInterval) {
		clearInterval(state.progressInterval);
		state.progressInterval = null;
	}

	valueEl.textContent = '0';
	progressEl.style.background = `conic-gradient(#3399ff 0deg, #121212 0deg)`;

	if (passwordLength >= 6) strength += 10;

	if (passwordLength >= 8) strength += 20;

	if (passwordLength >= 9) strength += 15;

	if (passwordLength >= 17) strength += 10;

	if (passwordLength >= 19) strength += 10;

	if (includesLowerCase) strength += 10;

	if (includesUpperCase) strength += 10;

	if (includesNumbers) strength += 15;

	if (includesSymbols) strength += 20;

	strength = Math.min(strength, 100);

	if (strength <= 30) {
		strengthLabel.textContent = 'Low';
		strengthLabel.style.color = ' #74b9ffff';
		strengthLabel.style.textDecoration = 'none';
	} else if (strength <= 70) {
		strengthLabel.textContent = 'Almost Good';
		strengthLabel.style.color = ' #359affff';
		strengthLabel.style.textDecoration = 'none';
	} else {
		strengthLabel.textContent = 'Perfect!!';
		strengthLabel.style.color = '#0163c5ff';
		strengthLabel.style.textDecoration = 'overline';
	}

	state.passwordStrength = strength;
	let progressEndValue = strength;

	state.progressInterval = setInterval(() => {
		progressStartValue++;
		valueEl.textContent = `${progressStartValue}%`;
		progressEl.style.background = `conic-gradient(#3399ff ${
			progressStartValue * 3.6
		}deg, #121212 0deg)`;

		if (progressStartValue >= progressEndValue) {
			clearInterval(state.progressInterval);
			state.progressInterval = null;
		}
	}, speed);
}
