module.exports = {
	warning: {
		buttonSize: {
			code: 'WARNING.INVALID_BUTTON_SIZE',
			error: 'Некорректный размер блока button'
		},
		buttonPosition: {
			code: 'WARNING.INVALID_BUTTON_POSITION',
			error: 'Некорректное расположение блока button'
		},
		placeholderSize: {
			code: 'WARNING.INVALID_PLACEHOLDER_SIZE',
			error: 'Некорректный размер блока placeholder'
		},
		textSizeEqual: {
			code: 'WARNING.TEXT_SIZES_SHOULD_BE_EQUAL',
			error: 'Размер текста в блоке warning должен быть одинаковым'
		}
	},
	text: {
		severalH1: {
			code: 'TEXT.SEVERAL_H1',
			error: 'Заголовок H1 должен быть на странице в единственном экземпляре'
		},
		positionH2: {
			code: 'TEXT.INVALID_H2_POSITION',
			error: 'Некорректное расположение заголовка H2'
		},
		positionH3: {
			code: 'TEXT.INVALID_H3_POSITION',
			error: 'Некорректное расположение заголовка H3'
		}
	},
	grid: {
		toMuchMarketing: {
			code: 'GRID.TOO_MUCH_MARKETING_BLOCKS',
			error: 'Маркетинговые блоки занимают больше половины от всех колонок блока grid'
		}
	}
}
