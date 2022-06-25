import { renderHook, waitFor } from "@testing-library/react";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { useGetLocalizedLocationAreaName } from "../use-get-localized-location-area-name";
import { LanguageName } from "../../../common/typings";
import { mockedLocationArea } from "../../../mocks/data/location-area/location-area";

describe("useGetLocalizedLocationAreaName", () => {
  const languageNames: Array<LanguageName> = ["en"];

  const locationAreaUrl = `https://pokeapi.co/api/v2/location-area/${mockedLocationArea.default.data.id}`;

  describe("API call was a success", () => {
    describe("A language name is provided", () => {
      languageNames.forEach((languageName) => {
        it("should return the correct localized locationArea name", async () => {
          const { result } = renderHook(
            () => useGetLocalizedLocationAreaName({ locationAreaUrl, languageName }),
            {
              wrapper: createMockWrapper(),
            }
          );

          await waitFor(() => expect(result.current.isSuccess).toBe(true));

          const actual = result.current.data;
          const expected = mockedLocationArea.default.data.names.find(
            (locationAreaName) => locationAreaName.language.name === languageName
          );

          expect(actual).toEqual(expected);
        });
      });
    });

    describe("No language is provided", () => {
      it("should return the english locationArea name", async () => {
        const { result } = renderHook(() => useGetLocalizedLocationAreaName({ locationAreaUrl }), {
          wrapper: createMockWrapper(),
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        const actual = result.current.data;

        const expected = mockedLocationArea.default.data.names.find(
          (locationAreaName) => locationAreaName.language.name === "en"
        );

        expect(actual).toEqual(expected);
      });
    });
  });
});
