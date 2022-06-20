import { renderHook } from "@testing-library/react";
import { LanguageName } from "../../../common/typings";
import { mockedPokemonSpecies } from "../../../mocks/data/pokemon-species/pokemon-species";
import { useGetLocalizedLatestPokemonFlavor } from "../use-get-localized-latest-pokemon-flavor";
import findLast from "lodash.findlast";

describe("useGetLocalizedLatestPokemonFlavor", () => {
  const languageNames: Array<LanguageName> = [
    "ja-Hrkt",
    "ko",
    "fr",
    "de",
    "es",
    "it",
    "en",
    "ja",
    "zh-Hant",
    "zh-Hans",
  ];

  describe("No pokemon species is provided", () => {
    const pokemonSpecies = undefined;

    it("should return null", () => {
      const { result } = renderHook(() => useGetLocalizedLatestPokemonFlavor({ pokemonSpecies }));

      const actual = result.current;
      const expected = null;

      expect(actual).toBe(expected);
    });
  });

  describe("No language name is provided", () => {
    const pokemonSpecies = mockedPokemonSpecies.default.data;

    it("should return the latest english flavor", () => {
      const { result } = renderHook(() => useGetLocalizedLatestPokemonFlavor({ pokemonSpecies }));

      const actual = result.current;
      const expected = mockedPokemonSpecies.default.data.flavor_text_entries[91];

      expect(actual).toBe(expected);
    });
  });

  describe("A language name is provided", () => {
    const pokemonSpecies = mockedPokemonSpecies.default.data;

    languageNames.forEach((languageName) => {
      it(`should return the latest flavor matching the language ${languageName}`, () => {
        const { result } = renderHook(() =>
          useGetLocalizedLatestPokemonFlavor({ pokemonSpecies, languageName })
        );

        const actual = result.current;
        const expected = findLast(
          mockedPokemonSpecies.default.data.flavor_text_entries,
          (value) => {
            return value.language.name === languageName;
          }
        );

        expect(actual).toBe(expected);
      });
    });
  });
});
