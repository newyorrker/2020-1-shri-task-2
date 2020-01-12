require('../build/linter');

const gridJsonStrings = require('./test-data/grid-test-data');
const testRunner = require('./test-runner');

const tests = [
	{
		name: 'grid.to-much.marketing.level1',
		text: 'Проверяет правильность валидации количества маркетинговых блоков в блоке grid',
		targetFunc: lint,
		input: gridJsonStrings.gridLevel1.input,
		output: gridJsonStrings.gridLevel1.output
	},
	{
		name: 'grid.to-much.marketing.level2',
		text: 'Проверяет правильность валидации количества маркетинговых блоков в блоке grid',
		targetFunc: lint,
		input: gridJsonStrings.gridLevel2.input,
		output: gridJsonStrings.gridLevel2.output
	}
];

module.exports = function () {
	testRunner(tests)
};
