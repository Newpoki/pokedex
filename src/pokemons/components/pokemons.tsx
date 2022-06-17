import styled from "@emotion/styled";
import { useFetchPokemons } from "../hooks/useFetchPokemons";
import { PokemonItem } from "./pokemon-item";
import InfiniteScroll from "react-infinite-scroller";
import { theme } from "../../theme";
import times from "lodash.times";
import { PokemonItemLoading } from "./pokemon-item-loading";
import { POKEMONS_INFINITE_SCROLL_ID } from "../pokemons-constants";

export const Pokemons = () => {
  const { data, fetchNextPage, isLoading, hasNextPage } = useFetchPokemons();

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
        hasMore={hasNextPage}
        loader={<PokemonItemLoading key={POKEMONS_INFINITE_SCROLL_ID} />}
      >
        <List>
          {isLoading &&
            times(10).map((index) => {
              return <PokemonItemLoading key={index} />;
            })}

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
