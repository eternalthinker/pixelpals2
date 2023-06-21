import { pixelCoordsToNetworkKey } from '../common/util';
import { setNetworkPixel } from '../network/network';
import { Tool, ToolType } from './tool';

export class Pencil extends Tool {
	constructor() {
		super();
		this.type = ToolType.PENCIL;
		this.drawing = false;
		this.dragging = false;
	}

	/**
	 * @type {Tool['onMouseMove']}
	 */
	onMouseMove(x, y, context) {
		if (this.drawing) {
			this.dragging = true;
			context.setPixel(x, y);
			// TODO: Some logic to clear these pixels after x milliseconds.
			//  Care to be taken to not clear if something was recently
			//  written on this pixel again.
			const key = pixelCoordsToNetworkKey(x, y);
			setNetworkPixel(key, context.color);
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
				// We are not setting the local pixel here as it is
				// immediately being cleared.
				const key = pixelCoordsToNetworkKey(x, y);
				setNetworkPixel(key, context.color);
			}
			// User's mouse is up, clear the buffer layer
			context.clear();
		}
	}
}
