import { PokemonSprites } from "../pokemon-types";

/**
 * Return the displayed sprite for a pokemon
 * We're not sure of the data, it's important to have fallback
 */
export const getPokemonSprite = (sprites: PokemonSprites) => {
  const sprite = sprites.other?.["official-artwork"]?.front_default;

  return sprite ?? sprites.front_default;
};
