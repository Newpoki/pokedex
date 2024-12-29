import { Pokemon } from "@/pokemon/pokemon-types";
import { PokemonsListSort } from "../pokemons-types";

type GetSortedPokemonsListParams = {
  data: Pokemon[];
  sort: PokemonsListSort;
};

// TODO: Add tests
export const getSortedPokemonsList = ({
  data,
  sort,
}: GetSortedPokemonsListParams) => {
  if (sort.property === "id") {
    return sort.direction === "ASC" ? data : [...data].reverse();
  }

  return data.sort((a, b) =>
    sort.direction === "ASC"
      ? a.displayName.localeCompare(b.displayName)
      : b.displayName.localeCompare(a.displayName),
  );
};
