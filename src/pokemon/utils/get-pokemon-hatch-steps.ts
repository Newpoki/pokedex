// This is the number of steps for 1 cycle in Gen V-VI (hightest)
const MAX_STEPS_FOR_ONE_CYCLE = 257;
// This is the number fo steps for 1 cycle in Gen VIII - IX (lowest)
const MIN_STEPS_FOR_ONE_CYCLE = 128;

export const getPokemonHatchSteps = (pokemonEggCycles: number) => {
  // TOOD: Handle User language choice
  const formatNumber = (val: number) =>
    Intl.NumberFormat("en", {
      minimumFractionDigits: val % 1 === 0 ? 0 : 1,
      maximumFractionDigits: val % 1 === 0 ? 0 : 1,
    }).format(val);

  const maxSteps = MAX_STEPS_FOR_ONE_CYCLE * pokemonEggCycles;
  const minSteps = MIN_STEPS_FOR_ONE_CYCLE * pokemonEggCycles;

  return {
    minSteps: formatNumber(minSteps),
    maxSteps: formatNumber(maxSteps),
  };
};
