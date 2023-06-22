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
	const colorPicker = new ColorPicker();

	let tool = pencil;

	/**
	 *
	 * @param {CustomEvent<{color: string}>} param0
	 */
	const onColorChange = ({ detail }) => {
		color = detail.color;
	};

	const onToolChange = ({ detail }) => {
		tool = detail.tool;
	};
</script>

<div class="flex h-full flex-col bg-gray-500">
	<header class="flex items-center bg-emerald-600 px-4 py-2">
		<h1 class="text-2xl font-bold text-emerald-50">PixelPals</h1>
		<h3 class="ml-4 text-emerald-100">A collaborative pixel canvas</h3>
	</header>

	<main class="box-border grid h-full flex-auto grid-cols-5">
		<div class="canvasBackground col-span-4 bg-gray-600">
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

		<div class="sideBar flex flex-col gap-4 p-4">
			<section class="flex flex-wrap justify-center gap-2 rounded bg-white p-2">
				<Tool tool={pencil} on:tool={onToolChange} selected={tool.type === pencil.type} />
				<Tool tool={colorPicker} on:tool={onToolChange} selected={tool.type === colorPicker.type} />
			</section>
			<Palette colors={PALETTE_COLORS} activeColor={color} on:color={onColorChange} />
		</div>
	</main>
</div>
