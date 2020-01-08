
function setScopeStart (item, validator) {
	if (validator.isBlockRootObj(item.children, 'warning')) {
		const warningBlockModel = {
			hasButton: false,
			isActive: true,
			rootProp: item,
			textInvalid: false
		}

		validator.store.warnings.push(warningBlockModel);
	}
}

function setScopeEnd (item, validator) {
	if (validator.isBlockRootObj(item.children, 'warning')) {
		validator.store.warnings.pop();
	}
}

function walk (item, validator) {
	switch (item.type) {
	case 'Object':

		setScopeStart(item, validator);

		item.children.forEach((element) => {
			validator.validate(element);
			walk(element.value, validator);
		})

		setScopeEnd(item, validator);
		break;

	case 'Array':
		validator.level++;

		item.children.forEach((element) => {
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
