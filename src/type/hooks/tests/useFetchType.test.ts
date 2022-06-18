import { useFetchType } from "../useFetchType";
import { renderHook, waitFor } from "@testing-library/react";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { mockedType } from "../../../mocks/data/type/type";

describe("useFetchType", () => {
  describe("API call was a success", () => {
    it("should return the type data", async () => {
      const name = "grass";

      const { result } = renderHook(() => useFetchType(name), {
        wrapper: createMockWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      const actual = result.current.data;
      const expected = mockedType.default.data;

      expect(actual).toEqual(expected);
    });
  });
});
