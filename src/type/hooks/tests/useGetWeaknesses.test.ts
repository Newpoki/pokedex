import { mockedPokemon } from "../../../mocks/data/pokemon/pokemon";
import { useGetWeaknessess } from "../useGetWeaknesses";
import { renderHook, waitFor } from "@testing-library/react";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { PokemonType } from "../../../pokemon/typings";

describe("useGetWeaknesses", () => {
  describe("API call is a success", () => {
    describe("Pokemon has 2 types", () => {
      const pokemonTypes = mockedPokemon.default.data.types;

      it("should return the pokemon weaknesses", async () => {
        const { result } = renderHook(() => useGetWeaknessess(pokemonTypes), {
          wrapper: createMockWrapper(),
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        const actual = result.current.data;
        const expected: Array<PokemonType["type"]> = [
          { name: "electric", url: "https://pokeapi.co/api/v2/type/13/" },
          { name: "rock", url: "https://pokeapi.co/api/v2/type/6/" },
        ];

        expect(actual).toEqual(expected);
      });
    });
  });
});
