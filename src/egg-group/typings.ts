import { LocalizedName, SummarizedItemData } from "../common/typings";

export type EggGroup = {
  id: number;
  name: string;
  names: Array<LocalizedName>;
  pokemon_species: Array<SummarizedItemData>;
};
