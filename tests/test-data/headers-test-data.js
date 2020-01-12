const errorData = require('../../lib/data/errorData');

const headerH1Level1Text = `[
    {
        "block": "text",
        "mods": { "type": "h1" }
    },
    {
        "block": "text",
        "mods": { "type": "h1" }
    }
]`;

const headerH1Level2Text = `{
    "block": "text-container",
    "content": [
        {
            "block": "text",
            "mods": { "type": "h1" }
        },
        {
            "block": "text-inner-container",
            "content": [
                {
                    "block": "text",
                    "mods": { "type": "h1" }
                },
                {
                    "block": "text",
                    "mods": { "type": "h2" }
                }
            ]
        }
    ]
}`;

const headerH2Level1Text = `[
    {
        "block": "text",
        "mods": { "type": "h2" }
    },
    {
        "block": "text",
        "mods": { "type": "h1" }
    }
]`;

const headerH2Level2Text = `{
    "block": "text-container",
    "content": [
        {
            "block": "text-inner-container",
            "content": [
                {
                    "block": "text",
                    "mods": { "type": "h2" }
                }
            ]
        },
        {
            "block": "text-inner-container",
            "content": [
                {
                    "block": "text",
                    "mods": { "type": "h1" }
                },
                {
                    "block": "text",
                    "mods": { "type": "h2" }
                }
            ]
        }
    ]
}`;

const headerH3Level1Text = `[
    {
        "block": "text",
        "mods": { "type": "h3" }
    },
    {
        "block": "text",
        "mods": { "type": "h2" }
    }
]`;

module.exports = {
	headerH1Level1: {
		input: headerH1Level1Text,
		output: [{
			code: errorData.text.severalH1.code,
			error: errorData.text.severalH1.error,
			location: {
				start: {
					column: 5,
					line: 6
				},
				end: {
					column: 6,
					line: 9
				}
			}
		}]
	},
	headerH1Level2: {
		input: headerH1Level2Text,
		output: [{
			code: errorData.text.severalH1.code,
			error: errorData.text.severalH1.error,
			location: {
				start: {
					column: 17,
					line: 11
				},
				end: {
					column: 18,
					line: 14
				}
			}
		}]
	},
	headerH2Level1: {
		input: headerH2Level1Text,
		output: [{
			code: errorData.text.positionH2.code,
			error: errorData.text.positionH2.error,
			location: {
				start: {
					column: 5,
					line: 6
				},
				end: {
					column: 6,
					line: 9
				}
			}
		}]
	},
	headerH2Level2: {
		input: headerH2Level2Text,
		output: [{
			code: errorData.text.positionH2.code,
			error: errorData.text.positionH2.error,
			location: {
				start: {
					column: 17,
					line: 16
				},
				end: {
					column: 18,
					line: 19
				}
			}
		}]
	},
	headerH3Level1: {
		input: headerH3Level1Text,
		output: [{
			code: errorData.text.positionH3.code,
			error: errorData.text.positionH3.error,
			location: {
				start: {
					column: 5,
					line: 6
				},
				end: {
					column: 6,
					line: 9
				}
			}
		}]
	}
}
