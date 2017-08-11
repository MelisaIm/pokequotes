const parser = new DOMParser();

class PokemonSpritesPageScraper {
	constructor() {
		this.image, this.name;
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
		const pokeGIF = dom.querySelectorAll("a[href$='.gif")[0]
			? dom.querySelectorAll("a[href$='.gif")[0].href
			: 'N/A';
		widgetObj.image = pokeGIF;
		const pageTitle = dom.getElementsByTagName('title')[0];
		widgetObj.name = pageTitle
			? pageTitle.innerText.slice(0, pageTitle.innerText.indexOf(' '))
			: 'N/A';
		return widgetObj;
	}
}

module.exports = PokemonSpritesPageScraper;
