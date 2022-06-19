import { renderHook, waitFor } from "@testing-library/react";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { useGetLocalizedEggGroupName } from "../use-get-localized-egg-group-name";
import { LanguageName } from "../../../common/typings";
import { mockedEggGroup } from "../../../mocks/data/egg-group/egg-group";

describe("useGetLocalizedEggGroupName", () => {
  const languageNames: Array<LanguageName> = [
    "ja-Hrkt",
    "ko",
    "fr",
    "de",
    "es",
    "it",
    "en",
    "ja",
    "roomaji",
    "zh-Hant",
    "zh-Hans",
  ];

  const eggGroups = [
    mockedEggGroup.bug.data,
    mockedEggGroup.ditto.data,
    mockedEggGroup.dragon.data,
    mockedEggGroup.fairy.data,
    mockedEggGroup.flying.data,
    mockedEggGroup.ground.data,
    mockedEggGroup.humanShape.data,
    mockedEggGroup.indeterminate.data,
    mockedEggGroup.mineral.data,
    mockedEggGroup.monster.data,
    mockedEggGroup.noEggs.data,
    mockedEggGroup.plant.data,
    mockedEggGroup.water1.data,
    mockedEggGroup.water2.data,
    mockedEggGroup.water3.data,
  ];
  describe("API call was a success", () => {
    describe("A language name is provided", () => {
      eggGroups.forEach((eggGroup) => {
        languageNames.forEach((languageName) => {
          const pokemonEggGroupNameOrId = eggGroup.name;

          it("should return the correct localized egg group name", async () => {
            const { result } = renderHook(
              () => useGetLocalizedEggGroupName({ pokemonEggGroupNameOrId, languageName }),
              {
                wrapper: createMockWrapper(),
              }
            );

            await waitFor(() => expect(result.current.isSuccess).toBe(true));

            const actual = result.current.data;
            const expected = eggGroup.names.find(
              (eggGroupName) => eggGroupName.language.name === languageName
            );

            expect(actual).toEqual(expected);
          });
        });
      });
    });

    describe("No language is provided", () => {
      eggGroups.forEach((eggGroup) => {
        it("should return the english egg group name", async () => {
          const pokemonEggGroupNameOrId = eggGroup.name;

          const { result } = renderHook(
            () => useGetLocalizedEggGroupName({ pokemonEggGroupNameOrId }),
            {
              wrapper: createMockWrapper(),
            }
          );

          await waitFor(() => expect(result.current.isSuccess).toBe(true));

          const actual = result.current.data;
          const expected = eggGroup.names.find(
            (eggGroupName) => eggGroupName.language.name === "en"
          );

          expect(actual).toEqual(expected);
        });
      });
    });
  });
});
