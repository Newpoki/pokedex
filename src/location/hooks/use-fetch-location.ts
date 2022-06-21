import { useQuery } from "react-query";
import { locationQueryKeys } from "../location-constants";
import { Location } from "../typings";

export const useFetchLocation = (locationNameOrId: string | undefined) => {
  return useQuery<Location>(
    locationQueryKeys.location(locationNameOrId),
    async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/location/${locationNameOrId}`);
      const data = await response.json();

      return data;
    },
    {
      enabled: Boolean(locationNameOrId),
    }
  );
};
