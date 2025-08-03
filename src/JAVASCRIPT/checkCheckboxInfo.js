import state from './state';

export default function checkChecboxesInfo() {
	const upperCheckbox = document.querySelector('#upper-checkbox');
	const lowerCheckbox = document.querySelector('#lower-checkbox');
	const numberCheckbox = document.querySelector('#number-checkbox');
	const symbolCheckbox = document.querySelector('#symbol-checkbox');
	const lenghtCheckbox = document.querySelector('#length');

	state.passwordLength = lenghtCheckbox.value;
	state.includesUpperCase = upperCheckbox.checked;
	state.includesLowerCase = lowerCheckbox.checked;
	state.includesNumbers = numberCheckbox.checked;
	state.includesSymbols = symbolCheckbox.checked;
}
