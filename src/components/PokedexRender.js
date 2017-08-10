const { div, img, p } = require('elementx');

module.exports = function PokedexGen1(data) {
	const PokedexGen1 = div(
		{ id: 'pokedex' },
		div({ id: 'bigCircle' }, div({ id: 'blueCircle' })),
		div({ id: 'redDot' }),
		div({ id: 'yellowDot' }),
		div({ id: 'greenDot' }),
		div(
			{ id: 'screen' },
			div({ id: 'redButton1', class: 'redButton' }),
			div({ id: 'redButton2', class: 'redButton' }),
			div({ id: 'displayPokedex' }, img({ src: `${data.image}`, alt: `${data.name}` })),
			div({ id: 'redCircle', class: 'redButton' })
		),
		div({ id: 'blackCircle', class: 'redButton' }),
		div({ id: 'screenRed', class: 'thinButton' }),
		div({ id: 'screenBlue', class: 'thinButton' }),
		div({ id: 'greenRectangle' }),
		div({ id: 'dPad' }, div({ class: 'rectangle' }), div({ id: 'verticalR', class: 'rectangle' })),
		div(
			{ id: 'lidClosed' },
			div({ id: 'trapezoidLidBorder' }),
			div({ id: 'trapezoidLid' }),
			div({ id: 'yellowTriangle' }, div({ id: 'innerTriangle' })),
			div({ id: 'groove' })
		),
		div(
			{ id: 'lidOpen' },
			div({ id: 'trapezoidOpenBorder' }),
			div({ id: 'trapezoidOpenLid' }),
			div({ id: 'quoteScreen' }, p(`${data.text}`), p()),
			div(
				{ id: 'blueButtons' },
				div({ class: 'hline' }),
				div({ class: 'vline a' }),
				div({ class: 'vline b' }),
				div({ class: 'vline c' }),
				div({ class: 'vline d' })
			),
			div({ id: 'grayButtons' }, div({ class: 'grayDiv' })),
			div({ id: 'one', class: 'blackButton' }),
			div({ id: 'two', class: 'blackButton' }),
			div({ id: 'firstButton', class: 'thinButton' }),
			div({ id: 'secondButton', class: 'thinButton' }),
			div({ id: 'goldButton' })
		)
	);
	return PokedexGen1;
};
