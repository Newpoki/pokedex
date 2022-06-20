import { LanguageName } from "../../common/typings";
import { PokemonSpecies } from "../typings";
import findLast from "lodash.findlast";

type useGetLocalizedLatestPokemonFlavorInput = {
  pokemonSpecies: PokemonSpecies | undefined;
  languageName?: LanguageName;
};

export const useGetLocalizedLatestPokemonFlavor = ({
  pokemonSpecies,
  languageName = "en",
}: useGetLocalizedLatestPokemonFlavorInput) => {
  // The flavor entries are sorted by version, so we can just take the last one

  return (
    findLast(pokemonSpecies?.flavor_text_entries, (flavor) => {
      return flavor.language.name === languageName;
    }) ?? null
  );
};
