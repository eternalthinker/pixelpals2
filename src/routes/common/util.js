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
