import styled from "@emotion/styled";
import { useFetchPokemons } from "../hooks/use-fetch-pokemons";
import { PokemonItem } from "./pokemon-item";
import InfiniteScroll from "react-infinite-scroller";
import { theme } from "../../theme";
import times from "lodash.times";
import { PokemonItemLoading } from "./pokemon-item-loading";
import { useCallback } from "react";
import { ReactComponent as BigBackgroundPokeball } from "../../icons/big-background-pokeball.svg";

export const Pokemons = () => {
  const { data, fetchNextPage, isLoading, hasNextPage, isFetching } = useFetchPokemons();

  const handleFetchNextPage = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return (
    <Root>
      <StyledBigBackgroundPokeballIcon />
      <Title>Pokédex</Title>
      <Description>Search for Pokémon by name or using the National Pokédex number.</Description>
      <InfiniteScroll
        pageStart={0}
        loadMore={handleFetchNextPage}
        hasMore={hasNextPage}
        // As we're in a grid display, using a loader would make it go to the next row and
        // it's a weird behavior. So we rely on the isLoading flag to display a loader.
      >
        <List>
          {(isFetching || isLoading) &&
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

const Root = styled.div`
  padding: 40px;
  position: relative;
`;

const StyledBigBackgroundPokeballIcon = styled(BigBackgroundPokeball)`
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.h1`
  margin-top: 0px;
  margin-bottom: ${theme.spacings.m}px;
  color: ${theme.colors.text.black};
  font-size: 32px;
  /* Allow to be displayed on above the BigBackgroundPokeballIcon */
  position: relative;
`;

const Description = styled.h2`
  margin-top: 0;
  color: ${theme.colors.text.grey};
  font-weight: 400;
  font-size: 16px;
  /* Allow to be displayed on above the BigBackgroundPokeballIcon */
  position: relative;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 40px;
  margin-top: ${theme.spacings.xxxl}px;
`;
