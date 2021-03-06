import { Language, SummarizedItemData } from "../common/typings";
import { PokemonType, PokemonTypeName } from "../pokemon/typings";

type TypeName = {
  language: Language;
  name: string;
};

type TypePokemon = {
  pokemon: SummarizedItemData;

  slot: 1 | 2;
};

type TypeGameVersion = {
  game_index: number;
  generation: SummarizedItemData;
};

export type Type = {
  damage_relations: {
    double_damage_from: Array<PokemonType["type"]>;
    double_damage_to: Array<PokemonType["type"]>;
    half_damage_from: Array<PokemonType["type"]>;
    half_damage_to: Array<PokemonType["type"]>;
    no_damage_from: Array<PokemonType["type"]>;
    no_damage_to: Array<PokemonType["type"]>;
  };

  game_indices: Array<TypeGameVersion>;

  generation: SummarizedItemData;

  id: number;

  move_damage_class: SummarizedItemData | null;

  moves: Array<SummarizedItemData>;

  name: PokemonTypeName;

  names: Array<TypeName>;

  past_damage_relations: Array<any>;

  pokemon: Array<TypePokemon>;
};
