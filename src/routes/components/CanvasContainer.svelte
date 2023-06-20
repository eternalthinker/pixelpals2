<script>
	import { onMount } from 'svelte';

	let maxWidth = 0;
	let maxHeight = 0;

	/**
	 * @type {HTMLDivElement}
	 */
	let container;

	onMount(() => {
		const { height, width } = container.getBoundingClientRect();
		maxHeight = height;
		maxWidth = width;
		console.log('container', maxWidth, maxHeight);
	});
</script>

<div class="relative h-full" bind:this={container}>
	<slot {maxWidth} {maxHeight} />
</div>
