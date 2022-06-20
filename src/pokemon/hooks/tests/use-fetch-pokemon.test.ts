import { renderHook, waitFor } from "@testing-library/react";
import { mockedPokemon } from "../../../mocks/data/pokemon/pokemon";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { useFetchPokemon } from "../use-fetch-pokemon";

describe("useFetchPokemon", () => {
  describe("API call was a success", () => {
    const pokemonName = mockedPokemon.default.data.name;

    it("should return the pokemon", async () => {
      const { result } = renderHook(() => useFetchPokemon(pokemonName), {
        wrapper: createMockWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      const actual = result.current.data;
      const expected = mockedPokemon.default.data;

      expect(actual).toEqual(expected);
    });
  });
});
