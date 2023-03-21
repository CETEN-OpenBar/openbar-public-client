<script lang="ts">
	import type { ShopItem } from '$lib/constants/shop';
	import { shop } from '$lib/stores/shop';

	let items: [ShopItem, number][] = [];

	shop.subscribe((value) => {
		items = value;
	});
</script>

<div class="w-full h-screen flex flex-col justify-center items-center">
	<a href="/shop/food" class="self-start pt-6 pl-6">
		<span>&larr;&nbsp;Previous</span>
	</a>
	<h2 class="p-6 text-3xl text-primary font-bold self-start">Shop Cart</h2>
	<div class="grow w-[90%] h-full bg-base-300 rounded-lg relative">
		{#each items as [shopItem, number]}
			<div class="flex justify-between p-4">
				{shopItem.name} x {number}
			</div>
		{/each}
	</div>
	<button class="mt-4 mb-4 btn btn-wide btn-primary self-center"> Buy ! </button>
</div>
