<script lang="ts">
	import { shop, type ShopItem } from '$lib/constants/shop';
	import { shop as shopStore } from '$lib/stores/shop';

	let currentShop = '';
	let items: [ShopItem, number][] = [];

	shopStore.subscribe((value) => {
		items = value;
	});

	function updateCurrentShop(shop: string) {
		currentShop = shop;
	}
</script>

<div class="w-full h-full">
	<div class="p-6">
		<div class="hidden sm:flex justify-center items-center">
			<ul class="menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box p-2">
				{#each shop as item}
					<li>
						<a
							href="/shop/{item}"
							class="font-semibold text-lg {currentShop === item ? 'text-primary' : ''}"
							on:click={() => {
								updateCurrentShop(item);
							}}
							on:touchend={() => {
								updateCurrentShop(item);
							}}
							>{item}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="flex">
		<div class="w-full sm:w-8/12">
			<slot />
		</div>
		<div class="hidden sm:block w-4/12">
			<div class="w-[90%] h-[85vh] flex flex-col">
				<h2 class="p-6 text-3xl text-primary font-bold">Shop Cart</h2>
				<div class="grow w-full h-full bg-base-300 rounded-lg relative">
					{#each items as [shopItem, number]}
						<div class="flex justify-between p-4">
							{shopItem.name} x {number}
						</div>
					{/each}
				</div>
				<button class="mt-4 mb-4 btn btn-wide btn-primary self-center"> Buy ! </button>
			</div>
		</div>
	</div>
</div>
