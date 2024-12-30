import { APIRessource, Name, NamedAPIRessource } from "@/api/api-types";

type MoveStatAffect = {
  /** The maximum amount of change to the referenced stat. */
  change: number;

  /** The move causing the change. */
  move: NamedAPIRessource;
};

type MoveStatAffectSets = {
  /** A list of moves and how they change the referenced stat. */
  increase: MoveStatAffect;

  /** A list of moves and how they change the referenced stat. */
  decrease: MoveStatAffect;
};

type NatureStatAffectSets = {
  /** A list of moves and how they change the referenced stat. */
  increase: NamedAPIRessource[];

  /** A list of moves and how they change the referenced stat. */
  decrease: NamedAPIRessource[];
};

export type Stat = {
  /** The identifier for this resource. */
  id: number;

  /** The name for this resource. */
  name: string;

  /** ID the games use for this stat. */
  game_index: number;

  /** Whether this stat only exists within a battle. */
  is_battle_only: boolean;

  /** A detail of moves which affect this stat positively or negatively. */
  affecting_moves: MoveStatAffectSets;

  /** A detail of natures which affect this stat positively or negatively.  */
  affecting_natures: NatureStatAffectSets;

  /** A list of characteristics that are set on a Pokémon when its highest base stat is this stat.  */
  characteristics: APIRessource[];

  /** The class of damage this stat is directly related to. */
  move_damage_class: NamedAPIRessource;

  /** The name of this resource listed in different languages. */
  names: Name[];
};
