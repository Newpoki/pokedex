export type APIPaginationResponse<TResults> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<TResults>;
};

export type APIRessource = {
  /** The URL of the referenced resource. */
  url: string;
};

export type NamedAPIRessource = APIRessource & {
  name: string;
};

export type Description = {
  /** The localized description for an API resource in a specific language. */
  description: string;

  /** The language this name is in. */
  language: string;
};

export type Effect = {
  /** The localized effect text for an API resource in a specific language. */
  effect: string;

  /** The language this effect is in. */
  language: NamedAPIRessource;
};

export type Encounter = {
  /** The lowest level the Pokémon could be encountered at. */
  min_level: number;

  /** The highest level the Pokémon could be encountered at. */
  max_level: number;

  /** A list of condition values that must be in effect for this encounter to occur. */
  condition_values: NamedAPIRessource[];

  /** Percent chance that this encounter will occur. */
  chance: number;

  /** The method by which this encounter happens. */
  method: NamedAPIRessource;
};

export type FlavorText = {
  /** The localized flavor text for an API resource in a specific language. Note that this text is left unprocessed as it is found in game files.
   *  This means that it contains special characters that one might want to replace with their visible decodable version.
   *  Please check out this [issue](https://github.com/veekun/pokedex/issues/218#issuecomment-339841781) to find out more. */
  flavor_text: string;

  /** The language this name is in. */
  language: NamedAPIRessource;

  /** The game version this flavor text is extracted from. */
  version: NamedAPIRessource;
};

export type GenerationGameIndex = {
  /** The internal id of an API resource within game data. */
  game_index: number;

  /** The generation relevent to this game index. */
  generation: NamedAPIRessource;
};

export type MachineVersionDetail = {
  /** The machine that teaches a move from an item. */
  machine: APIRessource;

  /** The version group of this specific machine. */
  version_group: NamedAPIRessource;
};

export type Name = {
  /** The localized name for an API resource in a specific language. */
  name: string;

  /** The language this name is in. */
  language: NamedAPIRessource;
};

export type VerboseEffect = {
  /** The localized effect text for an API resource in a specific language. */
  effect: string;

  /** The localized effect text in brief. */
  short_effect: NamedAPIRessource;

  /** The language this effect is in. */
  language: NamedAPIRessource;
};

export type VersionEncounterDetail = {
  /** The game version this encounter happens in. */
  version: NamedAPIRessource;

  /** The total percentage of all encounter potential. */
  max_chance: number;

  /** A list of encounters and their specifics. */
  encounter_details: Encounter[];
};

export type VersionGameIndex = {
  /** The internal id of an API resource within game data. */
  game_index: number;

  /** The version relevent to this game index */
  version: NamedAPIRessource;
};

export type VersionGroupFlavorText = {
  /** The localized name for an API resource in a specific language. */
  text: string;

  /** The language this name is in. */
  language: NamedAPIRessource;

  /** The version group which uses this flavor text. */
  version_group: NamedAPIRessource;
};
