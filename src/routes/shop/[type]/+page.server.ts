import { error } from '@sveltejs/kit';
import { shop, shopContent } from '$lib/constants/shop';
import type { ShopItem } from '$lib/constants/shop';

export function load({ params }) {
	if (shop.includes(params.type)) {
		return { items: shopContent.get(params.type) as ShopItem[] };
	} else {
		throw error(404, 'Not found');
	}
}
