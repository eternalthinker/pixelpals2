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
	});
</script>

<div class="relative h-full min-h-[360px]" bind:this={container}>
	<slot {maxWidth} {maxHeight} />
</div>
