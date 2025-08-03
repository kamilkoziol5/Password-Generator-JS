function getElements() {
	const checkboxAll = document.querySelector('#All');
	const checkboxes = document.querySelectorAll('.indeterminate');

	return {
		getCheckboxAll: () => checkboxAll,
		getCheckboxes: () => checkboxes,
	};
}

export  function checkAll() {
	const elements = getElements();

	const checkboxAll = elements.getCheckboxAll();
	const checkboxes = elements.getCheckboxes();

	const lngCheckboxes = [...checkboxes].length;

	const lngChecked = [...checkboxes].filter(el => el.checked).length;

	if (lngChecked === 0) {
		checkboxAll.checked = false;
		checkboxAll.indeterminate = false;
		return;
	}

	const theSame = lngChecked === lngCheckboxes;
	checkboxAll.indeterminate = !theSame;
	checkboxAll.checked = theSame;
}

export function initCheckboxListeners() {
	const elements = getElements();
	const checkboxAll = elements.getCheckboxAll();
	const checkboxes = elements.getCheckboxes();

	for (const el of checkboxes) {
		el.addEventListener('click', () => checkAll());
	}

	checkboxAll.addEventListener('click', () => {
		for (const el of checkboxes) {
			el.checked = checkboxAll.checked;
		}
	});
}
