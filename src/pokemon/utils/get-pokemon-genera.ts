import { LanguageCode } from "@/api/api-types";
import { PokemonSpeciesGenus } from "@/pokemon-species/pokemon-species.types";

type MappedGenusPerLanguage = Partial<Record<LanguageCode, string>>;

export const getPokemonGenus = (genera: PokemonSpeciesGenus[]) => {
  const mappedGeneraByLanguage = Object.values(
    genera,
  ).reduce<MappedGenusPerLanguage>((acc, genus) => {
    acc[genus.language.name] = genus.genus;

    return acc;
  }, {});

  // TODO: Handle user language choice
  return mappedGeneraByLanguage["en"];
};
