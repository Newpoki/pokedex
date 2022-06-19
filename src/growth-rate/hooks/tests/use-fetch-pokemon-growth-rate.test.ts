import { renderHook, waitFor } from "@testing-library/react";
import { mockedPokemonSpecies } from "../../../mocks/data/pokemon-species/pokemon-species";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { useFetchPokemonGrowthRate } from "../use-fetch-pokemon-growth-rate";

describe("useFetchPokemonGrowthRate", () => {
  describe("API call was a success", () => {
    const pokemonGrowthRateUrl = mockedPokemonSpecies.default.data.name;
    it("should fetch the pokemon growth rate", async () => {
      const { result } = renderHook(() => useFetchPokemonGrowthRate(pokemonGrowthRateUrl), {
        wrapper: createMockWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      const actual = result.current.data;
      const expected = mockedPokemonSpecies.default.data;

      expect(actual).toEqual(expected);
    });
  });
});
