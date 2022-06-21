import { useQuery } from "react-query";
import { itemQueryKeys } from "../item-constants";
import { Item } from "../typings";

export const useFetchItem = (itemNameOrId: string | undefined) => {
  return useQuery<Item>(
    itemQueryKeys.item(itemNameOrId),
    async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/item/${itemNameOrId}`);
      const data = await response.json();

      return data;
    },
    {
      enabled: Boolean(itemNameOrId),
    }
  );
};
