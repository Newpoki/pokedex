import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchLocationArea } from "../use-fetch-location-area";
import { mockedLocationArea } from "../../../mocks/data/location-area/location-area";

describe("useFetchLocationArea", () => {
  describe("API call was a success", () => {
    const url = "https://pokeapi.co/api/v2/location-area/1";

    it("should return the location area", async () => {
      const { result } = renderHook(() => useFetchLocationArea(url), {
        wrapper: createMockWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      const actual = result.current.data;
      const expected = mockedLocationArea.default.data;

      expect(actual).toEqual(expected);
    });
  });

  describe("there is no location area url provided", () => {
    const url = undefined;

    it("should return undefined", async () => {
      const { result } = renderHook(() => useFetchLocationArea(url), {
        wrapper: createMockWrapper(),
      });

      await waitFor(() => expect(result.current.isIdle).toBe(true));

      const actual = result.current.data;
      const expected = undefined;

      expect(actual).toBe(expected);
    });
  });
});
