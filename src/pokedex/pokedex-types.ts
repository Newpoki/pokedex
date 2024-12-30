import { Description, Name, NamedAPIRessource } from "@/api/api-types";

type PokemonEntry = {
  /** The index of this Pokémon species entry within the Pokédex. */
  entry_number: number;

  /** The Pokémon species being encountered. */
  pokemon_species: NamedAPIRessource;
};

export type Pokedex = {
  /** The identifier for this resource. */
  id: number;

  /** The name for this resource. */
  name: string;

  /** Whether or not this Pokédex originated in the main series of the video games. */
  is_main_series: boolean;

  /** The description of this resource listed in different languages. */
  descriptions: Description[];

  /** The name of this resource listed in different languages. */
  names: Name[];

  /** A list of Pokémon catalogued in this Pokédex and their indexes. */
  pokemon_entries: PokemonEntry;

  /** The region this Pokédex catalogues Pokémon for. */
  region: NamedAPIRessource;

  /** A list of version groups this Pokédex is relevant to. */
  version_groups: NamedAPIRessource[];
};
