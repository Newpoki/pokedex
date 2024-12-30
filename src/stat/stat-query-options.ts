import { fetchPokemonAPI } from "@/api/api";
import { queryOptions } from "@tanstack/react-query";
import { LanguageCode, Name } from "@/api/api-types";
import { Stat } from "./stat-types";

type MappedNamePerLanguage = Partial<Record<LanguageCode, Name>>;

export const statQueryOptions = (name: string) =>
  queryOptions({
    queryKey: ["stat", name],
    queryFn: async () => {
      const stat = await fetchPokemonAPI<Stat>(`/stat/${name}`);

      const mappedNamesPerLanguage = stat.names.reduce<MappedNamePerLanguage>(
        (acc, item) => {
          acc[item.language.name] = item;

          return acc;
        },
        {},
      );

      // TODO: Handle user language choice
      const displayName = mappedNamesPerLanguage["en"]?.name ?? stat.name;

      return { ...stat, displayName };
    },
  });
