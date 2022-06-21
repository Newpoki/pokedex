import { LanguageName } from "../../common/typings";
import { useFetchPokemonSpecies } from "./use-fetch-pokemon-species";

type UseGetLocalizedPokemonSpeciesName = {
  pokemonNameOrId: string | undefined;
  languageName?: LanguageName;
};

export const useGetLocalizedPokemonSpeciesName = ({
  pokemonNameOrId,
  languageName = "en",
}: UseGetLocalizedPokemonSpeciesName) => {
  const { data: pokemonSpecies, ...others } = useFetchPokemonSpecies(pokemonNameOrId);

  const localizedPokemonSpeciesName = pokemonSpecies?.names.find(
    (pokemonSpeciesName) => pokemonSpeciesName.language.name === languageName
  );

  return { ...others, data: localizedPokemonSpeciesName };
};
