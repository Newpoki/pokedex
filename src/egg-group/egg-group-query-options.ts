import { fetchPokemonAPI } from "@/api/api";
import { queryOptions } from "@tanstack/react-query";
import { LanguageCode, Name } from "@/api/api-types";
import { EggGroup } from "./egg-group-types";

type MappedNamePerLanguage = Partial<Record<LanguageCode, Name>>;

export const eggGroupQueryOptions = (name: string) =>
  queryOptions({
    queryKey: ["egg-group", name],
    queryFn: async () => {
      const eggGroup = await fetchPokemonAPI<EggGroup>(`/egg-group/${name}`);

      const mappedNamesPerLanguage =
        eggGroup.names.reduce<MappedNamePerLanguage>((acc, item) => {
          acc[item.language.name] = item;

          return acc;
        }, {});

      // TODO: Handle user language choice
      const displayName = mappedNamesPerLanguage["en"]?.name ?? eggGroup.name;

      return { ...eggGroup, displayName };
    },
  });
