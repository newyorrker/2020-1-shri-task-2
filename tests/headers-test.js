require('../build/linter');

const headersJsonStrings = require('./test-data/headers-test-data');
const testRunner = require('./test-runner');

const tests = [
	{
		name: 'several_h1.level1',
		text: 'Проверяет в единственном ли экземпляре заголовок h1',
		targetFunc: lint,
		input: headersJsonStrings.headerH1Level1.input,
		output: headersJsonStrings.headerH1Level1.output
	},
	{
		name: 'several_h1.level2',
		text: 'Проверяет в единственном ли экземпляре заголовок h1',
		targetFunc: lint,
		input: headersJsonStrings.headerH1Level2.input,
		output: headersJsonStrings.headerH1Level2.output
	},
	{
		name: 'position_h2.level1',
		text: 'Проверяет стоит ли перед заголовоком h1 заголовок h2',
		targetFunc: lint,
		input: headersJsonStrings.headerH2Level1.input,
		output: headersJsonStrings.headerH2Level1.output
	},
	{
		name: 'position_h2.level2',
		text: 'Проверяет стоит ли перед заголовоком h1 заголовок h2',
		targetFunc: lint,
		input: headersJsonStrings.headerH2Level2.input,
		output: headersJsonStrings.headerH2Level2.output
	},
	{
		name: 'position_h3.level1',
		text: 'Проверяет стоит ли перед заголовоком h2 заголовок h3',
		targetFunc: lint,
		input: headersJsonStrings.headerH3Level1.input,
		output: headersJsonStrings.headerH3Level1.output
	}
];

// console.log(headersJsonStrings.headerH1Level2.input);
// console.log(testjson);

module.exports = function () {
	testRunner(tests)
};
