import { fetchPokemonAPI } from "@/api/api";
import { queryOptions } from "@tanstack/react-query";
import { Ability } from "./ability-types";
import { LanguageCode, Name } from "@/api/api-types";

type MappedNamePerLanguage = Partial<Record<LanguageCode, Name>>;

export const abilityQueryOptions = (name: string) =>
  queryOptions({
    queryKey: ["ability", name],
    queryFn: async () => {
      const ability = await fetchPokemonAPI<Ability>(`/ability/${name}`);

      const mappedNamesPerLanguage =
        ability.names.reduce<MappedNamePerLanguage>((acc, item) => {
          acc[item.language.name] = item;

          return acc;
        }, {});

      // TODO: Handle user language choice
      const displayName = mappedNamesPerLanguage["en"]?.name ?? ability.name;

      return { ...ability, displayName };
    },
  });
