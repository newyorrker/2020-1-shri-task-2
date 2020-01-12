const jsonPrser = require('./utils/jsonParser');
const analysis = require('./analyser');

const lint = (json) => {
	const tree = jsonPrser(json);

	const errors = analysis(tree);

	return errors;
}

if (typeof window !== 'undefined') {
	window.lint = lint;
} else if (typeof global !== 'undefined') {
	global.lint = lint;
}
