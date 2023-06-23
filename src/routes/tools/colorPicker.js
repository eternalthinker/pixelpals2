import { pixelCoordsToNetworkKey } from '../common/util';
import { networkStore } from '../network/networkStore';
import { Tool, ToolType } from './tool';
import colorPickerSvg from '$lib/icons/colorPicker.svg';

export class ColorPicker extends Tool {
	/**
	 * @param {(color: string) => void} onColorChange
	 */
	constructor(onColorChange) {
		super();
		this.name = 'ColorPicker';
		this.keyTrigger = 'c';
		this.icon = colorPickerSvg;
		this.cursorHotspot = {
			x: 0,
			y: 20
		};
		this.type = ToolType.COLOR_PICKER;
		this.drawing = false;
		this.dragging = false;
		this.onColorChange = onColorChange;
	}

	/**
	 * @type {Tool['onMouseMove']}
	 */
	onMouseMove(x, y, context) {
		if (this.drawing) {
			this.dragging = true;
		} else {
			context.clear();
			context.setMarker(x, y, false);
		}
	}

	/**
	 * @type {Tool['onMouseUp']}
	 */
	onMouseUp(x, y) {
		if (this.drawing) {
			this.drawing = false;
			// No mouse up action if mouse was being dragged
			if (this.dragging) {
				this.dragging = false;
			} else {
				const key = pixelCoordsToNetworkKey(x, y);
				const color = networkStore.getPixel(Number(key));
				this.onColorChange(color);
			}
		}
		// User's mouse is up, clear the buffer layer
		// context.clear();
	}
}
