export default function renderApp() {
	const app = document.querySelector('#app');
	const ctn = document.createElement('section');
	ctn.classList.add('container');
	ctn.innerHTML = `
<h1>
				Password Gnerator
				<img src="./padlock.png" alt="generate-icon" />			</h1>

			<div class="input-container">
				<div class="input-wrapper">
					<input
						id="input"
						type="text"
						placeholder="Your Password will show here..."
						autocomplete="off"
						readonly />
					<i class="bx bx-copy copy-element"></i>
					<p class="error-msg"></p>
				</div>

				<button class="generate-bnt" id="generate-btn">
					<i class="bx bxs-magic-wand"></i>
				</button>
			</div>

			<h2>Choose Your Options</h2>
			<div class="checkboxes-container">
				<div class="check-wrapper">
					<input type="checkbox" id="All" />
					<label for="All">All Chars</label>
				</div>
				<div class="check-wrapper">
					<input
						type="checkbox"
						class="indeterminate"
						id="lower-checkbox"
						checked />
					<label for="lower-checkbox">aaa</label>
				</div>
				<div class="check-wrapper">
					<input type="checkbox" class="indeterminate" id="upper-checkbox" />
					<label for="upper-checkbox">AAA</label>
				</div>
				<div class="check-wrapper">
					<input type="checkbox" class="indeterminate" id="number-checkbox" />
					<label for="number-checkbox">123</label>
				</div>
				<div class="check-wrapper">
					<input type="checkbox" class="indeterminate" id="symbol-checkbox" />
					<label for="symbol-checkbox">?/&$</label>
				</div>
				<div class="number-wrapper">
					<input type="number" value="6" id="length" min="5" />
					<label for="length">Length</label>
				</div>
			</div>

`;

	app.append(ctn);
}
