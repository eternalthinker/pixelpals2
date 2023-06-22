<script>
	import { getContext } from 'svelte';
	import { pixelCanvasContextKey } from './keys';
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	import { getAllNetworkData, initializeNetwork, registerOnPixelChange } from '../network/network';
	import { getURLParameter, networkKeyToPixelCoords } from '../common/util';
	import { networkStore } from '../network/networkStore';
	import { CANVAS_ID_KEY } from '../common/config';

	const { setPixel } = getContext(pixelCanvasContextKey);

	/**
	 * @param  {import("@firebase/database").DataSnapshot} snapshot
	 */
	const onPixelChange = (snapshot) => {
		if (!snapshot.exists() || snapshot.key == null) {
			return;
		}
		const color = snapshot.val();
		const key = Number(snapshot.key);
		const { x, y } = networkKeyToPixelCoords(key);
		networkStore.setPixel(key, color);
		setPixel(x, y, color);
	};

	onMount(async () => {
		const canvasId = getURLParameter(CANVAS_ID_KEY);
		initializeNetwork(canvasId);
		// Wait until container mount
		await tick();
		// Wait until canvas size correction
		await tick();

		const data = await getAllNetworkData();
		if (data != null) {
			networkStore.setAllData(data);
			data.forEach((color, key) => {
				const { x, y } = networkKeyToPixelCoords(key);
				setPixel(x, y, color);
			});
		}

		registerOnPixelChange(onPixelChange);
	});
</script>
