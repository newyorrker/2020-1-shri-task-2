const walk = require('./walker');
const Validator = require('./validator/validator');

function analyser (tree) {
	const validator = Validator();

	walk(tree, validator);

	return validator.errors;
}

module.exports = analyser;
