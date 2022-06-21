import { Language, LocalizedName, SummarizedItemData } from "../common/typings";

type MoveEffectEntry = {
  effect: string;
  language: Language;
  short_effect: string;
};

type MoveFlavorTextEntry = {
  flavor_text: string;
  language: Language;
  version_group: SummarizedItemData;
};

type MoveMeta = {
  ailment: SummarizedItemData;
  ailment_chance: number;
  category: SummarizedItemData;
  crit_rate: number;
  drain: number;
  flinch_chance: number;
  healing: number;
  max_hits: number | null;
  max_turns: number | null;
  min_hits: number | null;
  min_turns: number | null;
  stat_chance: number;
};

type MoveStatChange = {
  change: number;
  stat: SummarizedItemData;
};

export type Move = {
  accuracy: number;
  contest_comboos: any;
  contest_effect: {
    url: string;
  };
  contest_type: SummarizedItemData;
  damage_class: SummarizedItemData;
  effect_change: number;
  effect_entries: Array<MoveEffectEntry>;
  flavor_text_entries: Array<MoveFlavorTextEntry>;
  generation: SummarizedItemData;
  id: number;
  learned_by_pokemon: Array<SummarizedItemData>;
  machines: Array<any>;
  meta: MoveMeta;
  name: string;
  names: Array<LocalizedName>;
  past_values: Array<any>;
  power: number;
  pp: number;
  priority: number;
  stat_changes: Array<MoveStatChange>;
  super_contest_effect: {
    url: string;
  };
  target: SummarizedItemData;
  type: SummarizedItemData;
};
