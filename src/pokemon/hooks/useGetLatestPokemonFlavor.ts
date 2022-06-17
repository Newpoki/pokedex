import { LanguageName } from "../../common/typings";
import { PokemonSpecies, PokemonSpeciesFlavor } from "../typings";

type UseGetLatestPokemonFlavorInput = {
  pokemonSpecies: PokemonSpecies | undefined;
  language?: LanguageName;
};

export const useGetLatestPokemonFlavor = ({
  pokemonSpecies,
  language = "en",
}: UseGetLatestPokemonFlavorInput) => {
  // The flavor entries are sorted by version, so we can just take the last one
  return (
    pokemonSpecies?.flavor_text_entries.reduce<PokemonSpeciesFlavor | null>((acc, flavor) => {
      return flavor.language.name === language ? flavor : acc;
    }, null) ?? null
  );
};
