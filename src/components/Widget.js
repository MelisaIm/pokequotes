const { div } = require('elementx');
const pokedex = require('./PokedexRender.js');

module.exports = function Widget(data) {
	const column = div(
		{ id: 'pokemonWidget', class: 'col s12' },
		div({ class: 'card hoverable center-align' }, pokedex(data))
	);
	return column;
};

// `${data.text}
// ${data.author}`
// img({ src: `${data.image}`

//add pokedex event listener to each widget
