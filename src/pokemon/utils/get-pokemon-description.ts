import { FlavorText } from "@/api/api-types";

type Description = {
  selected: string | null;
  fallback: string | null;
};

export const getPokemonDescription = (flavorTextEntries: FlavorText[]) => {
  const { selected, fallback } = flavorTextEntries.reduce<Description>(
    (acc, entry) => {
      if (acc.selected != null && acc.fallback != null) {
        return acc;
      }

      // TODO: replace en with user selected language
      if (acc.selected == null && entry.language.name === "en") {
        acc.selected = entry.flavor_text;
      }

      if (acc.fallback == null && entry.language.name === "en") {
        acc.fallback = entry.flavor_text;
      }

      return acc;
    },
    { selected: null, fallback: null },
  );

  return selected ?? fallback;
};
