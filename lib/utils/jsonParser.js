const jsonToAst = require('json-to-ast');

function parseJson (json) {
	return jsonToAst(json)
}

module.exports = parseJson;
