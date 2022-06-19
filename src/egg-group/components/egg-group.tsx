import { LanguageName } from "../../common/typings";
import { useGetLocalizedEggGroupName } from "../hooks/use-get-localized-egg-group-name";

type EggGroupProps = {
  pokemonEggGroupNameOrId: string | undefined;
  languageName?: LanguageName;
};

export const EggGroup = ({ pokemonEggGroupNameOrId, languageName = "en" }: EggGroupProps) => {
  const { data: eggGroup } = useGetLocalizedEggGroupName({ pokemonEggGroupNameOrId, languageName });

  return <span>{eggGroup?.name}</span>;
};
