import { LanguageName } from "../../common/typings";
import { useFetchItem } from "./use-fetch-item";

type UseGetLocalizedItemName = {
  itemNameOrId: string | undefined;
  languageName?: LanguageName;
};

export const useGetLocalizedItemName = ({
  itemNameOrId,
  languageName = "en",
}: UseGetLocalizedItemName) => {
  const { data: item, ...others } = useFetchItem(itemNameOrId);

  const localizedItemName = item?.names.find((itemName) => itemName.language.name === languageName);

  const data = localizedItemName ?? item?.names.find((itemName) => itemName.language.name === "en");

  return { ...others, data };
};
