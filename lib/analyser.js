var walk = require('./walker');
var validator = require('./validator');

function analyser (tree) {
	walk(tree, validator());

	return [
		{
			new: 'new'
		}
	]
}

module.exports = analyser;
