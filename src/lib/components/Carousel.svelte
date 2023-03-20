<script lang="ts">
	import '../../app.css';
	import { onDestroy, onMount } from 'svelte';

	export let delay = 2000;
	export let items: string[];

	let currItem = 0;
	let interval = 0;
	let displayItems: any[] = [];
	for (let i = 0; i < items.length; i++) {
		displayItems.push({
			url: items[i] + '?' + i
		});
	}

	function nextItem() {
		if (currItem === items.length - 1) {
			currItem = 0;
		} else {
			currItem++;
		}
	}

	onMount(() => {
		interval = setInterval(() => {
			nextItem();
		}, delay);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="h-full w-full">
	{#each displayItems as item, i}
		<div
			class="absolute h-full w-full"
			style="background-image: url({item.url}); background-size: cover; background-position: center; opacity: {i ===
			currItem
				? 1
				: 0}; transition: opacity 1s ease;"
		/>
	{/each}
</div>
