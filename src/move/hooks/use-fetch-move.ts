import { useQuery } from "react-query";
import { moveQueryKeys } from "../move-constants";
import { Move } from "../typings";

export const useFetchMove = (moveNameOrId: string | undefined) => {
  return useQuery<Move>(
    moveQueryKeys.move(moveNameOrId),
    async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/move/${moveNameOrId}`);
      const data = await response.json();

      return data;
    },
    {
      enabled: Boolean(moveNameOrId),
    }
  );
};
