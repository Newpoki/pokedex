export const formatPokemonId = (pokemonId: number) => {
  const pokemonIdAsString = `${pokemonId}`;

  if (pokemonIdAsString.length === 1) {
    return `#00${pokemonIdAsString}`;
  }
  if (pokemonIdAsString.length === 2) {
    return `#0${pokemonIdAsString}`;
  }

  return `#${pokemonIdAsString}`;
};
