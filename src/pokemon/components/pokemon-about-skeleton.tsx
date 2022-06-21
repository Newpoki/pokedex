import styled from "@emotion/styled";
import times from "lodash.times";
import { Fragment } from "react";
import { Skeleton } from "../../common/components/Skeleton";
import { theme } from "../../theme";
import { PokemonCategoryTitle } from "./pokemon-category-title";
import { PokemonDataLabel } from "./pokemon-data-label";
import { PokemonDataValue } from "./pokemon-data-value";
import { PokemonDetails } from "./pokemon-details";

export const PokemonAboutSkeleton = () => {
  return (
    <>
      <Flavor>
        <Skeleton width="100%" height="60px" />
      </Flavor>

      <StyledPokemonCategoryTitle pokemonTypeName="normal">Pokedex Data</StyledPokemonCategoryTitle>

      <PokemonDetails>
        {times(5).map((index) => {
          return (
            <>
              <PokemonDataLabel>
                <Skeleton width="70px" height="16px" />
              </PokemonDataLabel>

              <PokemonDataValue>
                <Skeleton width="70px" height="16px" />
              </PokemonDataValue>
            </>
          );
        })}
      </PokemonDetails>

      <StyledPokemonCategoryTitle pokemonTypeName="normal">Training</StyledPokemonCategoryTitle>

      <PokemonDetails>
        {times(5).map((index) => {
          return (
            <>
              <PokemonDataLabel>
                <Skeleton width="70px" height="16px" />
              </PokemonDataLabel>

              <PokemonDataValue>
                <Skeleton width="70px" height="16px" />
              </PokemonDataValue>
            </>
          );
        })}
      </PokemonDetails>
    </>
  );
};

const Flavor = styled.p`
  margin-bottom: ${theme.spacings.xxxl}px;
  color: ${theme.colors.text.grey};
  font-size: 16px;
  font-weight: 400px;
`;

const StyledPokemonCategoryTitle = styled(PokemonCategoryTitle)`
  margin-bottom: ${theme.spacings.xxl}px;
`;
