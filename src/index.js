'use strict';
const Widget = require('./components/Widget');
const mainContainer = require('./components/Container');
const BrainyQuotesPageScraper = require('../src/scrapers/BrainyQuotesPageScraper.js');
const PokemonSpritesPageScraper = require('../src/scrapers/PokemonSpritesPageScraper.js');
const BrainyScraper = new BrainyQuotesPageScraper();
const PokeScraper = new PokemonSpritesPageScraper();
addEventListener('DOMContentLoaded', main);

function main() {
	const $root = document.querySelector('#root');
	$root.appendChild(mainContainer());

	// NOTE:revisit later
	let display = document.getElementById('display');

	display.addEventListener('click', event => {
		if (event.target.classList.contains('lidClosed')) {
			event.target.style.transform = 'rotateY(180deg) translateX(-249px)';
			setTimeout(function() {
				event.target.nextElementSibling.style.visibility = 'visible';
				event.target.style.visibility = 'hidden';
			}, 1000);
		}
		if (event.target.classList.contains('lidOpen')) {
			event.target.style.visibility = 'hidden';
			event.target.previousElementSibling.style.visibility = 'visible';
			event.target.previousElementSibling.style.transform = 'rotateY(0deg) translateX(0px)';
		}
	});

	document.getElementsByTagName('form')[0].addEventListener('submit', event => {
		event.preventDefault();
		const inputQuote = document.getElementById('quote');
		const inputPoke = document.getElementById('poke');
		if (inputQuote.value === '' || inputPoke.value === '') {
			Materialize.toast('Your input is blank!', 4000);
		} else {
			const Data = {};
			BrainyScraper.scrape(inputQuote.value).then(BrainyData => {
				Object.assign(Data, BrainyData);
				PokeScraper.scrape(`${inputPoke.value}`).then(PokeData => {
					Object.assign(Data, PokeData);
					const $widget = Widget(Data);
					const displayArea = document.getElementById('display');
					displayArea.appendChild($widget);
				});
			});
		}
	});
}
