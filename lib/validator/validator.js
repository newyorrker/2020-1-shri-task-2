const processWarningBlock = require('./blocks/warning');
const processGridBlock = require('./blocks/grid');
const processTextBlock = require('./blocks/text');

const validator = () => {
	const store = {
		currentBlock: {},
		textSizeMod: '',
		warnings: [],
		grids: [],
		texts: [],
		currentObj: {},
		warningBlockInfo: {
			button: {
				exist: false,
				obj: {}
			},
			placeholder: {
				obj: {}
			}
		},
		textInfo: {
			exist: {
				h1: false,
				h2: false,
				h3: false
			}
		},
		errors: []
	};

	function validate (prop) {
		const key = prop.key.value;
		const value = prop.value.value;

		if (this.store.warnings.length > 0) {
			processWarningBlock(this.store, key, value, prop);
		}

		if (this.store.grids.length > 0) {
			processGridBlock(this.store, key, value);
		}

		if (this.store.texts.length > 0) {
			processTextBlock(this.store, key, value);
		}
	}

	return {
		validate: validate,
		store: store,
		errors: store.errors
	}
}
module.exports = validator;
