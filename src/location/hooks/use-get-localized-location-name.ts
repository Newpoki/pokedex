import { LanguageName } from "../../common/typings";
import { useFetchLocation } from "./use-fetch-location";

type UseGetLocalizedLocationName = {
  locationNameOrId: string | undefined;
  languageName?: LanguageName;
};

export const useGetLocalizedLocationName = ({
  locationNameOrId,
  languageName = "en",
}: UseGetLocalizedLocationName) => {
  const { data: location, ...others } = useFetchLocation(locationNameOrId);

  const localizedLocationName = location?.names.find(
    (locationName) => locationName.language.name === languageName
  );

  const data =
    localizedLocationName ??
    location?.names.find((locationName) => locationName.language.name === "en");

  return { ...others, data };
};
