import { Language, SummarizedItemData } from "../common/typings";

type EggGroupName = {
  language: Language;
  name: string;
};

export type EggGroup = {
  id: number;
  name: string;
  names: Array<EggGroupName>;
  pokemon_species: Array<SummarizedItemData>;
};
