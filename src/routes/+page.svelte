<script>
	import Canvas from './components/Canvas.svelte';
	import CanvasContainer from './components/CanvasContainer.svelte';
</script>

<main class="flex h-full flex-col p-5">
	<h1 class="mb-4 text-2xl font-bold">PixelPals 2</h1>
	<div class="box-border grid h-full flex-auto grid-cols-5">
		<div class="canvasBackground col-span-4 box-border bg-gray-500 p-1">
			<CanvasContainer let:maxWidth let:maxHeight>
				<Canvas {maxWidth} {maxHeight} />
			</CanvasContainer>
		</div>

		<div class="sideBar p-4" />
	</div>
</main>
