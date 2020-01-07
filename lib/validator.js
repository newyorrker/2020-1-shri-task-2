
const validator = () => {
	const level = 0;

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

	const blockType = {
		functional: 'functional',
		commercial: 'commercial'
	}

	const blocks = [
		{
			name: 'payment',
			type: blockType.functional
		},
		{
			name: 'warning',
			type: blockType.functional
		},
		{
			name: 'product',
			type: blockType.functional
		},
		{
			name: 'history',
			type: blockType.functional
		},
		{
			name: 'cover',
			type: blockType.functional
		},
		{
			name: 'collect',
			type: blockType.functional
		},
		{
			name: 'articles',
			type: blockType.functional
		},
		{
			name: 'subscribtion',
			type: blockType.functional
		},
		{
			name: 'event',
			type: blockType.functional
		},
		{
			name: 'commercial',
			type: blockType.commercial
		},
		{
			name: 'offer',
			type: blockType.commercial
		}
	]

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

	function validate (prop) {
		const key = prop.key.value;
		const value = prop.value.value;

		warningBlockCheck(prop);

		// перенести грид сюда
		if (store.grids.some(element => element.isActive)) {
			processGridBlock(key, value);
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
						console.error('error: TEXT.SEVERAL_H1');
					}

					if (textInfo.h2.waiting && textInfo.h2.level >= textInfo.h1.level) {
						console.error('error: TEXT.INVALID_H2_POSITION');
					}

					textInfo.h1.waiting = true;
					textInfo.h2.waiting = false;

					break;
				case 'h2':

					textInfo.h2.waiting = true;
					textInfo.h2.level = this.level;

					if (textInfo.h3.waiting && textInfo.h3.level >= textInfo.h2.level) {
						console.error('error: TEXT.INVALID_H3_POSITION');
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

	function localWalk (element, cbProp) {
		switch (element.type) {
		case 'Object':
			element.children.forEach((item) => {
				cbProp(item, element);
				localWalk(item.value, cbProp);
			})
			break;
		case 'Array':
			element.children.forEach((item) => {
				localWalk(item, cbProp);
			})
			break;
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
					console.error('error: WARNING.INVALID_BUTTON_SIZE');
				}
			}

			break;

		case 'placeholder':
			if (key === 'block') {
				if (currentWarning.hasButton) {
					console.error('error: WARNING.INVALID_BUTTON_POSITION');
				}
			}

			if (key === 'size') {
				const buttonSizeValueIndex = sizes.indexOf(value);

				if (buttonSizeValueIndex < 4 || buttonSizeValueIndex > 6) {
					console.error('error: WARNING.INVALID_PLACEHOLDER_SIZE');
				}
			}

			break;

		case 'text':
			if (key === 'size') {
				store.textSizeMod = !store.textSizeMod ? value : store.textSizeMod;

				if (store.textSizeMod && store.textSizeMod !== value) {
					console.error('error: WARNING.TEXT_SIZES_SHOULD_BE_EQUAL');
				}
			}

			break;
		}
	}

	function validateObj (element) {
		if (isBlockRootObj(element.children, 'grid')) {
			const gridBlockModel = {
				columns: 0,
				elements: [],
				isActive: true
			}

			this.store.grids.push(gridBlockModel);
		}

		// if (isBlockRootObj(element.children, 'warning')) {
		// 	const warningBlockModel = {
		// 		hasButton: false
		// 	}

		// 	this.store.warnings.push(warningBlockModel);

		// 	localWalk(element, warningBlockCheck);
		// }
	}

	function calculatePromo (grid) {
		const comList = grid.elements.filter(element => {
			return blocks.some(block => {
				return element.block === block.name && block.type === blockType.commercial;
			})
		});

		if (comList.length > 0) {
			const comListSumm = comList.length > 1 ? comList.reduce((prev, current) => prev.columns + current.columns) : comList[0].columns;

			if (comListSumm / grid.columns > 0.5) {
				console.error('GRID.TOO_MUCH_MARKETING_BLOCKS')
			}
		}
	}

	function processGridBlock (key, value) {
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
			const gridElementsColumns = currentGrid.elements.reduce((prev, current) => {
				return current.block ? prev.columns + current.columns : 0;
			});
			// посчитать сумму колонок элемента если равна общему количеству то проверяем названия блоков
			if (gridElementsColumns >= currentGrid.columns) {
				currentGrid.isActive = false;
				calculatePromo(currentGrid);
			}
		}
	}

	return {
		validate: validate,
		validateObj: validateObj,
		isBlockRootObj: isBlockRootObj,
		store: store,
		level: level
	}
}
module.exports = validator;
