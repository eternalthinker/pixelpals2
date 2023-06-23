import { WIDTH_PIXELS } from './config';

/**
 * @param {number} x
 * @param {number} y
 */
export function pixelCoordsToNetworkKey(x, y) {
	return `${y * WIDTH_PIXELS + x}`;
}

/**
 * @param {string | number} keyStr
 */
export function networkKeyToPixelCoords(keyStr) {
	const key = Number(keyStr);
	const x = key % WIDTH_PIXELS;
	const y = Math.floor(key / WIDTH_PIXELS);
	return { x, y };
}

/**
 * @param {string} query
 */
export function getURLParameter(query) {
	const match = RegExp(`${query}=(.+?)(&|$)`).exec(location.search);
	if (match == null) {
		return;
	}
	const result = decodeURI(match[1]);
	return result;
}

/**
 * @param {Function} fn
 */
export function debounce(fn, delay = 300) {
	/**
	 * @type {ReturnType<typeof setTimeout>}
	 */
	let timer;

	return (/** @type {any} */ ...args) => {
		clearTimeout(timer);
		// @ts-ignore
		timer = setTimeout(() => fn.apply(this, args), delay);
	};
}
