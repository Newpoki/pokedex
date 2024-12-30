export const getPokemonBaseHapinessCategory = (baseHappiness: number) => {
  if (baseHappiness == 50) {
    return "Normal";
  }

  return baseHappiness < 50 ? "Low" : "High";
};
