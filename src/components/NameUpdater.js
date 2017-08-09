module.exports = function NameUpdater(pokemon, author) {
	return AuthorName(author, PokeName(pokemon));

	function AuthorName(author, pokeName) {
		const nameArray = author.split(' ');
		let finalName = [];
		if (nameArray.length > 1) {
			for (let nameIndex = 0; nameIndex < nameArray.length; nameIndex++) {
				if (/[.]/.test(nameArray[nameIndex]) || nameArray[nameIndex].length <= 3) {
					finalName.push(nameArray[nameIndex]);
				} else {
					if (nameIndex === nameArray.length - 1) {
						finalName.push(nameArray[nameIndex] + `${pokeName.pokeLast}`);
					} else {
						finalName.push(nameArray[nameIndex] + `${pokeName.pokeFirst.toLowerCase()}`);
					}
				}
			}
		} else {
			let name = nameArray[0];
			return name + `${pokeName.pokeLast}`;
		}
		return finalName.join(' ');
	}

	function PokeName(pokemon) {
		const pokeName = {};
		const indexSplit = Math.round(pokemon.length / 2);

		const pokeFirst = pokemon.slice(0, indexSplit);
		const pokeLast = pokemon.slice(indexSplit);

		pokeName.pokeFirst = pokeFirst;
		pokeName.pokeLast = pokeLast;

		return pokeName;
	}
};
