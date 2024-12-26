import { API_BASE_URL } from "./api-constants";

// TODO: Add unit tests
export const fetchPokemonAPI = async <TData>(query: string) => {
  const url = query.startsWith("https://") ? query : `${API_BASE_URL}${query}`;

  const response = await fetch(url);
  const data = (await response.json()) as TData;

  return data;
};
