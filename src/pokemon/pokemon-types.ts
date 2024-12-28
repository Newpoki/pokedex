import { NamedAPIRessource, VersionGameIndex } from "@/api/api-types";
import { PokemonSpecies } from "@/pokemon-species/pokemon-species.types";
import { TypeName } from "@/type/type-types";

type PokemonAbility = {
  /** Whether or not this is a hidden ability. */
  is_hidden: boolean;

  /** The slot this ability occupies in this Pokémon species */
  slot: number;

  /** The ability the Pokémon may have. */
  ability: NamedAPIRessource;
};

type PokemonHeldItemVersion = {
  /** The version in which the item is held. */
  version: NamedAPIRessource;

  /**	How often the item is held.  */
  rarity: number;
};

type PokemonHeldItem = {
  /** The item the referenced Pokémon holds. */
  item: NamedAPIRessource;

  /** The details of the different versions in which the item is held. */
  version_details: PokemonHeldItemVersion[];
};

type PokemonMoveVersion = {
  /** The method by which the move is learned. */
  move_learn_method: NamedAPIRessource;

  /** The version group in which the move is learned. */
  version_group: NamedAPIRessource;

  /** The minimum level to learn the move. */
  level_learned_at: number;
};

type PokemonMove = {
  /** The move the Pokémon can learn. */
  move: NamedAPIRessource;

  /** The details of the version in which the Pokémon can learn the move. */
  version_group_details: PokemonMoveVersion[];
};

export type PokemonType = {
  /** The order the Pokémon's types are listed in. */
  slot: number;

  /** The type the referenced Pokémon has. */
  type: NamedAPIRessource<TypeName>;
};

type PokemonTypePast = {
  /** The last generation in which the referenced pokémon had the listed types. */
  generation: NamedAPIRessource;

  /** The types the referenced pokémon had up to and including the listed generation. */
  types: PokemonType[];
};

type PokemonCries = {
  /** The latest depiction of this Pokémon's cry */
  latest: string;

  /** The legacy depiction of this Pokémon's cry. */
  legacy: string;
};

type PokemonSpriteAlternate = {
  /** The default depiction of this Pokémon from the front in battle. */
  front_default: string;

  /** The shiny depiction of this Pokémon from the front in battle. */
  front_shiny?: string;

  /** The female depiction of this Pokémon from the front in battle. */
  front_female?: string;

  /** The shiny female depiction of this Pokémon from the front in battle. */
  front_shiny_female?: string;

  /** The default depiction of this Pokémon from the back in battle. */
  back_default?: string;

  /** The shiny depiction of this Pokémon from the back in battle. */
  back_shiny?: string;

  /** The female depiction of this Pokémon from the back in battle. */
  back_female?: string;

  /** The shiny female depiction of this Pokémon from the back in battle. */
  back_shiny_female?: string;
};

type PokemonSprites = {
  /** The default depiction of this Pokémon from the front in battle. */
  front_default: string;

  /** The shiny depiction of this Pokémon from the front in battle. */
  front_shiny: string;

  /** The female depiction of this Pokémon from the front in battle. */
  front_female: string;

  /** The shiny female depiction of this Pokémon from the front in battle. */
  front_shiny_female: string;

  /** The default depiction of this Pokémon from the back in battle. */
  back_default: string;

  /** The shiny depiction of this Pokémon from the back in battle. */
  back_shiny: string;

  /** The female depiction of this Pokémon from the back in battle. */
  back_female: string;

  /** The shiny female depiction of this Pokémon from the back in battle. */
  back_shiny_female: string;

  other?: {
    dream_world?: PokemonSpriteAlternate;
    home?: PokemonSpriteAlternate;
    "official-artwork"?: PokemonSpriteAlternate;
    shodown?: PokemonSpriteAlternate;
  };
};

type PokemonStat = {
  /** The stat the Pokémon has. */
  stat: NamedAPIRessource;

  /** The effort points (EV) the Pokémon has in the stat. */
  effort: number;

  /** The base value of the stat. */
  base_stat: number;
};

export type PokemonAPIResponse = {
  /** The identifier for this resource. */
  id: number;

  /** The name for this resource. */
  name: string;

  /** The base experience gained for defeating this Pokémon. */
  base_experience: number;

  /** The height of this Pokémon in decimetres. */
  height: number;

  /** Set for exactly one Pokémon used as the default for each species.  */
  is_default: boolean;

  /** Order for sorting. Almost national order, except families are grouped together. */
  order: number;

  /** The weight of this Pokémon in hectograms. */
  weight: number;

  /** A list of abilities this Pokémon could potentially have. */
  abilities: PokemonAbility[];

  /** A list of forms this Pokémon can take on.  */
  forms: NamedAPIRessource[];

  /** A list of game indices relevent to Pokémon item by generation. */
  game_indices: VersionGameIndex[];

  /** A list of items this Pokémon may be holding when encountered. */
  held_items: PokemonHeldItem[];

  /** A link to a list of location areas, as well as encounter details pertaining to specific versions. */
  location_area_encounters: string;

  /** A list of moves along with learn methods and level details pertaining to specific version groups. */
  moves: PokemonMove[];

  /** A list of details showing types this pokémon had in previous generations. */
  past_types: PokemonTypePast[];

  /** A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites) */
  sprites: PokemonSprites;

  /** A set of cries used to depict this Pokémon in the game. A visual representation of the various cries can be found at [PokeAPI/cries](https://github.com/PokeAPI/cries#cries)  */
  cries: PokemonCries;

  /** The species this Pokémon belongs to. */
  species: NamedAPIRessource;

  /** A list of base stat values for this Pokémon. */
  stats: PokemonStat[];

  /** A list of details showing types this Pokémon has. */
  types: PokemonType[];
};

// TODO: Instead of an object with pokemon, species and displayedName, Omit and Extend from PokemonAPIREsponse
export type Pokemon = {
  /** The pokemon data */
  pokemon: PokemonAPIResponse;

  /** A Pokémon Species forms the basis for at least one Pokémon.
   *  Attributes of a Pokémon species are shared across all varieties of Pokémon within the species.
   *  A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.*/
  species: PokemonSpecies;

  /** The pokemon displayed name in user language */
  displayedName: string;
};
