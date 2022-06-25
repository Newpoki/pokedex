import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchPokemonEvolutionChain } from "../use-fetch-pokemon-evolution-chain";
import { mockedPokemonEvolutionChain } from "../../../mocks/data/pokemon-evolution-chain/pokemon-evolution-chain";

describe("useFetchPokemonEvolutionChain", () => {
  describe("API call was a success", () => {
    const url = mockedPokemonEvolutionChain.default.url;

    it("should return the location area", async () => {
      const { result } = renderHook(() => useFetchPokemonEvolutionChain(url), {
        wrapper: createMockWrapper(),
      });

      await waitFor(() => expect(result.current.isSuccess).toBe(true));

      const actual = result.current.data;
      const expected = mockedPokemonEvolutionChain.default.data;

      expect(actual).toEqual(expected);
    });
  });

  describe("there is no location area url provided", () => {
    const url = undefined;

    it("should return undefined", async () => {
      const { result } = renderHook(() => useFetchPokemonEvolutionChain(url), {
        wrapper: createMockWrapper(),
      });

      await waitFor(() => expect(result.current.isIdle).toBe(true));

      const actual = result.current.data;
      const expected = undefined;

      expect(actual).toBe(expected);
    });
  });
});
