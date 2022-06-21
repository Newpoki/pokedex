import { LanguageName } from "../../common/typings";
import { PokemonTypeName } from "../../pokemon/typings";
import { useFetchType } from "./use-fetch-type";

type UseGetLocalizedTypeName = {
  typeName: PokemonTypeName | undefined;
  languageName?: LanguageName;
};

export const useGetLocalizedTypeName = ({
  typeName,
  languageName = "en",
}: UseGetLocalizedTypeName) => {
  const { data: type, ...others } = useFetchType(typeName);

  const localizedTypeName = type?.names.find((typeName) => typeName.language.name === languageName);

  const data = localizedTypeName ?? type?.names.find((typeName) => typeName.language.name === "en");

  return { ...others, data };
};
