<script>
	let name = '';
	let greetMsg = '';
	export let color = 'red';

	function greet() {
		greetMsg = `Welcome, ${name}!`;
	}
</script>

<div>
	<input id="greet-input" placeholder="Enter a name..." bind:value={name} />
	<button on:click={greet}>Greet</button>
	<p>{greetMsg}</p>
	<p>{color}</p>
</div>
