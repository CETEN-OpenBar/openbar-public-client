<script lang="ts">
	import type { ShopItem } from '$lib/constants/shop';
	import { shop } from '$lib/stores/shop';

	export let data;

	function addItemsToCart(item: ShopItem) {
		shop.update((items: [ShopItem, number][]) => {
			const index = items.findIndex(([shopItem]) => shopItem.name === item.name);
			if (index === -1) {
				items.push([item, 1]);
			} else {
				items[index][1] += 1;
			}
			return items;
		});
	}
</script>

<div class="flex w-full justify-center">
	<div class="flex flex-wrap justify-center gap-4 p-4 sm:justify-start">
		{#each data.items as item}
			<div
				class="card h-72 w-52 cursor-pointer bg-base-100 shadow-xl"
				on:click={() => {
					addItemsToCart(item);
				}}
				on:keypress={() => {}}
			>
				<figure>
					<img src={item.image} alt={item.name} />
				</figure>
				<div class="flex flex-col p-2">
					<h2 class="mb-2 flex items-center text-2xl font-bold">
						{item.name}
						<!-- <div class="ml-4 badge badge-secondary">NEW</div> -->
					</h2>
					<p>{item.description}</p>
					<div class="mt-2 mb-2 flex w-full justify-end">
						<span class="text-3xl font-bold text-primary">{item.price}&nbsp;€</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
