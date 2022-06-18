import { LanguageName } from "../../common/typings";
import { useGetLocalizedEggGroup } from "../hooks/useGetLocalizedEggGroup";

type EggGroupProps = {
  pokemonEggGroupUrl: string | undefined;
  languageName?: LanguageName;
};

export const EggGroup = ({ pokemonEggGroupUrl, languageName = "en" }: EggGroupProps) => {
  const { data: eggGroup } = useGetLocalizedEggGroup({ pokemonEggGroupUrl, languageName });

  return <span>{eggGroup?.name}</span>;
};
