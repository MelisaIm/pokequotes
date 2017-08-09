function PokeName(pokemon) {
	const indexSplit = Math.round(pokemon.length / 2);

	const pokeFirst = pokemon.slice(0, indexSplit);
	const pokeLast = pokemon.slice(indexSplit);

	return [pokeFirst, pokeLast];
}

function AuthorName(name) {
	const nameArray = name.split(' ');
	let finalName = [];
	if (nameArray.length > 1) {
		for (let nameIndex = 0; nameIndex < nameArray.length; nameIndex++) {
			if (/[.]/.test(nameArray[nameIndex])) {
				finalName.push(nameArray[nameIndex]);
			} else {
			}
		}
	} else {
		let name = nameArray[0];
		const indexSplit = Math.round(name.length / 2);
		name = name.slice(indexSplit);
		return name;
	}
	return finalName.join(' ');
}
