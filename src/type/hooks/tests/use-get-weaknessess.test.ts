import { useGetWeaknessess } from "../use-get-weaknesses";
import { renderHook, waitFor } from "@testing-library/react";
import { createMockWrapper } from "../../../mocks/mock-wrapper";
import { PokemonTypeName } from "../../../pokemon/typings";
import { mockedType } from "../../../mocks/data/type/type";
import sortBy from "lodash.sortby";

type TestCase = {
  label: string;
  types: Array<PokemonTypeName>;
  expected: Array<PokemonTypeName>;
};

describe("useGetWeaknesses", () => {
  describe("API call is a success", () => {
    const testCases: Array<TestCase> = [
      {
        label: "normal",
        types: ["normal"],
        expected: ["fighting"],
      },
      {
        label: "normal and fighting",
        types: ["normal", "fighting"],
        expected: ["fairy", "fighting", "flying", "psychic"],
      },
      {
        label: "normal and flying",
        types: ["normal", "flying"],
        expected: ["electric", "ice", "rock"],
      },
      {
        label: "normal and poison",
        types: ["normal", "poison"],
        expected: ["ground", "psychic"],
      },
      {
        label: "normal and ground",
        types: ["normal", "ground"],
        expected: ["fighting", "grass", "ice", "water"],
      },
      {
        label: "normal and rock",
        types: ["normal", "rock"],
        expected: ["fighting", "grass", "ground", "steel", "water"],
      },
      {
        label: "normal and bug",
        types: ["normal", "bug"],
        expected: ["fire", "flying", "rock"],
      },
      {
        label: "normal and ghost",
        types: ["normal", "ghost"],
        expected: ["dark"],
      },
      {
        label: "normal and steel",
        types: ["normal", "steel"],
        expected: ["fighting", "fire", "ground"],
      },
      {
        label: "normal and fire",
        types: ["normal", "fire"],
        expected: ["fighting", "ground", "rock", "water"],
      },
      {
        label: "normal and water",
        types: ["normal", "water"],
        expected: ["electric", "fighting", "grass"],
      },
      {
        label: "normal and grass",
        types: ["normal", "grass"],
        expected: ["bug", "fighting", "fire", "flying", "ice", "poison"],
      },
      {
        label: "normal and electric",
        types: ["normal", "electric"],
        expected: ["fighting", "ground"],
      },
      {
        label: "normal and psychic",
        types: ["normal", "psychic"],
        expected: ["bug", "dark"],
      },
      {
        label: "normal and ice",
        types: ["normal", "ice"],
        expected: ["fighting", "fire", "rock", "steel"],
      },
      {
        label: "normal and dragon",
        types: ["normal", "dragon"],
        expected: ["dragon", "fairy", "fighting", "ice"],
      },
      {
        label: "normal and dark",
        types: ["normal", "dark"],
        expected: ["bug", "fairy", "fighting"],
      },
      {
        label: "normal and fairy",
        types: ["normal", "fairy"],
        expected: ["poison", "steel"],
      },
      {
        label: "fighting",
        types: ["fighting"],
        expected: ["fairy", "flying", "psychic"],
      },
      {
        label: "fighting and flying",
        types: ["fighting", "flying"],
        expected: ["electric", "fairy", "flying", "ice", "psychic"],
      },
      {
        label: "fighting and poison",
        types: ["fighting", "poison"],
        expected: ["flying", "ground", "psychic"],
      },
      {
        label: "fighting and ground",
        types: ["fighting", "ground"],
        expected: ["flying", "water", "grass", "psychic", "ice", "fairy"],
      },
      {
        label: "fighting and bug",
        types: ["fighting", "bug"],
        expected: ["flying", "fire", "psychic", "fairy"],
      },
      {
        label: "fighting and ghost",
        types: ["fighting", "ghost"],
        expected: ["flying", "ghost", "psychic", "fairy"],
      },
      {
        label: "fighting and steel",
        types: ["fighting", "steel"],
        expected: ["fighting", "ground", "fire"],
      },
      {
        label: "fighting and fire",
        types: ["fighting", "fire"],
        expected: ["flying", "ground", "water", "psychic"],
      },
      {
        label: "fighting and water",
        types: ["fighting", "water"],
        expected: ["flying", "grass", "electric", "psychic", "fairy"],
      },
      {
        label: "fighting and grass",
        types: ["fighting", "grass"],
        expected: ["flying", "poison", "fire", "psychic", "ice", "fairy"],
      },
      {
        label: "fighting and electric",
        types: ["fighting", "electric"],
        expected: ["ground", "psychic", "fairy"],
      },
      {
        label: "fighting and psychic",
        types: ["fighting", "psychic"],
        expected: ["flying", "ghost", "fairy"],
      },
      {
        label: "fighting and ice",
        types: ["fighting", "ice"],
        expected: ["fighting", "flying", "steel", "fire", "psychic", "fairy"],
      },
      {
        label: "fighting and dragon",
        types: ["fighting", "dragon"],
        expected: ["fairy", "flying", "psychic", "ice", "dragon"],
      },
      {
        label: "fighting and dark",
        types: ["fighting", "dark"],
        expected: ["fairy", "fighting", "flying"],
      },
      {
        label: "fighting and fairy",
        types: ["fighting", "fairy"],
        expected: ["flying", "poison", "steel", "psychic", "fairy"],
      },
      {
        label: "flying",
        types: ["flying"],
        expected: ["rock", "electric", "ice"],
      },
      {
        label: "flying and poison",
        types: ["flying", "poison"],
        expected: ["rock", "electric", "psychic", "ice"],
      },
      {
        label: "flying and ground",
        types: ["flying", "ground"],
        expected: ["ice", "water"],
      },
      {
        label: "flying and rock",
        types: ["flying", "rock"],
        expected: ["rock", "steel", "water", "electric", "ice"],
      },
      {
        label: "flying and bug",
        types: ["flying", "bug"],
        expected: ["rock", "flying", "fire", "electric", "ice"],
      },
      {
        label: "flying and ghost",
        types: ["flying", "ghost"],
        expected: ["rock", "ghost", "electric", "ice", "dark"],
      },
      {
        label: "flying and steel",
        types: ["flying", "steel"],
        expected: ["fire", "electric"],
      },
      {
        label: "flying and steel",
        types: ["flying", "steel"],
        expected: ["fire", "electric"],
      },
      {
        label: "flying and fire",
        types: ["flying", "fire"],
        expected: ["rock", "water", "electric"],
      },
      {
        label: "flying and water",
        types: ["flying", "water"],
        expected: ["electric", "rock"],
      },
      {
        label: "flying and grass",
        types: ["flying", "grass"],
        expected: ["ice", "flying", "poison", "rock", "fire"],
      },
      {
        label: "flying and electric",
        types: ["flying", "electric"],
        expected: ["rock", "ice"],
      },
      {
        label: "flying and psychic",
        types: ["flying", "psychic"],
        expected: ["rock", "ghost", "electric", "ice", "dark"],
      },
      {
        label: "flying and ice",
        types: ["flying", "ice"],
        expected: ["rock", "steel", "fire", "electric"],
      },
      {
        label: "flying and dragon",
        types: ["flying", "dragon"],
        expected: ["ice", "rock", "dragon", "fairy"],
      },
      {
        label: "flying and dark",
        types: ["flying", "dark"],
        expected: ["rock", "electric", "ice", "fairy"],
      },
      {
        label: "flying and fairy",
        types: ["flying", "fairy"],
        expected: ["poison", "rock", "steel", "electric", "ice"],
      },
      {
        label: "poison",
        types: ["poison"],
        expected: ["ground", "psychic"],
      },
      {
        label: "poison and ground",
        types: ["poison", "ground"],
        expected: ["ground", "water", "psychic", "ice"],
      },
      {
        label: "poison and rock",
        types: ["poison", "rock"],
        expected: ["ground", "steel", "water", "psychic"],
      },
      {
        label: "poison and bug",
        types: ["poison", "bug"],
        expected: ["flying", "rock", "fire", "psychic"],
      },
      {
        label: "poison and ghost",
        types: ["poison", "ghost"],
        expected: ["ground", "ghost", "psychic", "dark"],
      },
      {
        label: "poison and steel",
        types: ["poison", "steel"],
        expected: ["ground", "fire"],
      },
      {
        label: "poison and fire",
        types: ["poison", "fire"],
        expected: ["ground", "rock", "water", "psychic"],
      },
      {
        label: "poison and water",
        types: ["poison", "water"],
        expected: ["ground", "electric", "psychic"],
      },
      {
        label: "poison and grass",
        types: ["poison", "grass"],
        expected: ["flying", "fire", "psychic", "ice"],
      },
      {
        label: "poison and electric",
        types: ["poison", "electric"],
        expected: ["ground", "psychic"],
      },
      {
        label: "poison and psychic",
        types: ["poison", "psychic"],
        expected: ["ground", "ghost", "dark"],
      },
      {
        label: "poison and ice",
        types: ["poison", "ice"],
        expected: ["ground", "rock", "steel", "fire", "psychic"],
      },
      {
        label: "poison and dragon",
        types: ["poison", "dragon"],
        expected: ["ground", "psychic", "ice", "dragon"],
      },
      {
        label: "poison and dark",
        types: ["poison", "dark"],
        expected: ["ground"],
      },
      {
        label: "poison and fairy",
        types: ["poison", "fairy"],
        expected: ["ground", "steel", "psychic"],
      },
      {
        label: "ground",
        types: ["ground"],
        expected: ["water", "grass", "ice"],
      },
      {
        label: "ground and rock",
        types: ["ground", "rock"],
        expected: ["water", "grass", "fighting", "ground", "steel", "ice"],
      },
      {
        label: "ground and bug",
        types: ["ground", "bug"],
        expected: ["flying", "fire", "water", "ice"],
      },
      {
        label: "ground and ghost",
        types: ["ground", "ghost"],
        expected: ["ghost", "water", "grass", "ice", "dark"],
      },
      {
        label: "ground and steel",
        types: ["ground", "steel"],
        expected: ["fighting", "ground", "fire", "water"],
      },
      {
        label: "ground and fire",
        types: ["ground", "fire"],
        expected: ["water", "ground"],
      },
      {
        label: "ground and water",
        types: ["ground", "water"],
        expected: ["grass"],
      },
      {
        label: "ground and grass",
        types: ["ground", "grass"],
        expected: ["ice", "flying", "bug", "fire"],
      },
      {
        label: "ground and electric",
        types: ["ground", "electric"],
        expected: ["ground", "water", "grass", "ice"],
      },
      {
        label: "ground and psychic",
        types: ["ground", "psychic"],
        expected: ["bug", "ghost", "water", "grass", "ice", "dark"],
      },
      {
        label: "ground and ice",
        types: ["ground", "ice"],
        expected: ["fighting", "steel", "fire", "water", "grass"],
      },
      {
        label: "ground and dragon",
        types: ["ground", "dragon"],
        expected: ["ice", "dragon", "fairy"],
      },
      {
        label: "ground and dark",
        types: ["ground", "dark"],
        expected: ["fighting", "bug", "water", "grass", "ice", "fairy"],
      },
      {
        label: "ground and fairy",
        types: ["ground", "fairy"],
        expected: ["steel", "water", "grass", "ice"],
      },
      {
        label: "rock",
        types: ["rock"],
        expected: ["fighting", "ground", "steel", "water", "grass"],
      },
      {
        label: "rock and bug",
        types: ["rock", "bug"],
        expected: ["rock", "steel", "water"],
      },
      {
        label: "rock and ghost",
        types: ["rock", "ghost"],
        expected: ["ground", "ghost", "steel", "water", "grass", "dark"],
      },
      {
        label: "rock and steel",
        types: ["rock", "steel"],
        expected: ["fighting", "ground", "water"],
      },
      {
        label: "rock and fire",
        types: ["rock", "fire"],
        expected: ["ground", "water", "fighting", "rock"],
      },
      {
        label: "rock and water",
        types: ["rock", "water"],
        expected: ["grass", "fighting", "ground", "electric"],
      },
      {
        label: "rock and grass",
        types: ["rock", "grass"],
        expected: ["fighting", "bug", "steel", "ice"],
      },
      {
        label: "rock and electric",
        types: ["rock", "electric"],
        expected: ["ground", "fighting", "water", "grass"],
      },
      {
        label: "rock and psychic",
        types: ["rock", "psychic"],
        expected: ["ground", "bug", "ghost", "steel", "water", "grass", "dark"],
      },
      {
        label: "rock and ice",
        types: ["rock", "ice"],
        expected: ["fighting", "steel", "ground", "rock", "water", "grass"],
      },
      {
        label: "rock and dragon",
        types: ["rock", "dragon"],
        expected: ["fighting", "ground", "steel", "ice", "dragon", "fairy"],
      },
      {
        label: "rock and dark",
        types: ["rock", "dark"],
        expected: ["fighting", "ground", "bug", "steel", "water", "grass", "fairy"],
      },
      {
        label: "rock and fairy",
        types: ["rock", "fairy"],
        expected: ["steel", "ground", "water", "grass"],
      },
      {
        label: "bug",
        types: ["bug"],
        expected: ["flying", "rock", "fire"],
      },
      {
        label: "bug and ghost",
        types: ["bug", "ghost"],
        expected: ["flying", "rock", "ghost", "fire", "dark"],
      },
      {
        label: "bug and steel",
        types: ["bug", "steel"],
        expected: ["fire"],
      },
      {
        label: "bug and fire",
        types: ["bug", "fire"],
        expected: ["rock", "flying", "water"],
      },
      {
        label: "bug and water",
        types: ["bug", "water"],
        expected: ["flying", "rock", "electric"],
      },
      {
        label: "bug and grass",
        types: ["bug", "grass"],
        expected: ["flying", "fire", "poison", "rock", "bug", "ice"],
      },
      {
        label: "bug and electric",
        types: ["bug", "electric"],
        expected: ["rock", "fire"],
      },
      {
        label: "bug and psychic",
        types: ["bug", "psychic"],
        expected: ["flying", "rock", "bug", "ghost", "fire", "dark"],
      },
      {
        label: "bug and ice",
        types: ["bug", "ice"],
        expected: ["rock", "fire", "flying", "steel"],
      },
      {
        label: "bug and dragon",
        types: ["bug", "dragon"],
        expected: ["flying", "rock", "ice", "dragon", "fairy"],
      },
      {
        label: "bug and dark",
        types: ["bug", "dark"],
        expected: ["flying", "rock", "bug", "fire", "fairy"],
      },
      {
        label: "bug and fairy",
        types: ["bug", "fairy"],
        expected: ["flying", "poison", "rock", "steel", "fire"],
      },
      {
        label: "ghost",
        types: ["ghost"],
        expected: ["ghost", "dark"],
      },
      {
        label: "ghost and steel",
        types: ["ghost", "steel"],
        expected: ["ground", "ghost", "fire", "dark"],
      },
      {
        label: "ghost and fire",
        types: ["ghost", "fire"],
        expected: ["ground", "rock", "ghost", "water", "dark"],
      },
      {
        label: "ghost and water",
        types: ["ghost", "water"],
        expected: ["ghost", "grass", "electric", "dark"],
      },
      {
        label: "ghost and grass",
        types: ["ghost", "grass"],
        expected: ["flying", "ghost", "fire", "ice", "dark"],
      },
      {
        label: "ghost and electric",
        types: ["ghost", "electric"],
        expected: ["ground", "ghost", "dark"],
      },
      {
        label: "ghost and psychic",
        types: ["ghost", "psychic"],
        expected: ["ghost", "dark"],
      },
      {
        label: "ghost and ice",
        types: ["ghost", "ice"],
        expected: ["rock", "ghost", "steel", "fire", "dark"],
      },
      {
        label: "ghost and dragon",
        types: ["ghost", "dragon"],
        expected: ["ghost", "ice", "dragon", "dark", "fairy"],
      },
      {
        label: "ghost and dark",
        types: ["ghost", "dark"],
        expected: ["fairy"],
      },
      {
        label: "ghost and fairy",
        types: ["ghost", "fairy"],
        expected: ["ghost", "steel"],
      },
      {
        label: "steel",
        types: ["steel"],
        expected: ["fighting", "ground", "fire"],
      },
      {
        label: "steel and fire",
        types: ["steel", "fire"],
        expected: ["ground", "fighting", "water"],
      },
      {
        label: "steel and water",
        types: ["steel", "water"],
        expected: ["fighting", "ground", "electric"],
      },
      {
        label: "steel and grass",
        types: ["steel", "grass"],
        expected: ["fire", "fighting"],
      },
      {
        label: "steel and electric",
        types: ["steel", "electric"],
        expected: ["ground", "fighting", "fire"],
      },
      {
        label: "steel and psychic",
        types: ["steel", "psychic"],
        expected: ["ground", "ghost", "fire", "dark"],
      },
      {
        label: "steel and ice",
        types: ["steel", "ice"],
        expected: ["fighting", "fire", "ground"],
      },
      {
        label: "steel and dragon",
        types: ["steel", "dragon"],
        expected: ["fighting", "ground"],
      },
      {
        label: "steel and dark",
        types: ["steel", "dark"],
        expected: ["fighting", "ground", "fire"],
      },
      {
        label: "steel and fairy",
        types: ["steel", "fairy"],
        expected: ["ground", "fire"],
      },
      {
        label: "fire",
        types: ["fire"],
        expected: ["ground", "rock", "water"],
      },
      {
        label: "fire and water",
        types: ["fire", "water"],
        expected: ["ground", "rock", "electric"],
      },
      {
        label: "fire and grass",
        types: ["fire", "grass"],
        expected: ["flying", "poison", "rock"],
      },
      {
        label: "fire and electric",
        types: ["fire", "electric"],
        expected: ["ground", "rock", "water"],
      },
      {
        label: "fire and psychic",
        types: ["fire", "psychic"],
        expected: ["ground", "rock", "ghost", "water", "dark"],
      },
      {
        label: "fire and ice",
        types: ["fire", "ice"],
        expected: ["rock", "fighting", "ground", "water"],
      },
      {
        label: "fire and dragon",
        types: ["fire", "dragon"],
        expected: ["ground", "rock", "dragon"],
      },
      {
        label: "fire and dark",
        types: ["fire", "dark"],
        expected: ["fighting", "ground", "rock", "water"],
      },
      {
        label: "fire and fairy",
        types: ["fire", "fairy"],
        expected: ["poison", "ground", "rock", "water"],
      },
      {
        label: "water",
        types: ["water"],
        expected: ["grass", "electric"],
      },
      {
        label: "water and grass",
        types: ["water", "grass"],
        expected: ["flying", "poison", "bug"],
      },
      {
        label: "water and electric",
        types: ["water", "electric"],
        expected: ["ground", "grass"],
      },
      {
        label: "water and psychic",
        types: ["water", "psychic"],
        expected: ["bug", "ghost", "grass", "electric", "dark"],
      },
      {
        label: "water and ice",
        types: ["water", "ice"],
        expected: ["fighting", "rock", "grass", "electric"],
      },
      {
        label: "water and dragon",
        types: ["water", "dragon"],
        expected: ["dragon", "fairy"],
      },
      {
        label: "water and dark",
        types: ["water", "dark"],
        expected: ["fighting", "bug", "grass", "electric", "fairy"],
      },
      {
        label: "water and fairy",
        types: ["water", "fairy"],
        expected: ["poison", "grass", "electric"],
      },
      {
        label: "grass",
        types: ["grass"],
        expected: ["flying", "poison", "bug", "fire", "ice"],
      },
      {
        label: "grass and electric",
        types: ["grass", "electric"],
        expected: ["poison", "bug", "fire", "ice"],
      },
      {
        label: "grass and psychic",
        types: ["grass", "psychic"],
        expected: ["bug", "flying", "poison", "ghost", "fire", "ice", "dark"],
      },
      {
        label: "grass and ice",
        types: ["grass", "ice"],
        expected: ["fire", "fighting", "flying", "poison", "rock", "bug", "steel"],
      },
      {
        label: "grass and dragon",
        types: ["grass", "dragon"],
        expected: ["ice", "flying", "poison", "bug", "dragon", "fairy"],
      },
      {
        label: "grass and dark",
        types: ["grass", "dark"],
        expected: ["bug", "fighting", "flying", "poison", "fire", "ice", "fairy"],
      },
      {
        label: "grass and fairy",
        types: ["grass", "fairy"],
        expected: ["poison", "flying", "steel", "fire", "ice"],
      },
      {
        label: "electric",
        types: ["electric"],
        expected: ["ground"],
      },
      {
        label: "electric and psychic",
        types: ["electric", "psychic"],
        expected: ["ground", "bug", "ghost", "dark"],
      },
      {
        label: "electric and ice",
        types: ["electric", "ice"],
        expected: ["fighting", "ground", "rock", "fire"],
      },
      {
        label: "electric and dragon",
        types: ["electric", "dragon"],
        expected: ["ground", "ice", "dragon", "fairy"],
      },
      {
        label: "electric and dark",
        types: ["electric", "dark"],
        expected: ["fighting", "ground", "bug", "fairy"],
      },
      {
        label: "electric and fairy",
        types: ["electric", "fairy"],
        expected: ["poison", "ground"],
      },
      {
        label: "psychic",
        types: ["psychic"],
        expected: ["bug", "ghost", "dark"],
      },
      {
        label: "psychic and ice",
        types: ["psychic", "ice"],
        expected: ["rock", "bug", "ghost", "steel", "fire", "dark"],
      },
      {
        label: "psychic and dragon",
        types: ["psychic", "dragon"],
        expected: ["bug", "ghost", "ice", "dragon", "dark", "fairy"],
      },
      {
        label: "psychic and dark",
        types: ["psychic", "dark"],
        expected: ["bug", "fairy"],
      },
      {
        label: "psychic and fairy",
        types: ["psychic", "fairy"],
        expected: ["poison", "ghost", "steel"],
      },
      {
        label: "ice",
        types: ["ice"],
        expected: ["fighting", "rock", "steel", "fire"],
      },
      {
        label: "ice and dragon",
        types: ["ice", "dragon"],
        expected: ["fighting", "rock", "steel", "dragon", "fairy"],
      },
      {
        label: "ice and dark",
        types: ["ice", "dark"],
        expected: ["fighting", "rock", "bug", "steel", "fire", "fairy"],
      },
      {
        label: "ice and fairy",
        types: ["ice", "fairy"],
        expected: ["steel", "poison", "rock", "fire"],
      },
      {
        label: "dragon and dark",
        types: ["dragon", "dark"],
        expected: ["fairy", "fighting", "bug", "ice", "dragon"],
      },
      {
        label: "dragon and fairy",
        types: ["dragon", "fairy"],
        expected: ["poison", "steel", "ice", "fairy"],
      },
      {
        label: "dark",
        types: ["dark"],
        expected: ["fighting", "bug", "fairy"],
      },
      {
        label: "dark and fairy",
        types: ["dark", "fairy"],
        expected: ["poison", "steel", "fairy"],
      },
      {
        label: "fairy",
        types: ["fairy"],
        expected: ["poison", "steel"],
      },
    ];

    testCases.forEach((testCase) => {
      const types = testCase.types.map((type, index) => {
        const mockedTypeData = mockedType[type].data;

        return {
          slot: index + 1,
          type: {
            name: mockedTypeData.name,
            url: `https://pokeapi.co/api/v2/type/${mockedTypeData.id}/`,
          },
        };
      });

      const expected = {
        isSuccess: true,
        data: sortBy(
          testCase.expected.map((expectedTestCase) => {
            const mockedTypeData = mockedType[expectedTestCase].data;

            return {
              name: expectedTestCase,
              url: `https://pokeapi.co/api/v2/type/${mockedTypeData.id}/`,
            };
          }),
          "name"
        ),
      };

      it(`should return the weaknesses data for ${testCase.label}`, async () => {
        const { result } = renderHook(() => useGetWeaknessess(types), {
          wrapper: createMockWrapper(),
        });

        await waitFor(() => expect(result.current.isSuccess).toBe(true));

        const actual = result.current;

        expect(actual).toEqual(expected);
      });
    });
  });
});
