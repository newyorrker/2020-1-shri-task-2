function writeError (prop, errorData, errors) {
	const errorModel = {
		code: errorData.code,
		error: errorData.error,
		location: {
			start: { column: prop.loc.start.column, line: prop.loc.start.line },
			end: { column: prop.loc.end.column, line: prop.loc.end.line }
		}
	}
	console.error(errorData.code);
	errors.push(errorModel);
}

module.exports.writeError = writeError;
