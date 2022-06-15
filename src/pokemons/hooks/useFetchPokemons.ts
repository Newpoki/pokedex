import { useQuery } from "react-query";
import { PokemonList } from "../typings";

export const useFetchPokemons = () => {
  return useQuery<PokemonList>("pokemons", async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();

    return data;
  });
};
