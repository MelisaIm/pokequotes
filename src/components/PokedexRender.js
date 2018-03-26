const { div, img, p } = require("elementx");
const NameUpdater = require("./NameUpdater");

module.exports = function PokedexGen1(data) {
	const PokedexGen1 = div(
		{ class: "pokedex" },
		div({ class: "bigCircle" }, div({ class: "blueCircle" })),
		div({ class: "redDot" }),
		div({ class: "yellowDot" }),
		div({ class: "greenDot" }),
		div(
			{ class: "screen" },
			div({ class: "redButton1 redButton" }),
			div({ class: "redButton2 redButton" }),
			div({ class: "displayPokedex" }, img({ src: `${data.image}`, alt: `${data.name}` })),
			div({ class: "redCircle redButton" })
		),
		div({ class: "blackCircle redButton" }),
		div({ class: "screenRed thinButton" }),
		div({ class: "screenBlue thinButton" }),
		div({ class: "greenRectangle" }),
		div({ class: "dPad" }, div({ class: "rectangle" }), div({ class: "verticalR rectangle" })),
		div(
			{ class: "lidClosed" },
			div({ class: "trapezoidLidBorder" }),
			div({ class: "trapezoidLid" }),
			div({ class: "yellowTriangle" }, div({ class: "innerTriangle" })),
			div({ class: "groove" })
		),
		div(
			{ class: "lidOpen" },
			div({ class: "trapezoidOpenBorder" }),
			div({ class: "trapezoidOpenLid" }),
			div({ class: "quoteScreen" }, p(`${data.text}`), p(`${NameUpdater(data.author, data.name)}`)),
			div(
				{ class: "blueButtons" },
				div({ class: "hline" }),
				div({ class: "vline a" }),
				div({ class: "vline b" }),
				div({ class: "vline c" }),
				div({ class: "vline d" })
			),
			div({ class: "grayButtons" }, div({ class: "grayDiv" })),
			div({ class: "one blackButton" }, `${data.category}`),
			div({ class: "two blackButton" }, `${data.type}`),
			div({ class: "firstButton thinButton" }),
			div({ class: "secondButton thinButton" }),
			div({ class: "goldButton" })
		)
	);
	return PokedexGen1;
};
