import { LocalizedName, SummarizedItemData } from "../common/typings";

type LocationGameIndice = {
  game_index: number;
  generation: SummarizedItemData;
};

export type Location = {
  areas: Array<SummarizedItemData>;
  game_indices: Array<LocationGameIndice>;
  id: number;
  name: string;
  names: Array<LocalizedName>;
  region: SummarizedItemData;
};

type LocationAreaEncounterMethodRateVersionDetail = {
  rate: number;
  version: SummarizedItemData;
};

type LocationAreaEncounterMethodRate = {
  encounter_method: SummarizedItemData;
  version_details: Array<LocationAreaEncounterMethodRateVersionDetail>;
};

type LocationAreaPokemonEncounterVersionDetailEncounterDetail = {
  chance: number;
  condition_values: Array<SummarizedItemData>;
  max_level: number;
  method: SummarizedItemData;
  min_level: number;
};

type LocationAreaPokemonEncounterVersionDetail = {
  encounter_details: Array<LocationAreaPokemonEncounterVersionDetailEncounterDetail>;
  max_chance: number;
  version: SummarizedItemData;
};

type LocationAreaPokemonEncounter = {
  pokemon: SummarizedItemData;
  version_details: Array<LocationAreaPokemonEncounterVersionDetail>;
};

export type LocationArea = {
  encounter_method_rates: Array<LocationAreaEncounterMethodRate>;
  game_index: number;
  id: number;
  location: SummarizedItemData;
  name: string;
  names: Array<LocalizedName>;
  pokemon_encounters: Array<LocationAreaPokemonEncounter>;
};

export type Region = {
  id: number;
  locations: Array<SummarizedItemData>;
  main_generation: SummarizedItemData;
  name: string;
  names: Array<LocalizedName>;
  pokedexes: Array<SummarizedItemData>;
  version_groups: Array<SummarizedItemData>;
};
