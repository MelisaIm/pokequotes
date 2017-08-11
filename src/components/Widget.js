const { div } = require('elementx');
const pokedex = require('./PokedexRender.js');

module.exports = function Widget(data) {
	const column = div(
		{ class: 'col s12 pokemonWidget center-align' },
		div({ class: 'card hoverable' }, pokedex(data))
	);
	return column;
};

// `${data.text}
// ${data.author}`
// img({ src: `${data.image}`

//add pokedex event listener to each widget
