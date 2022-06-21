import { useQuery } from "react-query";
import { locationQueryKeys } from "../location-constants";
import { LocationArea } from "../typings";

export const useFetchLocationArea = (locationAreaUrl: string | undefined) => {
  return useQuery<LocationArea>(
    locationQueryKeys.locationArea(locationAreaUrl),
    async () => {
      if (!locationAreaUrl) {
        return undefined;
      }

      const response = await fetch(locationAreaUrl);
      const data = await response.json();

      return data;
    },
    {
      enabled: Boolean(locationAreaUrl),
    }
  );
};
