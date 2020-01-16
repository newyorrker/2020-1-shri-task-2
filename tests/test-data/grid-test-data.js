const errorData = require('../../lib/data/errorData');

const gridLevel1 = `{
    "block": "grid",
    "mods": {
        "m-columns": "10"
    },
    "content": [
        {
            "block": "grid",
            "elem": "fraction",
            "elemMods": {
                "m-col": "2"
            },
            "content": [
                {
                    "block": "payment"
                }
            ]
        },
        {
            "block": "grid",
            "elem": "fraction",
            "elemMods": {
                "m-col": "8"
            },
            "content": [
                {
                    "block": "offer"
                }
            ]
        }
    ]
 }`;

const gridLevel2 = `{
    "block": "layout",
    "content": [
        {
            "block": "grid",
            "mods": {
                "m-columns": "10"
            },
            "content": [
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods": {
                        "m-col": "1"
                    },
                    "content": [
                        {
                            "block": "collect"
                        }
                    ]
                },
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods": {
                        "m-col": "1"
                    },
                    "content": [
                        {
                            "block": "articles"
                        }
                    ]
                },
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods": {
                        "m-col": "8"
                    },
                    "content": [
                        {
                            "block": "offer"
                        }
                    ]
                }
            ]
        },
        {
            "block": "grid",
            "mods": {
                "m-columns": "10"
            },
            "content": [
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods": {
                        "m-col": "1"
                    },
                    "content": [
                        {
                            "block": "history"
                        }
                    ]
                },
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods": {
                        "m-col": "3"
                    },
                    "content": [
                        {
                            "block": "subscribtion"
                        }
                    ]
                },
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods": {
                        "m-col": "6"
                    },
                    "content": [
                        {
                            "block": "offer"
                        }
                    ]
                }
            ]
        },
        {
            "block": "grid",
            "mods": {
                "m-columns": "12"
            },
            "content": [
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods": {
                        "m-col": "4"
                    },
                    "content": [
                        {
                            "block": "warning"
                        }
                    ]
                },
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods": {
                        "m-col": "4"
                    },
                    "content": [
                        {
                            "block": "commercial"
                        }
                    ]
                },
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods": {
                        "m-col": "4"
                    },
                    "content": [
                        {
                            "block": "offer"
                        }
                    ]
                }
            ]
        },
        {
            "block": "grid",
            "mods": {
                "m-columns": "12"
            },
            "content": [
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods": {
                        "m-col": "4"
                    },
                    "content": [
                        {
                            "block": "product"
                        }
                    ]
                },
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods": {
                        "m-col": "4"
                    },
                    "content": [
                        {
                            "block": "event"
                        }
                    ]
                },
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods": {
                        "m-col": "2"
                    },
                    "content": [
                        {
                            "block": "commercial"
                        }
                    ]
                },
                {
                    "block": "grid",
                    "elem": "fraction",
                    "elemMods": {
                        "m-col": "2"
                    },
                    "content": [
                        {
                            "block": "offer"
                        }
                    ]
                }
            ]
        }
    ]
 }`;

const gridLevel3 = `{
    "block": "grid",
    "mods": {
        "m-columns": "10"
    },
    "content": [
        {
            "block": "grid",
            "elem": "fraction",
            "elemMods": {
                "m-col": "2"
            },
            "content": [
                {
                    "block": "payment"
                }
            ]
        },
        {
            "block": "grid",
            "elem": "fraction",
            "elemMods": {
                "m-col": "8"
            },
            "content": [
                {
                    "block": "history"
                }
            ]
        }
    ]
 }`

module.exports = {
	gridLevel1: {
		input: gridLevel1,
		output: [{
			code: errorData.grid.toMuchMarketing.code,
			error: errorData.grid.toMuchMarketing.error,
			location: {
				start: {
					column: 1,
					line: 1
				},
				end: {
					column: 3,
					line: 32
				}
			}
		}]
	},
	gridLevel2: {
		input: gridLevel2,
		output: [
			{
				code: errorData.grid.toMuchMarketing.code,
				error: errorData.grid.toMuchMarketing.error,
				location: {
					start: {
						column: 9,
						line: 4
					},
					end: {
						column: 10,
						line: 47
					}
				}
			},
			{
				code: errorData.grid.toMuchMarketing.code,
				error: errorData.grid.toMuchMarketing.error,
				location: {
					start: {
						column: 9,
						line: 48
					},
					end: {
						column: 10,
						line: 91
					}
				}
			},
			{
				code: errorData.grid.toMuchMarketing.code,
				error: errorData.grid.toMuchMarketing.error,
				location: {
					start: {
						column: 9,
						line: 92
					},
					end: {
						column: 10,
						line: 135
					}
				}
			}
		]
	},
	gridLevel3: {
		input: gridLevel3,
		output: []
	}
}
