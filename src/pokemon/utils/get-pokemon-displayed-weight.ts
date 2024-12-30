export const getPokemonDisplayedWeight = (height: number) => {
  const kilos = height / 10;
  const pounds = kilos * 2.20462;

  // TODO: Handle user language choice
  const numberFormat = (value: number) =>
    Intl.NumberFormat("en", {
      style: "decimal",
      minimumFractionDigits: value % 1 === 0 ? 0 : 1,
      maximumFractionDigits: value % 1 === 0 ? 0 : 1,
    });

  const formatedKilos = numberFormat(kilos).format(kilos);

  const formatedPounds = numberFormat(pounds).format(pounds);

  return {
    kilos: `${formatedKilos}kg`,
    pounds: `${formatedPounds} lbs`,
  };
};
