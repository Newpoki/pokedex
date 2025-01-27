import { Pokemon, PokemonType } from "@/pokemon/pokemon-types";
import { PokemonsListFilters } from "../pokemons-types";

type GetFilteredPokemonsListParams = {
  data: Pokemon[];
  filters: PokemonsListFilters;
};

// TODO: Add tests
export const getFilteredPokemonsList = ({
  data,
  filters,
}: GetFilteredPokemonsListParams) => {
  return data.reduce<Pokemon[]>((acc, pokemon) => {
    // Important to first search for the displayed name. Might be the easiest to do
    const matchesSearch =
      filters.search === ""
        ? true
        : pokemon.displayName
            .toLocaleLowerCase()
            .includes(filters.search.toLocaleLowerCase()) ||
          `${pokemon.id}` === filters.search;

    if (!matchesSearch) {
      return acc;
    }

    const matchesTypes =
      filters.types.length === 0
        ? true
        : pokemon.types.some(
            (pokemonType: PokemonType) =>
              filters.types.findIndex(
                (typeName) => typeName === pokemonType.type.name,
              ) !== -1,
          );

    const isMatchingHeight =
      pokemon.height > filters.heightRange[0] &&
      pokemon.height <= filters.heightRange[1];

    if (!isMatchingHeight) {
      return acc;
    }

    const isMatchingWeight =
      pokemon.weight > filters.weightRange[0] &&
      pokemon.weight <= filters.weightRange[1];

    if (!isMatchingWeight) {
      return acc;
    }

    if (!matchesTypes) {
      return acc;
    }

    acc.push(pokemon);

    return acc;
  }, []);
};
