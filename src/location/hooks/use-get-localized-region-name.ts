import { LanguageName } from "../../common/typings";
import { useFetchRegion } from "./use-fetch-region";

type UseGetLocalizedRegionName = {
  regionNameOrId: string | undefined;
  languageName?: LanguageName;
};

export const useGetLocalizedRegionName = ({
  regionNameOrId,
  languageName = "en",
}: UseGetLocalizedRegionName) => {
  const { data: region, ...others } = useFetchRegion(regionNameOrId);

  const localizedRegionName = region?.names.find(
    (regionName) => regionName.language.name === languageName
  );

  const data =
    localizedRegionName ?? region?.names.find((regionName) => regionName.language.name === "en");

  return { ...others, data };
};
