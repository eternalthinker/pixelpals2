// @ts-ignore
// eslint-disable-next-line no-unused-vars
import * as Types from '../components/types';

/**
 * @readonly
 * @enum {number}
 */
export const ToolType = {
	NONE: 0,
	PENCIL: 1,
	COLOR_PICKER: 2
};

/**
 * @class
 * @abstract
 */
export class Tool {
	constructor() {
		if (this.constructor === Tool) {
			throw new Error('Tool is an abstract class');
		}
		this.name = 'Undefined';
		this.type = ToolType.NONE;
		this.drawing = false;
		this.dragging = false;
	}

	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {Types.PixelCanvasContext} context
	 */
	// eslint-disable-next-line no-unused-vars
	onMouseDown(x, y, context) {
		this.drawing = true;
	}

	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {Types.PixelCanvasContext} context
	 */
	// eslint-disable-next-line no-unused-vars
	onMouseMove(x, y, context) {
		if (this.drawing) {
			this.dragging = true;
		}
	}

	/**
	 * @param {number} x
	 * @param {number} y
	 * @param {Types.PixelCanvasContext} context
	 */
	// eslint-disable-next-line no-unused-vars
	onMouseUp(x, y, context) {
		if (this.drawing) {
			this.drawing = false;
			if (this.dragging) {
				// No mouse up action if mouse was being dragged
				this.dragging = false;
			}
			// Else single click action
		}
	}
}
