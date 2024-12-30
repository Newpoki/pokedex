export const getPokemonDisplayedId = (id: number) => {
  const paddedId = `${id}`.padStart(3, "0");

  return `#${paddedId}`;
};
