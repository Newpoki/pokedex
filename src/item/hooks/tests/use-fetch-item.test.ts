import { renderHook, waitFor } from "@testing-library/react";
import { mockedItem } from "../../../mocks/data/item/item";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { useFetchItem } from "../use-fetch-item";

describe("useFetchItem", () => {
  const itemNameOrId = mockedItem.default.data.name;

  describe("API call was a success", () => {
    it("should fetch the item", async () => {
      const { result } = renderHook(() => useFetchItem(itemNameOrId), {
        wrapper: createMockWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      const actual = result.current.data;
      const expected = mockedItem.default.data;

      expect(actual).toEqual(expected);
    });
  });
});
