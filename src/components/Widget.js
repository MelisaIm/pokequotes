const { div, img } = require('elementx');
const NameUpdater = require('./NameUpdater');

module.exports = function Widget(data) {
	const column = div(
		{ class: 'col s12 l6' },
		div(
			{ class: 'card hoverable center-align' },
			div({ class: 'card-image' }),
			div(
				{ class: 'card-content center' },
				`${data.text}
       ${NameUpdater(data.name, data.author)}`
			),
			img({ src: `${data.image}` })
		)
	);
	return column;
};
