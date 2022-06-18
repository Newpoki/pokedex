export const growthRateQueryKeys = {
  base: ["growthRate"],
  pokemonGrowthRate: (pokemonGrowthRateUrl: string | undefined) => [
    ...growthRateQueryKeys.base,
    pokemonGrowthRateUrl,
    "pokemonGrowthRate",
  ],
};
