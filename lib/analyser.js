const walk = require('./walker');
const Validator = require('./validator');

function analyser (tree) {
	console.time('answer time');
	const validator = Validator();

	walk(tree, validator);
	console.timeEnd('answer time');

	return validator.errors;
}

module.exports = analyser;
