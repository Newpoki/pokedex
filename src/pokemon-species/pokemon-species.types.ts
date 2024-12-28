import {
  APIRessource,
  Description,
  FlavorText,
  Name,
  NamedAPIRessource,
} from "@/api/api-types";
import { PalParkEncounterArea } from "@/pal-park/pal-park-types";

type PokemonSpeciesDexEntry = {
  /** The index number within the Pokédex. */
  entry_number: boolean;

  /** The Pokédex the referenced Pokémon species can be found in. */
  pokedex: NamedAPIRessource;
};

type PokemonSpeciesGenus = {
  /** The localized genus for the referenced Pokémon species */
  genus: string;

  /** The language this genus is in. */
  language: NamedAPIRessource;
};

type PokemonSpeciesVariety = {
  /** Whether this variety is the default variety. */
  is_default: boolean;

  /** The Pokémon variety.  */
  pokemon: NamedAPIRessource;
};

export type PokemonSpecies = {
  /** The identifier for this resource. */
  id: number;

  /** The name for this resource. */
  name: string;

  /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage. */
  order: number;

  /** The chance of this Pokémon being female, in eighths; or -1 for genderless. */
  gender_rate: number;

  /** The base capture rate; up to 255. The higher the number, the easier the catch. */
  capture_rate: number;

  /** The happiness when caught by a normal Pokéball; up to 255. The higher the number, the happier the Pokémon. */
  base_hapiness: number;

  /** Whether or not this is a baby Pokémon. */
  is_baby: boolean;

  /** Whether or not this is a legendary Pokémon. */
  is_legendary: boolean;

  /** Whether or not this is a mythical Pokémon. */
  is_mythical: boolean;

  /**
   * Initial hatch counter: one must walk Y × (hatch_counter + 1) steps before this Pokémon's egg hatches, unless utilizing bonuses like Flame Body's.
   * Y varies per generation. In Generations II, III, and VII, Egg cycles are 256 steps long. In Generation IV, Egg cycles are 255 steps long.
   * In Pokémon Brilliant Diamond and Shining Pearl, Egg cycles are also 255 steps long, but are shorter on special dates.
   * In Generations V and VI, Egg cycles are 257 steps long. In Pokémon Sword and Shield, and in Pokémon Scarlet and Violet, Egg cycles are 128 steps long.
   */
  hatch_counter: number;

  /** Whether or not this Pokémon has visual gender differences. */
  has_gender_differencies: boolean;

  /** Whether or not this Pokémon has multiple forms and can switch between them. */
  forms_switchable: boolean;

  /** The rate at which this Pokémon species gains levels. */
  growth_rate: NamedAPIRessource;

  /** A list of Pokedexes and the indexes reserved within them for this Pokémon species. */
  pokedex_numbers: PokemonSpeciesDexEntry[];

  /** A list of egg groups this Pokémon species is a member of. */
  egg_groups: NamedAPIRessource;

  /** The color of this Pokémon for Pokédex search. */
  color: NamedAPIRessource;

  /** The shape of this Pokémon for Pokédex search. */
  shape: NamedAPIRessource;

  /** The Pokémon species that evolves into this Pokemon_species. */
  evolves_from_species: NamedAPIRessource;

  /** The evolution chain this Pokémon species is a member of. */
  evolution_chain: APIRessource;

  /**The habitat this Pokémon species can be encountered in.  */
  habitat: NamedAPIRessource;

  /** The generation this Pokémon species was introduced in. */
  generation: NamedAPIRessource;

  /** The name of this resource listed in different languages.  */
  names: Name[];

  /** A list of encounters that can be had with this Pokémon species in pal park.  */
  pal_park_encounters: PalParkEncounterArea[];

  /** A list of flavor text entries for this Pokémon species. */
  flavor_text_entries: FlavorText[];

  /** Descriptions of different forms Pokémon take on within the Pokémon species. */
  form_descriptions: Description[];

  /** The genus of this Pokémon species listed in multiple languages.  */
  genera: PokemonSpeciesGenus[];

  /** A list of the Pokémon that exist within this Pokémon species. */
  varieties: PokemonSpeciesVariety[];
};
