export const growthRateQueryKeys = {
  base: ["growthRate"],
  pokemonGrowthRate: (pokemonEggGroupNameOrId: string | undefined) => [
    ...growthRateQueryKeys.base,
    pokemonEggGroupNameOrId,
    "pokemonGrowthRate",
  ],
};
