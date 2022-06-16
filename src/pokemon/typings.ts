type PokemonSprites = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
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

export type Pokemon = {
  /** The national pokedex number of this Pokémon. */
  id: number;

  /** The name of this Pokémon. */
  name: string;

  /** The available sprites for this pokemon */
  sprites: PokemonSprites;

  /** The pokemon"s type(s) */
  types: Array<PokemonType>;
};
