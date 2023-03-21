<script lang="ts">
	import Carousel from '$lib/components/Carousel.svelte';

	let items = [
		'https://picsum.photos/1920/1080',
		'https://picsum.photos/1920/1080',
		'https://picsum.photos/1920/1080',
		'https://picsum.photos/1920/1080'
	];
</script>

<div class="h-screen w-full">
	<Carousel {items} />
</div>
