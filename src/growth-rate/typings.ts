import { Language, SummarizedItemData } from "../common/typings";

type GrowthRateDescription = {
  description: string;
  language: Language;
};

type GrowthRateLevel = {
  experience: number;
  level: number;
};

export type GrowthRate = {
  descriptions: Array<GrowthRateDescription>;
  formula: string;
  id: number;
  levels: Array<GrowthRateLevel>;
  name: string;
  pokemon_species: Array<SummarizedItemData>;
};
