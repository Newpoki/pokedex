export const fetchPokemonAPI = async <TData>(query: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2${query}`);
  const data = (await response.json()) as TData;

  return data;
};
