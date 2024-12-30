import { Name, NamedAPIRessource } from "@/api/api-types";

export type EggGroup = {
  /** The identifier for this resource. */
  id: number;

  /** The name for this resource. */
  name: string;

  /** The name of this resource listed in different languages. */
  names: Name[];

  /** A list of all Pokémon species that are members of this egg group. */
  pokemon_species: NamedAPIRessource[];
};
