const CONFIG = require("../config.json");

class PokemonData {
	constructor() {
		this.image, this.name;
	}

	scrape(inputName) {
		return fetch(`${CONFIG.POKE_API}${inputName.toLowerCase()}/`)
			.then(response => response.json())
			.then(data => this.createDataObject(data))
			.catch(error => {
				if (error) {
					window.alert("Pokemon not found (spelling matters)");
				}
			});
	}

	createDataObject(data) {
		const widgetObj = {};

		const types = data.types.map(obj => obj.type.name);
		widgetObj.image = data.sprites.front_default;
		widgetObj.name = data.name;
		widgetObj.type = types.join(",");
		return widgetObj;
	}
}

module.exports = PokemonData;
