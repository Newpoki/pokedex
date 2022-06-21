import { LanguageName } from "../../common/typings";
import { useFetchItem } from "./useFetchItem";

type UseGetLocalizedItemName = {
  itemNameOrId: string | undefined;
  languageName?: LanguageName;
};

export const useGetLocalizedItemName = ({
  itemNameOrId,
  languageName = "en",
}: UseGetLocalizedItemName) => {
  const { data: eggGroup, ...others } = useFetchItem(itemNameOrId);

  const localizedItemName = eggGroup?.names.find(
    (itemName) => itemName.language.name === languageName
  );

  console.log({ localizedItemName });

  return { ...others, data: localizedItemName };
};
