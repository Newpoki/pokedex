import styled from "@emotion/styled";
import { useFetchPokemons } from "../hooks/useFetchPokemons";
import { PokemonItem } from "./pokemon-item";
import InfiniteScroll from "react-infinite-scroller";
import { theme } from "../../theme";

export const Pokemons = () => {
  const { data, fetchNextPage } = useFetchPokemons();

  const handleFetchNextPage = () => {
    fetchNextPage();
  };

  return (
    <Root>
      <Title>Pokédex</Title>

      <Description>Search for Pokémon by name or by scrolling !</Description>

      <InfiniteScroll
        pageStart={0}
        loadMore={handleFetchNextPage}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
      >
        <List>
          {data?.pages.map((page) => {
            return page.results.map((pokemon) => {
              return <StyledPokemonItem key={pokemon.name} pokemon={pokemon} />;
            });
          })}
        </List>
      </InfiniteScroll>
    </Root>
  );
};

const Root = styled.div`
  padding: ${theme.spacings.l}px;
`;

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: ${theme.spacings.m}px;
`;

const Description = styled.h2`
  margin-top: 0;
  margin-bottom: ${theme.spacings.xxxl}px;
  font-size: 18px;
  color: ${theme.colors.types.normal};
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const StyledPokemonItem = styled(PokemonItem)`
  margin-bottom: 40px;
`;
