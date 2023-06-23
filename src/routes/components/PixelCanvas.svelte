<script>
	import { onMount, setContext } from 'svelte';
	import { tick } from 'svelte';
	import { pixelCanvasContextKey } from './keys';
	// @ts-ignore
	// eslint-disable-next-line no-unused-vars
	import * as Types from '../components/types';

	export let maxWidth = 0;
	export let maxHeight = 0;
	/**
	 * @type {string}
	 */
	export let color = '#000000';
	/**
	 * @type { import('../tools/tool').Tool | undefined}
	 */
	export let tool = undefined;

	/**
	 * @type {number}
	 */
	export let widthPixels;
	/**
	 * @type {number}
	 */
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

	/**
	 * @type {Types.SetMarkerFn}
	 */
	const setMarker = (x, y, showColor = true) => {
		const px = Math.floor(x);
		const py = Math.floor(y);
		if (!(0 <= px && px < widthPixels && 0 <= py && py < heightPixels)) {
			return;
		}
		if (context == null) {
			return;
		}
		if (showColor) {
			setPixel(x, y);
		}
		context.strokeStyle = '#000000';
		let lineWidth = 2;
		context.lineWidth = lineWidth;
		context.strokeRect(px * pixelSize, py * pixelSize, pixelSize, pixelSize);
	};

	const clear = () => {
		context?.clearRect(0, 0, width, height);
	};

	/**
	 * A collection of useful context, usually used by Tools.
	 * Different from canvas 2d context, or Svelte component context.
	 * @returns {Types.PixelCanvasContext}
	 */
	const getPixelCanvasContext = () => {
		return {
			setPixel,
			setMarker,
			clear,
			color
		};
	};

	setContext(pixelCanvasContextKey, { setPixel, clear });

	onMount(async () => {
		context = canvas.getContext('2d');
		await tick(); // Await container mount
		handleSize();
		//await tick(); // Await size correction
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
		// console.log('size', maxWidth, maxHeight, pixelSize, width, height);
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

	/**
	 * @param {MouseEvent} e
	 */
	const handleMouseDown = (e) => {
		const { offsetX, offsetY } = e;
		const { x, y } = canvasToPixelCoordinates(offsetX, offsetY);
		tool?.onMouseDown(x, y, getPixelCanvasContext());
	};

	/**
	 * @param {MouseEvent} e
	 */
	const handleMouseMove = (e) => {
		const { offsetX, offsetY } = e;
		const { x, y } = canvasToPixelCoordinates(offsetX, offsetY);
		tool?.onMouseMove(x, y, getPixelCanvasContext());
	};

	/**
	 * @param {MouseEvent} e
	 */
	const handleMouseUp = (e) => {
		const { offsetX, offsetY } = e;
		const { x, y } = canvasToPixelCoordinates(offsetX, offsetY);
		tool?.onMouseUp(x, y, getPixelCanvasContext());
	};

	/**
	 * @param {MouseEvent} e
	 */
	const handleMouseLeave = (e) => {
		const { offsetX, offsetY } = e;
		const { x, y } = canvasToPixelCoordinates(offsetX, offsetY);
		tool?.onMouseLeave(x, y, getPixelCanvasContext());
	};
</script>

<canvas
	class="pixelCanvas absolute bottom-0 left-0 right-0 top-0 m-auto border-2 border-gray-950"
	{width}
	{height}
	bind:this={canvas}
	on:mousedown={handleMouseDown}
	on:mousemove={handleMouseMove}
	on:mouseup={handleMouseUp}
	on:mouseleave={handleMouseLeave}
	style:cursor={`url('${tool?.icon}') ${tool?.cursorHotspot.x} ${tool?.cursorHotspot.y}, default`}
/>
<slot />

<style>
	.pixelCanvas {
		image-rendering: pixelated;
	}

	.pencil {
		cursor: url('/icons/pencil.svg') 0 20, default;
	}

	.colorPicker {
		cursor: url('/icons/colorpicker.svg') 0 20, default;
	}
</style>
