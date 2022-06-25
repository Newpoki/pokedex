import { renderHook, waitFor } from "@testing-library/react";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { useGetLocalizedRegionName } from "../use-get-localized-region-name";
import { LanguageName } from "../../../common/typings";
import { mockedRegion } from "../../../mocks/data/region/region";

describe("useGetLocalizedRegionName", () => {
  const languageNames: Array<LanguageName> = ["en", "fr"];

  const regionNameOrId = mockedRegion.default.data.name;

  describe("API call was a success", () => {
    describe("A language name is provided", () => {
      languageNames.forEach((languageName) => {
        it("should return the correct localized region name", async () => {
          const { result } = renderHook(
            () => useGetLocalizedRegionName({ regionNameOrId, languageName }),
            {
              wrapper: createMockWrapper(),
            }
          );

          await waitFor(() => expect(result.current.isSuccess).toBe(true));

          const actual = result.current.data;
          const expected = mockedRegion.default.data.names.find(
            (regionName) => regionName.language.name === languageName
          );

          expect(actual).toEqual(expected);
        });
      });
    });

    describe("No language is provided", () => {
      it("should return the english region name", async () => {
        const { result } = renderHook(() => useGetLocalizedRegionName({ regionNameOrId }), {
          wrapper: createMockWrapper(),
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        const actual = result.current.data;

        const expected = mockedRegion.default.data.names.find(
          (regionName) => regionName.language.name === "en"
        );

        expect(actual).toEqual(expected);
      });
    });
  });
});
