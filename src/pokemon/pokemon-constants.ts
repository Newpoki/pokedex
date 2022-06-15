export const pokemonQueryKeys = {
  base: ["pokemon"],
  pokemon: (pokemonAPIUrl: string) => [...pokemonQueryKeys.base, pokemonAPIUrl],
};
