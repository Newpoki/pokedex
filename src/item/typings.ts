import { GameIndice, Language, LocalizedName, SummarizedItemData } from "../common/typings";

type ItemEffectEntry = {
  effect: string;
  language: Language;
  short_effect: string;
};

type ItemFlavorTextEntry = {
  language: Language;
  text: string;
  version_group: SummarizedItemData;
};

type ItemSprites = {
  default: string;
};

export type Item = {
  attributes: SummarizedItemData;
  baby_trigger_for: any;
  category: SummarizedItemData;
  cost: number;
  effect_entries: Array<ItemEffectEntry>;
  flavor_text_entries: Array<ItemFlavorTextEntry>;
  fling_effect: any;
  fling_power: number;
  game_indices: Array<GameIndice>;
  held_by_pokemon: Array<any>;
  id: number;
  machines: Array<any>;
  name: string;
  names: Array<LocalizedName>;
  sprites: ItemSprites;
};
