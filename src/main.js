import { checkAll, initCheckboxListeners } from './JAVASCRIPT/checkAll';
import checkChecboxesInfo from './JAVASCRIPT/checkCheckboxInfo';
import copyPassword from './JAVASCRIPT/copyPassword';
import generatePassword from './JAVASCRIPT/generatePassword';
import renderApp from './JAVASCRIPT/renderApp';
import renderStrengthProgress from './JAVASCRIPT/renderStrengthProgress';
import setPasswordStrength from './JAVASCRIPT/setPasswordStrength';
import state from './JAVASCRIPT/state';
import './SCSS/style.scss';
import 'boxicons/css/boxicons.min.css';

renderApp();
checkAll();
initCheckboxListeners();

const generateBtn = document.querySelector('#generate-btn');
const copyBtn = document.querySelector('.copy-element');

generateBtn.addEventListener('click', () => {
	checkChecboxesInfo();
	generatePassword(
		state.passwordLength,
		state.includesLowerCase,
		state.includesUpperCase,
		state.includesNumbers,
		state.includesSymbols
	);
	renderStrengthProgress();
	setPasswordStrength(
		state.passwordLength,
		state.includesLowerCase,
		state.includesUpperCase,
		state.includesNumbers,
		state.includesSymbols
	);
});

copyBtn.addEventListener('click', copyPassword);
