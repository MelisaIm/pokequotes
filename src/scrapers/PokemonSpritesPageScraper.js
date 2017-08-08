const { div } = require('elementx');
const parser = new DOMParser();

class PokemonSpritesPageScraper {
	constructor() {
		this.image, this.name;
	}

	fetchData(url) {
		fetch(`http://cors-bypass-proxy.axiomlogic.com/${url}`)
			.then(response => response.text())
			.then(text => parser.parseFromString(text, 'text/html'))
			.then(dom => this.createDataObject(dom))
			.then();
	}
}
