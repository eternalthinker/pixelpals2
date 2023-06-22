class NetworkStore {
	constructor() {
		/**
		 * @type {string[]}
		 */
		this._data = [];
	}

	/**
	 * @param {string[]} data
	 */
	setAllData(data) {
		this._data = data;
	}

	/**
	 * @param {number} key
	 * @param {string} color
	 */
	setPixel(key, color) {
		this._data[key] = color;
	}

	/**
	 * @param {number} key
	 */
	getPixel(key) {
		return this._data[key];
	}
}

export const networkStore = new NetworkStore();