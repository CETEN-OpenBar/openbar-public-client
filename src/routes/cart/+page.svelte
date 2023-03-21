<script lang="ts">
	import type { ShopItem } from '$lib/constants/shop';
	import { shop } from '$lib/stores/shop';

	let items: [ShopItem, number][] = [];

	shop.subscribe((value) => {
		items = value;
	});
</script>

<div class="flex h-screen w-full flex-col items-center justify-center">
	<a href="/shop/food" class="self-start pt-6 pl-6">
		<span>&larr;&nbsp;Previous</span>
	</a>
	<h2 class="self-start p-6 text-3xl font-bold text-primary">Shop Cart</h2>
	<div class="relative h-full w-[90%] grow rounded-lg bg-base-300">
		{#each items as [shopItem, number]}
			<div class="flex justify-between p-4">
				{shopItem.name} x {number}
			</div>
		{/each}
	</div>
	<button class="btn-primary btn-wide btn mt-4 mb-4 self-center"> Buy ! </button>
</div>
