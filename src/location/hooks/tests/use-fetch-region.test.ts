import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchRegion } from "../use-fetch-region";
import { mockedRegion } from "../../../mocks/data/region/region";

describe("useFetchRegion", () => {
  const regionNameOrId = mockedRegion.default.data.name;

  describe("API call was a success", () => {
    it("should return the region", async () => {
      const { result } = renderHook(() => useFetchRegion(regionNameOrId), {
        wrapper: createMockWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      const actual = result.current.data;
      const expected = mockedRegion.default.data;

      expect(actual).toEqual(expected);
    });
  });
});
