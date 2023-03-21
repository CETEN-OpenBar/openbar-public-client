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

<div class="h-full w-full">
	<div class="p-6">
		<div class="drawer">
			<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
			<div class="drawer-content flex flex-col">
				<!-- Navbar -->
				<div class="navbar w-full bg-base-300">
					<div class="flex-none lg:hidden">
						<label for="my-drawer-3" class="btn-ghost btn-square btn">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								class="inline-block h-6 w-6 stroke-current"
								><path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 6h16M4 12h16M4 18h16"
								/></svg
							>
						</label>
					</div>
					<div class="mx-2 flex-1 px-2 text-lg font-bold text-secondary sm:hidden">
						{titleCaseWord(currentShop)}
					</div>
					<div class="mx-2 hidden flex-1 px-2 text-lg font-bold text-secondary sm:block">
						OpenBar
					</div>
					<div class="indicator mr-2 block flex-none sm:hidden">
						<span class="badge-secondary badge indicator-item h-4 w-4 rounded-full"
							>{itemsSize()}</span
						>
						<a href="/cart">
							<svg
								class="h-7 w-7"
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
					<div class="hidden flex-none lg:block">
						<ul class="menu menu-horizontal">
							<!-- Navbar menu content here -->
							{#each shop as item}
								<li>
									<a
										href="/shop/{item}"
										class="text-lg font-semibold {currentShop === item ? 'text-primary' : ''}"
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
					<div class="hidden w-4/12 sm:block">
						<div class="flex h-[85vh] w-[90%] flex-col">
							<h2 class="p-6 text-3xl font-bold text-primary">Shop Cart</h2>
							<div class="relative h-full w-full grow rounded-lg bg-base-300">
								{#each items as [shopItem, number]}
									<div class="flex justify-between p-4">
										{shopItem.name} x {number}
									</div>
								{/each}
							</div>
							<button class="btn-primary btn-wide btn mt-4 mb-4 self-center"> Buy ! </button>
						</div>
					</div>
				</div>
			</div>
			<div class="drawer-side">
				<label for="my-drawer-3" class="drawer-overlay" />
				<ul class="menu w-80 bg-base-100 p-4">
					<!-- Sidebar content here -->
					{#each shop as item}
						<li>
							<a
								href="/shop/{item}"
								class="text-lg font-semibold {currentShop === item ? 'text-primary' : ''}"
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
