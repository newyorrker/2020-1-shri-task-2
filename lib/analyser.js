var walk = require('./walker');
var validator = require('./validator');

function analyser (tree) {
	console.time('answer time');
	walk(tree, validator());
	console.timeEnd('answer time');

	return [
		{
			new: 'new'
		}
	]
}

module.exports = analyser;
