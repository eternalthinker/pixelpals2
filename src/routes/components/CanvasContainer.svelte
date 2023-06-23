<script>
	import { onMount } from 'svelte';
	import { debounce } from '../common/util';

	let maxWidth = 0;
	let maxHeight = 0;

	/**
	 * @type {HTMLDivElement}
	 */
	let container;

	const handleSize = () => {
		const { height, width } = container.getBoundingClientRect();
		maxHeight = height;
		maxWidth = width;
		// console.log('Container change:', maxWidth, maxHeight);
	};

	const handleSizeDebounced = debounce(handleSize);

	onMount(() => {
		handleSize();

		window.addEventListener('resize', handleSizeDebounced);

		return () => {
			window.removeEventListener('resize', handleSizeDebounced);
		};
	});
</script>

<div class="relative h-full min-h-[360px]" bind:this={container}>
	<slot {maxWidth} {maxHeight} />
</div>
