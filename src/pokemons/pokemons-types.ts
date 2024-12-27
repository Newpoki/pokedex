import { NamedAPIRessource } from "@/api/api-types";

export type PokemonsListResults = NamedAPIRessource;

export type PokemonListFiltersSortDirection = "ASC" | "DESC";

export type PokemonListFiltersSortProperty = "id";

export type PokemonListFiltersSort = {
  direction: PokemonListFiltersSortDirection;
  property: PokemonListFiltersSortProperty;
};

export type PokemonsListFilters = {
  idsRange: [number, number];
  sort: PokemonListFiltersSort;
};
