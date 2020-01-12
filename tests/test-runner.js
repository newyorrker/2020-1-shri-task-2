const assert = require('assert');

module.exports = function (tests) {
	tests.forEach(test => {
		describe(test.name, function () {
			it(test.text, function () {
				assert.deepEqual(test.targetFunc(test.input), test.output);
			});
		});
	});
}
