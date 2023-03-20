<script lang="ts">
	import '../../app.css';
	import { onDestroy, onMount } from 'svelte';

	export let delay = 1000;
	export let items: string[];

	let currItem = 0;
	let interval = 0;

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
			document.getElementById('hidden-a')?.click();
		}, delay);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="carousel w-full h-full">
	<a id="hidden-a" href="#item-{currItem}" class="hidden">Hidden</a>
	{#each items as item, i}
		<div id="item-{i}" class="carousel-item relative w-full">
			<img src={item} alt="Carousel item {i}" class="w-full h-full" />
		</div>
	{/each}
</div>
