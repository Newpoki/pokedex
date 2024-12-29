import { NamedAPIRessource } from "@/api/api-types";
import { TypeName } from "@/type/type-types";

export type PokemonsListResults = NamedAPIRessource;

export type PokemonsListFiltersSortDirection = "ASC" | "DESC";

export type PokemonsListFiltersSortProperty = "id" | "name";

export type PokemonsListFiltersSort = {
  direction: PokemonsListFiltersSortDirection;
  property: PokemonsListFiltersSortProperty;
};

export type PokemonsListFilters = {
  idsRange: [number, number];
  sort: PokemonsListFiltersSort;
  types: TypeName[];
  search: string;
  heightRange: [number, number];
  weightRange: [number, number];
};
