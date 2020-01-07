var _ = require('lodash/object');

function checkType (element, type) {
	return element.type === type;
}

function checkBemEntity (element, entity) {
	return _.has(element, 'key.value') && element.key.value === entity;
}

function isBlock (element) {
	return checkBemEntity(element, 'block');
}

function isElem (element) {
	return checkBemEntity(element, 'elem');
}

function isMods (element) {
	return checkBemEntity(element, 'mods');
}

function isContent (element) {
	return checkBemEntity(element, 'content');
}

module.exports = {
	checkType: checkType,
	checkBemEntity: checkBemEntity,
	isBlock: isBlock,
	isElem: isElem,
	isMods: isMods,
	isContent: isContent
};
