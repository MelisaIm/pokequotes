const { div, span } = require('elementx');
const parser = new DOMParser();

class BrainyQuotesPageScraper {
	constructor() {
		this.text, this.author, this.nationality;
	}

	fetchData(url) {
		return fetch(`http://cors-bypass-proxy.axiomlogic.com/${url}`)
			.then(response => response.text())
			.then(text => parser.parseFromString(text, 'text/html'))
			.then(dom => this.createDataObject(dom))
			.then(widgetObject => this.renderWidget(widgetObject));
	}

	createDataObject(dom) {
		const widgetObj = {};
		const quoteContent = dom.getElementsByTagName('title')[0];
		const authorHeading = dom.getElementsByTagName('h1')[0];
		const nationality = dom.querySelectorAll("a[href^='/nationality/']")[0].innerText;
		const author = authorHeading.innerText.replace(/\sQuotes/, '');
		const quoteText = quoteContent.innerText.replace(/\s-[\w\s\.-]*BrainyQuote$/, '');
		widgetObj.text = quoteText;
		widgetObj.author = author;
		widgetObj.nationality = nationality;
		return widgetObj;
	}

	renderWidget(widget) {
		const widgetDisplay = div(
			{ class: 'row' },
			div(
				{ class: 'col s12 l6' },
				div(
					{ class: 'card hoverable' },
					div({ class: 'card-image' }, span({ class: 'card-title' }, `${widget.text}`)),
					div({ class: 'card-content center' }, `${widget.author}`)
				)
			)
		);
		const display = document.getElementById('display');
		display.appendChild(widgetDisplay);
	}
}

// const $col = $('<div>').addClass('col s12 l6');
// const $card = $('<div>').addClass('card hoverable');
// const $content = $('<div>').addClass('card-content center');

module.exports = BrainyQuotesPageScraper;
