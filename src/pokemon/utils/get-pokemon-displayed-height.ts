export const getPokemonDisplayedHeight = (height: number) => {
  const meters = height / 10;

  // TODO: Handle user language choice
  const formatedMeters = Intl.NumberFormat("en", {
    minimumFractionDigits: meters % 1 === 0 ? 0 : 1,
    maximumFractionDigits: meters % 1 === 0 ? 0 : 1,
  }).format(meters);

  const totalInches = meters * 39.3701; // Convert meters to inches
  const feet = Math.floor(totalInches / 12); // Get the number of feet
  const inches = Math.round(totalInches % 12); // Get the remaining inches

  const paddedInches = `${inches}`.padStart(2, "0");

  const formatedFeet = `${feet}'${paddedInches}"`;

  return {
    meters: `${formatedMeters}m`,
    feet: `${formatedFeet}`,
  };
};
