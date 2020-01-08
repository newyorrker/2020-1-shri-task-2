const errorData = require('./data/errorData');
const blocksData = require('./data/blocksData');

const blockType = blocksData.blockType;
const blocks = blocksData.blocks;

const validator = () => {
	const level = 0;

	const errors = [];

	const store = {
		targetBlock: null,
		blocks: [],
		previousBlock: '',
		currentBlock: '',
		textSizeMod: '',
		grids: [],
		warnings: []
	}

	const textInfo = {
		h1: {
			waiting: false,
			level: 0
		},
		h2: {
			waiting: false,
			level: 0
		},
		h3: {
			waiting: false,
			level: 0
		}
	};

	const sizes = [
		'xxxs',
		'xxs',
		'xxs',
		'xs',
		's',
		'm',
		'l',
		'xl',
		'xxl',
		'xxxl'
	];

	function setCurrentBlock (key, value) {
		switch (key) {
		case 'block':
			store.currentBlock = value;
			store.blocks.push(store.currentBlock);
			break;

		case 'content':
		case 'elem':
			store.currentBlock = '';
			break;
		}
	}

	function writeError (prop, errorData) {
		console.log(prop, 'error')

		const errorModel = {
			code: errorData.code,
			error: errorData.message,
			location: {
				start: { column: prop.loc.start.column, line: prop.loc.start.line },
				end: { column: prop.loc.end.column, line: prop.loc.end.line }
			}
		}
		console.error(errorData.code);
		errors.push(errorModel);

		window.errors = errors;
	}

	function warningBlockCheck (prop) {
		const currentWarning = store.warnings[store.warnings.length - 1];
		const key = prop.key.value;
		const value = prop.value.value;

		setCurrentBlock(key, value);

		switch (store.currentBlock) {
		case 'button':
			if (key === 'block') {
				currentWarning.hasButton = true;
			}

			if (key === 'size') {
				const buttonSizeValue = sizes[sizes.indexOf(value) - 1];

				if (store.textSizeMod && store.textSizeMod !== buttonSizeValue) {
					writeError(prop, errorData.warning.buttonSize);
				}
			}

			break;

		case 'placeholder':
			if (key === 'block') {
				if (currentWarning.hasButton) {
					writeError(prop, errorData.warning.buttonPosition);
				}
			}

			if (key === 'size') {
				const buttonSizeValueIndex = sizes.indexOf(value);

				if (buttonSizeValueIndex < 4 || buttonSizeValueIndex > 6) {
					writeError(prop, errorData.warning.placeholderSize);
				}
			}

			break;

		case 'text':
			if (key === 'size') {
				store.textSizeMod = !store.textSizeMod ? value : store.textSizeMod;

				if (store.textSizeMod && store.textSizeMod !== value) {
					writeError(prop, errorData.warning.textSizeEqual);
				}
			}

			break;
		}
	}

	function validate (prop) {
		const key = prop.key.value;
		const value = prop.value.value;

		warningBlockCheck(prop);

		if (store.grids.some(element => element.isActive)) {
			processGridBlock(key, value, prop);
		}

		if (key === 'block' && value === 'text') {
			setCurrentBlock(key, value);
		}

		if (store.currentBlock === 'text') {
			if (key === 'type') {
				switch (value) {
				case 'h1':

					textInfo.h1.level = this.level;

					if (textInfo.h1.waiting) {
						writeError(prop, errorData.text.severalH1);
					}

					if (textInfo.h2.waiting && textInfo.h2.level >= textInfo.h1.level) {
						writeError(prop, errorData.text.positionH2);
					}

					textInfo.h1.waiting = true;
					textInfo.h2.waiting = false;

					break;
				case 'h2':

					textInfo.h2.waiting = true;
					textInfo.h2.level = this.level;

					if (textInfo.h3.waiting && textInfo.h3.level >= textInfo.h2.level) {
						writeError(prop, errorData.text.positionH3);
					}

					textInfo.h3.waiting = false;

					break;
				case 'h3':
					textInfo.h3.waiting = true;
					textInfo.h3.level = this.level;

					break;
				}
			}
		}
	}

	function isBlockRootObj (array, blockName) {
		for (let i = 0; i < array.length; i++) {
			if (array[i].key.value === 'elem') {
				return false;
			}
		}

		for (let i = 0; i < array.length; i++) {
			if (array[i].key.value === 'block' && array[i].value.value === blockName) {
				return true;
			}
		}

		return false;
	}

	function calculatePromo (grid, prop) {
		const comList = grid.elements.filter(element => {
			return blocks.some(block => {
				return element.block === block.name && block.type === blockType.commercial;
			})
		});

		if (comList.length > 0) {
			const comListSumm = comList.length > 1 ? comList.reduce((prev, current) => prev.columns + current.columns) : comList[0].columns;

			if (comListSumm / grid.columns > 0.5) {
				writeError(prop, errorData.grid.toMuchMarketing);
			}
		}
	}

	function processGridBlock (key, value, prop) {
		const currentGrid = store.grids[store.grids.length - 1];
		const currentElem = currentGrid.elements.length > 0 ? currentGrid.elements[currentGrid.elements.length - 1] : null;

		switch (key) {
		case 'm-columns':
			currentGrid.columns = isNaN(parseInt(value)) ? value : parseInt(value);
			break;

		case 'elem':
			currentGrid.elements.push({ name: value });
			break;

		case 'block':
			if (blocks.some(element => element.name === value)) {
				currentElem.block = value;
			}
			break;

		case 'm-col':
			currentElem.columns = isNaN(parseInt(value)) ? value : parseInt(value);
			break;
		}

		if (currentGrid.elements.length > 0) {
			const gridElements = currentGrid.elements.reduce((prev, current) => {
				return current.block ? { block: current.blocks, columns: prev.columns + current.columns } : { columns: 0 };
			});
			// посчитать сумму колонок элемента если равна общему количеству то проверяем названия блоков
			if (gridElements.columns >= currentGrid.columns) {
				currentGrid.isActive = false;
				calculatePromo(currentGrid, prop);
			}
		}
	}

	return {
		validate: validate,
		isBlockRootObj: isBlockRootObj,
		store: store,
		errors: errors,
		level: level
	}
}
module.exports = validator;
