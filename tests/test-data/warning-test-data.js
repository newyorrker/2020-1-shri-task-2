const errorData = require('../../lib/data/errorData');

const textSizeEqualText = `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "size": "l" } },
        { "block": "text", "mods": { "size": "m" } }
    ]
}`;

const buttonSize = `{
    "block": "warning",
    "content": [
        { "block": "text", "mods": { "size": "l" } },
        { "block": "button", "mods": { "size": "s" } }
    ]
}`;

const buttonPosition = `{
    "block": "warning",
    "content": [
        { "block": "button", "mods": { "size": "m" } },
        { "block": "placeholder", "mods": { "size": "m" } }
    ]
}`;

const placeholderSize = `{
    "block": "warning",
    "content": [
        { "block": "placeholder", "mods": { "size": "xl" }}
    ]
}`;

const commonLevel1 = `{
    "block": "warning",
    "content": [
        {
            "block": "warning",
            "content": [
                { "block": "text", "mods": { "size": "l" } },
                { "block": "placeholder", "mods": { "size": "xs" } },
                { "block": "button", "mods": { "size": "xl" } }
            ]
        },
        { "block": "text", "mods": { "size": "xl" } },
        { "block": "text", "mods": { "size": "xl" } },
        { "block": "button", "mods": { "size": "s" } },
        {
            "block": "warning",
            "content": [
                { "block": "placeholder", "mods": { "size": "m" } },
                { "block": "button", "mods": { "size": "xl" } }
            ]
        }
    ]
}`;

const commonLevel2 = `{
    "block": "warning-parent",
    "content": [
        { "block": "button", "mods": { "size": "xl" } },
        {
            "block": "warning",
            "content": [
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "text", "mods": { "size": "xl" } },
                { "block": "placeholder", "mods": { "size": "xs" } },
                { "block": "button", "mods": { "size": "xl" } }
            ]
        },
        {
            "block": "warning",
            "content": [
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "s" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "placeholder", "mods": { "size": "xs" } },
                { "block": "button", "mods": { "size": "xl" } }
            ]
        },
        {
            "block": "warning",
            "content": [
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "text", "mods": { "size": "l" } },
                { "block": "placeholder", "mods": { "size": "m" } },
                { "block": "button", "mods": { "size": "xl" } }
            ]
        }
    ]
}`;

module.exports = {
	textSizeEqual: {
		input: textSizeEqualText,
		output: [{
			code: errorData.warning.textSizeEqual.code,
			error: errorData.warning.textSizeEqual.error,
			location: {
				start: {
					column: 1,
					line: 1
				},
				end: {
					column: 2,
					line: 7
				}
			}
		}]
	},
	buttonSize: {
		input: buttonSize,
		output: [{
			code: errorData.warning.buttonSize.code,
			error: errorData.warning.buttonSize.error,
			location: {
				start: {
					column: 9,
					line: 5
				},
				end: {
					column: 55,
					line: 5
				}
			}
		}]
	},
	buttonPosition: {
		input: buttonPosition,
		output: [{
			code: errorData.warning.buttonPosition.code,
			error: errorData.warning.buttonPosition.error,
			location: {
				start: {
					column: 9,
					line: 4
				},
				end: {
					column: 55,
					line: 4
				}
			}
		}]
	},
	placeholderSize: {
		input: placeholderSize,
		output: [{
			code: errorData.warning.placeholderSize.code,
			error: errorData.warning.placeholderSize.error,
			location: {
				start: {
					column: 9,
					line: 4
				},
				end: {
					column: 60,
					line: 4
				}
			}
		}]
	},
	commonLevel1: {
		input: commonLevel1,
		output: [
			{
				code: errorData.warning.placeholderSize.code,
				error: errorData.warning.placeholderSize.error,
				location: {
					start: {
						column: 17,
						line: 8
					},
					end: {
						column: 69,
						line: 8
					}
				}
			},
			{
				code: errorData.warning.textSizeEqual.code,
				error: errorData.warning.textSizeEqual.error,
				location: {
					start: {
						column: 1,
						line: 1
					},
					end: {
						column: 2,
						line: 23
					}
				}
			},
			{
				code: errorData.warning.buttonSize.code,
				error: errorData.warning.buttonSize.error,
				location: {
					start: {
						column: 9,
						line: 14
					},
					end: {
						column: 55,
						line: 14
					}
				}
			},
			{
				code: errorData.warning.buttonPosition.code,
				error: errorData.warning.buttonPosition.error,
				location: {
					start: {
						column: 9,
						line: 14
					},
					end: {
						column: 55,
						line: 14
					}
				}
			}
		]
	},
	commonLevel2: {
		input: commonLevel2,
		output: [
			{
				code: errorData.warning.textSizeEqual.code,
				error: errorData.warning.textSizeEqual.error,
				location: {
					start: {
						column: 9,
						line: 5
					},
					end: {
						column: 10,
						line: 38
					}
				}
			},
			{
				code: errorData.warning.placeholderSize.code,
				error: errorData.warning.placeholderSize.error,
				location: {
					start: {
						column: 17,
						line: 35
					},
					end: {
						column: 69,
						line: 35
					}
				}
			},
			{
				code: errorData.warning.textSizeEqual.code,
				error: errorData.warning.textSizeEqual.error,
				location: {
					start: {
						column: 9,
						line: 39
					},
					end: {
						column: 10,
						line: 67
					}
				}
			},
			{
				code: errorData.warning.buttonPosition.code,
				error: errorData.warning.buttonPosition.error,
				location: {
					start: {
						column: 17,
						line: 36
					},
					end: {
						column: 64,
						line: 36
					}
				}
			},
			{
				code: errorData.warning.placeholderSize.code,
				error: errorData.warning.placeholderSize.error,
				location: {
					start: {
						column: 17,
						line: 64
					},
					end: {
						column: 69,
						line: 64
					}
				}
			},
			{
				code: errorData.warning.buttonPosition.code,
				error: errorData.warning.buttonPosition.error,
				location: {
					start: {
						column: 17,
						line: 65
					},
					end: {
						column: 64,
						line: 65
					}
				}
			}
		]
	}
}
