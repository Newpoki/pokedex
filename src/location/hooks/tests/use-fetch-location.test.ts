import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchLocation } from "../use-fetch-location";
import { mockedLocation } from "../../../mocks/data/location/location";

describe("useFetchLocation", () => {
  const locationNameOrId = mockedLocation.default.data.name;

  describe("API call was a success", () => {
    it("should return the location", async () => {
      const { result } = renderHook(() => useFetchLocation(locationNameOrId), {
        wrapper: createMockWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      const actual = result.current.data;
      const expected = mockedLocation.default.data;

      expect(actual).toEqual(expected);
    });
  });
});
