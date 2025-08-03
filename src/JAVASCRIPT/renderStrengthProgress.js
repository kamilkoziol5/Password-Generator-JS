export default function renderStrengthProgress() {
	const existing = document.querySelector('.strength-progress-box');
	if (existing) existing.remove();

	const progress = document.createElement('section');

	progress.classList.add('strength-progress-box');
	progress.innerHTML = `
    <div class="strength-container">
				<div class="strength-progress">
					<span class="strength-value">0%</span>
				</div>
				<p class="strength-label">Siła hasła</p>
			</div>
    `;
	document.body.append(progress);
	setTimeout(() => {
		progress.classList.add('show');
	}, 10);
}
