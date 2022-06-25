import { LanguageName } from "../../common/typings";
import { useFetchLocationArea } from "./use-fetch-location-area";

type UseGetLocalizedLocationAreaName = {
  locationAreaUrl: string | undefined;
  languageName?: LanguageName;
};

export const useGetLocalizedLocationAreaName = ({
  locationAreaUrl,
  languageName = "en",
}: UseGetLocalizedLocationAreaName) => {
  const { data: locationArea, ...others } = useFetchLocationArea(locationAreaUrl);

  const localizedLocationAreaName = locationArea?.names.find(
    (locationAreaName) => locationAreaName.language.name === languageName
  );

  const data =
    localizedLocationAreaName ??
    locationArea?.names.find((locationAreaName) => locationAreaName.language.name === "en");

  return { ...others, data };
};
