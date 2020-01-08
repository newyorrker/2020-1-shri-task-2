const jsonPrser = require('./utils/jsonParser');
const analysis = require('./analyser');
const testJson = require('./testjson');

const lint = (json) => {
	const tree = jsonPrser(json);

	// console.info(json);

	const errors = analysis(tree);

	console.log(window.errors)

	return errors;
}

if (typeof window !== 'undefined') {
	window.lint = lint;

	window.json = testJson;
} else if (typeof global !== 'undefined') {
	global.lint = lint;
}

lint(testJson);
