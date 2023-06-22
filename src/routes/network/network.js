import { DEFAULT_CANVAS_ID, NETWORK_DATABASE_URL } from '../common/config';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, child, get, set, onChildChanged } from 'firebase/database';

/**
 * @type {import("@firebase/database").DatabaseReference}
 */
let networkDbRef;

/**
 * @param {string} [canvasId]
 */
export function initializeNetwork(canvasId = DEFAULT_CANVAS_ID) {
	const pixelpalsConfig = {
		databaseURL: `${NETWORK_DATABASE_URL}`
	};
	const pixelpalsApp = initializeApp(pixelpalsConfig, 'pixelpals');
	const pixelpalsDb = getDatabase(pixelpalsApp);
	const rootDbRef = ref(pixelpalsDb);
	networkDbRef = child(rootDbRef, canvasId);
}

export function getAllNetworkData() {
	return get(networkDbRef).then((snapshot) => {
		if (!snapshot.exists()) {
			return;
		}

		/** @type {string[]} */
		const allCanvasData = snapshot.val();
		return allCanvasData.map((color) => color.toLowerCase());
	});
}

/**
 * @param {Object} data
 */
export function setAllNetworkData(data) {
	return set(networkDbRef, data);
}

/**
 * @param {string} key
 * @param {string} color
 */
export function setNetworkPixel(key, color) {
	return set(child(networkDbRef, key), color);
}

/**
 * @param {(snapshot: import("@firebase/database").DataSnapshot) => void} onPixelChange
 */
export function registerOnPixelChange(onPixelChange) {
	onChildChanged(networkDbRef, onPixelChange);
}
