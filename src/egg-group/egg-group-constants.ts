export const eggGroupQueryKeys = {
  base: ["eggGroup"],
  pokemonEggGroup: (pokemonEggGroupUrl: string | undefined) => [
    ...eggGroupQueryKeys.base,
    pokemonEggGroupUrl,
    "pokemonEggGroup",
  ],
};
