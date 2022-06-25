import { renderHook, waitFor } from "@testing-library/react";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { useGetLocalizedItemName } from "../use-get-localized-item-name";
import { LanguageName } from "../../../common/typings";
import { mockedItem } from "../../../mocks/data/item/item";

describe("useGetLocalizedItemName", () => {
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

  const itemNameOrId = mockedItem.default.data.name;

  console.log({ itemNameOrId });

  describe("API call was a success", () => {
    describe("A language name is provided", () => {
      languageNames.forEach((languageName) => {
        it("should return the correct localized item name", async () => {
          const { result } = renderHook(
            () => useGetLocalizedItemName({ itemNameOrId, languageName }),
            {
              wrapper: createMockWrapper(),
            }
          );

          await waitFor(() => expect(result.current.isSuccess).toBe(true));

          const actual = result.current.data;
          const expected = mockedItem.default.data.names.find(
            (itemName) => itemName.language.name === languageName
          );

          expect(actual).toEqual(expected);
        });
      });
    });

    describe("No language is provided", () => {
      it("should return the english item name", async () => {
        const { result } = renderHook(() => useGetLocalizedItemName({ itemNameOrId }), {
          wrapper: createMockWrapper(),
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        const actual = result.current.data;

        const expected = mockedItem.default.data.names.find(
          (itemName) => itemName.language.name === "en"
        );

        expect(actual).toEqual(expected);
      });
    });
  });
});
