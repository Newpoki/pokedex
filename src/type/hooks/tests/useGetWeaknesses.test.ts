import { mockedPokemon } from "../../../mocks/data/pokemon/pokemon";
import { useGetWeaknessess } from "../useGetWeaknesses";
import { renderHook, waitFor } from "@testing-library/react";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import uniqBy from "lodash.uniqby";
import { mockedWaterType } from "../../../mocks/data/type/water";
import { mockedFlyingType } from "../../../mocks/data/type/flying.ts";

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
        const expected = uniqBy(
          [
            ...mockedFlyingType.data.damage_relations.double_damage_from,
            ...mockedWaterType.data.damage_relations.double_damage_from,
          ],
          "name"
        );

        expect(actual).toEqual(expected);
      });
    });
  });
});
