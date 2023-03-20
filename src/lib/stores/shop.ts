import type { ShopItem } from '$lib/constants/shop';
import { writable } from 'svelte/store';

export const shop = writable([] as [ShopItem, number][]);
