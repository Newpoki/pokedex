export const getPokemonGenderRates = (femaleEightsRate: number) => {
  // If the femaleEightsRate is -1, it means the pokemon is genderless
  if (femaleEightsRate === -1) {
    return null;
  }

  const femalePercent = (femaleEightsRate * 100) / 8;
  const malePercent = 100 - femalePercent;

  return {
    female: femalePercent,
    male: malePercent,
  };
};
