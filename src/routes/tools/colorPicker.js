import { pixelCoordsToNetworkKey } from '../common/util';
import { networkStore } from '../network/networkStore';
import { Tool, ToolType } from './tool';

export class ColorPicker extends Tool {
	constructor() {
		super();
		this.name = 'ColorPicker';
		this.type = ToolType.COLOR_PICKER;
		this.drawing = false;
		this.dragging = false;
	}

	/**
	 * @type {Tool['onMouseMove']}
	 */
	onMouseMove(x, y, context) {
		if (this.drawing) {
			this.dragging = true;
		} else {
			context.clear();
			context.setMarker(x, y, true);
		}
	}

	/**
	 * @type {Tool['onMouseUp']}
	 */
	onMouseUp(x, y, context) {
		if (this.drawing) {
			this.drawing = false;
			// No mouse up action if mouse was being dragged
			if (this.dragging) {
				this.dragging = false;
			} else {
				const key = pixelCoordsToNetworkKey(x, y);
				const color = networkStore.getPixel(Number(key));
				console.log('Picked color', color);
				// TODO: Set a color store
			}
		}
		// User's mouse is up, clear the buffer layer
		// context.clear();
	}
}
