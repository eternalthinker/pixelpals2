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

	/** @type {number} */
	export let width;
	/** @type {number} */
	export let height;

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

	/**
	 * @param {string[] | undefined} data
	 * @param {number} _width
	 * @param {number} _height
	 */
	const renderNetworkData = (data, _width, _height) => {
		if (data == null) {
			return;
		}
		if (data != null) {
			data.forEach((color, key) => {
				const { x, y } = networkKeyToPixelCoords(key);
				setPixel(x, y, color);
			});
		}
	};

	onMount(async () => {
		const canvasId = getURLParameter(CANVAS_ID_KEY);
		initializeNetwork(canvasId);

		const data = await getAllNetworkData();
		data && networkStore.setAllData(data);
		renderNetworkData(data, width, height);

		registerOnPixelChange(onPixelChange);
	});

	// width, height are unused. They're supplied here so that
	// canvas resizing will trigger this call.
	$: renderNetworkData(networkStore.getAllData(), width, height);
</script>
