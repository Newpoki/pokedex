import { mockedPokemon } from "../../../mocks/data/pokemon/pokemon";
import { useGetWeaknessess } from "../useGetWeaknesses";
import { renderHook, waitFor } from "@testing-library/react";
import { createMockWrapper } from "../../../mocks/mock-wrapper";

describe("useGetWeaknesses", () => {
  describe("API call is a success", () => {
    describe("Pokemon has 2 types", () => {
      const pokemonTypes = mockedPokemon.default.data.types;

      it("should return the pokemon weaknesses", async () => {
        const { result } = renderHook(() => useGetWeaknessess(pokemonTypes), {
          wrapper: createMockWrapper(),
        });

        await waitFor(() => expect(result.current).toBeDefined());

        const actual = result.current;
      });
    });
  });
});
