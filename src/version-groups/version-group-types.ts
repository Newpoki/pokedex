import { NamedAPIRessource } from "@/api/api-types";

export type VersionGroup = {
  /** The identifier for this resource. */
  id: number;

  /** The name for this resource. */
  name: string;

  /** Order for sorting. Almost by date of release, except similar versions are grouped together. */
  order: number;

  /** The generation this version was introduced in. */
  generation: NamedAPIRessource;

  /** A list of methods in which Pokémon can learn moves in this version group. */
  move_learn_methods: NamedAPIRessource[];

  /** A list of Pokédexes introduces in this version group. */
  pokedexes: NamedAPIRessource[];

  /** A list of regions that can be visited in this version group. */
  regions: NamedAPIRessource[];

  /** The versions this version group owns. */
  versions: NamedAPIRessource[];
};
