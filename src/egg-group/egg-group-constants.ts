export const eggGroupQueryKeys = {
  base: ["eggGroup"],
  pokemonEggGroup: (pokemonEggGroupNameOrId: string | undefined) => [
    ...eggGroupQueryKeys.base,
    pokemonEggGroupNameOrId,
    "pokemonEggGroup",
  ],
};
