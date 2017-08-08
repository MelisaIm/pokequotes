const { div } = require('elementx');
const parser = new DOMParser();

class BrainyQuotesPageScraper {
	constructor() {
		this.text, this.author, this.image, (this.widgets = []);
	}

	fetchData(url) {
		fetch(`http://cors-bypass-proxy.axiomlogic.com/${url}`)
			.then(response => response.text())
			.then(text => parser.parseFromString(text, 'text/html'))
			.then(dom => this.createDataObject(dom))
			.then(this.displayWidgets(this.widgets));
	}

	createDataObject(dom) {
		const widgetObj = {};
		const quoteContent = dom.getElementsByTagName('title')[0];
		const authorHeading = dom.getElementsByTagName('h1')[0];
		const author = authorHeading.innerText.replace(/\sQuotes/, '');
		const quoteText = quoteContent.innerText.replace(/\s-[\w\s\.-]*BrainyQuote$/, '');
		widgetObj.text = quoteText;
		widgetObj.author = author;
		this.widgets.push(widgetObj);
	}
}

module.exports = BrainyQuotesPageScraper;
