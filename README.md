# PokeQuotes README

![pokedex gif](pokedex.gif)

## Welcome to PokeQuotes:

This project explores **web site scraping**, combining the data from multiple sources into an easily digestible (enjoyable) widget and rendering a Pokedex completely styled with CSS and animated with JavaScript. The input form will request a link from a [Pokemon sprites library](https://pokemondb.net/sprites/squirtle) and a link to a quote page on the [BrainyQuote site](https://www.brainyquote.com/quotes/quotes/w/williamsha109517.html). 

Some tools employed included **DOMParser** (to convert the fetched HTML text to a DOM-like element to ease site scraping), **Webpack** (to Load files as modules as required by each process/function in the code permitting modular programming), **Surge** (to deploy the [melisaim-pokequotes.surge.sh](http://melisaim-pokequotes.surge.sh/)), **CodePen** (to mock up the pokedex, feel free to [play with it!](https://codepen.io/melisaim/pen/ZJKmMK), **serve-npm** (to mimic a production environment and easily share with local network), and **elementX** (to create dom/html elements in a functional way).  

### Future Enhancements:
- Better CSS Styling for Pokedex
- Potential audio generated
- More functionality in Pokedex "buttons"
- Create Pokedexes specific to the generation of the Pokemon being rendered
- String manipulate the quote to match the Pokemon in some way
- Drop-down for Pokemon selection
- Export of widgets (shareable) 
- Data caching
- Create more interesting data outputs
- Allow user customization (for better punning) 
