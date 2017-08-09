const { div, form, input, button, img } = require('elementx');
const NameUpdater = require('./NameUpdater');

module.exports = function Container() {
	const container = div(
		{ id: 'container', class: 'container col s12' },
		form(
			{ class: 'row' },
			div(
				{ class: 'col offset-s2 s12 l10' },
				div(
					{ class: 'input-field' },
					input({
						id: 'quote',
						type: 'text',
						name: 'search',
						placeholder: 'Enter a quote page from BrainyQuotes'
					})
				)
			),
			div(
				{ class: 'col offset-s2 s12 l10' },
				div(
					{ class: 'input-field' },
					input({
						id: 'poke',
						type: 'text',
						name: 'search',
						placeholder: 'Enter a Pokemon name'
					})
				)
			),
			div(
				{ class: 'col s12 l2' },
				button(
					{
						class: 'btn-large waves-effect waves-light col s12 m12 l8 center',
						type: 'submit',
						name: 'action'
					},
					img({ src: 'pokeball.png', alt: 'pokeball' })
				)
			)
		),
		div({ id: 'display', class: 'row' })
	);

	return container;
};
