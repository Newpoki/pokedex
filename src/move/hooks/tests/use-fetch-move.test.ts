import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchMove } from "../use-fetch-move";
import { mockedMove } from "../../../mocks/data/move/move";

describe("useFetchMove", () => {
  const moveNameOrId = mockedMove.default.data.name;

  describe("API call was a success", () => {
    it("should return the move", async () => {
      const { result } = renderHook(() => useFetchMove(moveNameOrId), {
        wrapper: createMockWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      const actual = result.current.data;
      const expected = mockedMove.default.data;

      expect(actual).toEqual(expected);
    });
  });
});
