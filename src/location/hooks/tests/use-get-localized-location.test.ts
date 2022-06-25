import { renderHook, waitFor } from "@testing-library/react";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { useGetLocalizedLocationName } from "../use-get-localized-location-name";
import { LanguageName } from "../../../common/typings";
import { mockedLocation } from "../../../mocks/data/location/location";

describe("useGetLocalizedLocationName", () => {
  const languageNames: Array<LanguageName> = ["en", "fr"];

  const locationNameOrId = mockedLocation.default.data.name;

  describe("API call was a success", () => {
    describe("A language name is provided", () => {
      languageNames.forEach((languageName) => {
        it("should return the correct localized location name", async () => {
          const { result } = renderHook(
            () => useGetLocalizedLocationName({ locationNameOrId, languageName }),
            {
              wrapper: createMockWrapper(),
            }
          );

          await waitFor(() => expect(result.current.isSuccess).toBe(true));

          const actual = result.current.data;
          const expected = mockedLocation.default.data.names.find(
            (locationName) => locationName.language.name === languageName
          );

          expect(actual).toEqual(expected);
        });
      });
    });

    describe("No language is provided", () => {
      it("should return the english location name", async () => {
        const { result } = renderHook(() => useGetLocalizedLocationName({ locationNameOrId }), {
          wrapper: createMockWrapper(),
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        const actual = result.current.data;

        const expected = mockedLocation.default.data.names.find(
          (locationName) => locationName.language.name === "en"
        );

        expect(actual).toEqual(expected);
      });
    });
  });
});
