export default function showPopup(text) {
	const container = document.querySelector('.container');
	const div = document.createElement('div');
	div.classList.add('popup');
	div.textContent = text;

	if (container.querySelector('.popup')) return;

	setTimeout(() => {
		div.classList.add('show');
	}, 20);

	container.append(div);

	setTimeout(() => {
		div.classList.remove('show');

		div.addEventListener(
			'transitionend',
			() => {
				div.remove();
			},
			{ once: true }
		);
	}, 1500);
}
