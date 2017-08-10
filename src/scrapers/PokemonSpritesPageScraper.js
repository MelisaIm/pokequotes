const parser = new DOMParser();

class PokemonSpritesPageScraper {
	constructor() {
		this.image, this.name;
	}

	scrape(url) {
		return fetch(`${url}`)
			.then(response => response.text())
			.then(text => parser.parseFromString(text, 'text/html'))
			.then(dom => this.createDataObject(dom));
	}

	createDataObject(dom) {
		const widgetObj = {};
		const pokeGIF = dom.querySelectorAll("a[href$='.gif")[0].href;
		widgetObj.image = pokeGIF;
		const pageTitle = dom.getElementsByTagName('title')[0];
		widgetObj.name = pageTitle.innerText.slice(0, pageTitle.innerText.indexOf(' '));
		return widgetObj;
	}
}

module.exports = PokemonSpritesPageScraper;
