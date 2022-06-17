export const pokemonQueryKeys = {
  base: ["pokemon"],
  pokemon: (pokemonName: string | undefined) => [...pokemonQueryKeys.base, pokemonName, "pokemon"],
  pokemonSpecies: (pokemonName: string | undefined) => [
    ...pokemonQueryKeys.base,
    pokemonName,
    "pokemonSpecies",
  ],
};
