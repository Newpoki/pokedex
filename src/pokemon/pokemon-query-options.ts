import { queryOptions } from "@tanstack/react-query";
import { fetchPokemonAPI } from "@/api/api";
import { Pokemon, PokemonAPIResponse } from "./pokemon-types";
import { PokemonSpecies } from "@/pokemon-species/pokemon-species.types";
import { LanguageCode } from "@/api/api-types";

export const pokemonQueryOptions = (name: string) =>
  queryOptions({
    queryKey: ["pokemon", name],
    queryFn: async () => {
      const pokemonData = await fetchPokemonAPI<PokemonAPIResponse>(
        `/pokemon/${name}`,
      );

      // Some informations are only available within the species such as the translated names or evolution chain
      const pokemonSpeciesData = await fetchPokemonAPI<PokemonSpecies>(
        `/pokemon-species/${pokemonData.id}`,
      );

      const mappedNamePerLanguage = pokemonSpeciesData.names.reduce<
        Partial<Record<LanguageCode, string>>
      >((acc, item) => {
        acc[item.language.name] = item.name;

        return acc;
      }, {});

      // TODO: Handle user language selection
      const displayName = mappedNamePerLanguage["en"] ?? name;

      const pokemon: Pokemon = {
        ...pokemonData,
        speciesData: pokemonSpeciesData,
        displayName,
      };

      return pokemon;
    },
  });
