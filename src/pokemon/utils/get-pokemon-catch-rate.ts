/**
 * Return for a given capture rate, the catch rate for a pokemon
 * at level 1 using a PokéBall
 */
export const getPokemonCatchRate = (captureRate: number) => {
  const catchRate = ((captureRate / 255) * 1) / 3;

  const formatedCatchRate = Intl.NumberFormat("en", {
    minimumFractionDigits: captureRate % 1 === 0 ? 1 : 0,
    maximumFractionDigits: captureRate % 1 === 0 ? 1 : 0,
  }).format(catchRate * 100);

  return `${formatedCatchRate} %`;
};
