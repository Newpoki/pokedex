import { renderHook } from "@testing-library/react";
import { mockedPokemon } from "../../../mocks/data/pokemon/pokemon";
import { useGetPokemonYieldEVs } from "../use-get-pokemon-yield-evs";

describe("useGetPokemonYieldEVs", () => {
  const pokemonName = mockedPokemon.default.data;

  it("should return the stats where effort is > 0", () => {
    const { result } = renderHook(() => useGetPokemonYieldEVs(pokemonName));

    const actual = result.current;
    const expected = [mockedPokemon.default.data.stats[1]];

    expect(actual).toEqual(expected);
  });
});
