<script>
	import { onMount } from 'svelte';
	import { tick } from 'svelte';

	export let maxWidth = 0;
	export let maxHeight = 0;
	export let color = '#333333';

	export let widthPixels = 150;
	export let heightPixels = 120;

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

	onMount(async () => {
		context = canvas.getContext('2d');
		await tick(); // Await container mount
		handleSize();
		await tick(); // Await size correction
		if (context != null) {
			console.log('Drawing', width, height);
			context.fillStyle = '#ffffff';
			context.beginPath();
			context.rect(0, 0, width, height);
			context.fill();
			context.fillStyle = color;
		}
	});

	$: if (context) {
		context.fillStyle = color;
	}

	$: if (maxWidth > 0 && maxHeight > 0) {
	}

	const handleSize = () => {
		const widthPixelSize = Math.floor(maxWidth / widthPixels);
		const heightPixelSize = Math.floor(maxHeight / heightPixels);
		pixelSize = Math.min(widthPixelSize, heightPixelSize);
		width = pixelSize * widthPixels;
		height = pixelSize * heightPixels;
		console.log('size', maxWidth, maxHeight, pixelSize, width, height);
	};
</script>

<canvas class="absolute bottom-0 left-0 right-0 top-0 m-auto" {width} {height} bind:this={canvas} />
