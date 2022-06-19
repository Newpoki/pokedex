import { LanguageName } from "../../common/typings";
import { useFetchEggGroup } from "./use-fetch-egg-group";

type UseGetLocalizedEddGroupName = {
  pokemonEggGroupNameOrId: string | undefined;
  languageName?: LanguageName;
};

export const useGetLocalizedEggGroupName = ({
  pokemonEggGroupNameOrId,
  languageName = "en",
}: UseGetLocalizedEddGroupName) => {
  const { data: eggGroup, ...others } = useFetchEggGroup(pokemonEggGroupNameOrId);

  const localizedEggGroupName = eggGroup?.names.find(
    (eggGroupName) => eggGroupName.language.name === languageName
  );

  return { ...others, data: localizedEggGroupName };
};
