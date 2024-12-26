import { GenerationGameIndex, Name, NamedAPIRessource } from "@/api/api-types";

type TypeRelations = {
  /** A list of types this type has no effect on. */
  no_damage_to: NamedAPIRessource;

  /** A list of types this type is not very effect against. */
  half_damage_to: NamedAPIRessource;

  /** A list of types this type is very effect against. */
  double_damage_to: NamedAPIRessource;

  /** A list of types that have no effect on this type. */
  no_damage_from: NamedAPIRessource;

  /** A list of types that are not very effective against this type. */
  half_damage_from: NamedAPIRessource;

  /** A list of types that are very effective against this type. */
  double_damage_from: NamedAPIRessource;
};

type TypeRelationsPast = {
  /** The last generation in which the referenced type had the listed damage relations */
  generation: NamedAPIRessource;

  /**The damage relations the referenced type had up to and including the listed generation */
  damage_relations: TypeRelations;
};

type TypePokemon = {
  /** The order the Pokémon's types are listed in. */
  slot: number;

  /** The Pokémon that has the referenced type. */
  pokemon: NamedAPIRessource;
};

export type TypeName =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";

export type Type = {
  /** The identifier for this resource. */
  id: number;

  /** The name for this resource. */
  name: TypeName;

  /** A detail of how effective this type is toward others and vice versa. */
  damage_relations: TypeRelations;

  /** A list of details of how effective this type was toward others and vice versa in previous generations */
  past_damage_relations: TypeRelationsPast;

  /** A list of game indices relevent to this item by generation. */
  game_indices: GenerationGameIndex;

  /** The generation this type was introduced in. */
  generation: NamedAPIRessource;

  /** The class of damage inflicted by this type. */
  move_damage_class: NamedAPIRessource;

  /** The name of this resource listed in different languages. */
  names: Name[];

  /** A list of details of Pokémon that have this type. */
  pokemon: TypePokemon[];

  /** A list of moves that have this type. */
  moves: NamedAPIRessource;
};
