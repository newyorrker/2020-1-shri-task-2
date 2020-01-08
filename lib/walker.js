function walk (item, validator) {
	switch (item.type) {
	case 'Object':
		item.children.forEach((element) => {
			validator.validate(element);
			walk(element.value, validator);
		})
		break;

	case 'Array':
		validator.level++;

		item.children.forEach((element) => {
			if (validator.isBlockRootObj(element.children, 'warning')) {
				const warningBlockModel = {
					hasButton: false
				}

				validator.store.warnings.push(warningBlockModel);
			}

			if (validator.isBlockRootObj(element.children, 'grid')) {
				const gridBlockModel = {
					columns: 0,
					elements: [],
					isActive: true
				}

				validator.store.grids.push(gridBlockModel);
			}
			walk(element, validator);
		})
		validator.level--;
		break;
	}
}

module.exports = walk;
