import { fetchPokemonAPI } from "@/api/api";
import { PokemonAPIResponse } from "../pokemon-types";
import { PokemonSpecies } from "@/pokemon-species/pokemon-species.types";
import { LanguageCode } from "@/api/api-types";

type FetchPokemonDataParams = {
  name: string;
};

export const fetchPokemonData = async ({ name }: FetchPokemonDataParams) => {
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
  const displayedName = mappedNamePerLanguage["en"] ?? name;

  return { pokemon: pokemonData, species: pokemonSpeciesData, displayedName };
};
