export const growthRateQueryKeys = {
  base: ["growthRate"],
  pokemonGrowthRate: (pokemonGrowthRateId: string | undefined) => [
    ...growthRateQueryKeys.base,
    pokemonGrowthRateId,
    "pokemonGrowthRate",
  ],
};
