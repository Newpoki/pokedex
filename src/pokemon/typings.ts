import { Language, SummarizedItemData } from "../common/typings";

type PokemonSpritesVersionBase = {
  back_default?: string | null;
  back_female?: string | null;
  back_shiny?: string | null;
  back_shiny_female?: string | null;
  back_shiny_transparent?: string | null;
  back_gray?: string | null;
  back_transparent?: string | null;
  front_default: string | null;
  front_female?: string | null;
  front_shiny?: string | null;
  front_shiny_female?: string | null;
  front_shiny_transparent?: string | null;
  front_gray?: string | null;
  front_transparent?: string | null;
};

// type PokemonSpritesVersion = PokemonSpritesVersionBase & {
//   animated: PokemonSpritesVersionBase;
// };

type PokemonSpritesVersion = {
  [version: string]: PokemonSpritesVersionBase & {
    animated?: PokemonSpritesVersionBase;
  };
};

type PokemonSpritesVersions = {
  [generation: string]: PokemonSpritesVersion;
};

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
  versions: PokemonSpritesVersions;
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

export type PokemonStatName =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed";

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: PokemonStatName;
    url: string;
  };
};

type PokemonGameIndice = {
  game_index: number;
  version: SummarizedItemData;
};

type PokemonMoveVersionGroupDetail = {
  level_learned_at: number;
  move_learn_method: SummarizedItemData;
  version_group: SummarizedItemData;
};

type PokemonMove = {
  move: SummarizedItemData;
  version_group_details: Array<PokemonMoveVersionGroupDetail>;
};

export type Pokemon = {
  /** The pokemon abilities */
  abilities: Array<PokemonAbility>;

  base_experience: number;

  forms: Array<SummarizedItemData>;

  game_indices: Array<PokemonGameIndice>;

  /** The pokemon height in decimeters */
  height: number;

  held_items: Array<SummarizedItemData>;

  is_default: boolean;

  location_area_encounters: string;

  moves: Array<PokemonMove>;

  /** The national pokedex number of this Pokémon. */
  id: number;

  /** The name of this Pokémon. */
  name: string;

  order: number;

  past_types: Array<SummarizedItemData>;

  species: SummarizedItemData;

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

type PokemonSpeciesPokedexNumber = {
  entry_number: number;
  pokedex: SummarizedItemData;
};

export type PokemonSpecies = {
  base_happiness: number;
  capture_rate: number;
  color: SummarizedItemData;
  egg_groups: Array<SummarizedItemData>;
  evolution_chain: { url: string } | null;
  evolves_from_species: { url: string } | null;
  flavor_text_entries: Array<PokemonSpeciesFlavor>;
  form_descriptions: Array<any>;
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
  pal_park_encounters: Array<PokemonSpeciesPalParkEncounter>;
  pokedex_numbers: Array<PokemonSpeciesPokedexNumber>;
  shape: SummarizedItemData;
  varieties: Array<PokemonSpeciesVariety>;
};
