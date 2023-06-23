<script>
	import { createEventDispatcher, onMount } from 'svelte';
	const dispatch = createEventDispatcher();

	/** @type {import('../tools/tool').Tool} */
	export let tool;
	/** @type {boolean} */
	export let selected = false;

	const onClick = () => {
		dispatch('tool', { tool });
	};

	/**
	 * @param {KeyboardEvent} e
	 */
	const onKeyPress = (e) => {
		if (e.key === tool.keyTrigger) {
			onClick();
		}
	};

	onMount(() => {
		window.addEventListener('keyup', onKeyPress);

		return () => {
			window.removeEventListener('keyup', onKeyPress);
		};
	});
</script>

<button
	class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded border border-gray-800 {selected
		? 'selected bg-gray-400'
		: 'bg-gray-300 hover:border-2 hover:bg-gray-200 focus:border-2 focus:bg-gray-200'}"
	aria-pressed={selected}
	aria-current={selected ? true : undefined}
	on:click={onClick}
>
	<!-- <i class="{getIconClasses()} text-black" /> -->
	<img src={tool.icon} alt="" />
	<span class="sr-only">Click to select {tool.name} tool, or press {tool.keyTrigger}</span>
</button>

<style lang="postcss">
	.selected {
		box-shadow: inset -1px 2px 1px theme(colors.gray.800);
	}
</style>
