export const shop = ['food', 'drinks', 'snacks'];

export const shopContent = new Map<string, ShopItem[]>([
	[
		'food',
		[
			{
				name: 'Burger',
				price: 5,
				description: 'A delicious burger',
				image: 'https://picsum.photos/200/300'
			},
			{
				name: 'Pizza',
				price: 5,
				description: 'A delicious pizza',
				image: 'https://picsum.photos/200/300'
			},
			{
				name: 'Hotdog',
				price: 5,
				description: 'A delicious hotdog',
				image: 'https://picsum.photos/200/300'
			},
			{
				name: 'Sandwich',
				price: 5,
				description: 'A delicious sandwich',
				image: 'https://picsum.photos/200/300'
			},
			{
				name: 'Fries',
				price: 5,
				description: 'A delicious fries',
				image: 'https://picsum.photos/200/300'
			}
		]
	],
	[
		'drinks',
		[
			{
				name: 'Coke',
				price: 5,
				description: 'A delicious coke',
				image: 'https://picsum.photos/200/300'
			}
		]
	],
	[
		'snacks',
		[
			{
				name: 'Chips',
				price: 5,
				description: 'A delicious chips',
				image: 'https://picsum.photos/200/300'
			}
		]
	]
]);

export type ShopItem = {
	name: string;
	price: number;
	description: string;
	image: string;
};
