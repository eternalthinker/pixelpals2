<script>
	import { onMount, setContext } from 'svelte';
	import { tick } from 'svelte';
	import { pixelCanvasContextKey } from './keys';
	// @ts-ignore
	// eslint-disable-next-line no-unused-vars
	import * as Types from '../components/types';
	import { Pencil } from '../tools/pencil';

	export let maxWidth = 0;
	export let maxHeight = 0;
	export let color = '#333333';

	export let widthPixels;
	export let heightPixels;

	let width = widthPixels;
	let height = heightPixels;
	let pixelSize = 1;

	/**
	 * @type {HTMLCanvasElement}
	 */
	let canvas;

	/**
	 * @type {CanvasRenderingContext2D | null}
	 */
	let context;

	/**
	 * @type {Types.SetPixelFn}
	 */
	const setPixel = (x, y, pixelColor = color) => {
		const px = Math.floor(x);
		const py = Math.floor(y);
		if (!(0 <= px && px < widthPixels && 0 <= py && py < heightPixels)) {
			return;
		}
		if (context == null) {
			return;
		}
		context.fillStyle = pixelColor;
		context.beginPath();
		context.rect(px * pixelSize, py * pixelSize, pixelSize, pixelSize);
		context.fill();
	};

	const clear = () => {
		context?.clearRect(0, 0, width, height);
	};

	setContext(pixelCanvasContextKey, { setPixel, clear });

	onMount(async () => {
		context = canvas.getContext('2d');
		await tick(); // Await container mount
		handleSize();
		await tick(); // Await size correction
	});

	$: if (context) {
		context.fillStyle = color;
	}

	const handleSize = () => {
		const widthPixelSize = Math.floor(maxWidth / widthPixels);
		const heightPixelSize = Math.floor(maxHeight / heightPixels);
		pixelSize = Math.min(widthPixelSize, heightPixelSize);
		width = pixelSize * widthPixels;
		height = pixelSize * heightPixels;
		console.log('size', maxWidth, maxHeight, pixelSize, width, height);
	};

	/**
	 * @param {number} x
	 * @param {number} y
	 */
	const canvasToPixelCoordinates = (x, y) => {
		return {
			x: Math.floor(x / pixelSize) - (x % pixelSize ? 0 : 1),
			y: Math.floor(y / pixelSize) - (y % pixelSize ? 0 : 1)
		};
	};

	const tool = new Pencil();

	/**
	 * @param {MouseEvent} e
	 */
	const handleMouseDown = (e) => {
		const { offsetX, offsetY } = e;
		const { x, y } = canvasToPixelCoordinates(offsetX, offsetY);
		tool.onMouseDown(x, y, { setPixel, clear, color });
	};

	/**
	 * @param {MouseEvent} e
	 */
	const handleMouseMove = (e) => {
		const { offsetX, offsetY } = e;
		const { x, y } = canvasToPixelCoordinates(offsetX, offsetY);
		tool.onMouseMove(x, y, { setPixel, clear, color });
	};

	/**
	 * @param {MouseEvent} e
	 */
	const handleMouseUp = (e) => {
		const { offsetX, offsetY } = e;
		const { x, y } = canvasToPixelCoordinates(offsetX, offsetY);
		tool.onMouseUp(x, y, { setPixel, clear, color });
	};
</script>

<canvas
	class="absolute bottom-0 left-0 right-0 top-0 m-auto border-2 border-gray-950"
	{width}
	{height}
	bind:this={canvas}
	on:mousedown={handleMouseDown}
	on:mousemove={handleMouseMove}
	on:mouseup={handleMouseUp}
	on:mouseleave={handleMouseUp}
/>
<slot />
