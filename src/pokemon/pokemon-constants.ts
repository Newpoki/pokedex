export const pokemonQueryKeys = {
  base: ["pokemon"],
  pokemon: (pokemonNameOrId: string | undefined) => [
    ...pokemonQueryKeys.base,
    pokemonNameOrId,
    "pokemon",
  ],
  pokemonSpecies: (pokemonNameOrId: string | undefined) => [
    ...pokemonQueryKeys.base,
    pokemonNameOrId,
    "pokemonSpecies",
  ],
  pokemonEvolutionChain: (evolutionChainId: string | undefined) => [
    ...pokemonQueryKeys.base,
    evolutionChainId,
    "pokemonEvolutionChain",
  ],
};
