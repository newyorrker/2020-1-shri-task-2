module.exports = `{
    "block": "container",
    "content": [
        {
            "block": "warning",
            "content": [
                {
                    "block": "placeholder",
                    "mods": { "size": "m" }
                },
                {
                    "block": "text",
                    "mods": { "type": "h3" }
                },
                {
                    "elem": "content",
                    "content": [
                        {
                            "block": "hedercontainer",
                            "content": [
                                {
                                    "block": "text",
                                    "mods": { "type": "h1" }
                                },
                                {
                                    "block": "text",
                                    "mods": { "type": "h2" }
                                },
                                {
                                    "block": "text",
                                    "mods": { "type": "h3" }
                                },
                                {
                                    "block": "image",
                                    "mods": { "size": "l" }
                                }
                            ]
                        },
                        {
                            "block": "text",
                            "mods": { "type": "h1" }
                        },
                        {
                            "block": "text",
                            "mods": { "type": "h2" }
                        },
                        {
                            "block": "text",
                            "mods": { "size": "m" }
                        },
                        {
                            "block": "text",
                            "mods": { "size": "l" }
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
                        "m-col": "10"
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
            "block": "system",
            "content": [
                {
                    "block": "placeholder",
                    "mods": { "size": "xs" }
                },
                {
                    "elem": "content",
                    "content": [
                        {
                            "block": "text",
                            "mods": { "size": "m" }
                        },
                        {
                            "block": "song",
                            "content": [
                                {
                                    "block": "text",
                                    "mods": { "type": "h2" }
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}`;
