const writeError = require('../../utils/validationHelper').writeError;
const sizes = require('../../data/validationData').sizes;
const errorData = require('../../data/errorData');

function setCurrentBlock (store, prop) {
	const key = prop.key.value;
	const value = prop.value.value;

	switch (key) {
	case 'block':
		store.currentBlock = {
			name: value,
			prop: prop
		};
		break;

	case 'content':
	case 'elem':
		store.currentBlock.name = '';
		break;
	}
}

const warning = (store, key, value, prop) => {
	const currentWarning = store.warnings[store.warnings.length - 1];
	const errors = store.errors;

	setCurrentBlock(store, prop);

	switch (store.currentBlock.name) {
	case 'button':
		if (key === 'block') {
			store.warningBlockInfo.button.exist = true;
			store.warningBlockInfo.button.obj = store.currentObj;
		}

		if (key === 'size') {
			const buttonSizeValue = sizes[sizes.indexOf(value) - 1];

			if (store.textSizeMod && store.textSizeMod !== buttonSizeValue) {
				writeError(store.warningBlockInfo.button.obj, errorData.warning.buttonSize, errors);
			}
		}

		break;

	case 'placeholder':
		if (key === 'block') {
			store.warningBlockInfo.placeholder.obj = store.currentObj;

			if (store.warningBlockInfo.button.exist) {
				writeError(store.warningBlockInfo.button.obj, errorData.warning.buttonPosition, errors);
				store.warningBlockInfo.button.exist = false;
			}
		}

		if (key === 'size') {
			if (value !== 's' && value !== 'm' && value !== 'l') {
				writeError(store.warningBlockInfo.placeholder.obj, errorData.warning.placeholderSize, errors);
			}
		}

		break;

	case 'text':
		if (key === 'size' && !currentWarning.textInvalid) {
			store.textSizeMod = !store.textSizeMod ? value : store.textSizeMod;

			if (store.textSizeMod && store.textSizeMod !== value) {
				currentWarning.textInvalid = true;
				writeError(currentWarning.rootProp, errorData.warning.textSizeEqual, errors);
			}
		}

		break;
	}
}

module.exports = warning;
