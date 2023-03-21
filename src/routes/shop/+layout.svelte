<script lang="ts">
	import { shop, type ShopItem } from '$lib/constants/shop';
	import { shop as shopStore } from '$lib/stores/shop';
	import { titleCaseWord } from '$lib/utils';

	let currentShop = 'food';
	let items: [ShopItem, number][] = [];

	shopStore.subscribe((value) => {
		items = value;
	});

	function updateCurrentShop(shop: string) {
		currentShop = shop;
	}

	function itemsSize() {
		let size = 0;

		for (const [_, number] of items) {
			size += number;
		}

		return size > 99 ? '99+' : size;
	}
</script>

<div class="w-full h-full">
	<div class="p-6">
		<div class="drawer">
			<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content flex flex-col">
				<!-- Navbar -->
				<div class="w-full navbar bg-base-300">
					<div class="flex-none lg:hidden">
						<label for="my-drawer-3" class="btn btn-square btn-ghost">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block w-6 h-6 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/></svg
							>
						</label>
					</div>
					<div class="flex-1 sm:hidden px-2 mx-2 font-bold text-secondary text-lg">
						{titleCaseWord(currentShop)}
					</div>
					<div class="hidden flex-1 sm:block px-2 mx-2 font-bold text-secondary text-lg">
						OpenBar
					</div>
					<div class="indicator flex-none block sm:hidden mr-2">
						<span class="indicator-item badge badge-secondary w-4 h-4 rounded-full"
							>{itemsSize()}</span
						>
						<a href="/cart">
							<svg
								class="w-7 h-7"
								fill="none"
								stroke="currentColor"
								stroke-width="1.5"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
								/>
							</svg>
						</a>
					</div>
					<div class="flex-none hidden lg:block">
						<ul class="menu menu-horizontal">
							<!-- Navbar menu content here -->
							{#each shop as item}
								<li>
									<a
										href="/shop/{item}"
										class="font-semibold text-lg {currentShop === item ? 'text-primary' : ''}"
										on:click={() => {
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
			<div class="drawer-side">
				<label for="my-drawer-3" class="drawer-overlay" />
				<ul class="menu p-4 w-80 bg-base-100">
					<!-- Sidebar content here -->
					{#each shop as item}
						<li>
							<a
								href="/shop/{item}"
								class="font-semibold text-lg {currentShop === item ? 'text-primary' : ''}"
								on:click={() => {
									updateCurrentShop(item);
								}}
								>{item}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
