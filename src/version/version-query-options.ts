import { fetchPokemonAPI } from "@/api/api";
import { queryOptions } from "@tanstack/react-query";
import { LanguageCode, Name } from "@/api/api-types";
import { Version } from "./version-types";

type MappedNamePerLanguage = Partial<Record<LanguageCode, Name>>;

export const versionQueryOptions = (name: string) =>
  queryOptions({
    queryKey: ["version", name],
    queryFn: async () => {
      const version = await fetchPokemonAPI<Version>(`/version/${name}`);

      const mappedNamesPerLanguage =
        version.names.reduce<MappedNamePerLanguage>((acc, item) => {
          acc[item.language.name] = item;

          return acc;
        }, {});

      // TODO: Handle user language choice
      const displayName = mappedNamesPerLanguage["en"]?.name ?? version.name;

      return { ...version, displayName };
    },
  });
