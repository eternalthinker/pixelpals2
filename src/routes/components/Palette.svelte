<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	/** @type {string[]} */
	export let colors;

	/** @type {string} */
	export let activeColor;

	$: hexColors = colors.map((color) => {
		if (color.startsWith('#')) {
			return color;
		}
		return `#${color}`;
	});

	/**
	 * @param {string} color
	 */
	const getOnClick = (color) => () => {
		dispatch('color', { color });
		activeColor = color;
	};
</script>

<section class="flex flex-wrap justify-center gap-1 rounded bg-white p-2">
	{#each hexColors as color}
		<button
			on:click={getOnClick(color)}
			class="h-6 w-6 shrink-0 cursor-pointer rounded-sm {color === activeColor
				? 'border-2'
				: 'border'} border-gray-800 hover:border-4 focus:border-4"
			style:background={color}
		>
			<span class="sr-only">Select the color {color}</span>
		</button>
	{/each}
</section>
