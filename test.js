var assert = require('assert');

require('./build/linter');

const json = `{
    "block": "warning",
    "content": [
        {
            "block": "warning",
            "content": [
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                {
                    "block": "placeholder",
                    "mods": { "size": "m" }
                },
                { "block": "button", "mods": { "size": "xl" } }
            ]
        },
        {
            "block": "placeholder",
            "mods": { "size": "m" }
        },
        { "block": "text", "mods": { "size": "l" } },
        { "block": "text", "mods": { "size": "l" } }
    ]
}`;

describe('warning.button.possition', function () {
	it('Проверяет валидацию расположения кнопки', function () {
		assert.deepEqual(lint(json), [{
			code: 'WARNING.INVALID_BUTTON_POSITION',
			error: 'Некорректное расположение блока button',
			location: {
				end: {
					column: 2,
					line: 23
				},
				start: {
					column: 1,
					line: 1
				}
			}
		}]);
	});
});
