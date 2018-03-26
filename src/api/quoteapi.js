const CONFIG = require("../config.json");

class QuoteAPI {
	constructor() {
		this.text, this.author, this.category;
	}

	scrape() {
		return fetch(CONFIG.QUOTE_API)
			.then(response => response.json())
			.then(data => this.createDataObject(data));
	}

	createDataObject(data) {
		const widgetObj = {};

		widgetObj.text = data.quote;
		widgetObj.author = data.author;
		widgetObj.category = data.cat;
		return widgetObj;
	}
}

module.exports = QuoteAPI;
