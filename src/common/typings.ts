/**
 * For a lot of items on the API, we have access to the following data
 * that allow us to fetch full data about the item.
 */
export type SummarizedItemData = {
  name: string;
  url: string;
};

export type LanguageName =
  | "ja-Hrkt"
  | "ko"
  | "fr"
  | "de"
  | "es"
  | "it"
  | "en"
  | "ja"
  | "roomaji"
  | "zh-Hant"
  | "zh-Hans";

export type Language = {
  name: LanguageName;
  url: string;
};

export type GameIndice = {
  game_index: number;
  version: SummarizedItemData;
};

export type LocalizedName = {
  language: Language;
  name: string;
};
