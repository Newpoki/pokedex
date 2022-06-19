import { renderHook, waitFor } from "@testing-library/react";
import { mockedEggGroup } from "../../../mocks/data/egg-group/egg-group";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { useFetchEggGroup } from "../use-fetch-egg-group";

describe("useFetchEggGroup", () => {
  describe("API call was a success", () => {
    const eggGroupUrl = mockedEggGroup.monster.data.name;

    it("should fetch the egg group", async () => {
      const { result } = renderHook(() => useFetchEggGroup(eggGroupUrl), {
        wrapper: createMockWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      const actual = result.current.data;
      const expected = mockedEggGroup.monster.data;

      expect(actual).toEqual(expected);
    });
  });
});
