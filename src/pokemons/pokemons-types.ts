import { NamedAPIRessource } from "@/api/api-types";

export type PokemonsListResults = NamedAPIRessource;

export type PokemonsListFilters = {
  idsRange: [number, number];
};
