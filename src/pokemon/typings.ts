import { Language, SummarizedItemData } from "../common/typings";

type PokemonSprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: {
    dream_world: {
      front_default: string;
      front_female: string | null;
    };
    home: {
      front_default: string;
      front_female: string | null;
      front_shiny: string;
      front_shiny_female: string | null;
    };
    ["official-artwork"]: {
      front_default: string;
    };
  };
};

export type PokemonTypeName =
  | "normal"
  | "grass"
  | "poison"
  | "bug"
  | "fire"
  | "water"
  | "ice"
  | "psychic"
  | "ghost"
  | "electric"
  | "rock"
  | "fighting"
  | "ground"
  | "dragon"
  | "fairy"
  | "dark"
  | "flying"
  | "steel";

export type PokemonType = {
  slot: number;
  type: {
    name: PokemonTypeName;
    url: string;
  };
};

type PokemonAbility = {
  ability: SummarizedItemData;
  is_hidden: boolean;
  slot: number;
};

type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: SummarizedItemData;
};

export type Pokemon = {
  /** The pokemon abilities */
  abilities: Array<PokemonAbility>;

  base_experience: number;

  /** The pokemon height in decimeters */
  height: number;

  /** The national pokedex number of this Pokémon. */
  id: number;

  /** The name of this Pokémon. */
  name: string;

  /** The available sprites for this pokemon */
  sprites: PokemonSprites;

  /* The pokemon stats and EVs (effort) */
  stats: Array<PokemonStat>;

  /** The pokemon"s type(s) */
  types: Array<PokemonType>;

  /** The pokemon weight in decigrammes */
  weight: number;
};

export type PokemonSpeciesFlavor = {
  flavor_text: string;
  language: Language;
  version: SummarizedItemData;
};

type PokemonSpeciesGenera = {
  genus: string;
  language: Language;
};

type PokemonSpeciesNames = {
  language: Language;
  name: string;
};

type PokemonSpeciesPalParkEncounter = {
  area: SummarizedItemData;
  base_score: number;
  rate: number;
};

type PokemonSpeciesVariety = {
  is_default: boolean;
  pokemon: SummarizedItemData;
};

export type PokemonSpecies = {
  base_happiness: number;
  capture_rate: number;
  color: SummarizedItemData;
  egg_groups: Array<SummarizedItemData>;
  evolution_chain: { url: string } | null;
  evolves_from_species: { url: string } | null;
  flavor_text_entries: Array<PokemonSpeciesFlavor>;
  form_description: Array<any>;
  forms_switchable: boolean;
  gender_rate: number;
  genera: Array<PokemonSpeciesGenera>;
  generation: SummarizedItemData;
  growth_rate: SummarizedItemData;
  habitat: SummarizedItemData;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Array<PokemonSpeciesNames>;
  order: number;
  pal_park_encouters: Array<PokemonSpeciesPalParkEncounter>;
  pokedex_number: { entry_number: number; pokedex: SummarizedItemData };
  shape: SummarizedItemData;
  varieties: Array<PokemonSpeciesVariety>;
};
