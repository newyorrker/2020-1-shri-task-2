const jsonPrser = require('./utils/jsonParser');
const analysis = require('./analyser');
const testJson = require('./testjson');

const linter = (json) => {
	const tree = jsonPrser(json);

	// console.info(json);

	analysis(tree);

	return tree;
}

if (typeof window !== 'undefined') {
	window.linter = linter;

	window.json = testJson;
} else if (typeof global !== 'undefined') {
	global.linter = linter;
}

linter(testJson);
