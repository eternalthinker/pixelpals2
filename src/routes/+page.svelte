<script>
	import PixelCanvas from './components/PixelCanvas.svelte';
	import CanvasContainer from './components/CanvasContainer.svelte';
	import NetworkCanvas from './components/NetworkCanvas.svelte';
	import Palette from './components/Palette.svelte';
	import { HEIGHT_PIXELS, PALETTE_COLORS, WIDTH_PIXELS } from './common/config';

	let color = '#ff0000';

	/**
	 *
	 * @param {CustomEvent<{color: string}>} param0
	 */
	const onColorChange = ({ detail }) => {
		color = detail.color;
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
					widthPixels={WIDTH_PIXELS}
					heightPixels={HEIGHT_PIXELS}
				/>
			</CanvasContainer>
		</div>

		<div class="sideBar p-4">
			<Palette colors={PALETTE_COLORS} activeColor={color} on:color={onColorChange} />
		</div>
	</main>
</div>
