const parser = new DOMParser();

class BrainyQuotesPageScraper {
	constructor() {
		this.text, this.author, this.nationality;
	}

	scrape(url) {
		return fetch(`${url}`)
			.then(response => response.text())
			.then(text => parser.parseFromString(text, 'text/html'))
			.then(dom => this.createDataObject(dom));
	}

	createDataObject(dom) {
		const widgetObj = {};
		const quoteContent = dom.getElementsByTagName('title')[0];
		const authorHeading = dom.getElementsByTagName('h1')[0];
		const nationality = dom.querySelectorAll("a[href^='/nationality/']")[0].innerText;
		const profession = dom.querySelectorAll("a[href^='/profession/']")[0].innerText;
		const author = authorHeading.innerText.replace(/\sQuotes/, '');
		const quoteText = quoteContent.innerText.replace(/\s-[\w\s.-]*BrainyQuote$/, '');
		widgetObj.text = quoteText;
		widgetObj.author = author;
		widgetObj.nationality = nationality;
		widgetObj.profession = profession;
		return widgetObj;
	}
}

module.exports = BrainyQuotesPageScraper;
