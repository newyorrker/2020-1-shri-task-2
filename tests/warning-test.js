/* eslint-disable no-undef */
require('../build/linter');

const warningJsonStrings = require('./test-data/warning-test-data');
const testRunner = require('./test-runner');

const tests = [
	{
		name: 'warning.text-size.equal',
		text: 'Проверяет в идентичность значения модификатора размера текста',
		targetFunc: lint,
		input: warningJsonStrings.textSizeEqual.input,
		output: warningJsonStrings.textSizeEqual.output
	},
	{
		name: 'warning.button-size',
		text: 'Проверяет правильность валидации размера блока button',
		targetFunc: lint,
		input: warningJsonStrings.buttonSize.input,
		output: warningJsonStrings.buttonSize.output
	},
	{
		name: 'warning.button-position',
		text: 'Проверяет правильность валидации расположения блока button',
		targetFunc: lint,
		input: warningJsonStrings.buttonPosition.input,
		output: warningJsonStrings.buttonPosition.output
	},
	{
		name: 'warning.placeholder-size',
		text: 'Проверяет правильность валидации размера блока placeholder',
		targetFunc: lint,
		input: warningJsonStrings.placeholderSize.input,
		output: warningJsonStrings.placeholderSize.output
	},
	{
		name: 'warning.common-level1',
		text: 'Проверяет правильность валидации нескольких случаев одновременно - уровень 1',
		targetFunc: lint,
		input: warningJsonStrings.commonLevel1.input,
		output: warningJsonStrings.commonLevel1.output
	},
	{
		name: 'warning.common-level2',
		text: 'Проверяет правильность валидации нескольких случаев одновременно - уровень 2',
		targetFunc: lint,
		input: warningJsonStrings.commonLevel2.input,
		output: warningJsonStrings.commonLevel2.output
	},
	{
		name: 'warning.common-level3',
		text: 'Проверяет правильность валидации нескольких случаев одновременно - уровень 3',
		targetFunc: lint,
		input: warningJsonStrings.commonLevel3.input,
		output: warningJsonStrings.commonLevel3.output
	}
];

module.exports = function () {
	testRunner(tests)
};
