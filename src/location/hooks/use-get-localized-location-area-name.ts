import { LanguageName } from "../../common/typings";
import { useFetchLocationArea } from "./use-fetch-location-area";

type UseGetLocalizedLocationAreaName = {
  locationAreaNameOrId: string | undefined;
  languageName?: LanguageName;
};

export const useGetLocalizedLocationAreaName = ({
  locationAreaNameOrId,
  languageName = "en",
}: UseGetLocalizedLocationAreaName) => {
  const { data: locationArea, ...others } = useFetchLocationArea(locationAreaNameOrId);

  const localizedLocationAreaName = locationArea?.names.find(
    (locationAreaName) => locationAreaName.language.name === languageName
  );

  const data =
    localizedLocationAreaName ??
    locationArea?.names.find((locationAreaName) => locationAreaName.language.name === "en");

  return { ...others, data };
};
