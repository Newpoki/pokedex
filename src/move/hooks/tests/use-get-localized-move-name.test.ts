import { renderHook, waitFor } from "@testing-library/react";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { useGetLocalizedMoveName } from "../use-get-localized-move-name";
import { LanguageName } from "../../../common/typings";
import { mockedMove } from "../../../mocks/data/move/move";

describe("useGetLocalizedMoveName", () => {
  const languageNames: Array<LanguageName> = ["en", "fr"];

  const moveNameOrId = mockedMove.default.data.name;

  describe("API call was a success", () => {
    describe("A language name is provided", () => {
      languageNames.forEach((languageName) => {
        it("should return the correct localized move name", async () => {
          const { result } = renderHook(
            () => useGetLocalizedMoveName({ moveNameOrId, languageName }),
            {
              wrapper: createMockWrapper(),
            }
          );

          await waitFor(() => expect(result.current.isSuccess).toBe(true));

          const actual = result.current.data;
          const expected = mockedMove.default.data.names.find(
            (moveName) => moveName.language.name === languageName
          );

          expect(actual).toEqual(expected);
        });
      });
    });

    describe("No language is provided", () => {
      it("should return the english move name", async () => {
        const { result } = renderHook(() => useGetLocalizedMoveName({ moveNameOrId }), {
          wrapper: createMockWrapper(),
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        const actual = result.current.data;

        const expected = mockedMove.default.data.names.find(
          (moveName) => moveName.language.name === "en"
        );

        expect(actual).toEqual(expected);
      });
    });
  });
});
