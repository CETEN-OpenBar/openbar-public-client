<script>
	let name = '';
	let greetMsg = '';

	function greet() {
		greetMsg = `Welcome, ${name}!`;
	}
</script>

<div>
	<input id="greet-input" placeholder="Enter a name..." bind:value={name} />
	<button on:click={greet}>Greet</button>
	<p>{greetMsg}</p>
</div>
