import { useQuery } from "react-query";
import { locationQueryKeys } from "../location-constants";
import { Region } from "../typings";

export const useFetchRegion = (regionameOrId: string | undefined) => {
  return useQuery<Region>(
    locationQueryKeys.location(regionameOrId),
    async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/region/${regionameOrId}`);
      const data = await response.json();

      return data;
    },
    {
      enabled: Boolean(regionameOrId),
    }
  );
};
