import { renderHook, waitFor } from "@testing-library/react";
import { mockedPokemonSpecies } from "../../../mocks/data/pokemon-species/pokemon-species";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { useFetchPokemonSpecies } from "../use-fetch-pokemon-species";

describe("useFetchPokemonSpecies", () => {
  describe("API call was a success", () => {
    const pokemonName = mockedPokemonSpecies.default.data.name;

    it("should return the pokemon species", async () => {
      const { result } = renderHook(() => useFetchPokemonSpecies(pokemonName), {
        wrapper: createMockWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      const actual = result.current.data;
      const expected = mockedPokemonSpecies.default.data;

      expect(actual).toEqual(expected);
    });
  });
});
