/**
 * @callback SetPixelFn
 * @param {number} x
 * @param {number} y
 * @param {string} [pixelColor]
 * @returns {void}
 */

/**
 * @callback SetMarkerFn
 * @param {number} x
 * @param {number} y
 * @param {boolean} [showColor]
 * @returns {void}
 */

/**
 * @typedef  {{
 * 	setPixel: SetPixelFn,
 *  setMarker: SetMarkerFn,
 * 	clear: () => void,
 *  color: string,
 * }} PixelCanvasContext
 */

export const Types = {};
