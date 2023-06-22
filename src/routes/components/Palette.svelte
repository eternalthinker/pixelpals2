<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	/** @type {string[]} */
	export let colors;

	/** @type {string} */
	export let activeColor;

	$: hexColors = colors.map((color) => {
		if (color.startsWith('#')) {
			return color.toLowerCase();
		}
		return `#${color.toLowerCase()}`;
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
			class="color relative h-6 w-6 shrink-0 cursor-pointer overflow-hidden rounded-sm {color ===
				activeColor && 'selected'} hover:hover focus:hover border border-gray-800"
			style:background={color}
			aria-current={color === activeColor}
			aria-pressed={color === activeColor}
		>
			<span class="sr-only">Select the color {color}</span>
		</button>
	{/each}
</section>

<style lang="postcss">
	.color.selected {
		box-shadow: 0px 0px 0px 1px theme(colors.gray.800), inset 0px 0px 1px 2px theme(colors.white);
	}

	.color:hover,
	.color:focus {
		box-shadow: 0px 0px 0px 2px theme(colors.gray.800), inset 0px 0px 1px 2px theme(colors.white);
		outline: none;
	}

	.selected:after,
	.selected:before {
		@apply absolute left-0 top-0 h-0 w-0;
		content: '';
	}

	.selected:before {
		border-width: 5px;
		border-color: theme(colors.white) transparent transparent theme(colors.white);
	}

	.selected:after {
		border-width: 4px;
		border-color: theme(colors.black) transparent transparent theme(colors.black);
	}
</style>
