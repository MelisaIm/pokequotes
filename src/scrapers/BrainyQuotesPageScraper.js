const parser = new DOMParser();

class BrainyQuotesPageScraper {
	constructor() {
		this.text, this.author, this.nationality;
	}

	scrape(url) {
		const config = { headers: { origin: null } };
		return fetch(`http://cors-bypass-proxy.axiomlogic.com/${url}`, config)
			.then(response => response.text())
			.then(text => parser.parseFromString(text, 'text/html'))
			.then(dom => this.createDataObject(dom));
	}

	createDataObject(dom) {
		const widgetObj = {};
		const quoteContent = dom.getElementsByTagName('title')[0];
		const quoteText = quoteContent
			? quoteContent.innerText.replace(/\s-[\w\s.-]*BrainyQuote$/, '')
			: 'Quote Not Found';
		const authorHeading = dom.getElementsByTagName('h1')[0];
		const author = authorHeading
			? authorHeading.innerText.replace(/\sQuotes/, '')
			: 'No Author Name';
		const nationality = dom.querySelectorAll("a[href^='/nationality/']")[0]
			? dom.querySelectorAll("a[href^='/nationality/']")[0].innerText
			: 'N/A';
		const profession = dom.querySelectorAll("a[href^='/profession/']")[0]
			? dom.querySelectorAll("a[href^='/profession/']")[0].innerText
			: 'N/A';
		widgetObj.text = quoteText;
		widgetObj.author = author;
		widgetObj.nationality = nationality;
		widgetObj.profession = profession;
		return widgetObj;
	}
}

module.exports = BrainyQuotesPageScraper;
