"use strict";
const Widget = require("./components/Widget");
const mainContainer = require("./components/Container");
// const BrainyQuotesPageScraper = require("../src/scrapers/BrainyQuotesPageScraper.js");
// const PokemonSpritesPageScraper = require("../src/scrapers/PokemonSpritesPageScraper.js");
const PokemonAPI = require("../src/api/pokeapi");
const QuotesAPI = require("../src/api/quoteapi");
// const BrainyScraper = new BrainyQuotesPageScraper();
// const PokeScraper = new PokemonSpritesPageScraper();
const PokeAPI = new PokemonAPI();
const QuoteAPI = new QuotesAPI();
addEventListener("DOMContentLoaded", main);

function main() {
	const $root = document.querySelector("#root");
	$root.appendChild(mainContainer());

	// NOTE:revisit later
	let display = document.getElementById("display");

	display.addEventListener("click", event => {
		const mq = window.matchMedia("(max-width: 400px)");

		if (mq.matches) {
			if (event.target.classList.contains("lidClosed")) {
				event.target.style.transform = "rotateY(180deg) translateY(249px)";
				setTimeout(function() {
					event.target.nextElementSibling.style.visibility = "visible";
					event.target.style.visibility = "hidden";
				}, 1000);
			}
			if (event.target.classList.contains("lidOpen")) {
				event.target.style.visibility = "hidden";
				event.target.previousElementSibling.style.visibility = "visible";
				event.target.previousElementSibling.style.transform = "rotateY(0deg) translateX(0px)";
			}
		} else {
			if (event.target.classList.contains("lidClosed")) {
				event.target.style.transform = "rotateY(180deg) translateX(-249px)";
				setTimeout(function() {
					event.target.nextElementSibling.style.visibility = "visible";
					event.target.style.visibility = "hidden";
				}, 1000);
			}
			if (event.target.classList.contains("lidOpen")) {
				event.target.style.visibility = "hidden";
				event.target.previousElementSibling.style.visibility = "visible";
				event.target.previousElementSibling.style.transform = "rotateY(0deg) translateX(0px)";
			}
		}
	});

	document.getElementsByTagName("form")[0].addEventListener("submit", event => {
		event.preventDefault();
		const inputPoke = document.getElementById("poke");
		if (inputPoke.value === "") {
			window.alert("Please provide a Pokemon");
		} else {
			const Data = {};
			QuoteAPI.scrape().then(QuoteData => {
				Object.assign(Data, QuoteData);
				PokeAPI.scrape(`${inputPoke.value}`).then(PokeData => {
					Object.assign(Data, PokeData);
					const $widget = Widget(Data);
					const displayArea = document.getElementById("display");
					displayArea.appendChild($widget);
				});
			});
		}
	});
}
