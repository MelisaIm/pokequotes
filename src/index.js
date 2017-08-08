'use strict';

const BrainyQuotesPageScraper = require('../src/scrapers/BrainyQuotesPageScraper.js');
const scraper = new BrainyQuotesPageScraper();
const { div, form, input, button, img } = require('elementx');
addEventListener('DOMContentLoaded', main);

function main() {
	const $root = document.querySelector('#root');
	const $app = div(
		{ class: 'col s12' },
		form(
			div(
				{ class: 'col offset-s2 s7' },
				div({ class: 'input-field' }, input({ id: 'url', type: 'text', name: 'search' }))
			),
			div(
				{ class: 'col s12 l3' },
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
		div({ id: 'display', class: 'col s12 l3' })
	);
	$root.appendChild($app);

	document.getElementsByTagName('form')[0].addEventListener('submit', event => {
		event.preventDefault();
		const input = document.getElementById('url');
		if (input.value === '') {
			Materialize.toast('Your input is blank!', 4000);
		} else {
			scraper.fetchData(input.value);
		}
	});
}
