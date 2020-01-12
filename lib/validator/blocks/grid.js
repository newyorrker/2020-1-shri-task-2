const writeError = require('../../utils/validationHelper').writeError;
const errorData = require('../../data/errorData');
const blocksData = require('../../data/blocksData');

const blockType = blocksData.blockType;
const blocks = blocksData.blocks;

const grid = (store, key, value) => {
	const errors = store.errors;
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
		if (gridElements.columns >= currentGrid.columns) {
			calculatePromo(currentGrid, errors);
		}
	}
}

const calculatePromo = (grid, errors) => {
	const comList = grid.elements.filter(element => {
		return blocks.some(block => {
			return element.block === block.name && block.type === blockType.commercial;
		})
	});

	if (comList.length > 0) {
		const comListSumm = comList.length > 1 ? comList.reduce((prev, current) => prev.columns + current.columns) : comList[0].columns;

		if (comListSumm / grid.columns > 0.5) {
			writeError(grid.rootProp, errorData.grid.toMuchMarketing, errors);
		}
	}
}

module.exports = grid;
