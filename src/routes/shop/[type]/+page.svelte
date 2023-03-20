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

<div class="w-full flex justify-center">
	<div class="flex flex-wrap justify-center sm:justify-start gap-4 p-4">
		{#each data.items as item}
			<div
				class="card w-52 h-72 bg-base-100 shadow-xl cursor-pointer"
				on:click={() => {
					addItemsToCart(item);
				}}
				on:touchend={() => {
					addItemsToCart(item);
				}}
				on:keypress={() => {}}
			>
				<figure>
					<img src={item.image} alt={item.name} />
				</figure>
				<div class="flex flex-col p-2">
					<h2 class="text-2xl font-bold mb-2 flex items-center">
						{item.name}
						<!-- <div class="ml-4 badge badge-secondary">NEW</div> -->
					</h2>
					<p>{item.description}</p>
					<div class="flex w-full justify-end mt-2 mb-2">
						<span class="font-bold text-primary text-3xl">{item.price}&nbsp;€</span>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
