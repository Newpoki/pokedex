import { LanguageName } from "../../common/typings";
import { useFetchEggGroup } from "./useFetchEggGroup";

type UseGetLocalizedEddGroup = {
  pokemonEggGroupUrl: string | undefined;
  languageName?: LanguageName;
};

export const useGetLocalizedEggGroup = ({
  pokemonEggGroupUrl,
  languageName = "en",
}: UseGetLocalizedEddGroup) => {
  const { data: eggGroup, ...others } = useFetchEggGroup(pokemonEggGroupUrl);

  const localizedEggGroupName = eggGroup?.names.find(
    (eggGroupName) => eggGroupName.language.name === languageName
  );

  return { ...others, data: localizedEggGroupName };
};
