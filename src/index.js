'use strict';
const Widget = require('./components/Widget');
const BrainyQuotesPageScraper = require('../src/scrapers/BrainyQuotesPageScraper.js');
const scraper = new BrainyQuotesPageScraper();
const { div, form, input, button, img } = require('elementx');
addEventListener('DOMContentLoaded', main);

function main() {
	const $root = document.querySelector('#root');
	const $app = div(
		{ class: 'col s12' },
		form(
			{ class: 'row' },
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
		)
	);
	const $display = div({ id: 'display', class: 'row' });
	$root.appendChild($app);
	$root.appendChild($display);

	document.getElementsByTagName('form')[0].addEventListener('submit', event => {
		event.preventDefault();
		const input = document.getElementById('url');
		if (input.value === '') {
			Materialize.toast('Your input is blank!', 4000);
		} else {
			scraper.fetchData(input.value);
			// scraper.scrape(input.value).then(data => {
			//   const $widget = Widget(data);
			//   // append this somewhere
			// });
		}
	});
}
