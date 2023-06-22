<script>
	import { createEventDispatcher } from 'svelte';
	import { ToolType } from '../tools/tool';
	const dispatch = createEventDispatcher();

	/** @type {import('../tools/tool').Tool} */
	export let tool;
	/** @type {boolean} */
	export let selected = false;

	const onClick = () => {
		dispatch('tool', { tool });
	};

	const getIconClasses = () => {
		switch (tool.type) {
			case ToolType.PENCIL:
				return 'fa-solid fa-pencil';
			case ToolType.COLOR_PICKER:
				return 'fa-solid fa-eye-dropper';
		}
	};
</script>

<button
	class="h-8 w-8 rounded border border-gray-800 {selected
		? 'bg-gray-400 shadow-inner shadow-gray-800'
		: 'bg-gray-300'}
    hover:border-2 hover:bg-gray-200"
	on:click={onClick}
>
	<i class="{getIconClasses()} text-black" />
	<span class="sr-only">Select the {tool.name} tool</span>
</button>
