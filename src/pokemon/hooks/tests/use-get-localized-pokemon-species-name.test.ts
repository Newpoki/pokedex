import { renderHook, waitFor } from "@testing-library/react";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { LanguageName } from "../../../common/typings";
import { useGetLocalizedPokemonSpeciesName } from "../use-get-localized-pokemon-species-name";
import { mockedPokemonSpecies } from "../../../mocks/data/pokemon-species/pokemon-species";

describe("useGetLocalizedPokemonSpeciesName", () => {
  const languageNames: Array<LanguageName> = [
    "ja-Hrkt",
    "roomaji",
    "ko",
    "zh-Hant",
    "fr",
    "de",
    "es",
    "it",
    "en",
    "ja",
    "zh-Hans",
  ];

  const pokemonNameOrId = mockedPokemonSpecies.default.data.name;

  describe("API call was a success", () => {
    describe("A language name is provided", () => {
      languageNames.forEach((languageName) => {
        it("should return the correct localized pokemonSpecies name", async () => {
          const { result } = renderHook(
            () => useGetLocalizedPokemonSpeciesName({ pokemonNameOrId, languageName }),
            {
              wrapper: createMockWrapper(),
            }
          );

          await waitFor(() => expect(result.current.isSuccess).toBe(true));

          const actual = result.current.data;
          const expected = mockedPokemonSpecies.default.data.names.find(
            (pokemonSpeciesName) => pokemonSpeciesName.language.name === languageName
          );

          expect(actual).toEqual(expected);
        });
      });
    });

    describe("No language is provided", () => {
      it("should return the english pokemonSpecies name", async () => {
        const { result } = renderHook(
          () => useGetLocalizedPokemonSpeciesName({ pokemonNameOrId }),
          {
            wrapper: createMockWrapper(),
          }
        );

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        const actual = result.current.data;

        const expected = mockedPokemonSpecies.default.data.names.find(
          (pokemonSpeciesName) => pokemonSpeciesName.language.name === "en"
        );

        expect(actual).toEqual(expected);
      });
    });
  });
});
