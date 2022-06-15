export type PokemonListItem = {
  /** The pokemon name */
  name: string;

  /** The url to fetch to get full data about the pokemon */
  url: string;
};

export type PokemonList = {
  /** The total pokemon count */
  count: number;

  /** The url to fetch to get the next result page */
  next: string | null;

  /** The url to fetch to get the previous result page  */
  previous: string | null;

  results: Array<PokemonListItem>;
};
