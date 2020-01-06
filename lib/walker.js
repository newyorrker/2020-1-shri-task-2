function setBlockScope (prev, current, validator, walk) {
	if (prev.value.value === 'warning') {
		validator.store.targetBlock = 'warning';

		validator.validate(current);
		walk(current.value, validator);

		validator.store.targetBlock = null;

		return true;
	}

	// if (prev.value.value === 'grid') {
	// 	validator.store.targetBlock = 'grid';

	// 	validator.validate(current);
	// 	walk(current.value, validator);

	// 	if (current.key === 'content') {
	//         validator.store.targetBlock = null
	//     }

	// 	return true;
	// }

	return false;
}

function walk (item, validator) {
	switch (item.type) {
	case 'Object':
		item.children.reduce((prev, current) => {
			if (prev.value) {
				// граница анализа по блоку
				// если граница задана то завершаем текущую итерацию
				if (setBlockScope(prev, current, validator, walk)) return current;
			}

			validator.validate(current);
			walk(current.value, validator);

			return current;
		}, {})
		break;

	case 'Array':
		validator.level++;
		item.children.forEach((element) => {
			validator.validateObj(element);
			walk(element, validator);
		})
		validator.level--;
		break;
	}
}

module.exports = walk;
