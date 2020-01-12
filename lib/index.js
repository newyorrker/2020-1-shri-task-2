require('./linter');

const testJson = require('./testjson');
const errors = lint(testJson);

console.log(errors, 'errors');
