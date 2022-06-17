import styled from "@emotion/styled";
import { useFetchPokemons } from "../hooks/useFetchPokemons";
import { PokemonItem } from "./pokemon-item";
import InfiniteScroll from "react-infinite-scroller";
import { theme } from "../../theme";
import times from "lodash.times";
import { PokemonItemLoading } from "./pokemon-item-loading";
import { POKEMONS_INFINITE_SCROLL_ID } from "../pokemons-constants";
import { useCallback } from "react";

export const Pokemons = () => {
  const { data, fetchNextPage, isLoading, hasNextPage } = useFetchPokemons();

  const handleFetchNextPage = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return (
    <Root>
      <Title>Pokédex</Title>

      <Description>Search for Pokémon by name or by scrolling !</Description>

      <InfiniteScroll
        pageStart={0}
        loadMore={handleFetchNextPage}
        hasMore={hasNextPage}
        loader={
          <InfiniteScrollList key={POKEMONS_INFINITE_SCROLL_ID}>
            {times(10).map((index) => {
              return <PokemonItemLoading key={index} />;
            })}
          </InfiniteScrollList>
        }
      >
        <List>
          {isLoading &&
            times(10).map((index) => {
              return <PokemonItemLoading key={index} />;
            })}

          {data?.pages.map((page) => {
            return page.results.map((pokemon) => {
              return <PokemonItem key={pokemon.name} pokemon={pokemon} />;
            });
          })}
        </List>
      </InfiniteScroll>
    </Root>
  );
};

const LIST_GAP = 40;

const Root = styled.div`
  padding: ${theme.spacings.l}px;
`;

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: ${theme.spacings.m}px;
`;

const Description = styled.h2`
  margin-top: 0;
  font-size: 18px;
  color: ${theme.colors.types.normal};
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: ${LIST_GAP}px;
  margin-top: ${theme.spacings.xxxl}px;
`;

const InfiniteScrollList = styled(List)`
  /* As we're not in the original List, we do not have the grid-gap, so we must 
    use a margin top to simulate the grid-gap for the first line
  */
  margin-top: ${LIST_GAP}px;
`;
