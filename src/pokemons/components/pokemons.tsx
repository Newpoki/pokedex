import styled from "@emotion/styled";
import { useFetchPokemons } from "../hooks/useFetchPokemons";
import { PokemonItem } from "./pokemon-item";

export const Pokemons = () => {
  const { data: pokemons } = useFetchPokemons();

  return (
    <Root>
      <h1>Pokédex</h1>

      <h2>Search for Pokémon by name or by scrolling !</h2>

      <List>
        {pokemons?.results.map((pokemon) => {
          return <StyledPokemonItem key={pokemon.name} pokemon={pokemon} />;
        })}
      </List>
    </Root>
  );
};

const Root = styled.div`
  padding: 16px;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledPokemonItem = styled(PokemonItem)`
  margin-bottom: 40px;
`;
