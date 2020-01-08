const blockType = {
	functional: 'functional',
	commercial: 'commercial'
};

const blocks = [
	{
		name: 'payment',
		type: blockType.functional
	},
	{
		name: 'warning',
		type: blockType.functional
	},
	{
		name: 'product',
		type: blockType.functional
	},
	{
		name: 'history',
		type: blockType.functional
	},
	{
		name: 'cover',
		type: blockType.functional
	},
	{
		name: 'collect',
		type: blockType.functional
	},
	{
		name: 'articles',
		type: blockType.functional
	},
	{
		name: 'subscribtion',
		type: blockType.functional
	},
	{
		name: 'event',
		type: blockType.functional
	},
	{
		name: 'commercial',
		type: blockType.commercial
	},
	{
		name: 'offer',
		type: blockType.commercial
	}
];

module.exports.blockType = blockType
module.exports.blocks = blocks;
