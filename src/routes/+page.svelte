<script>
	import PixelCanvas from './components/PixelCanvas.svelte';
	import CanvasContainer from './components/CanvasContainer.svelte';
	import NetworkCanvas from './components/NetworkCanvas.svelte';
	import Palette from './components/Palette.svelte';
	import { HEIGHT_PIXELS, PALETTE_COLORS, WIDTH_PIXELS } from './common/config';
	import Tool from './components/Tool.svelte';
	import { Pencil } from './tools/pencil';
	import { ColorPicker } from './tools/colorPicker';

	let color = '#ff0000';

	const pencil = new Pencil();
	const onColor = (/** @type {string} */ newColor) => (color = newColor);
	const colorPicker = new ColorPicker(onColor);

	let tool = pencil;

	/**
	 * @param {CustomEvent<{color: string}>} param0
	 */
	const onColorChange = ({ detail }) => {
		color = detail.color;
	};

	/**
	 * @param {CustomEvent<{tool: import('./tools/tool').Tool}>} param0
	 */
	const onToolChange = ({ detail }) => {
		tool = detail.tool;
	};
</script>

<div class="flex h-full flex-col bg-gray-500">
	<header class="flex items-center justify-evenly gap-4 bg-gray-800 px-8 py-2">
		<div class="flex flex-grow items-center gap-4">
			<h1 class="font-display text-4xl font-bold text-white">PixelPals</h1>
			<h3 class="hidden pt-2 font-body text-lg text-white md:block">
				A collaborative pixel canvas
			</h3>
		</div>
		<div class="flex-shrink">
			<p class="pt-2 font-body text-sm text-gray-100">
				Made by <a
					class="underline hover:text-teal-400"
					href="https://github.com/eternalthinker"
					target="_blank">eternalthinker</a
				>
			</p>
		</div>
	</header>

	<main class="box-border grid h-full overflow-scroll px-10 md:grid-cols-6">
		<div class="canvasBackground col-span-5">
			<CanvasContainer let:maxWidth let:maxHeight>
				<PixelCanvas {maxWidth} {maxHeight} widthPixels={WIDTH_PIXELS} heightPixels={HEIGHT_PIXELS}>
					<NetworkCanvas />
				</PixelCanvas>

				<PixelCanvas
					{maxWidth}
					{maxHeight}
					{color}
					{tool}
					widthPixels={WIDTH_PIXELS}
					heightPixels={HEIGHT_PIXELS}
				/>
			</CanvasContainer>
		</div>

		<div class="sideBar flex flex-col justify-center gap-4 p-4">
			<section class="flex flex-wrap justify-center gap-2 rounded bg-white p-2">
				<Tool tool={pencil} on:tool={onToolChange} selected={tool.type === pencil.type} />
				<Tool tool={colorPicker} on:tool={onToolChange} selected={tool.type === colorPicker.type} />
			</section>
			<Palette colors={PALETTE_COLORS} activeColor={color} on:color={onColorChange} />
		</div>
	</main>
</div>
