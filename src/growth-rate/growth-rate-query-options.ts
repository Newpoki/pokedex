import { fetchPokemonAPI } from "@/api/api";
import { queryOptions } from "@tanstack/react-query";
import { LanguageCode } from "@/api/api-types";
import { GrowthRate } from "./growth-rate-types";

type MappedDescriptionPerLanguage = Partial<Record<LanguageCode, string>>;

export const growthRateQueryOptions = (name: string) =>
  queryOptions({
    queryKey: ["grow-rate", name],
    queryFn: async () => {
      const growthRate = await fetchPokemonAPI<GrowthRate>(
        `/growth-rate/${name}`,
      );

      const mappedDescriptionsPerLanguage =
        growthRate.descriptions.reduce<MappedDescriptionPerLanguage>(
          (acc, item) => {
            acc[item.language.name] = item.description;

            return acc;
          },
          {},
        );

      // TODO: Handle user language choice
      const displayName =
        mappedDescriptionsPerLanguage["en"] ?? growthRate.name;

      return { ...growthRate, displayName };
    },
  });
