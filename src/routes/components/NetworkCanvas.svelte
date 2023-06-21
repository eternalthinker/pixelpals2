<script>
	import { getContext } from 'svelte';
	import { pixelCanvasContextKey } from './keys';
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	import { getAllNetworkData, initializeNetwork, registerOnPixelChange } from '../network/network';
	import { networkKeyToPixelCoords } from '../common/util';

	const { setPixel } = getContext(pixelCanvasContextKey);

	/**
	 * @param  {import("@firebase/database").DataSnapshot} snapshot
	 */
	const onPixelChange = (snapshot) => {
		if (!snapshot.exists() || snapshot.key == null) {
			return;
		}
		const color = snapshot.val();
		const { x, y } = networkKeyToPixelCoords(snapshot.key);
		setPixel(x, y, color);
	};

	onMount(async () => {
		initializeNetwork();
		// Wait until canvas size correction
		await tick();
		await tick();

		const data = await getAllNetworkData();
		if (data != null) {
			Object.keys(data).forEach((keyStr) => {
				const { x, y } = networkKeyToPixelCoords(keyStr);
				const color = data[keyStr];
				setPixel(x, y, color);
			});
		}

		registerOnPixelChange(onPixelChange);
	});
</script>
